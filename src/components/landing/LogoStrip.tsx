const CLIENT_LOGOS = [
  { src: "/assets/clients/logo-amdigital.svg", alt: "AM Digital" },
  { src: "/assets/clients/logo-lemon.svg", alt: "Lemon" },
  { src: "/assets/clients/logo-linne.svg", alt: "Linné" },
  { src: "/assets/clients/logo-odontologia.svg", alt: "Odontología" },
  { src: "/assets/clients/logo-quintero.svg", alt: "Quintero" },
];

const LogoStrip = () => (
  <section aria-label="Clientes" className="border-y border-border py-12">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Marcas que han confiado en nosotros
      </p>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
        {CLIENT_LOGOS.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-10 w-auto opacity-60 grayscale transition-opacity hover:opacity-90 md:h-12"
          />
        ))}
      </div>
    </div>
  </section>
);

export default LogoStrip;
