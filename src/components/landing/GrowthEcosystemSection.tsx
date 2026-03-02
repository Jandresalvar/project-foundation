import { Mail, LayoutDashboard, PieChart } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";

interface EcoCard {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
}

const CARDS: EcoCard[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Seguimiento Automático",
    tagline: "Que ningún cliente se enfríe",
    description:
      "Si alguien pregunta y no compra hoy, el sistema le envía correos y mensajes de valor hasta que esté listo.",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "Gestión de Pacientes/Clientes",
    tagline: "Adiós al desorden y los post-its",
    description:
      "Toda la información de tus clientes en una sola plataforma. Sabrás exactamente en qué etapa de compra está cada uno.",
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    title: "Control y Transparencia",
    tagline: "Decisiones basadas en números reales",
    description:
      "Visualiza cuánto inviertes, cuántas citas generas y cuánto vendes, todo en un reporte fácil de entender.",
  },
];

const GrowthEcosystemSection = () => (
  <section className="relative py-24 md:py-32 bg-surface-success">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-success/12 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-success tracking-wide uppercase mb-3">
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
            <article className="group h-full rounded-2xl border border-border/90 bg-card/95 p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-success/25">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-success/12 text-success transition-colors duration-300 group-hover:bg-success group-hover:text-success-foreground">
                  {c.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-foreground italic mb-2">
                "{c.tagline}"
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {c.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default GrowthEcosystemSection;
