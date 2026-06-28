# Obsidian Notes Vault Agent Guidelines

This directory contains Obsidian-flavored Markdown notes for the personal portfolio, blog, and service information of Mohamad Masri (Masri Programmer).

## Vault Structure

The notes are structured within the following main directories:
- `Blog/` — Technical articles, coding tips, automation solutions, etc.
- `Services/` — Service offerings and packages (e.g. VILT Stack, SaaS, fractional CTO, and AI workflows).
- `Projects/` — Active and archived projects, including client portfolios.
- `Pages/` — Miscellaneous pages and indexes.
- `Legal/` — Impressum, privacy policy, and other legal disclosures.
- `Assets/` — Attachments, images, and visual assets (organized into subfolders like `Assets/Img/`).

## Note Conventions

When creating or editing notes:
1. **Frontmatter**: Every Markdown file must start with a YAML frontmatter block containing at least:
   ```yaml
   ---
   title: "Descriptive Page Title"
   description: "A short SEO-friendly summary of the note."
   tags:
     - tag-name
   created: YYYY-MM-DD
   updated: YYYY-MM-DD
   author: Mohamad Masri
   layout: default # or homepage, post, etc.
   status: published # or draft
   ---
   ```
2. **Metadata Maintenance**: When modifying a note, **always update the `updated` date** property in the frontmatter to the current date (format: `YYYY-MM-DD`).
3. **Internal Links**: Use Obsidian-style wikilinks `[[Note Name]]` or `[[Note Name|Display Text]]` to connect notes. Do not use relative or absolute file path markdown links for files within the vault.
4. **Attachments & Embeds**: Use `![[Assets/Img/image.webp]]` to display images or embed files.
5. **Callouts**: Enhance note presentation using GFM-style/Obsidian callouts:
   ```markdown
   > [!tip] Title
   > Content goes here.
   ```
   Supported types: `note`, `tip`, `info`, `warning`, `faq`, `abstract`, `example`, `quote`, `bug`, `danger`, `success`, `failure`, `question`.
