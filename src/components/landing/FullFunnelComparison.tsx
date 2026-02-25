import { Check, X } from "lucide-react";
import { FadeIn } from "@/lib/motion";

interface ComparisonRow {
  feature: string;
  traditional: boolean;
  ea: boolean;
}

const ROWS: ComparisonRow[] = [
  { feature: "Gestión de Meta & Google Ads", traditional: true, ea: true },
  { feature: "Landing Pages optimizadas (CRO)", traditional: false, ea: true },
  { feature: "Chatbot de WhatsApp 24/7", traditional: false, ea: true },
  { feature: "Automatización con n8n", traditional: false, ea: true },
  { feature: "CRM centralizado (Monday.com)", traditional: false, ea: true },
  { feature: "Dashboards de performance en tiempo real", traditional: false, ea: true },
  { feature: "Email Nurturing automatizado", traditional: false, ea: true },
];

const FullFunnelComparison = () => (
  <section id="comparativa" className="py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Full-Funnel
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          ¿Por qué EA Creatives?
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          La diferencia entre una agencia que solo hace ads y un sistema de adquisición de punta a punta.
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
              <div className="p-4 border-l border-border flex items-center justify-center">
                {row.traditional ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/40" />
                )}
              </div>
              <div className="p-4 border-l border-border bg-accent/5 flex items-center justify-center">
                <Check className="w-4 h-4 text-success" />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FullFunnelComparison;
