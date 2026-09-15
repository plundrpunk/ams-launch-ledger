import { coldStart } from "../content";
import { Part } from "./Part";

// The argument: marginalia pull quote left, running text right.
export function ColdStart() {
  return (
    <Part id="the-argument" labelledBy="cold-start-heading">
      <div className="grid12">
        <h2 id="cold-start-heading" className="part-heading lg:col-start-4 lg:col-span-8">
          {coldStart.heading}
        </h2>

        <aside className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:mt-10" aria-label="Marginal note">
          <blockquote className="border-t border-accent pt-4 max-w-[26ch] lg:max-w-none">
            <p className="font-serif italic text-[21px] md:text-[22px] leading-[1.32] text-ink">{coldStart.pullQuote}</p>
          </blockquote>
        </aside>

        <div className="body-copy measure mt-8 lg:mt-10 lg:col-start-4 lg:col-span-7 lg:row-start-2">
          {coldStart.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Part>
  );
}
