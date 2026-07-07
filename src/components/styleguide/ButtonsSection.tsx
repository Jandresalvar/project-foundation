import { ArrowRight, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonsSection = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold font-heading text-foreground">Botones</h2>
      <p className="text-muted-foreground mt-1">Variantes y estados del componente Button.</p>
    </div>

    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold font-heading text-foreground">Variantes</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold font-heading text-foreground">Tamaños</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Zap className="w-4 h-4" /></Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold font-heading text-foreground">Con iconos & estados</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>
            Empezar ahora <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline">
            <Zap className="w-4 h-4" /> Automatizar
          </Button>
          <Button disabled>
            <Loader2 className="w-4 h-4 animate-spin" /> Cargando...
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  </section>
);

export default ButtonsSection;
