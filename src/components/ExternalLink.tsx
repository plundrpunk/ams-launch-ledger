import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

// Text link to another site. The only icon on the page is this arrow.
export function ExternalLink({ href, children, className = "", arrow = true }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener" className={`link inline-flex items-center gap-1 ${className}`}>
      <span>{children}</span>
      {arrow && <ArrowUpRight weight="regular" size="0.85em" aria-hidden="true" className="shrink-0 translate-y-[0.02em]" />}
    </a>
  );
}
