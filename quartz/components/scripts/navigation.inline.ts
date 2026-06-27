const setupFloatingButtons = () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".floating-button[data-action]")

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.getAttribute("data-action")

      switch (action) {
        case "scrollTop":
          window.scrollTo({ top: 0, behavior: "smooth" })
          break

        case "scrollBottom":
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break

        case "randomPgFloating":
          try {
            const basePath = document.body.getAttribute("data-basepath") ?? ""
            const res = await fetch(`${basePath}/static/contentIndex.json`)
            const contentIndex = await res.json()

            const blogSlugs = Object.keys(contentIndex).filter(
              (slug) => slug.startsWith("Blog/") || slug.startsWith("blog/")
            )

            if (blogSlugs.length > 0) {
              const randomSlug = blogSlugs[Math.floor(Math.random() * blogSlugs.length)]
              const simplifiedSlug = randomSlug.replace(/^\/|\/$/g, "")
              window.location.href = `${basePath}/${encodeURI(simplifiedSlug)}`
            } else {
              console.warn("No blog slugs found.")
            }
          } catch (error) {
            console.error("Failed to fetch content index:", error)
          }
          break
        default:
          console.warn("Unknown floating button action:", action)
      }
    })
  })
}

document.addEventListener("nav", setupFloatingButtons)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupFloatingButtons)
} else {
  setupFloatingButtons()
}
