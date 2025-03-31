import { QuartzComponent, QuartzComponentConstructor } from "./types"
import styles from "../styles/navigation.scss"

// Detect the base path dynamically

const getBasePath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname.includes("/masri-digital") ? "/masri-digital" : ""
  }
  return "" // Default for server-side build
}
const Navigation: QuartzComponent = () => {
  const BASE_PATH = getBasePath()

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href={`${BASE_PATH}/`}>Home</a>
        </li>
        <li>
          <a href={`${BASE_PATH}/Blog`}>Blog</a>
        </li>
        <li>
          <a href={`${BASE_PATH}/Resume`}>Portfolio</a>
        </li>
        <li>
          <a href={`${BASE_PATH}/Projects`}>Projects</a>
        </li>
        <li>
          <a href={`${BASE_PATH}/Services`}>Services</a>
        </li>
      </ul>
    </nav>
  )
}

Navigation.css = styles

export default (() => Navigation) satisfies QuartzComponentConstructor
