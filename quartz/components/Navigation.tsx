import { QuartzComponentConstructor } from "./types"
import styles from "../styles/navigation.scss"

export default (() => {
  function Navigation() {
    // Hardcode the base path based on your GitHub Pages URL
    const basePath = "/masri-digital/"

    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href={`${basePath}`}>Home</a>
          </li>
          <li>
            <a href={`${basePath}resume/`}>Portfolio</a>
          </li>
          <li>
            <a href={`${basePath}projects/`}>Projects</a>
          </li>
          <li>
            <a href={`${basePath}services/`}>Services</a>
          </li>
        </ul>
      </nav>
    )
  }

  Navigation.css = styles

  return Navigation
}) satisfies QuartzComponentConstructor
