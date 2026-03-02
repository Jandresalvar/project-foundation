import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/motion";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6 lg:px-16">
      <FadeIn>
        <div className="relative rounded-2xl border border-border bg-card shadow-lg p-10 md:p-14 text-center space-y-6">
          {/* Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-accent/5 blur-2xl -z-10" />

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            ¿Listo para que tu negocio trabaje para ti?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Agenda tu auditoría de automatización gratuita y descubre cómo convertir cada peso invertido en crecimiento real.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/consultoria">Empezar ahora <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTA;
