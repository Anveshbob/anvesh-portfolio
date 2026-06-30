import { Search, Map, LineChart, Handshake, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Performance Marketing Audit",
    bestFor: "Brands already running Google or Meta ads",
    output: "A structured review of campaign setup, budget leakage, targeting issues, creative gaps, landing page friction, tracking quality, and a 7-day action plan.",
    deliverables: [
      "Campaign structure review",
      "Budget leakage diagnosis",
      "Audience and keyword review",
      "Creative and landing page feedback",
      "Tracking and conversion gap check",
      "Prioritized action plan",
    ],
    cta: "Book Audit Call",
  },
  {
    icon: Map,
    title: "Growth Strategy Sprint",
    bestFor: "Founders, marketing heads, or teams that need clearer channel direction",
    output: "A focused sprint to diagnose your funnel, clarify channel priorities, and build a practical growth roadmap.",
    deliverables: [
      "Funnel diagnosis",
      "Channel mix recommendation",
      "Campaign roadmap",
      "Measurement plan",
      "Priority testing calendar",
      "Leadership-ready summary",
    ],
    cta: "Plan Growth Sprint",
  },
  {
    icon: LineChart,
    title: "Measurement & Tracking Review",
    bestFor: "Teams confused by attribution, GA4 reporting, or platform-reported performance",
    output: "A practical review of your measurement setup, event quality, dashboard gaps, and reporting assumptions.",
    deliverables: [
      "GA4 and event review",
      "Attribution sanity check",
      "Dashboard gap analysis",
      "Source-of-truth recommendation",
      "CAC / CPA / ROAS reporting review",
      "Measurement cleanup roadmap",
    ],
    cta: "Review Measurement",
  },
  {
    icon: Handshake,
    title: "Fractional Performance Marketing Support",
    bestFor: "Startups, SMEs, and consumer brands that need senior guidance without a full-time hire",
    output: "Ongoing performance marketing support across campaign reviews, agency governance, reporting, testing, and growth planning.",
    deliverables: [
      "Weekly optimization reviews",
      "Campaign and channel recommendations",
      "Agency coordination support",
      "Reporting and dashboard review",
      "Experiment planning",
      "Monthly growth summary",
    ],
    cta: "Discuss Fractional Support",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Ways to Work With Me
          </div>
          <h2 className="heading-section font-display">
            For brands that need sharper{" "}
            <span className="gradient-text-cyan">performance marketing decisions</span>
          </h2>
          <p className="text-lead mt-5">
            I work with teams that want better clarity on paid media efficiency, funnel leakage, measurement quality, and growth execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="premium-card flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground text-right">
                    Service 0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>

                <div className="mb-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1.5">Best for</div>
                  <p className="text-sm text-foreground/85">{s.bestFor}</p>
                </div>

                <div className="mb-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Output</div>
                  <p className="text-sm text-foreground/85 leading-relaxed">{s.output}</p>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">What you get</div>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {s.deliverables.map((d, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground/85">
                        <span className="text-primary mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="mt-auto bg-primary text-primary-foreground hover:bg-primary-glow w-full sm:w-auto">
                  <a href="#contact">
                    {s.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border/60 bg-surface-muted/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold">
              Need a second opinion on your <span className="gradient-text-cyan">growth funnel?</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow">
              <a href="#contact">Book a Growth Audit Call</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/60">
              <a href="mailto:seelianvesh@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
