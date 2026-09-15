import { useState } from "react";
import { boundary } from "../content";
import { asset } from "../lib/assets";
import { Caption } from "./Caption";
import { FigureImage } from "./FigureImage";
import { Part } from "./Part";

// The boundary: a display statement, the AMS versus AOS paragraph with a
// marginal photograph, then the real dashboard screenshot in grayscale.
export function Boundary() {
  const [failed, setFailed] = useState(false);
  const screenshot = asset("img/smart-actions-scoreboard.webp");

  return (
    <Part id="the-boundary" labelledBy="boundary-statement">
      <p id="boundary-statement" className="statement max-w-[16ch]">
        {boundary.statement}
      </p>

      <div className="grid12 mt-12 lg:mt-16">
        <figure className="lg:col-start-1 lg:col-span-2 max-w-[220px] lg:max-w-none">
          <FigureImage src={asset("img/ledger-archive.webp")} alt={boundary.archive.alt} ratio="4 / 5" sizes="(min-width: 1024px) 180px, 220px" />
          <Caption label={boundary.archive.label} text={boundary.archive.caption} />
        </figure>

        <div className="mt-10 lg:mt-0 lg:col-start-4 lg:col-span-9">
          <div className="body-copy measure">
            <p>{boundary.paragraph}</p>
          </div>

          <figure className="group mt-12 lg:mt-14">
            <div className="relative w-full overflow-hidden bg-paper-2 border border-rule" style={{ aspectRatio: "1913 / 954" }}>
              {!failed && (
                <>
                  <img
                    src={screenshot}
                    alt={boundary.scoreboard.alt}
                    loading="eager"
                    decoding="async"
                    onError={() => setFailed(true)}
                    className="absolute inset-0 h-full w-full object-cover grayscale"
                  />
                  {/* Colour copy of the same file (one request), crossfaded in on hover. */}
                  <img
                    src={screenshot}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                  />
                </>
              )}
            </div>
            <Caption label={boundary.scoreboard.label} text={boundary.scoreboard.caption} />
          </figure>
        </div>
      </div>
    </Part>
  );
}
