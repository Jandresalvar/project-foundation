import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoStrip from "@/components/landing/LogoStrip";
import ServicesSection from "@/components/landing/ServicesSection";

const IndustriesSection = lazy(() => import("@/components/landing/IndustriesSection"));
const ProcessSection = lazy(() => import("@/components/landing/ProcessSection"));
const ContactSection = lazy(() => import("@/components/landing/ContactSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const SectionFallback = () => (
  <div className="mx-6 h-40 animate-pulse rounded-md bg-muted lg:mx-16" />
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <LogoStrip />
      <ServicesSection />
      <Suspense fallback={<SectionFallback />}>
        <IndustriesSection />
        <ProcessSection />
        <ContactSection />
      </Suspense>
    </main>
    <Suspense fallback={<SectionFallback />}>
      <Footer />
    </Suspense>
  </div>
);

export default Index;
