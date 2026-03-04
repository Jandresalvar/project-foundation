import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Comparativa", href: "#comparativa" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn('fixed', 'top-0', 'left-0', 'right-0', 'z-50', 'bg-[hsl(var(--surface-frame)/0.94)]', 'backdrop-blur-lg', 'border-b', 'border-primary-foreground/20', 'shadow-md')}>
      <nav className={cn('max-w-7xl', 'mx-auto', 'flex', 'items-center', 'justify-between', 'px-6', 'lg:px-16', 'h-16')}>
        {/* Logo */}
        <a href="#" className={cn('font-heading', 'text-xl', 'font-bold', 'tracking-tight', 'text-primary-foreground')}>
          EA Creatives
        </a>

        {/* Desktop links */}
        <ul className={cn('hidden', 'md:flex', 'items-center', 'gap-8')}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn('text-sm', 'font-medium', 'text-primary-foreground/90', 'transition-colors', 'duration-200', 'hover:text-primary-foreground')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className={cn('hidden', 'md:block')}>
          <Button asChild size="sm" className={cn('gap-2', 'bg-primary-foreground', 'text-primary', 'hover:bg-primary-foreground/90')}>
            <Link to="/consultoria">Agendar Consultoría <ArrowRight className={cn('w-4', 'h-4')} /></Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={cn('md:hidden', 'text-primary-foreground')}
          aria-label="Toggle menu"
        >
          {open ? <X className={cn('w-5', 'h-5')} /> : <Menu className={cn('w-5', 'h-5')} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={cn('md:hidden', 'border-t', 'border-primary-foreground/10', 'bg-surface-frame', 'backdrop-blur', 'px-6', 'py-4', 'space-y-4')}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn('block', 'text-sm', 'font-medium', 'text-primary-foreground/90', 'hover:text-primary-foreground')}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className={cn('w-full', 'gap-2', 'bg-primary-foreground', 'text-primary', 'hover:bg-primary-foreground/90')}>
            <Link to="/consultoria">Agendar Consultoría <ArrowRight className={cn('w-4', 'h-4')} /></Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
