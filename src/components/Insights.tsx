import { Lightbulb, ShoppingBag, Gauge } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    title: "Incrementality beats platform comfort",
    copy:
      "Platform dashboards are useful, but they are not the final truth. Strong marketing teams combine platform data, business outcomes, and controlled tests to understand what is actually incremental.",
  },
  {
    icon: ShoppingBag,
    title: "Social commerce is becoming a performance channel",
    copy:
      "Instagram Shop, WhatsApp flows, payment partner campaigns, and commerce-led sampling are no longer side experiments. For consumer brands, they can become measurable acquisition and trial engines.",
  },
  {
    icon: Gauge,
    title: "Measurement clarity is a growth advantage",
    copy:
      "The best media decisions come from clean definitions, consistent events, and reporting systems that leadership can trust. Without that foundation, optimization becomes guesswork.",
  },
];

const Insights = () => {
  return (
    <section className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Growth Notes
          </div>
          <h2 className="heading-section font-display">
            How I think about <span className="gradient-text-cyan">modern marketing</span>
          </h2>
          <p className="text-lead mt-5">
            Short perspectives from hands-on work across performance media, measurement, and commerce-led growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {insights.map((p, i) => {
            const Icon = p.icon;
            return (
              <article key={i} className="premium-card flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
