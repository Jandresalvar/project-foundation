const SCALE = [
  { tag: "H1", className: "text-5xl font-bold font-heading", label: "Heading 1 — 48px / Bold" },
  { tag: "H2", className: "text-4xl font-bold font-heading", label: "Heading 2 — 36px / Bold" },
  { tag: "H3", className: "text-2xl font-semibold font-heading", label: "Heading 3 — 24px / Semibold" },
  { tag: "H4", className: "text-xl font-semibold font-heading", label: "Heading 4 — 20px / Semibold" },
  { tag: "Body L", className: "text-lg leading-relaxed", label: "Body Large — 18px / Regular" },
  { tag: "Body", className: "text-base leading-relaxed", label: "Body Regular — 16px / Regular" },
  { tag: "Small", className: "text-sm text-muted-foreground", label: "Small Text — 14px / Regular" },
] as const;

const TypographySection = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold font-heading text-foreground">Tipografía</h2>
      <p className="text-muted-foreground mt-1">
        <span className="font-heading font-semibold">Plus Jakarta Sans</span> para títulos · <span className="font-medium">Inter</span> para cuerpo.
      </p>
    </div>
    <div className="space-y-6">
      {SCALE.map(({ tag, className, label }) => (
        <div key={tag} className="flex flex-col gap-1 pb-6 border-b border-border last:border-0">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">{tag}</span>
          <p className={`${className} text-foreground`}>
            EA Creatives — Diseño & Automatización
          </p>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TypographySection;
