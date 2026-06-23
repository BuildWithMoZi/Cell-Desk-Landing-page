"use client";

import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Analytics from "@/components/Analytics";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useRevealOnScroll } from "@/components/useRevealOnScroll";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="app-frame">
      <Navbar />
      <BottomNav />
      <Hero />
      <div className="content-frame">
        <div className="hero-logos">
          <span className="hero-logos-label">Trusted by 500+ shops</span>
          <div className="hero-logos-row">
            {["NokiaMart", "CellHub", "GadgetBay", "MobiZone", "TeleStore"].map(
              (logo) => (
                <span className="hero-logo-item" key={logo}>
                  {logo}
                </span>
              )
            )}
          </div>
        </div>
        <Marquee />
        <Stats />
        <ProblemSolution />
        <Features />
        <Showcase />
        <HowItWorks />
        <Analytics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
