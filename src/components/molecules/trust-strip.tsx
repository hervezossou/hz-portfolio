const TRUSTED_BY = [
  "The Creative Mind",
  "TechSeed Academy",
  "COSIT B\u00E9nin",
  "Kemaco Sarl",
];

export function TrustStrip() {
  return (
    <div className="border-border border-t border-b py-5">
      <p className="mb-2 text-center text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
        Ils m\u2019ont fait confiance\u00A0:
      </p>
      <p className="text-center text-sm font-medium text-muted-foreground/80">
        {TRUSTED_BY.map((name, i) => (
          <span key={name}>
            {name}
            {i < TRUSTED_BY.length - 1 && (
              <span className="mx-2 text-border/60">·</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}