import { lazy, Suspense, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { ScrollObserver } from "@/lib/motion";
const IndustriesSection = lazy(() => import("@/components/landing/IndustriesSection"));
const PowerTrioSection = lazy(() => import("@/components/landing/PowerTrioSection"));
const GrowthEcosystemSection = lazy(() => import("@/components/landing/GrowthEcosystemSection"));
const FullFunnelComparison = lazy(() => import("@/components/landing/FullFunnelComparison"));
const ProcessSection = lazy(() => import("@/components/landing/ProcessSection"));
const LogoBanner = lazy(() => import("@/components/landing/LogoBanner"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const SectionFallback = () => (
  <div className="h-40 rounded-2xl bg-muted animate-pulse mx-6 lg:mx-16" />
);

const HASH_SECTION_ORDER = ["servicios", "usos", "comparativa", "proceso"] as const;
const CTA_HASHES = new Set(["cta-final", "cta-final-form"]);

const Index = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");

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

    const isCtaHash = CTA_HASHES.has(hash);
    const maxWaitMs = 6000;
    const retryMs = 120;
    const settleAfterFoundMs = isCtaHash ? 1800 : 0;
    const startAt = Date.now();
    let firstFoundAt: number | null = null;

    const tryScroll = () => {
      const element = document.getElementById(hash);

      if (element) {
        const isFirstMatch = firstFoundAt === null;

        if (isFirstMatch) {
          firstFoundAt = Date.now();
        }

        element.scrollIntoView({
          behavior: isFirstMatch ? "smooth" : "auto",
          block: "start",
        });
        return true;
      }

      return false;
    };

    const intervalId = window.setInterval(() => {
      const found = tryScroll();
      const timedOut = Date.now() - startAt >= maxWaitMs;
      const settled = firstFoundAt !== null && Date.now() - firstFoundAt >= settleAfterFoundMs;

      if ((found && settled) || timedOut) {
        window.clearInterval(intervalId);
      }
    }, retryMs);

    return () => window.clearInterval(intervalId);
  }, [hash]);

  return (
    <main className="relative isolate min-h-screen bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 section-chromatic-wash" />
      <Navbar />
      <HeroSection />

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

      <ScrollObserver fallback={<SectionFallback />} forceVisible={CTA_HASHES.has(hash)}>
        <FinalCTA />
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
