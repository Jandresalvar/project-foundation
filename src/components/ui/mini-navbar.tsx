import { type ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

interface MiniNavbarProps {
  brand: ReactNode;
  links: NavItem[];
  ctaLabel: string;
  ctaTo: string;
}

const AnimatedNavLink = ({ href, children, onClick }: { href: string; children: string; onClick?: () => void }) => (
  <a href={href} onClick={onClick} className={cn('group', 'relative', 'inline-block', 'h-5', 'overflow-hidden', 'text-sm', 'leading-5')}>
    <span className={cn('flex', 'flex-col', 'transition-transform', 'ease-out', '[transition-duration:400ms]', 'group-hover:-translate-y-5')}>
      <span className={cn('block', 'h-5', 'leading-5', 'text-primary-foreground')}>{children}</span>
      <span className={cn('block', 'h-5', 'leading-5', 'text-primary-foreground')}>{children}</span>
    </span>
  </a>
);

export function MiniNavbar({ brand, links, ctaLabel, ctaTo }: MiniNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shapeClass, setShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setShapeClass("rounded-2xl");
      return;
    }

    shapeTimeoutRef.current = setTimeout(() => {
      setShapeClass("rounded-full");
    }, 300);

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "flex w-full flex-col px-5 py-2 backdrop-blur-xl md:w-auto md:min-w-[640px] lg:min-w-[720px]",
        "border border-primary-foreground/22 bg-[hsl(var(--surface-core)/0.72)] shadow-[0_10px_36px_hsl(var(--surface-core)/0.42)]",
        "transition-[border-radius] duration-300 ease-in-out",
        shapeClass,
      )}
    >
      <div className={cn('flex', 'w-full', 'items-center', 'justify-between', 'gap-x-6', 'md:gap-x-8')}>
        <a href="#" className={cn('font-heading', 'text-base', 'font-bold', 'tracking-tight', 'text-primary-foreground', 'sm:text-lg')}>
          {brand}
        </a>

        <nav className={cn('hidden', 'items-center', 'space-x-7', 'md:flex')}>
          {links.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className={cn('hidden', 'md:block')}>
          <div className={cn('group', 'relative')}>
            <div className={cn('pointer-events-none', 'absolute', 'inset-0', '-m-2', 'rounded-full', 'bg-white', 'opacity-35', 'blur-lg', 'transition-all', 'duration-300', 'ease-out', 'group-hover:-m-3', 'group-hover:opacity-55', 'group-hover:blur-xl')} />
            <Link
              to={ctaTo}
              className={cn('relative', 'z-10', 'inline-flex', 'items-center', 'rounded-full', 'bg-gradient-to-br', 'from-zinc-100', 'to-zinc-300', 'px-4', 'py-2', 'text-sm', 'font-semibold', 'text-zinc-900', 'transition-all', 'duration-200', 'hover:from-zinc-200', 'hover:to-zinc-400')}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        <button
          type="button"
          className={cn('flex', 'h-8', 'w-8', 'items-center', 'justify-center', 'text-primary-foreground/85', 'outline-none', 'md:hidden')}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className={cn('h-5', 'w-5')} /> : <Menu className={cn('h-5', 'w-5')} />}
        </button>
      </div>

      <div
        className={cn(
          "transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-[600px] overflow-visible pb-2 pt-4 opacity-100" : "pointer-events-none max-h-0 overflow-hidden pt-0 opacity-0",
        )}
      >
        <nav className={cn('flex', 'flex-col', 'items-center', 'space-y-4', 'text-base')}>
          {links.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className={cn('mt-4', 'flex', 'justify-center')}>
          <div className={cn('group', 'relative')}>
            <div className={cn('pointer-events-none', 'absolute', 'inset-0', '-m-2', 'rounded-full', 'bg-white', 'opacity-35', 'blur-lg', 'transition-all', 'duration-300', 'ease-out', 'group-hover:-m-3', 'group-hover:opacity-55', 'group-hover:blur-xl')} />
            <Link
              to={ctaTo}
              onClick={() => setIsOpen(false)}
              className={cn('relative', 'z-10', 'inline-flex', 'items-center', 'rounded-full', 'bg-gradient-to-br', 'from-zinc-100', 'to-zinc-300', 'px-4', 'py-2', 'text-sm', 'font-semibold', 'text-zinc-900', 'transition-all', 'duration-200', 'hover:from-zinc-200', 'hover:to-zinc-400')}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
