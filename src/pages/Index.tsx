import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";

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
  <main className="min-h-screen bg-background">
    <Navbar />
    <Suspense fallback={<SectionFallback />}><HeroSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><IndustriesSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><PowerTrioSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><GrowthEcosystemSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><FullFunnelComparison /></Suspense>
    <Suspense fallback={<SectionFallback />}><ProcessSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><LogoBanner /></Suspense>
    <Suspense fallback={<SectionFallback />}><FinalCTA /></Suspense>
    <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
  </main>
);

export default Index;
