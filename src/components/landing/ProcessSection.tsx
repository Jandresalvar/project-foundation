import { FadeIn } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Conocemos tu negocio, tu audiencia y tus objetivos. Definimos juntos qué necesitas: contenido, campañas, web — o las tres.",
  },
  {
    number: "02",
    title: "Estrategia y producción",
    description:
      "Armamos el plan y lo ejecutamos: calendario de contenido, campañas configuradas y segmentadas, o tu sitio web en desarrollo.",
  },
  {
    number: "03",
    title: "Crecimiento continuo",
    description:
      "Medimos, optimizamos y reportamos cada mes. Tú ves los resultados; nosotros nos encargamos del resto.",
  },
];

const ProcessSection = () => (
  <section id="proceso" className="scroll-mt-24 py-24 md:py-36">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Proceso
        </p>
        <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Así trabajamos contigo.
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
        {STEPS.map((step, index) => (
          <FadeIn key={step.number} delay={index * 0.1}>
            <div className="border-t border-border pt-6">
              <span className="text-sm font-semibold text-accent">{step.number}</span>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
