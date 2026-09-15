import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  children: ReactNode;
  labelledBy?: string;
  className?: string;
};

// A part of the note: hairline rule above, generous vertical space, one reveal.
export function Part({ id, children, labelledBy, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`border-t border-rule py-16 md:py-20 lg:py-28 ${className}`}>
      <div className="wrap">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
