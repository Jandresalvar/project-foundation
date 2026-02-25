import { ArrowRight, MessageCircle, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/motion";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Copy */}
        <div className="space-y-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Zap className="w-3.5 h-3.5 text-accent" />
              Ads · Automatización · CRM
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              Escala tus ventas con anuncios inteligentes y{" "}
              <span className="text-accent">automatización</span> que trabaja por ti.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Desde Meta Ads hasta automatización con n8n y WhatsApp. Llevamos tu
              negocio de procesos manuales a un ecosistema de crecimiento predecible.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Empezar ahora <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Ver servicios
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Glassmorphism visual */}
        <FadeIn delay={0.2} direction="right">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl" />

            <div className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg p-6 space-y-4">
              {/* Flow header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
                <span className="ml-auto text-xs text-muted-foreground font-medium">
                  Flujo de Automatización
                </span>
              </div>

              {/* Flow nodes */}
              <div className="space-y-3">
                <FlowNode
                  icon={<BarChart3 className="w-4 h-4 text-accent" />}
                  label="Meta Ads Campaign"
                  sublabel="Lead generado"
                  accent="accent"
                />
                <FlowConnector />
                <FlowNode
                  icon={<MessageCircle className="w-4 h-4 text-success" />}
                  label="WhatsApp Bot"
                  sublabel="Respuesta automática"
                  accent="success"
                />
                <FlowConnector />
                <FlowNode
                  icon={<BarChart3 className="w-4 h-4 text-accent" />}
                  label="CRM Dashboard"
                  sublabel="Lead calificado"
                  accent="accent"
                />
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
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
  accent: string;
}) => (
  <div className={`flex items-center gap-3 rounded-xl border border-border bg-background p-3`}>
    <div className={`flex items-center justify-center w-9 h-9 rounded-lg bg-${accent}/10`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  </div>
);

const FlowConnector = () => (
  <div className="flex justify-center">
    <div className="w-px h-5 bg-border" />
  </div>
);

const StatChip = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center rounded-lg bg-secondary p-2">
    <p className="text-base font-bold text-foreground font-heading">{value}</p>
    <p className="text-[11px] text-muted-foreground">{label}</p>
  </div>
);

export default HeroSection;
