const Footer = () => (
  <footer className="relative border-t border-border py-10 bg-surface-neutral">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading text-sm font-semibold text-foreground">
        EA Creatives
      </span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} EA Creatives. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
