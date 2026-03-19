import { Search, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";
import { AnimatedFeatureCard, type AnimatedFeatureCardTone } from "@/components/ui/animated-feature-card";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  outcome: string;
  tone: AnimatedFeatureCardTone;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: <Search className={cn('w-5', 'h-5')} />,
    title: "Auditoría & Estrategia",
    description: "Entendemos tu funnel actual, identificamos oportunidades y diseñamos un plan de acción con objetivos claros.",
    outcome: "Salimos con un mapa claro de prioridades, cuellos de botella y oportunidades reales.",
    tone: "primary",
  },
  {
    number: "02",
    icon: <Rocket className={cn('w-5', 'h-5')} />,
    title: "Despliegue Tecnológico",
    description: "Montamos los anuncios, el CRM y las automatizaciones. Todo conectado y funcionando como un solo sistema.",
    outcome: "Activas un sistema conectado que reduce fricción operativa desde el primer día.",
    tone: "accent",
  },
  {
    number: "03",
    icon: <TrendingUp className={cn('w-5', 'h-5')} />,
    title: "Optimización Continua",
    description: "Mejoramos tus costos de adquisición y escalamos lo que funciona con decisiones basadas en datos.",
    outcome: "Tus decisiones dejan de depender de intuición y pasan a apoyarse en métricas accionables.",
    tone: "success",
  },
];

const ProcessSection = () => (
  <section id="proceso" className={cn('relative', 'py-24', 'md:py-32', 'bg-surface-accent')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-20', 'bg-gradient-to-b', 'from-accent/10', 'to-transparent')} />
    <div className={cn('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16')}>
      <FadeIn className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-16')}>
        <h2 className={cn('font-heading', 'text-3xl', 'sm:text-4xl', 'font-bold', 'text-foreground')}>
          3 pasos hacia el crecimiento
        </h2>
      </FadeIn>

      <StaggerContainer className={cn('grid', 'md:grid-cols-3', 'gap-8')} staggerDelay={0.15}>
        {STEPS.map((step) => (
          <StaggerItem key={step.title}>
            <AnimatedFeatureCard
              cardHoverOffset={0}
              tone={step.tone}
              visualVariant="plain"
              contentHoverOffset={0}
              className="min-h-[372px]"
              visualClassName="min-h-[122px]"
              heading={
                <span className={cn('flex', 'items-center', 'gap-3')}>
                  <span className={cn('flex', 'h-10', 'w-10', 'items-center', 'justify-center', 'rounded-2xl', 'bg-foreground/[0.04]', 'text-[var(--feature-chip-text)]', 'shadow-sm')}>
                    {step.icon}
                  </span>
                  <span>{step.title}</span>
                </span>
              }
              visual={
                <div className={cn('relative', 'flex', 'h-full', 'w-full', 'items-center', 'justify-center')}>
                  <motion.div
                    variants={{
                      rest: { y: 0, scale: 0.98, opacity: 0.7 },
                      hover: { y: -10, scale: 1.04, opacity: 1 },
                    }}
                    className={cn('relative', 'flex', 'items-center', 'justify-center', '[color:var(--feature-chip-text)]')}
                  >
                    <span className={cn('font-heading', 'text-[4.8rem]', 'font-bold', 'leading-none', 'tracking-[-0.06em]', 'sm:text-[5.6rem]')}>
                      {step.number}
                    </span>
                  </motion.div>
                </div>
              }
              description={step.description}
              details={
                <div className={cn('rounded-2xl', 'border', 'px-4', 'py-3', '[border-color:var(--feature-stage-border)]', '[background:var(--feature-chip-bg)]', '[color:var(--feature-chip-text)]')}>
                  <p className={cn('text-sm', 'leading-relaxed', 'font-medium')}>{step.outcome}</p>
                </div>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ProcessSection;
