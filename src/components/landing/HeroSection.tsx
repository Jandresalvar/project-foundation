import { ArrowRight, MessageCircle, BarChart3, Zap } from "lucide-react";
import { FadeIn } from "@/lib/motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type FlowNodeAccent = "accent" | "success";

const NODE_ACCENT_STYLES: Record<FlowNodeAccent, string> = {
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
};

const HeroSection = () => (
  <section className={cn('relative', 'overflow-hidden', 'bg-surface-accent', 'pt-32', 'pb-20', 'md:pt-44', 'md:pb-32')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-48', 'bg-gradient-to-b', 'from-accent/10', 'to-transparent')} />
    <div aria-hidden className={cn('pointer-events-none', 'absolute', '-top-24', 'right-10', 'h-64', 'w-64', 'rounded-full', 'bg-accent/10', 'blur-3xl')} />
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'bottom-0', 'left-10', 'h-56', 'w-56', 'rounded-full', 'bg-success/10', 'blur-3xl')} />

    <div className={cn('relative', 'max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16')}>
      <div className={cn('grid', 'lg:grid-cols-2', 'gap-12', 'lg:gap-20', 'items-center')}>
        {/* Copy */}
        <div className="space-y-8">
          <FadeIn>
            <span className={cn('inline-flex', 'items-center', 'gap-2', 'rounded-full', 'border', 'border-accent/20', 'bg-accent/10', 'px-4', 'py-1.5', 'text-xs', 'font-medium', 'text-muted-foreground')}>
              <Zap className={cn('w-3.5', 'h-3.5', 'text-accent')} />
              Sistemas de Venta Automáticos
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className={cn('font-heading', 'text-4xl', 'sm:text-5xl', 'lg:text-6xl', 'font-bold', 'leading-[1.1]', 'tracking-tight', 'text-foreground')}>
              Convierte interesados en clientes con un sistema que{" "}
              <span className="text-accent">vende por ti.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className={cn('text-lg', 'text-muted-foreground', 'leading-relaxed', 'max-w-lg')}>
              Potenciamos el proceso de ventas de tu empresa. Captamos clientes potenciales, 
              los filtramos automáticamente por WhatsApp y te entregamos citas o leads calificados, 
              listos para cerrar.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={cn('flex', 'flex-col', 'sm:flex-row', 'gap-4')}>
              <div className={cn('group', 'relative', 'inline-flex')}>
                <div className={cn('pointer-events-none', 'absolute', 'inset-0', '-m-2', 'rounded-full', 'bg-white', 'opacity-35', 'blur-lg', 'transition-all', 'duration-300', 'ease-out', 'group-hover:-m-3', 'group-hover:opacity-60', 'group-hover:blur-2xl')} />
                <Link
                  to="#cta-final-form"
                  className={cn('relative', 'z-10', 'inline-flex', 'items-center', 'gap-2', 'rounded-full', 'bg-gradient-to-br', 'from-[#1e2a4d]', 'via-[#19233f]', 'to-[#131c33]', 'px-5', 'py-3', 'text-base', 'font-semibold', 'text-white', 'shadow-[0_18px_45px_rgba(19,31,51,0.45)]', 'transition-all', 'duration-200', 'ease-out', 'hover:from-[#27375f]', 'hover:via-[#1f2e50]', 'hover:to-[#19263f]', 'hover:-translate-y-0.5', 'hover:shadow-[0_22px_55px_rgba(31,46,79,0.55)]', 'active:translate-y-0')}
                >
                  Empezar ahora
                  <ArrowRight className={cn('w-4', 'h-4')} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Glassmorphism visual */}
        <FadeIn delay={0.2} direction="right">
          <div className="relative">
            {/* Background glow */}
            <div className={cn('absolute', '-inset-4', 'bg-accent/10', 'rounded-3xl', 'blur-3xl')} />

            <div className={cn('relative', 'rounded-2xl', 'border', 'border-border/80', 'bg-card/90', 'backdrop-blur-xl', 'shadow-lg', 'p-6', 'space-y-4')}>
              {/* Flow header */}
              <div className={cn('flex', 'items-center', 'gap-3', 'pb-4', 'border-b', 'border-border')}>
                <div className={cn('w-3', 'h-3', 'rounded-full', 'bg-destructive/60')} />
                <div className={cn('w-3', 'h-3', 'rounded-full', 'bg-accent/60')} />
                <div className={cn('w-3', 'h-3', 'rounded-full', 'bg-success/60')} />
                <span className={cn('ml-auto', 'text-xs', 'text-muted-foreground', 'font-medium')}>
                  Flujo de Automatización
                </span>
              </div>

              {/* Flow nodes */}
              <div className="space-y-3">
                <FlowNode
                  icon={<BarChart3 className={cn('w-4', 'h-4')} />}
                  label="Meta Ads Campaign"
                  sublabel="Lead generado"
                  accent="accent"
                />
                <FlowConnector />
                <FlowNode
                  icon={<MessageCircle className={cn('w-4', 'h-4')} />}
                  label="WhatsApp Bot"
                  sublabel="Respuesta automática"
                  accent="success"
                />
                <FlowConnector />
                <FlowNode
                  icon={<BarChart3 className={cn('w-4', 'h-4')} />}
                  label="CRM Dashboard"
                  sublabel="Lead calificado"
                  accent="accent"
                />
              </div>

              {/* Stats bar */}
              <div className={cn('grid', 'grid-cols-3', 'gap-3', 'pt-4', 'border-t', 'border-border')}>
                <StatChip label="Leads" value="2,847" />
                <StatChip label="Conversión" value="34%" />
                <StatChip label="ROI" value="5.2x" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const FlowNode = ({
  icon,
  label,
  sublabel,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  accent: FlowNodeAccent;
}) => (
  <div className={cn('flex', 'items-center', 'gap-3', 'rounded-xl', 'border', 'border-border', 'bg-card', 'p-3')}>
    <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${NODE_ACCENT_STYLES[accent]}`}>
      {icon}
    </div>
    <div>
      <p className={cn('text-sm', 'font-medium', 'text-foreground')}>{label}</p>
      <p className={cn('text-xs', 'text-muted-foreground')}>{sublabel}</p>
    </div>
  </div>
);

const FlowConnector = () => (
  <div className={cn('flex', 'justify-center')}>
    <div className={cn('w-px', 'h-5', 'bg-border')} />
  </div>
);

const StatChip = ({ label, value }: { label: string; value: string }) => (
  <div className={cn('text-center', 'rounded-lg', 'bg-surface-primary', 'p-2')}>
    <p className={cn('text-base', 'font-bold', 'text-foreground', 'font-heading')}>{value}</p>
    <p className={cn('text-[11px]', 'text-muted-foreground')}>{label}</p>
  </div>
);

export default HeroSection;
