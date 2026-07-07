import { FadeIn } from "@/lib/motion";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { cn } from "@/lib/utils";

const LOGOS = [
  { src: "/assets/clients/logo-amdigital-white.svg", alt: "AM Digital", className: "max-h-[120%] md:max-h-[120%]" },
  { src: "/assets/clients/logo-quintero.svg", alt: "Quintero", className: "max-h-[210%] md:max-h-[210%]" },
  { src: "/assets/clients/logo-lemon-white.svg", alt: "Lemon", className: "max-h-[210%] md:max-h-[210%]" },
  { src: "/assets/clients/logo-linne.svg", alt: "Linné", className: "max-h-[210%] md:max-h-[210%]" },
  { src: "/assets/clients/logo-odontologia.svg", alt: "Odontología", className: "max-h-[180%] md:max-h-[180%]" },
];

const LogoBanner = () => {
  return (
    <section className={cn("relative overflow-hidden border-y border-primary-foreground/10 bg-surface-frame py-7 md:py-8")}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-0 h-[2px] w-1/2 -translate-x-1/2 bg-accent/70 opacity-40 blur-[2px]",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.06)_0%,transparent_64%)] blur-3xl",
        )}
      />

      <div className={cn("relative z-10 mx-auto max-w-7xl px-6 lg:px-16")}>
        <FadeIn>
          <div className={cn("w-full px-0 py-1 md:py-2")}>
            <h2 className={cn("mb-2 text-center text-base font-medium tracking-tight text-primary-foreground md:text-xl")}>
              <span className={cn("text-primary-foreground/72")}>Empresas que ya confían en nuestros sistemas</span>
            </h2>
            <div className={cn("mx-auto mb-3 h-px max-w-sm bg-primary-foreground/12 [mask-image:linear-gradient(to_right,transparent,black,transparent)]")} />
            <LogoCloud logos={LOGOS} />
            <div className={cn("mt-3 h-px bg-primary-foreground/12 [mask-image:linear-gradient(to_right,transparent,black,transparent)]")} />
          </div>
        </FadeIn>
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-accent/70 opacity-40 blur-[2px]",
        )}
      />
    </section>
  );
};

export default LogoBanner;
