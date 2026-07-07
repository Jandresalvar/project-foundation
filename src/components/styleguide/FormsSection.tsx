import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const FormsSection = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold font-heading text-foreground">Formularios</h2>
      <p className="text-muted-foreground mt-1">Elementos esenciales para captación de leads.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input id="name" placeholder="Ej: Eduardo Álvarez" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" placeholder="tu@empresa.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">WhatsApp</Label>
          <Input id="phone" type="tel" placeholder="+52 55 1234 5678" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-4 rounded-2xl bg-card border border-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold font-heading text-foreground">Preferencias</h3>

          <div className="flex items-center gap-3">
            <Checkbox id="meta" />
            <Label htmlFor="meta" className="cursor-pointer">Campañas en Meta Ads</Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox id="whatsapp" />
            <Label htmlFor="whatsapp" className="cursor-pointer">Automatización WhatsApp</Label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox id="chatbot" />
            <Label htmlFor="chatbot" className="cursor-pointer">Chatbots & Flujos n8n</Label>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl bg-card border border-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold font-heading text-foreground">Notificaciones</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="sms">Actualizaciones por SMS</Label>
            <Switch id="sms" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="newsletter">Newsletter semanal</Label>
            <Switch id="newsletter" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FormsSection;
