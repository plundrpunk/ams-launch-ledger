import { cta, headline, links } from "../content";
import { asset } from "../lib/assets";
import { Caption } from "./Caption";
import { ExternalLink } from "./ExternalLink";
import { FigureImage } from "./FigureImage";
import { Reveal } from "./Reveal";

// Part one: dateline, headline, deck, two calls to action, then Figure 1.
export function Headline() {
  return (
    <section id="top" aria-labelledby="headline" className="pt-8 md:pt-10 lg:pt-14 pb-16 md:pb-20 lg:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="marginalia text-ink/80">{headline.dateline}</div>
          <h1 id="headline" className="display mt-7 md:mt-9 lg:mt-10 max-w-[26ch]">
            {headline.title}
          </h1>
          <p className="deck mt-6 md:mt-7 max-w-[46ch]">{headline.deck}</p>
          <div className="mt-8 md:mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={links.startFree} target="_blank" rel="noopener" className="btn">
              {cta.startFree}
            </a>
            <ExternalLink href={links.whitepaper} className="min-h-11 text-[17px] md:text-[18px]">
              {cta.whitepaper}
            </ExternalLink>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16 lg:mt-20">
          <figure>
            <FigureImage
              src={asset("img/ledger-chart.webp")}
              alt={headline.figure.alt}
              ratio="3 / 2"
              eager
              sizes="(min-width: 1320px) 1240px, 100vw"
            />
            <Caption label={headline.figure.label} text={headline.figure.caption} />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
