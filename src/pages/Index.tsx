import { lazy, Suspense, useEffect, useMemo, useState } from "react";
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

const HASH_SECTION_ORDER = ["servicios", "usos", "comparativa", "proceso"] as const;

const Index = () => {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", ""));

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash.replace("#", ""));
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const forcedSections = useMemo(() => {
    const targetIndex = HASH_SECTION_ORDER.indexOf(hash as (typeof HASH_SECTION_ORDER)[number]);

    if (targetIndex === -1) {
      return new Set<string>();
    }

    return new Set(HASH_SECTION_ORDER.slice(0, targetIndex + 1));
  }, [hash]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    let frameId = 0;
    let attempts = 0;
    const maxAttempts = 40;

    const scrollToHashTarget = () => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attempts < maxAttempts) {
        attempts += 1;
        frameId = window.requestAnimationFrame(scrollToHashTarget);
      }
    };

    frameId = window.requestAnimationFrame(scrollToHashTarget);

    return () => window.cancelAnimationFrame(frameId);
  }, [hash]);

  return (
    <main className="relative isolate min-h-screen bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 section-chromatic-wash" />
      <Navbar />
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>

      <ScrollObserver fallback={<SectionFallback />} forceVisible={forcedSections.has("servicios")}>
        <Suspense fallback={<SectionFallback />}>
          <PowerTrioSection />
        </Suspense>
      </ScrollObserver>

      <ScrollObserver fallback={<SectionFallback />}>
        <Suspense fallback={<SectionFallback />}>
          <GrowthEcosystemSection />
        </Suspense>
      </ScrollObserver>

      <ScrollObserver fallback={<SectionFallback />} forceVisible={forcedSections.has("usos")}>
        <Suspense fallback={<SectionFallback />}>
          <IndustriesSection />
        </Suspense>
      </ScrollObserver>

      <ScrollObserver fallback={<SectionFallback />} forceVisible={forcedSections.has("comparativa")}>
        <Suspense fallback={<SectionFallback />}>
          <FullFunnelComparison />
        </Suspense>
      </ScrollObserver>

      <ScrollObserver fallback={<SectionFallback />} forceVisible={forcedSections.has("proceso")}>
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
};

export default Index;
