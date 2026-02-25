import { ArrowRight, MessageCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/lib/motion";
import { Link } from "react-router-dom";

const TRUST_SIGNALS = [
  { icon: Shield, text: "Datos 100% seguros" },
  { icon: Clock, text: "Respuesta en menos de 24h" },
  { icon: MessageCircle, text: "Sin compromisos" },
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
              ¿Listo para poner tu crecimiento en{" "}
              <span className="text-accent">piloto automático</span>?
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              Cuéntanos un poco sobre tu negocio. Analizaremos tu ecosistema
              actual y diseñaremos una propuesta a tu medida.
            </p>
          </div>
        </FadeIn>

        {/* Formulario */}
        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-accent/5 blur-2xl -z-10" />

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card shadow-lg p-8 md:p-10 space-y-6"
            >
              <FormField
                id="name"
                label="Nombre completo"
                placeholder="Ej. Juan Pérez"
                type="text"
              />

              <FormField
                id="email"
                label="Correo electrónico"
                placeholder="juan@empresa.com"
                type="email"
              />

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="flex items-center gap-2 text-foreground font-medium">
                  Número de celular (WhatsApp)
                  <MessageCircle className="w-4 h-4 text-success" />
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  className="h-12 rounded-xl text-base focus-visible:ring-accent/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business" className="text-foreground font-medium">
                  Lo más importante de tu empresa
                </Label>
                <Textarea
                  id="business"
                  rows={4}
                  placeholder="Cuéntanos brevemente qué vendes y cuál es tu mayor reto hoy (ej. 'Necesito automatizar el seguimiento de leads')."
                  className="rounded-xl text-base leading-relaxed focus-visible:ring-accent/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-13 gap-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
              >
                Enviar y agendar mi consultoría
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Trust micro-copy */}
              <p className="text-center text-xs text-muted-foreground">
                🔒 Tus datos están seguros. Te contactaremos en menos de 24 horas.
              </p>
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
