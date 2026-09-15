import { tiers } from "../content";
import { Caption } from "./Caption";
import { Part } from "./Part";
import { TiersFigure } from "./figures/TiersFigure";

// Three kinds of memory: Figure 2 in the left seven columns, text in the right five.
export function Tiers() {
  return (
    <Part id="memory" labelledBy="tiers-heading">
      <div className="grid12">
        <h2 id="tiers-heading" className="part-heading lg:col-start-4 lg:col-span-8">
          {tiers.heading}
        </h2>

        <figure className="mt-10 lg:mt-12 lg:col-start-1 lg:col-span-7">
          <TiersFigure />
          <Caption label={tiers.figure.label} text={tiers.figure.caption} className="mt-4" />
        </figure>

        <div className="body-copy mt-10 lg:mt-12 lg:col-start-8 lg:col-span-5 text-[18px] leading-[1.55]">
          {tiers.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Part>
  );
}
