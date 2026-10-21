import { masthead } from "../content";
import { AutomatonMark } from "./AutomatonMark";

type Props = {
  size?: "masthead" | "colophon";
};

// Approved Automaton mark beside the product name in the page display face.
export function Wordmark({ size = "masthead" }: Props) {
  const text = size === "masthead" ? "text-[16px] min-[360px]:text-[19px] md:text-[20px] whitespace-nowrap" : "text-[18px]";
  return (
    <span className="inline-flex items-center gap-2.5 text-ink">
      <AutomatonMark size={18} />
      <span className={`font-serif leading-none tracking-[-0.01em] ${text}`}>{masthead.wordmark}</span>
    </span>
  );
}
