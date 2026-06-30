import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactBanner from "@/components/ImpactBanner";
import Narrative from "@/components/Narrative";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import OperatingSystem from "@/components/OperatingSystem";
import Services from "@/components/Services";
import Career from "@/components/Career";
import Credentials from "@/components/Credentials";
import Insights from "@/components/Insights";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ImpactBanner />
        <Narrative />
        <Capabilities />
        <CaseStudies />
        <OperatingSystem />
        <Services />
        <Career />
        <Credentials />
        <Insights />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
