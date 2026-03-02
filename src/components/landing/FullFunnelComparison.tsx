import { Check, X } from "lucide-react";
import { FadeIn } from "@/lib/motion";

interface ComparisonRow {
  feature: string;
  traditional: boolean;
  ea: boolean;
}

const ROWS: ComparisonRow[] = [
  { feature: "Gestión de Meta & Google Ads", traditional: true, ea: true },
  { feature: "Landing Pages que filtran curiosos", traditional: false, ea: true },
  { feature: "Atención inmediata por WhatsApp (Bot)", traditional: false, ea: true },
  { feature: "Sincronización de citas al calendario", traditional: false, ea: true },
  { feature: "CRM fácil de usar", traditional: false, ea: true },
  { feature: "Dashboards de ROI en tiempo real", traditional: false, ea: true },
  { feature: "Tiempo que debes invertir", traditional: true, ea: false }, // Usaremos esto para cambiar el render en la fila de tiempo
];

const FullFunnelComparison = () => (
  <section id="comparativa" className="py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Full-Funnel vs Tradicional
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          ¿Por qué un sistema y no solo una agencia?
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          La diferencia entre comprar clics y comprar un proceso de ventas automático.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_140px_140px] text-center border-b border-border">
            <div className="p-4 text-left" />
            <div className="p-4 border-l border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Agencia Tradicional
              </p>
            </div>
            <div className="p-4 border-l border-border bg-accent/5">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                EA Creatives
              </p>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_140px_140px] text-center ${
                i < ROWS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 text-left text-sm text-foreground font-medium">
                {row.feature}
              </div>
              
              {/* Celda Agencia Tradicional */}
              <div className="p-4 border-l border-border flex items-center justify-center">
                {row.feature === "Tiempo que debes invertir" ? (
                  <span className="text-xs font-bold text-destructive">MUCHO</span>
                ) : row.traditional ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/40" />
                )}
              </div>
              
              {/* Celda EA Creatives */}
              <div className="p-4 border-l border-border bg-accent/5 flex items-center justify-center">
                {row.feature === "Tiempo que debes invertir" ? (
                  <span className="text-xs font-bold text-success">MÍNIMO</span>
                ) : (
                  <Check className="w-4 h-4 text-success" />
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FullFunnelComparison;
