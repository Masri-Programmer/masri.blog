import fs from "fs"
import path from "path"
import { BuildCtx } from "./ctx"
import { ProcessedContent } from "../plugins/vfile"

function generateHastTable({ headers, rows }: { headers: string[]; rows: string[][] }): any {
  const theadChildren = headers.map(h => ({
    type: "element",
    tagName: "th",
    children: [{ type: "text", value: h }]
  }))

  const trHead = {
    type: "element",
    tagName: "tr",
    children: theadChildren
  }

  const tbodyChildren = rows.map(row => {
    const tdChildren = row.map(cell => {
      // Check if cell is a markdown link, e.g. [Link Text](/path)
      const linkMatch = cell.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (linkMatch) {
        return {
          type: "element",
          tagName: "td",
          children: [{
            type: "element",
            tagName: "a",
            properties: { href: linkMatch[2], className: ["internal"] },
            children: [{ type: "text", value: linkMatch[1] }]
          }]
        }
      }
      return {
        type: "element",
        tagName: "td",
        children: [{ type: "text", value: cell }]
      }
    })

    return {
      type: "element",
      tagName: "tr",
      children: tdChildren
    }
  })

  return {
    type: "element",
    tagName: "table",
    properties: { className: ["dataview", "table-view"] },
    children: [
      {
        type: "element",
        tagName: "thead",
        children: [trHead]
      },
      {
        type: "element",
        tagName: "tbody",
        children: tbodyChildren
      }
    ]
  }
}

function executeDataview(
  queryText: string,
  allFiles: ProcessedContent[],
  ctx: BuildCtx
): { headers: string[]; rows: string[][] } | null {
  // Parse the query using regex
  const match = queryText.match(/TABLE\s+([\s\S]+?)\s+FROM\s+"([^"]+)"\s+WHERE\s+([\s\S]+?)(?:\s+SORT\s+([a-zA-Z0-9._]+)\s+(ASC|DESC))?$/i)
  if (!match) return null

  const [, fieldsStr, fromSource, whereStr, sortField, sortOrder] = match

  // Parse fields
  const fields = fieldsStr.split(",").map(f => {
    f = f.trim()
    const asMatch = f.match(/^([\s\S]+?)\s+as\s+("([^"]+)"|([a-zA-Z0-9_]+))$/i)
    if (asMatch) {
      return {
        expr: asMatch[1].trim(),
        header: asMatch[3] || asMatch[4]
      }
    }
    return {
      expr: f,
      header: f
    }
  })

  // Filter pages by source directory
  let matchedPages = allFiles.filter(([_, file]) => {
    const relPath = file.data.relativePath
    return relPath && (relPath.startsWith(fromSource + "/") || relPath.startsWith("content/" + fromSource + "/"))
  })

  // Evaluate conditions
  // Convert WHERE clause to JS expression
  let jsWhere = whereStr
    .replace(/\bAND\b/g, "&&")
    .replace(/\bOR\b/g, "||")
    .replace(/(?<![=!])=(?![=])/g, "===") // replace single = with ===
    .replace(/!=/g, "!==")

  const whereFn = new Function("doc", `
    try {
      const { file, status, date, tags } = doc;
      return (${jsWhere});
    } catch {
      return false;
    }
  `)

  matchedPages = matchedPages.filter(([_, file]) => {
    const fullPath = path.join(ctx.argv.directory, file.data.relativePath!)
    let stats
    try {
      stats = fs.statSync(fullPath)
    } catch {
      stats = { size: 0, mtime: new Date() }
    }

    const doc = {
      file: {
        name: path.basename(file.data.relativePath!, ".md"),
        size: stats.size,
        mtime: file.data.dates?.modified ?? stats.mtime,
      },
      status: file.data.frontmatter?.status,
      date: file.data.frontmatter?.date,
      tags: file.data.frontmatter?.tags ?? [],
    }

    return whereFn(doc)
  })

  // Sort pages
  if (sortField) {
    matchedPages.sort(([_a, fileA], [_b, fileB]) => {
      const fullPathA = path.join(ctx.argv.directory, fileA.data.relativePath!)
      const fullPathB = path.join(ctx.argv.directory, fileB.data.relativePath!)

      let statsA: any, statsB: any
      try { statsA = fs.statSync(fullPathA) } catch { statsA = { size: 0, mtime: new Date() } }
      try { statsB = fs.statSync(fullPathB) } catch { statsB = { size: 0, mtime: new Date() } }

      const getVal = (file: typeof fileA, stats: any) => {
        if (sortField === "date") return file.data.frontmatter?.date ? new Date(file.data.frontmatter.date as any) : new Date(0)
        if (sortField === "file.mtime") return file.data.dates?.modified ?? stats.mtime
        if (sortField === "file.name") return path.basename(file.data.relativePath!, ".md")
        return file.data.frontmatter?.[sortField] ?? ""
      }

      const valA = getVal(fileA, statsA)
      const valB = getVal(fileB, statsB)

      const comp = valA < valB ? -1 : valA > valB ? 1 : 0
      return sortOrder && sortOrder.toUpperCase() === "DESC" ? -comp : comp
    })
  }

  // Generate table headers and rows
  const headers = ["File", ...fields.map(f => f.header)]
  const rows = matchedPages.map(([_, file]) => {
    const fullPath = path.join(ctx.argv.directory, file.data.relativePath!)
    let stats: any
    try { stats = fs.statSync(fullPath) } catch { stats = { size: 0, mtime: new Date() } }

    const doc = {
      file: {
        name: path.basename(file.data.relativePath!, ".md"),
        size: stats.size,
        mtime: file.data.dates?.modified ?? stats.mtime,
      },
      status: file.data.frontmatter?.status,
      date: file.data.frontmatter?.date,
      tags: file.data.frontmatter?.tags ?? [],
    }

    const fileLink = `[${doc.file.name}](/${encodeURI(file.data.slug ?? "")})`

    const rowCells = fields.map(f => {
      let expr = f.expr.replace(/\bround\(/g, "Math.round(")
      const evalFn = new Function("doc", `
        try {
          const { file, status, date, tags } = doc;
          return (${expr});
        } catch (e) {
          return "";
        }
      `)
      const res = evalFn(doc)
      if (res instanceof Date) {
        return res.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
      }
      if (Array.isArray(res)) {
        return res.map(t => `#${t}`).join(", ")
      }
      return String(res ?? "")
    })

    return [fileLink, ...rowCells]
  })

  return { headers, rows }
}

export function renderDataviews(node: any, allFiles: ProcessedContent[], ctx: BuildCtx) {
  if (node.type === "element" && node.tagName === "pre") {
    const codeNode = node.children?.[0]
    if (
      codeNode &&
      codeNode.type === "element" &&
      codeNode.tagName === "code" &&
      codeNode.properties?.className?.includes("language-dataview")
    ) {
      const queryText = codeNode.children?.[0]?.value
      if (queryText) {
        const tableData = executeDataview(queryText, allFiles, ctx)
        if (tableData) {
          const tableNode = generateHastTable(tableData)
          // Swap HAST pre node with the newly generated table node
          Object.assign(node, tableNode)
          return
        }
      }
    }
  }

  if (node.children) {
    for (const child of node.children) {
      renderDataviews(child, allFiles, ctx)
    }
  }
}
