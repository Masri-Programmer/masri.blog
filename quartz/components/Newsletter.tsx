import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/newsletter.scss"
import { classNames } from "../util/lang"

interface Options {
  title: string
  listUuid: string
  listmonkUrl: string
}

const defaultOptions: Options = {
  title: "Subscribe to Newsletter",
  listUuid: "8054132b-66af-464f-9175-6191290a980d", // Default to the Public Opt-in list
  listmonkUrl: "https://listmonk.masri-programmer.de",
}

export default ((userOpts?: Partial<Options>) => {
  const Newsletter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    
    return (
      <div class={classNames(displayClass, "newsletter-component")}>
        <h3>{opts.title}</h3>
        <p class="newsletter-desc">Get the latest articles directly in your inbox.</p>
        
        <form 
          method="post" 
          action={`${opts.listmonkUrl}/subscription/form`}
          class="newsletter-form"
        >
          <input type="hidden" name="nonce" />
          <input type="hidden" name="l" value={opts.listUuid} />
          <input type="hidden" name="attribs.source" value="masri.blog" />
          
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
      </div>
    )
  }

  Newsletter.css = style
  return Newsletter
}) satisfies QuartzComponentConstructor
