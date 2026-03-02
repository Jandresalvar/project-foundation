import { Palette } from "lucide-react";

const StyleGuideHeader = () => (
  <header className="space-y-4 pb-8 border-b border-border">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary">
        <Palette className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h1 className="text-4xl font-bold font-heading text-foreground tracking-tight">
          EA Creatives
        </h1>
        <p className="text-sm font-medium text-accent">Design System & Style Guide</p>
      </div>
    </div>
    <p className="text-muted-foreground leading-relaxed max-w-2xl">
      Fuente de verdad para el sistema de diseño de EA Creatives. Campañas publicitarias, 
      captación de leads y automatización de procesos de venta con tecnología moderna.
    </p>
  </header>
);

export default StyleGuideHeader;
