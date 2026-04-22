import { Lightbulb, ShoppingCart, BarChart3 } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    tag: "Measurement",
    title: "Why incrementality is the only honest metric in 2025",
    excerpt:
      "Last-click attribution lies. Multi-touch is fragile. Incrementality testing — done at scale — is the only way to defend marketing budgets in the boardroom.",
  },
  {
    icon: ShoppingCart,
    tag: "Social Commerce",
    title: "India's social commerce moment is now (and most brands will miss it)",
    excerpt:
      "Instagram Shop, WhatsApp catalogs, and payment-partner sampling are quietly reshaping the FMCG funnel. The brands that win will own the entire conversion in-platform.",
  },
  {
    icon: BarChart3,
    tag: "Marketing Mix",
    title: "GA4 + SQL + MMM: the modern measurement stack",
    excerpt:
      "Stop arguing about platforms. Start building one source of truth that combines event data, server-side measurement, and Bayesian MMM for true cross-channel ROI.",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Thought Leadership
            </div>
            <h2 className="heading-section font-display">
              Perspectives on the{" "}
              <span className="gradient-text-cyan">future of growth.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Notes from the trenches — where measurement, social commerce and modern media converge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((p, i) => {
            const Icon = p.icon;
            return (
              <article key={i} className="premium-card group flex flex-col">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gold mb-3">{p.tag}</div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Read perspective
                  <span className="h-px w-6 bg-current" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
