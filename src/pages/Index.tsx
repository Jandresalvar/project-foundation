import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import { ScrollObserver } from "@/lib/motion";

const HeroSection = lazy(() => import("@/components/landing/HeroSection"));
const IndustriesSection = lazy(() => import("@/components/landing/IndustriesSection"));
const PowerTrioSection = lazy(() => import("@/components/landing/PowerTrioSection"));
const GrowthEcosystemSection = lazy(() => import("@/components/landing/GrowthEcosystemSection"));
const FullFunnelComparison = lazy(() => import("@/components/landing/FullFunnelComparison"));
const ProcessSection = lazy(() => import("@/components/landing/ProcessSection"));
const LogoBanner = lazy(() => import("@/components/landing/LogoBanner"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const SectionFallback = () => (
  <div className="h-40 rounded-2xl bg-muted animate-pulse mx-6 lg:mx-16" />
);

const Index = () => (
  <main className="relative isolate min-h-screen bg-background">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 section-chromatic-wash" />
    <Navbar />
    {/* Always load top-of-the-fold content immediately */}
    <Suspense fallback={<SectionFallback />}>
      <HeroSection />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <IndustriesSection />
    </Suspense>

    {/* Lazy load below-the-fold sections on scroll */}
    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <PowerTrioSection />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <GrowthEcosystemSection />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <FullFunnelComparison />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <LogoBanner />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <FinalCTA />
      </Suspense>
    </ScrollObserver>

    <ScrollObserver fallback={<SectionFallback />}>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </ScrollObserver>
  </main>
);

export default Index;
