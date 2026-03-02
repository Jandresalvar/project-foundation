import { Home, Stethoscope, Briefcase } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";

interface IndustryCard {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
}

const INDUSTRIES: IndustryCard[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Inmobiliarias & Bienes Raíces",
    problem: "¿Cansado de mostrar propiedades a curiosos que no compran?",
    solution:
      "Captamos prospectos, nuestro asistente virtual pre-califica su presupuesto y solo te agenda visitas con compradores reales.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Clínicas & Estéticas",
    problem: "¿Pacientes que agendan pero no asisten a la cita?",
    solution:
      "Llenamos tu agenda con campañas locales y el sistema envía recordatorios automáticos por WhatsApp para asegurar su asistencia.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Agencias & Aseguradoras",
    problem: "¿Leads caros que no contestan el teléfono?",
    solution:
      "Conectamos tus anuncios directo a un CRM donde el prospecto es contactado en menos de 5 minutos, aumentando tu tasa de cierre.",
  },
];

const IndustriesSection = () => (
  <section className="relative py-24 md:py-32 bg-surface-primary">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/8 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
          Casos de Uso
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Soluciones comprobadas que se adaptan a tu modelo de negocio
        </h2>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
        {INDUSTRIES.map((ind) => (
          <StaggerItem key={ind.title}>
            <article className="group h-full rounded-2xl border border-border/90 bg-card/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent/30">
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/12 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                {ind.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {ind.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-1">
                    El Problema
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {ind.problem}
                  </p>
                </div>
                <div className="h-px w-full bg-border/80" />
                <div>
                  <p className="text-xs font-semibold text-success uppercase tracking-wider mb-1">
                    Nuestra Solución
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {ind.solution}
                  </p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default IndustriesSection;
