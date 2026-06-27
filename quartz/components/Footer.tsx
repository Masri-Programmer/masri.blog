import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

const FooterConstructor = ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
          <iframe
            src="https://github.com/sponsors/Masri-Programmer/button"
            title="Sponsor Masri-Programmer"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px" }}
          ></iframe>
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

export default FooterConstructor

export const manifest = {
  name: "Footer.tsx",
  displayName: "Footer",
  version: "1.0.0",
  description: "Page footer component with sponsor iframe",
  category: "component",
}
