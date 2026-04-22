import { ArrowRight, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-hero-gradient pt-24 pb-16"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container-premium relative z-10">
        <div className="max-w-5xl">
          <div className="eyebrow mb-6 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-cyan" />
            Performance Marketing · Strategy · Measurement
          </div>

          <h1 className="heading-display font-display mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            I build performance marketing systems that deliver{" "}
            <span className="gradient-text-cyan">predictable, multi-crore growth.</span>
          </h1>

          <p className="text-lead max-w-3xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
            Performance Marketing Leader at <span className="text-foreground font-medium">Mars Pet Nutrition</span> (Pedigree, Whiskas, Sheba). Ex-Domino's Pizza India · IIM Calcutta MBA. Specialist in incrementality-first marketing, social commerce innovation, and advanced measurement.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-glow-cyan group h-12 px-6"
            >
              <a href="#case-studies">
                Explore Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-surface/40 backdrop-blur hover:bg-surface hover:border-gold/50 h-12 px-6"
            >
              <a href="/Anvesh_Seeli_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Executive Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-foreground hover:bg-surface h-12 px-6"
            >
              <a href="#connect">
                <Calendar className="mr-2 h-4 w-4" />
                Book Strategy Call
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs text-muted-foreground uppercase tracking-widest animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <span>Currently @</span>
            <span className="font-display text-sm text-foreground/80">Mars Pet Nutrition</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline font-display text-sm text-foreground/80">Pedigree</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline font-display text-sm text-foreground/80">Whiskas</span>
            <span className="hidden md:inline text-border">•</span>
            <span className="hidden md:inline font-display text-sm text-foreground/80">Sheba</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest animate-float-slow">
        <span>Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
