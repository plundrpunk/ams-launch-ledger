import { cta, links, rates } from "../content";
import { ExternalLink } from "./ExternalLink";
import { Part } from "./Part";

// Rates and adoption: a typeset rate card, the pilot as a marginal note,
// then the interfaces paragraph under the page's second and last eyebrow.
export function Rates() {
  return (
    <Part id="rates" labelledBy="rates-heading">
      <div className="grid12">
        <h2 id="rates-heading" className="part-heading lg:col-start-4 lg:col-span-8">
          {rates.heading}
        </h2>

        <aside className="marginalia mt-10 lg:mt-12 lg:col-start-1 lg:col-span-2 lg:pt-1 max-w-[30ch] lg:max-w-none" aria-label="Design-partner pilot">
          {rates.pilot}
        </aside>

        <div className="mt-4 lg:mt-12 lg:col-start-4 lg:col-span-9">
          <div className="overflow-x-auto">
            <table className="ledger-table">
              <caption className="sr-only">{rates.heading}</caption>
              <thead>
                <tr>
                  <th scope="col">{rates.columns[0]}</th>
                  <th scope="col" className="num">{rates.columns[1]}</th>
                  <th scope="col" className="lg:pl-8">{rates.columns[2]}</th>
                </tr>
              </thead>
              <tbody>
                {rates.rows.map((r) => (
                  <tr key={r.tier}>
                    <th scope="row">{r.tier}</th>
                    <td className="num whitespace-nowrap">{r.monthly}</td>
                    <td className="includes lg:pl-8">{r.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid12 mt-14 lg:mt-20">
        <aside className="lg:col-start-1 lg:col-span-2 lg:pt-2">
          <span className="eyebrow">{rates.interfaces.eyebrow}</span>
        </aside>
        <div className="body-copy measure mt-4 lg:mt-0 lg:col-start-4 lg:col-span-7">
          <p>{rates.interfaces.paragraph}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={links.startFree} target="_blank" rel="noopener" className="btn">
              {cta.startFree}
            </a>
            <ExternalLink href={links.github} className="min-h-11 text-[17px] md:text-[18px]">
              {cta.github}
            </ExternalLink>
          </div>
        </div>
      </div>
    </Part>
  );
}
