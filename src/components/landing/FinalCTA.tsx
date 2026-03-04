import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/motion";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section className="relative overflow-hidden py-24 md:py-32 bg-surface-cta">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/12 to-transparent" />
    <div aria-hidden className="pointer-events-none absolute -top-20 right-8 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
    <div className="max-w-3xl mx-auto px-6 lg:px-16">
      <FadeIn>
        <div className="relative rounded-2xl border border-primary-foreground/15 bg-surface-cta-card shadow-lg p-10 md:p-14 text-center space-y-6">
          {/* Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-accent/14 blur-2xl -z-10" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/12 blur-2xl -z-10" />

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
            ¿Listo para que tu negocio trabaje para ti?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl mx-auto">
            Agenda tu auditoría de automatización gratuita y descubre cómo convertir cada peso invertido en crecimiento real.
          </p>
          <Button asChild size="lg" className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/consultoria">Empezar ahora <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTA;
