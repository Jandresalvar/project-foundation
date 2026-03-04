import { MiniNavbar } from "@/components/ui/mini-navbar";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Usos", href: "#usos" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Proceso", href: "#proceso" },
] as const;

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-surface-frame">
    <div className="mx-auto flex max-w-7xl justify-center px-4 py-3 sm:px-6 lg:px-16">
      <MiniNavbar
        brand="EA Creatives"
        links={NAV_LINKS.map((item) => ({ ...item }))}
        ctaLabel="Agendar Consultoría"
        ctaTo="/consultoria"
      />
    </div>
  </header>
);

export default Navbar;
