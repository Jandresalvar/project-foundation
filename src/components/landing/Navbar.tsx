import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#industrias", label: "Industrias" },
  { href: "#proceso", label: "Proceso" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <a href="#" aria-label="EA Creatives — inicio" className="flex items-center gap-2">
          <img src="/assets/logo-ea.svg" alt="EA Creatives" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hablemos"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-[0.8125rem] font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Hablemos
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-full bg-foreground transition-transform",
                menuOpen && "top-1/2 -translate-y-1/2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-[1.5px] w-full bg-foreground transition-transform",
                menuOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hablemos"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
