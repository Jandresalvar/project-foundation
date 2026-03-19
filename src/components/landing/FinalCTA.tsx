import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/lib/motion";

const FinalCTA = () => (
  <section id="cta-final" className="relative overflow-hidden py-24 md:py-32 bg-surface-cta">
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

          <form id="cta-final-form" onSubmit={(e) => e.preventDefault()} className="mx-auto w-full max-w-2xl rounded-2xl border border-primary-foreground/20 bg-card p-6 text-left shadow-lg md:p-8">
            <div className="mb-6 rounded-xl border border-border bg-secondary/50 p-4">
              <p className="text-center text-sm font-medium text-foreground">
                👋 Completa estos datos rápidos para prepararnos para la llamada y te redirigiremos a nuestro calendario.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-name" className="font-medium text-foreground">
                Nombre y Apellido
              </Label>
              <Input
                id="cta-name"
                type="text"
                placeholder="Ej. Juan Pérez"
                className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="cta-business" className="font-medium text-foreground">
                Empresa / Industria
              </Label>
              <Input
                id="cta-business"
                type="text"
                placeholder="Ej. Clínica Odontológica Sonrisas"
                className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="cta-whatsapp" className="flex items-center gap-2 font-medium text-foreground">
                WhatsApp
                <MessageCircle className="h-4 w-4 text-success" />
              </Label>
              <Input
                id="cta-whatsapp"
                type="tel"
                placeholder="+57 300 123 4567"
                className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
              />
            </div>
          </form>

          <div className="group relative inline-block">
            <div className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-white opacity-35 blur-lg transition-all duration-300 ease-out group-hover:-m-3 group-hover:opacity-55 group-hover:blur-xl" />
            <a
              href="#cta-final-form"
              className="relative z-10 inline-flex items-center rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 px-5 py-3 text-base font-semibold text-zinc-900 transition-all duration-200 hover:from-zinc-200 hover:to-zinc-400"
            >
              Empezar ahora
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTA;
