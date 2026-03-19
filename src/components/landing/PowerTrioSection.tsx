import { Megaphone, MousePointerClick, Bot } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/lib/motion";
import { FadeIn } from "@/lib/motion";
import { AnimatedFeatureCard, type AnimatedFeatureCardTone } from "@/components/ui/animated-feature-card";
import { cn } from "@/lib/utils";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  tone: AnimatedFeatureCardTone;
}

const SERVICES: ServiceCard[] = [
  {
    icon: <Megaphone className={cn('w-6', 'h-6')} />,
    title: "Atraemos Clientes Ideales",
    description:
      "Diseñamos anuncios magnéticos en redes sociales que capturan la atención de personas que realmente necesitan tus servicios.",
    tags: ["Campañas", "Anuncios", "Creativos"],
    tone: "accent",
  },
  {
    icon: <MousePointerClick className={cn('w-6', 'h-6')} />,
    title: "Filtramos y Calificamos",
    description:
      "Creamos páginas que convencen. Tu visitante no solo lee, sino que deja sus datos porque entiende el valor de lo que ofreces.",
    tags: ["Páginas de Venta", "Captación", "Optimización"],
    tone: "primary",
  },
  {
    icon: <Bot className={cn('w-6', 'h-6')} />,
    title: "Tu Secretaria Virtual 24/7",
    description:
      "Un asistente en WhatsApp responde dudas al instante, perfila al cliente y agenda la cita directamente en tu calendario.",
    tags: ["WhatsApp", "Agendamiento", "Asistente AI"],
    tone: "success",
  },
];

const PowerTrioSection = () => (
  <section id="servicios" className={cn('relative', 'overflow-hidden', 'py-24', 'md:py-32', 'bg-surface-core')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-24', 'bg-gradient-to-b', 'from-accent/18', 'to-transparent')} />
    <div aria-hidden className={cn('pointer-events-none', 'absolute', '-top-20', 'right-8', 'h-56', 'w-56', 'rounded-full', 'bg-accent/12', 'blur-3xl')} />
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'bottom-0', 'left-10', 'h-48', 'w-48', 'rounded-full', 'bg-success/12', 'blur-3xl')} />
    <div className={cn('relative', 'max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16')}>
      <FadeIn className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-16')}>
        <h2 className={cn('font-heading', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-primary-foreground')}>
          El trío que impulsa tu crecimiento
        </h2>
        <p className={cn('text-primary-foreground/80', 'mt-4', 'text-lg', 'leading-relaxed')}>
          Tres pilares diseñados para captar, convertir y retener clientes de forma predecible.
        </p>
      </FadeIn>

      <StaggerContainer className={cn('grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'lg:gap-8')} staggerDelay={0.15}>
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <AnimatedFeatureCard
              tone={s.tone}
              className="min-h-[420px]"
              placeholderLabel="Espacio visual del servicio"
              visual={
                s.title === "Atraemos Clientes Ideales" ? (
                  <img
                    src="/assets/features/feature-campanas-ads.png"
                    alt="Vista previa de campañas publicitarias"
                    className={cn('h-full', 'w-full', 'object-cover')}
                  />
                ) : s.title === "Filtramos y Calificamos" ? (
                  <img
                    src="/assets/features/feature-captacion.png"
                    alt="Vista previa de captación y calificación"
                    className={cn('h-full', 'w-full', 'object-cover')}
                  />
                ) : s.title === "Tu Secretaria Virtual 24/7" ? (
                  <img
                    src="/assets/features/feature-whatsapp-ai.png"
                    alt="Vista previa de asistente virtual en WhatsApp"
                    className={cn('h-full', 'w-full', 'object-cover')}
                  />
                ) : undefined
              }
              heading={
                <span className={cn('flex', 'items-start', 'gap-3')}>
                  <span className={cn('flex', 'h-11', 'w-11', 'shrink-0', 'items-center', 'justify-center', 'rounded-2xl', 'bg-foreground/[0.04]', 'text-[var(--feature-chip-text)]', 'shadow-sm')}>
                    {s.icon}
                  </span>
                  <span className={cn('min-w-0', 'leading-tight')}>{s.title}</span>
                </span>
              }
              description={s.description}
              details={
                <div className={cn('flex', 'flex-wrap', 'gap-2.5')}>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'rounded-full',
                        'border',
                        'px-3',
                        'py-1',
                        'text-[0.68rem]',
                        'font-semibold',
                        'uppercase',
                        'tracking-[0.18em]',
                        '[border-color:var(--feature-stage-border)]',
                        '[background:var(--feature-chip-bg)]',
                        '[color:var(--feature-chip-text)]',
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default PowerTrioSection;
