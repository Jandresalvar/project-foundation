import { Check, X } from "lucide-react";
import { FadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  traditional: boolean;
  ea: boolean;
}

const ROWS: ComparisonRow[] = [
  { feature: "Gestión de Meta Ads", traditional: true, ea: true },
  { feature: "Landing Pages que filtran curiosos", traditional: false, ea: true },
  { feature: "Atención inmediata por WhatsApp (Bot)", traditional: false, ea: true },
  { feature: "Sincronización de citas al calendario", traditional: false, ea: true },
  { feature: "CRM fácil de usar", traditional: false, ea: true },
  { feature: "Dashboards de ROI en tiempo real", traditional: false, ea: true },
  { feature: "Tiempo que debes invertir", traditional: true, ea: false }, // Usaremos esto para cambiar el render en la fila de tiempo
];

const FullFunnelComparison = () => (
  <section id="comparativa" className={cn('relative', 'py-24', 'md:py-32', 'bg-surface-bridge')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-20', 'bg-gradient-to-b', 'from-accent/8', 'to-transparent')} />
    <div className={cn('max-w-4xl', 'mx-auto', 'px-6', 'lg:px-16')}>
      <FadeIn className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-14')}>
        <p className={cn('text-sm', 'font-semibold', 'text-accent', 'tracking-wide', 'uppercase', 'mb-3')}>
          Full-Funnel vs Tradicional
        </p>
        <h2 className={cn('font-heading', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-foreground')}>
          ¿Por qué un sistema y no solo una agencia?
        </h2>
        <p className={cn('text-muted-foreground', 'mt-4', 'text-lg', 'leading-relaxed')}>
          La diferencia entre comprar clics y comprar un proceso de ventas automático.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className={cn('rounded-2xl', 'border', 'border-border/90', 'bg-card/95', 'shadow-sm', 'overflow-hidden')}>
          {/* Header */}
          <div className={cn('grid', 'grid-cols-[minmax(0,1fr)_104px_104px]', 'sm:grid-cols-[1fr_140px_140px]', 'md:grid-cols-[1fr_150px_150px]', 'text-center', 'border-b', 'border-border')}>
            <div className={cn('p-3', 'sm:p-4', 'text-left')} />
            <div className={cn('p-3', 'sm:p-4', 'border-l', 'border-border', 'flex', 'items-center', 'justify-center', 'text-center')}>
              <p className={cn('text-[0.66rem]', 'sm:text-[0.7rem]', 'md:text-[0.72rem]', 'font-semibold', 'text-muted-foreground', 'uppercase', 'tracking-wide', 'leading-tight')}>
                Agencia Tradicional
              </p>
            </div>
            <div className={cn('p-3', 'sm:p-4', 'border-l', 'border-border', 'bg-accent/8', 'flex', 'items-center', 'justify-center')}>
              <img
                src="/assets/logo-ea.svg"
                alt="EA Creatives"
                className={cn('mx-auto', 'h-10', 'w-auto', 'sm:h-12', 'object-contain', 'contrast-125')}
              />
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[minmax(0,1fr)_104px_104px] sm:grid-cols-[1fr_140px_140px] md:grid-cols-[1fr_150px_150px] text-center ${
                i < ROWS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className={cn('p-3', 'sm:p-4', 'text-left', 'text-[0.95rem]', 'leading-snug', 'sm:text-sm', 'text-foreground', 'font-medium')}>
                {row.feature}
              </div>
              
              {/* Celda Agencia Tradicional */}
              <div className={cn('p-3', 'sm:p-4', 'border-l', 'border-border', 'flex', 'items-center', 'justify-center')}>
                {row.feature === "Tiempo que debes invertir" ? (
                  <span className={cn('text-xs', 'font-bold', 'text-destructive')}>MUCHO</span>
                ) : row.traditional ? (
                  <Check className={cn('w-4', 'h-4', 'text-success')} />
                ) : (
                  <X className={cn('w-4', 'h-4', 'text-muted-foreground/40')} />
                )}
              </div>
              
              {/* Celda EA Creatives */}
              <div className={cn('p-3', 'sm:p-4', 'border-l', 'border-border', 'bg-accent/8', 'flex', 'items-center', 'justify-center')}>
                {row.feature === "Tiempo que debes invertir" ? (
                  <span className={cn('text-xs', 'font-bold', 'text-success')}>MÍNIMO</span>
                ) : (
                  <Check className={cn('w-4', 'h-4', 'text-success')} />
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
