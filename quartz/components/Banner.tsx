import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Banner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const banner = fileData.frontmatter?.banner
  if (banner) {
    let src = banner
    if (!src.startsWith("http") && !src.startsWith("/")) {
      src = "/" + src
    }

    // Parse banner alignment offsets (x and y) from frontmatter
    const x = fileData.frontmatter.banner_x
    const y = fileData.frontmatter.banner_y
    const posX = x !== undefined ? (typeof x === "number" ? `${x * 100}%` : x) : "center"
    const posY = y !== undefined ? (typeof y === "number" ? `${y * 100}%` : y) : "center"
    const objectPosition = `${posX} ${posY}`

    return (
      <div class={classNames(displayClass, "page-banner-container")}>
        <img 
          class="page-banner" 
          src={src} 
          alt="Page Banner" 
          style={{ objectPosition }} 
        />
      </div>
    )
  } else {
    return null
  }
}

Banner.css = `
.page-banner-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.page-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export default (() => Banner) satisfies QuartzComponentConstructor

export const manifest = {
  name: "Banner.tsx",
  displayName: "Banner",
  version: "1.0.0",
  description: "Page banner component",
  category: "component",
}
