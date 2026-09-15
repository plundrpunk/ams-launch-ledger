import { masthead } from "./content";
import { Boundary } from "./components/Boundary";
import { ColdStart } from "./components/ColdStart";
import { Colophon } from "./components/Colophon";
import { Evidence } from "./components/Evidence";
import { Headline } from "./components/Headline";
import { Loop } from "./components/Loop";
import { Masthead } from "./components/Masthead";
import { Rates } from "./components/Rates";
import { Tiers } from "./components/Tiers";

export default function App() {
  return (
    <>
      <a href="#content" className="skip-link">
        {masthead.skip}
      </a>
      <Masthead />
      <main id="content" className="min-h-[100dvh]">
        <Headline />
        <ColdStart />
        <Tiers />
        <Loop />
        <Evidence />
        <Boundary />
        <Rates />
      </main>
      <Colophon />
    </>
  );
}
