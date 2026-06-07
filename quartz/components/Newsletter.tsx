import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/newsletter.scss"
// @ts-ignore
import script from "./scripts/newsletter.inline"
import { classNames } from "../util/lang"

interface Options {
  title: string
  subscribeUrl: string
}

const defaultOptions: Options = {
  title: "Subscribe to Newsletter",
  subscribeUrl: "https://masri-programmer.de/newsletter/subscribe",
}

export default ((userOpts?: Partial<Options>) => {
  const Newsletter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }

    return (
      <div class={classNames(displayClass, "newsletter-component")}>
        <h3>{opts.title}</h3>
        <p class="newsletter-desc">Get the latest articles directly in your inbox.</p>

        <form class="newsletter-form" method="post" data-url={opts.subscribeUrl}>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            class="newsletter-input"
          />

          <button type="submit" class="newsletter-submit">
            Subscribe
          </button>
        </form>
        <div class="newsletter-message" style="display: none;"></div>
      </div>
    )
  }

  Newsletter.afterDOMLoaded = script
  Newsletter.css = style
  return Newsletter
}) satisfies QuartzComponentConstructor
