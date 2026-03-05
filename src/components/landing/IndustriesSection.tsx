import { Home, Stethoscope, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatedFeatureCard, type AnimatedFeatureCardTone } from "@/components/ui/animated-feature-card";

interface IndustryCard {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  tone: AnimatedFeatureCardTone;
}

const INDUSTRIES: IndustryCard[] = [
  {
    icon: <Home className={cn('w-6', 'h-6')} />,
    title: "Inmobiliarias & Bienes Raíces",
    problem: "¿Cansado de mostrar propiedades a curiosos que no compran?",
    solution:
      "Captamos prospectos, nuestro asistente virtual pre-califica su presupuesto y solo te agenda visitas con compradores reales.",
    tone: "primary",
  },
  {
    icon: <Stethoscope className={cn('w-6', 'h-6')} />,
    title: "Clínicas & Estéticas",
    problem: "¿Pacientes que agendan pero no asisten a la cita?",
    solution:
      "Llenamos tu agenda con campañas locales y el sistema envía recordatorios automáticos por WhatsApp para asegurar su asistencia.",
    tone: "accent",
  },
  {
    icon: <Briefcase className={cn('w-6', 'h-6')} />,
    title: "Agencias & Aseguradoras",
    problem: "¿Leads caros que no contestan el teléfono?",
    solution:
      "Conectamos tus anuncios directo a un CRM donde el prospecto es contactado en menos de 5 minutos, aumentando tu tasa de cierre.",
    tone: "success",
  },
];

const IndustriesSection = () => (
  <section id="usos" className={cn('relative', 'py-24', 'md:py-32', 'bg-surface-bridge')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-24', 'bg-gradient-to-b', 'from-accent/8', 'to-transparent')} />
    <div className={cn('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16')}>
      <FadeIn className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-16')}>
        <p className={cn('text-sm', 'font-semibold', 'text-accent', 'tracking-wide', 'uppercase', 'mb-3')}>
          Casos de Uso
        </p>
        <h2 className={cn('font-heading', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-foreground')}>
          Soluciones comprobadas que se adaptan a tu modelo de negocio
        </h2>
      </FadeIn>

      <StaggerContainer className={cn('grid', 'md:grid-cols-3', 'gap-6', 'lg:gap-8')} staggerDelay={0.15}>
        {INDUSTRIES.map((ind) => (
          <StaggerItem key={ind.title}>
            <AnimatedFeatureCard
              cardHoverOffset={0}
              tone={ind.tone}
              visualVariant="hidden"
              contentHoverOffset={0}
              className="min-h-[336px]"
              contentClassName="border-0 bg-transparent p-0 shadow-none backdrop-blur-0"
              heading={
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.04] text-[var(--feature-chip-text)] shadow-sm">
                    {ind.icon}
                  </span>
                  <span>{ind.title}</span>
                </span>
              }
              description={
                <div>
                  <p className={cn('mb-1', 'text-[0.68rem]', 'font-semibold', 'uppercase', 'tracking-[0.22em]', 'text-destructive')}>
                    El problema
                  </p>
                  <p className={cn('text-sm', 'leading-relaxed', 'text-muted-foreground')}>
                    {ind.problem}
                  </p>
                </div>
              }
              details={
                <motion.div
                  variants={{
                    rest: { y: 0, scale: 1, opacity: 0.96 },
                    hover: { y: 10, scale: 1, opacity: 1 },
                  }}
                  className="rounded-[24px] border p-4 text-left shadow-[0_18px_36px_hsl(var(--foreground)/0.1)] [border-color:var(--feature-stage-border)] [background:var(--feature-chip-bg)] [color:var(--feature-chip-text)]"
                >
                  <p className="mb-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] opacity-70">
                    Nuestra solución
                  </p>
                  <p className="text-sm font-medium leading-relaxed">{ind.solution}</p>
                </motion.div>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default IndustriesSection;
