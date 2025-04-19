import { QuartzComponentConstructor } from "./types"
import styles from "../styles/navigation.scss"

export default (() => {
  function Navigation() {
    return (
      <nav className="navbar pattern flex items-center py-2 px-4">
        <ul className="nav-links flex items-center space-x-4 flex-grow">
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
          <li className="book-a-meeting">
            <a
              href="https://cal.com/mohamad-masri-jfc90n/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Book a Meeting
            </a>
          </li>
        </ul>
      </nav>
    )
  }

  Navigation.css = styles

  return Navigation
}) satisfies QuartzComponentConstructor
