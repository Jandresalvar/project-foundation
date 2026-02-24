import { Megaphone, Bot, MessageCircle, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeLabel?: string;
}

const FeatureCard = ({ icon, title, description, badgeLabel }: FeatureCardProps) => (
  <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <CardHeader className="flex-row items-start gap-4 space-y-0">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {badgeLabel && <Badge variant="secondary" className="text-xs">{badgeLabel}</Badge>}
        </div>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </div>
    </CardHeader>
  </Card>
);

const FEATURES: FeatureCardProps[] = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Meta Ads",
    description: "Campañas publicitarias optimizadas con IA para maximizar conversiones y reducir el costo por lead.",
    badgeLabel: "Popular",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp Automation",
    description: "Respuestas automáticas, secuencias de seguimiento y cierre de ventas por WhatsApp Business.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Chatbots Inteligentes",
    description: "Asistentes virtuales 24/7 que califican leads y agendan citas sin intervención humana.",
    badgeLabel: "Nuevo",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Flujos n8n",
    description: "Automatización de procesos de venta: CRM, email marketing y reportes integrados.",
    badgeLabel: "Automatización",
  },
];

const BADGES_DEMO = [
  { label: "Automatización", variant: "default" as const },
  { label: "Nuevo", variant: "secondary" as const },
  { label: "WhatsApp", variant: "outline" as const },
  { label: "Meta Ads", variant: "default" as const },
  { label: "Urgente", variant: "destructive" as const },
];

const ComponentsSection = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold font-heading text-foreground">Componentes UI</h2>
      <p className="text-muted-foreground mt-1">Tarjetas de servicio y badges reutilizables.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold font-heading text-foreground">Feature Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-lg font-semibold font-heading text-foreground">Badges</h3>
      <div className="flex flex-wrap gap-3">
        {BADGES_DEMO.map((b) => (
          <Badge key={b.label} variant={b.variant} className="rounded-xl px-3 py-1">
            {b.label}
          </Badge>
        ))}
      </div>
    </div>
  </section>
);

export default ComponentsSection;
