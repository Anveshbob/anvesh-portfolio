const metrics = [
  {
    value: "₹42+ Cr",
    label: "Incremental revenue influenced",
    accent: "gold",
  },
  {
    value: "17%",
    label: "YoY customer growth (Domino's)",
    accent: "cyan",
  },
  {
    value: "655K",
    label: "Product samples delivered in one quarter (Mars)",
    accent: "gold",
  },
  {
    value: "35%",
    label: "Traffic increase with improved efficiency",
    accent: "cyan",
  },
];

const ImpactBanner = () => {
  return (
    <section className="relative -mt-px border-y border-border/60 bg-surface-muted/40 backdrop-blur">
      <div className="container-premium py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group relative bg-surface-muted hover:bg-surface transition-all duration-500 p-6 md:p-8"
            >
              <div
                className={`text-3xl md:text-5xl font-display font-semibold mb-2 ${
                  m.accent === "gold" ? "gradient-text-gold" : "gradient-text-cyan"
                }`}
              >
                {m.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-snug">
                {m.label}
              </div>
              <div
                className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ${
                  m.accent === "gold" ? "bg-gold" : "bg-primary"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
