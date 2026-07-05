const FOOTER_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#industrias", label: "Industrias" },
  { href: "#proceso", label: "Proceso" },
  { href: "#hablemos", label: "Contacto" },
];

const Footer = () => (
  <footer className="bg-dark py-14">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <img
          src="/assets/logo-ea-white.svg"
          alt="EA Creatives"
          loading="lazy"
          className="h-8 w-auto"
        />
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Enlaces del pie de página">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium text-dark-foreground/60 transition-colors hover:text-dark-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-12 border-t border-dark-foreground/15 pt-6">
        <p className="text-xs text-dark-foreground/40">
          © {new Date().getFullYear()} EA Creatives. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
