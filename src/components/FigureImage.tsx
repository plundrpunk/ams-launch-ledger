import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  ratio: string; // CSS aspect-ratio value, e.g. "3 / 2"
  eager?: boolean;
  sizes?: string;
  srcSet?: string;
  className?: string;
  imgClassName?: string;
};

// Reserves the aspect-ratio box so layout never shifts. If the file is
// missing the broken image is removed and the paper-2 panel stays.
// Images load eagerly: the page carries four small files in total.
export function FigureImage({ src, alt, ratio, eager = true, sizes, srcSet, className = "", imgClassName = "" }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative w-full overflow-hidden bg-paper-2 ${className}`} style={{ aspectRatio: ratio }}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          srcSet={srcSet}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
