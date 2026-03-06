import { cn } from "@/lib/utils";
const Footer = () => (
  <footer className={cn('relative', 'border-t', 'border-primary-foreground/10', 'py-10', 'bg-surface-frame')}>
    <div aria-hidden className={cn('pointer-events-none', 'absolute', 'inset-x-0', 'top-0', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-primary-foreground/40', 'to-transparent')} />
    <div className={cn('max-w-7xl', 'mx-auto', 'px-6', 'lg:px-16', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-4')}>
      <img src="/assets/logo-ea.svg" alt="EA Creatives" className={cn('block', 'h-[84px]', 'w-auto', 'sm:h-[90px]')} />
      <p className={cn('text-xs', 'text-primary-foreground/70')}>
        © {new Date().getFullYear()} EA Creatives. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
