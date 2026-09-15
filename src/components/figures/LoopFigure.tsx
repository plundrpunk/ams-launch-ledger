import { useId } from "react";
import { loop } from "../../content";

const INK = "var(--color-ink)";

const S = 360; // viewBox size
const C = S / 2; // centre
const R = 124; // loop radius
const GAP = 14; // degrees of clearance either side of a node label

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (deg: number, r: number) => ({ x: C + r * Math.cos(rad(deg)), y: C + r * Math.sin(rad(deg)) });
const f = (n: number) => n.toFixed(2);

// Clockwise arc (SVG sweep 1) from angle a to angle b at radius r.
function arcCW(a: number, b: number, r: number) {
  const p = pt(a, r);
  const q = pt(b, r);
  return `M ${f(p.x)} ${f(p.y)} A ${r} ${r} 0 0 1 ${f(q.x)} ${f(q.y)}`;
}

// Counter-clockwise arc (SVG sweep 0) from angle b back to angle a, so text
// on the lower half reads left to right.
function arcCCW(a: number, b: number, r: number) {
  const p = pt(b, r);
  const q = pt(a, r);
  return `M ${f(p.x)} ${f(p.y)} A ${r} ${r} 0 0 0 ${f(q.x)} ${f(q.y)}`;
}

// Small arrowhead at angle `deg`, pointing in the clockwise direction of travel.
function Arrow({ deg }: { deg: number }) {
  const tip = pt(deg, R);
  const t = { x: -Math.sin(rad(deg)), y: Math.cos(rad(deg)) }; // clockwise tangent
  const n = { x: Math.cos(rad(deg)), y: Math.sin(rad(deg)) }; // outward normal
  const L = 8;
  const Wd = 3.2;
  const b1 = { x: tip.x - L * t.x + Wd * n.x, y: tip.y - L * t.y + Wd * n.y };
  const b2 = { x: tip.x - L * t.x - Wd * n.x, y: tip.y - L * t.y - Wd * n.y };
  return <polygon points={`${f(tip.x)},${f(tip.y)} ${f(b1.x)},${f(b1.y)} ${f(b2.x)},${f(b2.y)}`} fill={INK} fillOpacity={0.7} />;
}

// Figure 3: the operating loop as a circle of four verbs, tool names on the arcs.
export function LoopFigure() {
  const id = useId().replace(/:/g, "");
  const [recall, act, record, resume] = loop.figure.nodes;
  const arcs = loop.figure.arcs;

  // Node angles in SVG degrees: top, right, bottom, left.
  const A = { recall: -90, act: 0, record: 90, resume: 180 };

  // Visible arcs, all clockwise, with gaps for the verbs.
  const segments = [
    [A.recall + GAP, A.act - GAP],
    [A.act + GAP, A.record - GAP],
    [A.record + GAP, A.resume - GAP],
    [A.resume + GAP, A.resume + 90 - GAP],
  ] as const;

  const textSize = 10.5;
  const verbSize = 21;

  return (
    <svg viewBox={`0 0 ${S} ${S}`} className="block w-full h-auto" role="img" aria-label={loop.figure.ariaLabel}>
      <defs>
        {/* Upper arcs: baseline just outside the loop, glyphs grow outward. */}
        <path id={`${id}-ra`} d={arcCW(A.recall + GAP, A.act - GAP, R + 11)} />
        <path id={`${id}-rr1`} d={arcCW(A.resume + GAP, A.resume + 90 - GAP, R + 11)} />
        <path id={`${id}-rr2`} d={arcCW(A.resume + GAP, A.resume + 90 - GAP, R + 26)} />
        {/* Lower arcs: drawn the other way so the text stays upright; baseline further out. */}
        <path id={`${id}-ar`} d={arcCCW(A.act + GAP, A.record - GAP, R + 20)} />
        <path id={`${id}-rs`} d={arcCCW(A.record + GAP, A.resume - GAP, R + 20)} />
      </defs>

      {segments.map(([a, b]) => (
        <path key={a} d={arcCW(a, b, R)} fill="none" stroke={INK} strokeOpacity={0.38} strokeWidth={1} />
      ))}

      <Arrow deg={A.act - GAP} />
      <Arrow deg={A.record - GAP} />
      <Arrow deg={A.resume - GAP} />
      <Arrow deg={A.resume + 90 - GAP} />

      {/* Verbs at the four nodes */}
      <g className="f-serif" fontSize={verbSize} fill={INK} textAnchor="middle">
        <text x={C} y={C - R} dominantBaseline="central">{recall}</text>
        <text x={C + R} y={C} dominantBaseline="central">{act}</text>
        <text x={C} y={C + R} dominantBaseline="central">{record}</text>
        <text x={C - R} y={C} dominantBaseline="central">{resume}</text>
      </g>

      {/* Tool names along the arcs */}
      <g className="f-mono" fontSize={textSize} fill={INK}>
        <text>
          <textPath href={`#${id}-ra`} startOffset="50%" textAnchor="middle">
            {arcs.recallToAct}
          </textPath>
        </text>
        <text>
          <textPath href={`#${id}-ar`} startOffset="50%" textAnchor="middle">
            {arcs.actToRecord}
          </textPath>
        </text>
        <text>
          <textPath href={`#${id}-rs`} startOffset="50%" textAnchor="middle">
            {arcs.recordToResume}
          </textPath>
        </text>
        <text>
          <textPath href={`#${id}-rr2`} startOffset="50%" textAnchor="middle">
            {arcs.resumeToRecall[0]}
          </textPath>
        </text>
        <text>
          <textPath href={`#${id}-rr1`} startOffset="50%" textAnchor="middle">
            {arcs.resumeToRecall[1]}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
