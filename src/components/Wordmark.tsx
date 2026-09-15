import { masthead } from "../content";

type Props = {
  size?: "masthead" | "colophon";
};

// Wordmark set in the display face beside a plain hexagon outline (the mark
// from the official logo, reduced to one geometric outline in ink).
export function Wordmark({ size = "masthead" }: Props) {
  const text = size === "masthead" ? "text-[16px] min-[360px]:text-[19px] md:text-[20px] whitespace-nowrap" : "text-[18px]";
  return (
    <span className="inline-flex items-center gap-2.5 text-ink">
      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <polygon points="16,3 27.26,9.5 27.26,22.5 16,29 4.74,22.5 4.74,9.5" stroke="currentColor" strokeWidth="2.25" strokeLinejoin="round" />
      </svg>
      <span className={`font-serif leading-none tracking-[-0.01em] ${text}`}>{masthead.wordmark}</span>
    </span>
  );
}
