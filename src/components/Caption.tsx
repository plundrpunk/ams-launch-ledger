type Props = {
  label: string; // "Fig. 1."
  text: string;
  className?: string;
};

export function Caption({ label, text, className = "" }: Props) {
  return (
    <figcaption className={`caption mt-3 ${className}`}>
      <span className="text-accent">{label}</span> {text}
    </figcaption>
  );
}
