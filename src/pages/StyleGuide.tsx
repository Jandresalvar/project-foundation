import { lazy, Suspense } from "react";
import StyleGuideHeader from "@/components/styleguide/StyleGuideHeader";

const ColorSection = lazy(() => import("@/components/styleguide/ColorSection"));
const TypographySection = lazy(() => import("@/components/styleguide/TypographySection"));
const ButtonsSection = lazy(() => import("@/components/styleguide/ButtonsSection"));
const FormsSection = lazy(() => import("@/components/styleguide/FormsSection"));
const ComponentsSection = lazy(() => import("@/components/styleguide/ComponentsSection"));

const SectionFallback = () => (
  <div className="h-40 rounded-2xl bg-muted animate-pulse" />
);

const StyleGuide = () => (
  <main className="min-h-screen bg-background">
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      <StyleGuideHeader />
      <Suspense fallback={<SectionFallback />}>
        <ColorSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TypographySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ButtonsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FormsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ComponentsSection />
      </Suspense>
    </div>
  </main>
);

export default StyleGuide;
