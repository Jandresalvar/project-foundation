import { ArrowRight, MessageCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/lib/motion";
import { Link } from "react-router-dom";

const TRUST_SIGNALS = [
  { icon: Shield, text: "Consultoría sin costo ni compromiso" },
  { icon: Clock, text: "Agenda en tu horario preferido" },
  { icon: MessageCircle, text: "Directo con un experto" },
] as const;

const Consultoria = () => (
  <main className="min-h-screen bg-background">
    {/* Minimal navbar */}
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-16 h-16">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          EA Creatives
        </Link>
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          ← Volver al inicio
        </Link>
      </nav>
    </header>

    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Hero compacto */}
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
              Reserva tu <span className="text-accent">Sesión Estratégica</span> Gratuita
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              En 30 minutos analizaremos tu proceso de ventas actual y te mostraremos exactamente cómo la automatización puede traerte más pacientes/clientes esta misma semana.
            </p>
          </div>
        </FadeIn>

        {/* Formulario / Calendario */}
        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-accent/5 blur-2xl -z-10" />

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card shadow-lg p-8 md:p-10 space-y-6"
            >
              <div className="bg-secondary/50 p-4 rounded-xl border border-border mb-6">
                <p className="text-sm text-foreground font-medium text-center">
                  👋 Completa estos datos rápidos para prepararnos para la llamada y te redirigiremos a nuestro calendario.
                </p>
              </div>

              <FormField
                id="name"
                label="Nombre y Apellido"
                placeholder="Ej. Juan Pérez"
                type="text"
              />

              <FormField
                id="business"
                label="Empresa / Industria"
                placeholder="Ej. Clínica Odontológica Sonrisas"
                type="text"
              />

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="flex items-center gap-2 text-foreground font-medium">
                  WhatsApp
                  <MessageCircle className="w-4 h-4 text-success" />
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-13 gap-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
              >
                Continuar al Calendario
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  </main>
);

const FormField = ({
  id,
  label,
  placeholder,
  type,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-foreground font-medium">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
    />
  </div>
);

export default Consultoria;
