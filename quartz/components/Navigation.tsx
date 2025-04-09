import { QuartzComponentConstructor } from "./types"
import styles from "../styles/navigation.scss"

export default (() => {
  function Navigation() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
        </ul>
      </nav>
    )
  }

  Navigation.css = styles

  return Navigation
}) satisfies QuartzComponentConstructor
