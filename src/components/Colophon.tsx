import { colophon, cta, links } from "../content";
import { ExternalLink } from "./ExternalLink";
import { Wordmark } from "./Wordmark";

// Colophon: publisher, typefaces, links, copyright.
export function Colophon() {
  return (
    <footer className="border-t border-ink py-14 lg:py-20">
      <div className="wrap">
        <div className="grid12 gap-y-10">
          <div className="lg:col-start-1 lg:col-span-4">
            <Wordmark size="colophon" />
          </div>

          <div className="lg:col-start-5 lg:col-span-4 max-w-[44ch] text-[17px] leading-[1.5]">
            <p>{colophon.published}</p>
            <p className="mt-1 text-muted">{colophon.setIn}</p>
          </div>

          <nav aria-label="Colophon" className="lg:col-start-9 lg:col-span-4">
            <ul className="flex flex-col gap-y-1 text-[17px]">
              <li>
                <ExternalLink href={links.site} className="min-h-11">
                  {colophon.siteLabel}
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={links.whitepaper} className="min-h-11">
                  {cta.whitepaper}
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={links.discord} className="min-h-11">
                  {cta.discord}
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={links.github} className="min-h-11">
                  {cta.github}
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </div>

        <p className="marginalia mt-14 lg:mt-20 text-ink/80">{colophon.copyright}</p>
      </div>
    </footer>
  );
}
