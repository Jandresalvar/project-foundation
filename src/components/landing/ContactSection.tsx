import { useState, type FormEvent } from "react";
import { FadeIn } from "@/lib/motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar con WhatsApp / calendario cuando se defina el destino de los leads
    setSent(true);
  };

  return (
    <section id="hablemos" className="scroll-mt-24 border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div>
              <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none tracking-tight text-foreground">
                Hablemos.
              </h2>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted-foreground">
                Cuéntanos de tu negocio y te respondemos con una propuesta
                clara: sin compromisos y sin letra pequeña.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {sent ? (
              <div className="flex h-full flex-col justify-center border-l-2 border-accent pl-6">
                <p className="text-xl font-semibold text-foreground">¡Gracias!</p>
                <p className="mt-2 text-muted-foreground">
                  Recibimos tus datos y te contactaremos muy pronto por WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm font-medium">
                    Nombre y apellido
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ej. Juan Pérez"
                    className="h-12 rounded-md border-0 border-b border-input bg-transparent px-0 text-base focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-business" className="text-sm font-medium">
                    Negocio o marca
                  </Label>
                  <Input
                    id="contact-business"
                    name="business"
                    type="text"
                    required
                    placeholder="Ej. Restaurante La Esquina"
                    className="h-12 rounded-md border-0 border-b border-input bg-transparent px-0 text-base focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-whatsapp" className="text-sm font-medium">
                    WhatsApp
                  </Label>
                  <Input
                    id="contact-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+57 300 123 4567"
                    className="h-12 rounded-md border-0 border-b border-input bg-transparent px-0 text-base focus-visible:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Enviar
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
