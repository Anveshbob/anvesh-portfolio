const steps = [
  {
    title: "Diagnose the business objective",
    copy: "Clarify whether the real problem is acquisition, lead quality, conversion, retention, measurement, or channel efficiency.",
  },
  {
    title: "Map funnel leakage",
    copy: "Break down the journey across impressions, clicks, landing pages, app flows, CRM touchpoints, leads, orders, and repeat behavior.",
  },
  {
    title: "Clean the measurement layer",
    copy: "Check events, attribution assumptions, dashboards, source definitions, and reporting logic before making major optimization decisions.",
  },
  {
    title: "Rebuild channel structure",
    copy: "Align campaigns, budgets, audiences, creatives, and bidding strategies to the actual business objective.",
  },
  {
    title: "Create weekly operating decisions",
    copy: "Turn performance data into clear actions: what to pause, what to scale, what to test, and what to fix next.",
  },
];

const OperatingSystem = () => {
  return (
    <section className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Operating System
          </div>
          <h2 className="heading-section font-display">
            How I approach <span className="gradient-text-cyan">growth</span>
          </h2>
          <p className="text-lead mt-5">
            I do not start with channels. I start with the business problem, the funnel, and the measurement layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-border/60 bg-surface p-6 hover:border-primary/40 transition-colors">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Step {String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-base font-semibold mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base md:text-lg text-foreground/80 italic">
          Good growth work is not just optimization. It is <span className="text-gold not-italic font-medium">decision discipline</span>.
        </p>
      </div>
    </section>
  );
};

export default OperatingSystem;
