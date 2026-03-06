import { FadeIn } from "@/lib/motion";

const LOGOS = [
  { id: 1, name: "AM Digital", src: "/assets/clients/logo-amdigital.svg" },
  { id: 2, name: "Quintero", src: "/assets/clients/logo-quintero.svg" },
  { id: 3, name: "Lemon", src: "/assets/clients/logo-lemon.svg" },
  { id: 4, name: "Linné", src: "/assets/clients/logo-linne.svg" },
  { id: 5, name: "Odontología", src: "/assets/clients/logo-odontologia.svg" },
];

const LogoBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-surface-neutral border-y border-border">
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
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-12">
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center h-12 md:h-16 w-32 md:w-40 text-muted-foreground font-semibold font-heading tracking-wider opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:text-foreground"
              >
                <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" />
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
