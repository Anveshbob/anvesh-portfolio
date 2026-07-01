import { ArrowRight, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="container-premium relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Performance Marketing · Growth Strategy · Measurement
            </div>

            <h1 className="heading-display font-display">
              Performance Marketing &{" "}
              <span className="gradient-text-cyan">Growth Leader</span>
            </h1>

            <p className="text-lead mt-6 max-w-2xl">
              I help consumer brands improve acquisition, media efficiency, and measurement
              across Google, Meta, CRM, and social commerce.
            </p>

            <p className="mt-5 text-sm md:text-base text-muted-foreground/90 max-w-2xl">
              Mars Pet Nutrition · Domino's Pizza India · IIM Calcutta MBA ·{" "}
              <span className="text-foreground">₹7Cr+ monthly media ownership</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow h-12">
                <a href="#work">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-border hover:border-primary/60 hover:bg-surface">
                <a
                  href="/Anvesh_Seeli_Resume.pdf"
                  download="Anvesh_Seeli_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                      (window as any).gtag("event", "resume_download", {
                        event_category: "engagement",
                        event_label: "Hero - Download Resume",
                        file_name: "Anvesh_Seeli_Resume.pdf",
                        file_extension: "pdf",
                        link_url: "/Anvesh_Seeli_Resume.pdf",
                        location: "hero",
                      });
                    }
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 text-foreground hover:bg-surface">
                <a href="#contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Growth Audit
                </a>
              </Button>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Built across QSR · FMCG / Pet Care · SaaS Product Marketing · Financial Services
            </p>
          </div>

          {/* Abstract dashboard visual */}
          <div className="lg:col-span-5">
            <div className="premium-card p-6 md:p-7 relative">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Growth System</div>
                  <div className="text-sm font-medium text-foreground mt-1">Acquisition · Retention · Measurement</div>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="h-2 w-2 rounded-full bg-gold/70" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {[
                  { l: "CAC", v: "↓ 22%", c: "cyan" },
                  { l: "ROAS", v: "3.4x", c: "gold" },
                  { l: "CVR", v: "↑ 25%", c: "cyan" },
                  { l: "Spend", v: "₹7Cr+", c: "gold" },
                ].map((m, i) => (
                  <div key={i} className="rounded-lg border border-border/60 bg-surface-muted/60 p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                    <div className={`mt-1 font-display text-lg font-semibold ${m.c === "gold" ? "text-gold" : "text-primary"}`}>
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>

              {/* Funnel sparkline */}
              <div className="rounded-lg border border-border/60 bg-surface-muted/60 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Funnel · last 30d</div>
                  <div className="text-[10px] text-primary">live</div>
                </div>
                <svg viewBox="0 0 200 60" className="w-full h-14">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="hsl(187 92% 53%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(187 92% 53%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,45 L25,38 L50,40 L75,28 L100,32 L125,20 L150,22 L175,12 L200,16 L200,60 L0,60 Z" fill="url(#g1)" />
                  <path d="M0,45 L25,38 L50,40 L75,28 L100,32 L125,20 L150,22 L175,12 L200,16" fill="none" stroke="hsl(187 92% 53%)" strokeWidth="1.5" />
                </svg>
                <div className="mt-3 grid grid-cols-4 gap-1 text-[10px] text-muted-foreground">
                  <span>Impr</span><span>Click</span><span>Lead</span><span>Order</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="h-px w-6 bg-primary" />
                Source-of-truth dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
