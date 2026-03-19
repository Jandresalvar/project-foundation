import { useEffect, useState } from "react";
import { Mail, LayoutDashboard, PieChart, PenSquare, MonitorSmartphone } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";
import { AnimatedFeatureCard, type AnimatedFeatureCardTone } from "@/components/ui/animated-feature-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface EcoCard {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  tone: AnimatedFeatureCardTone;
}

const CARDS: EcoCard[] = [
  {
    icon: <Mail className={cn('w-5', 'h-5')} />,
    title: "Seguimiento Automático",
    tagline: "Que ningún cliente se enfríe",
    description:
      "Si alguien pregunta y no compra hoy, el sistema le envía correos y mensajes de valor hasta que esté listo.",
    tone: "accent",
  },
  {
    icon: <LayoutDashboard className={cn('w-5', 'h-5')} />,
    title: "Gestión de Pacientes/Clientes",
    tagline: "Adiós al desorden y los post-its",
    description:
      "Toda la información de tus clientes en una sola plataforma. Sabrás exactamente en qué etapa de compra está cada uno.",
    tone: "primary",
  },
  {
    icon: <PieChart className={cn('w-5', 'h-5')} />,
    title: "Control y Transparencia",
    tagline: "Decisiones basadas en números reales",
    description:
      "Visualiza cuánto inviertes, cuántas citas generas y cuánto vendes, todo en un reporte fácil de entender.",
    tone: "success",
  },
  {
    icon: <PenSquare className={cn('w-5', 'h-5')} />,
    title: "Contenido para Redes Sociales",
    tagline: "Tu marca viva, activa y visible",
    description:
      "Creamos publicaciones estratégicas para fortalecer tu imagen, mantener presencia constante y conectar con tu audiencia ideal.",
    tone: "accent",
  },
  {
    icon: <MonitorSmartphone className={cn('w-5', 'h-5')} />,
    title: "Sitio Web Corporativos",
    tagline: "No es una landing rápida: es tu casa digital",
    description:
      "Diseñamos webs completas para tu negocio, con estructura profesional, servicios claros y navegación pensada para informar, posicionar y convertir.",
    tone: "primary",
  },
];

const GrowthEcosystemSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const renderCard = (c: EcoCard) => (
    <AnimatedFeatureCard
      tone={c.tone}
      className="min-h-[420px]"
      placeholderLabel="Mockup del sistema"
      visual={
        c.title === "Seguimiento Automático" ? (
          <img
            src="/assets/features/feature-email-marketing.png"
            alt="Vista previa de seguimiento automático"
            className={cn('h-full', 'w-full', 'object-cover')}
          />
        ) : c.title === "Gestión de Pacientes/Clientes" ? (
          <img
            src="/assets/features/feature-monday.png"
            alt="Vista previa de gestión de pacientes y clientes"
            className={cn('h-full', 'w-full', 'object-cover')}
          />
        ) : c.title === "Control y Transparencia" ? (
          <img
            src="/assets/features/feature-bi.png"
            alt="Vista previa de control y transparencia"
            className={cn('h-full', 'w-full', 'object-cover')}
          />
        ) : c.title === "Contenido para Redes Sociales" ? (
          <img
            src="/assets/features/feature-rrss.png"
            alt="Vista previa de contenido para redes sociales"
            className={cn('h-full', 'w-full', 'object-cover')}
          />
        ) : c.title === "Sitio Web Corporativos" ? (
          <img
            src="/assets/features/feature-paginas-web.png"
            alt="Vista previa de sitio web corporativo"
            className={cn('h-full', 'w-full', 'object-cover')}
          />
        ) : undefined
      }
      heading={
        <span className={cn('flex', 'items-center', 'gap-3')}>
          <span className={cn('flex', 'h-10', 'w-10', 'shrink-0', 'items-center', 'justify-center', 'rounded-2xl', 'bg-foreground/[0.04]', 'text-[var(--feature-chip-text)]', 'shadow-sm')}>
            {c.icon}
          </span>
          <span>{c.title}</span>
        </span>
      }
      description={c.description}
      details={
        <p
          className={cn('rounded-2xl', 'border', 'px-4', 'py-3', 'text-sm', 'font-medium', 'italic', '[border-color:var(--feature-stage-border)]', '[background:var(--feature-chip-bg)]', '[color:var(--feature-chip-text)]')}
        >
          “{c.tagline}”
        </p>
      }
    />
  );

  return (
    <section className={cn('relative', 'py-24', 'md:py-32', 'bg-surface-bridge', 'section-chromatic-wash')}>
      <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-20', 'bg-gradient-to-b', 'from-accent/10', 'to-transparent')} />
      <div className={cn('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16')}>
        <FadeIn className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-16')}>
          <p className={cn('text-sm', 'font-semibold', 'text-accent', 'tracking-wide', 'uppercase', 'mb-3')}>
            Ecosistema de Crecimiento
          </p>
          <h2 className={cn('font-heading', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-foreground')}>
            Cierra el círculo de tu crecimiento digital
          </h2>
          <p className={cn('text-muted-foreground', 'mt-4', 'text-lg', 'leading-relaxed')}>
            Servicios complementarios para posicionar tu marca, madurar tus leads y convertirlos en clientes recurrentes.
          </p>
        </FadeIn>
        <Carousel opts={{ align: "start", loop: false }} className={cn('w-full', 'bg-transparent')} setApi={setApi}>
          <CarouselContent className={cn('bg-transparent')}>
            {CARDS.map((c) => (
              <CarouselItem key={c.title} className={cn('basis-full', 'sm:basis-1/2', 'lg:basis-1/3', 'bg-transparent')}>
                <StaggerContainer staggerDelay={0.05}>
                  <StaggerItem>{renderCard(c)}</StaggerItem>
                </StaggerContainer>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn('left-2', 'top-1/2', 'h-9', 'w-9', '-translate-y-1/2', 'border-border/60', 'bg-white/85')} />
          <CarouselNext className={cn('right-2', 'top-1/2', 'h-9', 'w-9', '-translate-y-1/2', 'border-border/60', 'bg-white/85')} />
        </Carousel>

        {count > 1 && (
          <div className={cn('mt-6', 'flex', 'items-center', 'justify-center', 'gap-2')}>
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                aria-label={`Ir al slide ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
                className={
                  "h-2.5 w-2.5 rounded-full transition-all " +
                  (idx === current ? "bg-accent shadow-[0_0_0_6px_rgba(99,102,241,0.2)]" : "bg-border hover:bg-accent/70")
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GrowthEcosystemSection;
