import { FadeIn } from "@/lib/motion";

const Hero = () => (
  <section className="pt-40 pb-24 md:pt-56 md:pb-36">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <FadeIn>
        <h1 className="max-w-[16ch] text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
          Tu socio creativo para crecer en digital.
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
          Creamos contenido, campañas y sitios web para restaurantes, tiendas
          y marcas que quieren vender más.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <a
          href="#servicios"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
        >
          Conoce nuestros servicios ↓
        </a>
      </FadeIn>
    </div>
  </section>
);

export default Hero;
