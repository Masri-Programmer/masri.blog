import { QuartzComponentConstructor } from "./types"
import styles from "../styles/navigation.scss"

export default (() => {
  function Navigation() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./resume">Portfolio</a>
          </li>
          <li>
            <a href="./projects">Projects</a>
          </li>
          <li>
            <a href="./services">Services</a>
          </li>
        </ul>
      </nav>
    )
  }

  Navigation.css = styles

  return Navigation
}) satisfies QuartzComponentConstructor
