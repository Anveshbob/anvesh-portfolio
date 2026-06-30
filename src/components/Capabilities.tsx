import { Target, BarChart3, Sparkles, Check } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Performance Marketing",
    copy: "Google Ads, Meta Ads, YouTube, UAC, Performance Max, paid social, affiliates, influencers, campaign structure, channel mix, and budget allocation.",
    bullets: [
      "Full-funnel paid media planning",
      "CAC, CPA, ROAS, and conversion efficiency tracking",
      "Campaign structure and budget governance",
      "Creative, audience, and landing page feedback loops",
    ],
    accent: "cyan",
  },
  {
    icon: BarChart3,
    title: "Measurement & Analytics",
    copy: "GA4, SQL, Power BI, Singular, incrementality testing, attribution sanity checks, funnel reporting, and source-of-truth thinking.",
    bullets: [
      "Funnel and event measurement",
      "Campaign and channel reporting",
      "Incrementality test planning",
      "Leadership-ready performance narratives",
    ],
    accent: "gold",
  },
  {
    icon: Sparkles,
    title: "Growth & Social Commerce",
    copy: "CRM, app growth, sampling-led acquisition, Instagram Shop, payment partner campaigns, and commerce-led growth experiments.",
    bullets: [
      "Sampling and trial-led acquisition",
      "CRM and lifecycle optimization",
      "App and conversion journey improvement",
      "Partner-led growth activations",
    ],
    accent: "cyan",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Capabilities
          </div>
          <h2 className="heading-section font-display">
            What I bring to <span className="gradient-text-cyan">growth teams</span>
          </h2>
          <p className="text-lead mt-5">
            A practical mix of performance marketing execution, analytical thinking, and cross-functional operating discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isGold = p.accent === "gold";
            return (
              <div key={i} className="premium-card flex flex-col">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-5 ${isGold ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.copy}</p>
                <ul className="space-y-2.5 mt-auto">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isGold ? "text-gold" : "text-primary"}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
