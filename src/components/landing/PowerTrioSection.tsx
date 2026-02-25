import { Megaphone, MousePointerClick, Bot } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/lib/motion";
import { FadeIn } from "@/lib/motion";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceCard[] = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Tráfico Inteligente",
    description:
      "Gestión proactiva de Meta Ads y Google Ads enfocada en ROI, incluyendo diseño de creativos de alto impacto.",
    tags: ["Meta Ads", "Google Ads", "Creativos"],
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Conversión & Leads",
    description:
      "Diseño de Landing Pages de alta conversión y optimización constante (CRO) para que cada clic valga la pena.",
    tags: ["Landing Pages", "CRO", "A/B Testing"],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automatización Operativa",
    description:
      "Despliegue de Chatbots en WhatsApp y flujos de trabajo en n8n para automatizar facturación, pedidos y atención.",
    tags: ["n8n", "WhatsApp", "Chatbots"],
  },
];

const PowerTrioSection = () => (
  <section id="servicios" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Servicios Core
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          El trío que impulsa tu crecimiento
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Tres pilares diseñados para captar, convertir y retener clientes de forma predecible.
        </p>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                {s.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default PowerTrioSection;
