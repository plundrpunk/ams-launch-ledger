import { tiers } from "../../content";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const RULE = "var(--color-rule)";

// Figure 2: three horizontal bands separated by rules, set entirely in type.
// Two typeset layouts share the same data so labels stay legible at 390px.
export function TiersFigure() {
  const wide = useMediaQuery("(min-width: 640px)");
  const bands = tiers.figure.bands;

  if (wide) {
    const W = 720;
    const H = 112;
    const total = H * bands.length;
    return (
      <svg viewBox={`0 0 ${W} ${total + 1}`} className="block w-full h-auto" role="img" aria-label={tiers.figure.ariaLabel}>
        {bands.map((b, i) => {
          const y = i * H;
          return (
            <g key={b.name}>
              <line x1={0} x2={W} y1={y + 0.5} y2={y + 0.5} stroke={i === 0 ? INK : RULE} strokeWidth={1} />
              <text x={0} y={y + 48} className="f-serif" fontSize={28} fill={INK} letterSpacing="-0.01">
                {b.name}
              </text>
              <text x={200} y={y + 44} className="f-serif" fontSize={18} fontStyle="italic" fill={INK}>
                {b.what}
              </text>
              <text x={200} y={y + 70} className="f-mono" fontSize={12.5} fill={MUTED}>
                {b.kinds}
              </text>
              <text x={W} y={y + 44} className="f-mono" fontSize={12.5} fill={INK} textAnchor="end">
                {b.retention}
              </text>
            </g>
          );
        })}
        <line x1={0} x2={W} y1={total + 0.5} y2={total + 0.5} stroke={INK} strokeWidth={1} />
      </svg>
    );
  }

  const W = 360;
  const H = 126;
  const total = H * bands.length;
  return (
    <svg viewBox={`0 0 ${W} ${total + 1}`} className="block w-full h-auto" role="img" aria-label={tiers.figure.ariaLabel}>
      {bands.map((b, i) => {
        const y = i * H;
        return (
          <g key={b.name}>
            <line x1={0} x2={W} y1={y + 0.5} y2={y + 0.5} stroke={i === 0 ? INK : RULE} strokeWidth={1} />
            <text x={0} y={y + 36} className="f-serif" fontSize={24} fill={INK}>
              {b.name}
            </text>
            <text x={0} y={y + 64} className="f-serif" fontSize={17} fontStyle="italic" fill={INK}>
              {b.what}
            </text>
            <text x={0} y={y + 86} className="f-mono" fontSize={12} fill={MUTED}>
              {b.kinds}
            </text>
            <text x={0} y={y + 108} className="f-mono" fontSize={12} fill={INK}>
              {b.retention}
            </text>
          </g>
        );
      })}
      <line x1={0} x2={W} y1={total + 0.5} y2={total + 0.5} stroke={INK} strokeWidth={1} />
    </svg>
  );
}
