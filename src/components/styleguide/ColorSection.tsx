interface ColorSwatchProps {
  label: string;
  tailwindClass: string;
  hex: string;
  textClass?: string;
}

const ColorSwatch = ({ label, tailwindClass, hex, textClass = "text-white" }: ColorSwatchProps) => (
  <div className="space-y-2">
    <div className={`${tailwindClass} ${textClass} w-full h-24 rounded-2xl shadow-sm flex items-end p-4`}>
      <span className="text-xs font-medium opacity-90">{hex}</span>
    </div>
    <p className="text-sm font-medium text-foreground">{label}</p>
  </div>
);

const COLOR_GROUPS = [
  {
    title: "Primarios & Brand",
    colors: [
      { label: "Primary (Navy)", tailwindClass: "bg-primary", hex: "hsl(215,28%,17%)" },
      { label: "Accent (Blue)", tailwindClass: "bg-accent", hex: "hsl(217,91%,60%)" },
      { label: "Success (Emerald)", tailwindClass: "bg-success", hex: "hsl(160,84%,39%)" },
      { label: "Destructive", tailwindClass: "bg-destructive", hex: "hsl(0,72%,51%)" },
    ],
  },
  {
    title: "Backgrounds & Superficies",
    colors: [
      { label: "Background", tailwindClass: "bg-background border border-border", hex: "hsl(210,40%,98%)", textClass: "text-foreground" },
      { label: "Card", tailwindClass: "bg-card border border-border", hex: "#FFFFFF", textClass: "text-foreground" },
      { label: "Muted", tailwindClass: "bg-muted", hex: "hsl(210,40%,96%)", textClass: "text-foreground" },
      { label: "Border", tailwindClass: "bg-border", hex: "hsl(214,32%,91%)", textClass: "text-foreground" },
    ],
  },
  {
    title: "Texto",
    colors: [
      { label: "Foreground", tailwindClass: "bg-foreground", hex: "hsl(215,28%,17%)" },
      { label: "Muted Foreground", tailwindClass: "bg-muted-foreground", hex: "hsl(215,16%,47%)" },
      { label: "Accent Foreground", tailwindClass: "bg-accent-foreground", hex: "#FFFFFF" },
    ],
  },
];

const ColorSection = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold font-heading text-foreground">Colores</h2>
      <p className="text-muted-foreground mt-1">
        Paleta cromática del sistema de diseño.
      </p>
    </div>
    {COLOR_GROUPS.map((group) => (
      <div key={group.title} className="space-y-4">
        <h3 className="text-lg font-semibold font-heading text-foreground">{group.title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {group.colors.map((c) => (
            <ColorSwatch key={c.label} {...c} />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default ColorSection;
