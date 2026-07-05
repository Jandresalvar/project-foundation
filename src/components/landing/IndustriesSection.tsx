import { FadeIn } from "@/lib/motion";

const INDUSTRIES = [
  {
    name: "Restaurantes y gastronomía",
    detail: "Contenido que abre el apetito, campañas locales y menús digitales.",
  },
  {
    name: "Moda y retail",
    detail: "Redes que construyen marca, catálogos web y campañas de temporada.",
  },
  {
    name: "Marcas y e-commerce",
    detail: "Posicionamiento en Meta, generación de leads y sitios que convierten.",
  },
  {
    name: "Salud y bienestar",
    detail: "Captación de pacientes y presencia digital profesional.",
  },
  {
    name: "Servicios profesionales",
    detail: "Leads calificados y páginas web que generan confianza.",
  },
];

const IndustriesSection = () => (
  <section id="industrias" className="scroll-mt-24 bg-dark py-24 md:py-36">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-dark-foreground/50">
          Industrias
        </p>
        <h2 className="mt-4 max-w-[22ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-dark-foreground">
          Trabajamos con negocios que viven de sus clientes.
        </h2>
      </FadeIn>

      <div className="mt-16 md:mt-24">
        {INDUSTRIES.map((industry) => (
          <FadeIn key={industry.name}>
            <div className="grid gap-2 border-t border-dark-foreground/15 py-7 md:grid-cols-[1fr_1.4fr] md:gap-10 md:py-9">
              <h3 className="text-base font-semibold text-dark-foreground md:text-lg">
                {industry.name}
              </h3>
              <p className="text-sm leading-relaxed text-dark-foreground/50 md:text-base">
                {industry.detail}
              </p>
            </div>
          </FadeIn>
        ))}
        <div className="border-t border-dark-foreground/15" />
      </div>
    </div>
  </section>
);

export default IndustriesSection;
