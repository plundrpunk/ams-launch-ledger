import { evidence } from "../content";
import { Part } from "./Part";

// Evidence: two typeset tables, each with a marginal source note and a paragraph.
export function Evidence() {
  const b = evidence.benchmark;
  const s = evidence.safety;
  return (
    <Part id="evidence" labelledBy="evidence-heading">
      <div className="grid12">
        <h2 id="evidence-heading" className="part-heading lg:col-start-4 lg:col-span-8">
          {evidence.heading}
        </h2>
      </div>

      <div className="grid12 mt-10 lg:mt-14">
        <aside className="marginalia lg:col-start-1 lg:col-span-2 lg:pt-1" aria-label="Source note for Table 1">
          <span className="text-accent">{b.note}</span> {b.noteText}
        </aside>
        <div className="mt-4 lg:mt-0 lg:col-start-4 lg:col-span-9">
          <div className="overflow-x-auto">
            <table className="ledger-table">
              <caption className="sr-only">{b.caption}</caption>
              <thead>
                <tr>
                  <th scope="col">{b.columns[0]}</th>
                  <th scope="col" className="num">{b.columns[1]}</th>
                  <th scope="col" className="num">{b.columns[2]}</th>
                  <th scope="col" className="num">{b.columns[3]}</th>
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r.condition}>
                    <th scope="row">{r.condition}</th>
                    <td className="num">{r.success}</td>
                    <td className="num">{r.path}</td>
                    <td className="num">{r.cost}</td>
                  </tr>
                ))}
                <tr className="delta">
                  <th scope="row">{b.delta.condition}</th>
                  <td className="num">{b.delta.success}</td>
                  <td className="num">{b.delta.path}</td>
                  <td className="num">{b.delta.cost}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="body-copy measure mt-7">
            <p>{b.paragraph}</p>
          </div>
        </div>
      </div>

      <div className="grid12 mt-14 lg:mt-20">
        <aside className="marginalia lg:col-start-1 lg:col-span-2 lg:pt-1" aria-label="Source note for Table 2">
          <span className="text-accent">{s.note}</span> {s.noteText}
        </aside>
        <div className="mt-4 lg:mt-0 lg:col-start-4 lg:col-span-9">
          <div className="overflow-x-auto">
            <table className="ledger-table">
              <caption className="sr-only">{s.caption}</caption>
              <thead>
                <tr>
                  <th scope="col">{s.columns[0]}</th>
                  <th scope="col" className="num">{s.columns[1]}</th>
                  <th scope="col" className="num">{s.columns[2]}</th>
                  <th scope="col" className="num">{s.columns[3]}</th>
                </tr>
              </thead>
              <tbody>
                {s.rows.map((r) => (
                  <tr key={r.condition}>
                    <th scope="row">{r.condition}</th>
                    <td className="num">{r.poisoning}</td>
                    <td className="num">{r.leakage}</td>
                    <td className="num">{r.blocked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="body-copy measure mt-7">
            <p>{s.paragraph}</p>
            <p className="caption !mt-4">{s.caveat}</p>
          </div>
        </div>
      </div>
    </Part>
  );
}
