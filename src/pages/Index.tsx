import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactBanner from "@/components/ImpactBanner";
import Narrative from "@/components/Narrative";
import CaseStudies from "@/components/CaseStudies";
import Capabilities from "@/components/Capabilities";
import Career from "@/components/Career";
import Insights from "@/components/Insights";
import Credentials from "@/components/Credentials";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  // Reveal-on-scroll for elements with .reveal class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ImpactBanner />
        <Narrative />
        <CaseStudies />
        <Capabilities />
        <Career />
        <Insights />
        <Credentials />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
