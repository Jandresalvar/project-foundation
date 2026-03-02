import { Search, Rocket, TrendingUp } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Auditoría & Estrategia",
    description: "Entendemos tu funnel actual, identificamos oportunidades y diseñamos un plan de acción con objetivos claros.",
  },
  {
    number: "02",
    icon: <Rocket className="w-5 h-5" />,
    title: "Despliegue Tecnológico",
    description: "Montamos los anuncios, el CRM y las automatizaciones. Todo conectado y funcionando como un solo sistema.",
  },
  {
    number: "03",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Optimización Continua",
    description: "Mejoramos tus costos de adquisición y escalamos lo que funciona con decisiones basadas en datos.",
  },
];

const ProcessSection = () => (
  <section id="proceso" className="py-24 md:py-32 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Nuestra Metodología
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          3 pasos hacia el crecimiento
        </h2>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
        {STEPS.map((step) => (
          <StaggerItem key={step.number}>
            <div className="relative text-center space-y-4">
              <span className="block font-heading text-5xl font-bold text-border select-none">
                {step.number}
              </span>
              <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                {step.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ProcessSection;
