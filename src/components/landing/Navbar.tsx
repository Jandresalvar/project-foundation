import { MiniNavbar } from "@/components/ui/mini-navbar";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Usos", href: "#usos" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Proceso", href: "#proceso" },
] as const;

const Navbar = () => (
  <header className={cn('fixed', 'inset-x-0', 'top-0', 'z-50', 'border-b', 'border-primary-foreground/10', 'bg-surface-frame')}>
    <div className={cn('mx-auto', 'flex', 'max-w-7xl', 'justify-center', 'px-4', 'py-3', 'sm:px-6', 'lg:px-16')}>
      <MiniNavbar
        brand={
          <img
            src="/assets/logo-ea-white.svg"
            alt="EA Creatives"
            className={cn('block', 'h-14', 'w-auto', 'sm:h-[60px]')}
          />
        }
        links={NAV_LINKS.map((item) => ({ ...item }))}
        ctaLabel="Empezar Ahora"
        ctaTo="#cta-final"
      />
    </div>
  </header>
);

export default Navbar;
