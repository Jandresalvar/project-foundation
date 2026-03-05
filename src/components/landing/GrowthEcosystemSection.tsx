import { Mail, LayoutDashboard, PieChart } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";
import { AnimatedFeatureCard, type AnimatedFeatureCardTone } from "@/components/ui/animated-feature-card";

interface EcoCard {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  tone: AnimatedFeatureCardTone;
}

const CARDS: EcoCard[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Seguimiento Automático",
    tagline: "Que ningún cliente se enfríe",
    description:
      "Si alguien pregunta y no compra hoy, el sistema le envía correos y mensajes de valor hasta que esté listo.",
    tone: "accent",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "Gestión de Pacientes/Clientes",
    tagline: "Adiós al desorden y los post-its",
    description:
      "Toda la información de tus clientes en una sola plataforma. Sabrás exactamente en qué etapa de compra está cada uno.",
    tone: "primary",
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    title: "Control y Transparencia",
    tagline: "Decisiones basadas en números reales",
    description:
      "Visualiza cuánto inviertes, cuántas citas generas y cuánto vendes, todo en un reporte fácil de entender.",
    tone: "success",
  },
];

const GrowthEcosystemSection = () => (
  <section className="relative py-24 md:py-32 bg-surface-complement">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/10 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Ecosistema de Crecimiento
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Cierra el círculo de tu funnel
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Servicios complementarios que convierten leads en clientes recurrentes.
        </p>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
        {CARDS.map((c) => (
          <StaggerItem key={c.title}>
            <AnimatedFeatureCard
              tone={c.tone}
              className="min-h-[420px]"
              placeholderLabel="Mockup del sistema"
              heading={
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.04] text-[var(--feature-chip-text)] shadow-sm">
                    {c.icon}
                  </span>
                  <span>{c.title}</span>
                </span>
              }
              description={c.description}
              details={
                <p
                  className="rounded-2xl border px-4 py-3 text-sm font-medium italic [border-color:var(--feature-stage-border)] [background:var(--feature-chip-bg)] [color:var(--feature-chip-text)]"
                >
                  “{c.tagline}”
                </p>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default GrowthEcosystemSection;
