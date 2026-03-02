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
    title: "Atraemos Clientes Ideales",
    description:
      "Diseñamos anuncios magnéticos en redes sociales que capturan la atención de personas que realmente necesitan tus servicios.",
    tags: ["Campañas", "Anuncios", "Creativos"],
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Filtramos y Calificamos",
    description:
      "Creamos páginas que convencen. Tu visitante no solo lee, sino que deja sus datos porque entiende el valor de lo que ofreces.",
    tags: ["Páginas de Venta", "Captación", "Optimización"],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Tu Secretaria Virtual 24/7",
    description:
      "Un asistente en WhatsApp responde dudas al instante, perfila al cliente y agenda la cita directamente en tu calendario.",
    tags: ["WhatsApp", "Agendamiento", "Asistente AI"],
  },
];

const PowerTrioSection = () => (
  <section id="servicios" className="relative overflow-hidden py-24 md:py-32 bg-primary">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/18 to-transparent" />
    <div aria-hidden className="pointer-events-none absolute -top-20 right-8 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-success/12 blur-3xl" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Servicios Core
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
          El trío que impulsa tu crecimiento
        </h2>
        <p className="text-primary-foreground/80 mt-4 text-lg leading-relaxed">
          Tres pilares diseñados para captar, convertir y retener clientes de forma predecible.
        </p>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <article className="group h-full rounded-2xl border border-border/90 bg-card/95 p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-accent/25">
              <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
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
                    className="rounded-full bg-surface-primary px-3 py-1 text-xs font-medium text-muted-foreground"
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
