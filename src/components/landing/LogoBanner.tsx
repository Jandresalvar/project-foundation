import { FadeIn } from "@/lib/motion";

const LOGOS = [
  { id: 1, name: "Logo Cliente 1", src: "" },
  { id: 2, name: "Logo Cliente 2", src: "" },
  { id: 3, name: "Logo Cliente 3", src: "" },
  { id: 4, name: "Logo Cliente 4", src: "" },
];

const LogoBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-background border-y border-border">
      {/* 
        Efecto de brillo superior inspirado en la imagen, 
        pero adaptado a los colores de la marca (accent/primary).
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent blur-[2px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <FadeIn>
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Empresas que ya confían en nuestros sistemas
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-12 opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center h-12 md:h-16 w-32 md:w-40 text-muted-foreground font-semibold font-heading tracking-wider transition-colors hover:text-foreground"
              >
                {/* 
                  TODO: Cuando tengas los logos reales, reemplaza el texto con la etiqueta img:
                  <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" />
                */}
                {logo.name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent blur-[2px] opacity-40" />
    </section>
  );
};

export default LogoBanner;
