document.addEventListener("DOMContentLoaded", () => {
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
            const res = await fetch("/static/contentIndex.json")
            const contentIndex = await res.json()

            // Filter slugs that start with "Blog/"
            const blogSlugs = Object.keys(contentIndex).filter((slug) => slug.startsWith("Blog/"))

            if (blogSlugs.length > 0) {
              const randomSlug = blogSlugs[Math.floor(Math.random() * blogSlugs.length)]

              // Simplify slug (remove leading/trailing slashes, normalize format if needed)
              const simplifiedSlug = randomSlug.replace(/^\/|\/$/g, "") // basic simplification

              // Redirect using the same logic as joinSegments + encodeURI
              window.location.href = `/${encodeURI(simplifiedSlug)}`
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
})
