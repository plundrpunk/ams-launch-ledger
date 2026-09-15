import { loop } from "../content";
import { Caption } from "./Caption";
import { Part } from "./Part";
import { LoopFigure } from "./figures/LoopFigure";

// The loop: text in the left five columns, Figure 3 in the right seven.
export function Loop() {
  return (
    <Part id="the-loop" labelledBy="loop-heading">
      <div className="grid12">
        <h2 id="loop-heading" className="part-heading lg:col-start-4 lg:col-span-8">
          {loop.heading}
        </h2>

        <div className="body-copy mt-10 lg:mt-12 lg:col-start-1 lg:col-span-5 text-[18px] leading-[1.55]">
          {loop.steps.map((s) => (
            <p key={s.verb}>
              <em className="not-italic font-medium">{s.verb}</em> {s.text}
            </p>
          ))}
        </div>

        <figure className="mt-12 lg:mt-12 lg:col-start-7 lg:col-span-6">
          <div className="mx-auto w-full max-w-[520px]">
            <LoopFigure />
          </div>
          <Caption label={loop.figure.label} text={loop.figure.caption} className="mt-5" />
        </figure>
      </div>
    </Part>
  );
}
