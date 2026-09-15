import { useEffect, useId, useState } from "react";
import { cta, links, masthead } from "../content";
import { Wordmark } from "./Wordmark";

// Sticky masthead, 64px, one accent rule beneath. Single line at desktop;
// a text "Menu" toggle below 768px opens a plain list under the rule.
export function Masthead() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-accent">
      <div className="wrap flex h-[calc(4rem-1px)] items-center justify-between gap-3 min-[360px]:gap-6">
        <a href="#top" className="inline-flex min-h-11 items-center" aria-label={`${masthead.wordmark}, back to top`}>
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 lg:gap-9">
          {masthead.nav.map((item) => (
            <a key={item.href} href={item.href} className="link link-ink link-quiet text-[17px] leading-none py-2">
              {item.label}
            </a>
          ))}
          <a href={links.startFree} target="_blank" rel="noopener" className="btn btn-sm">
            {cta.startFree}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex min-h-11 items-center px-2 -mr-2 font-serif text-[17px] leading-none"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? masthead.menuClose : masthead.menuOpen}
        </button>
      </div>

      {open && (
        <nav id={menuId} aria-label="Primary, menu" className="md:hidden border-t border-rule bg-paper">
          <ul className="wrap py-3">
            {masthead.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-[19px]">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a href={links.startFree} target="_blank" rel="noopener" className="btn w-full">
                {cta.startFree}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
