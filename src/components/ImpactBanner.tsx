const metrics = [
  { value: "₹7Cr+", label: "Monthly media budget managed", accent: "gold" },
  { value: "17%", label: "YoY customer growth", accent: "cyan" },
  { value: "655K", label: "Product samples delivered in one quarter", accent: "gold" },
  { value: "35%", label: "Traffic increase with improved conversion efficiency", accent: "cyan" },
];

const ImpactBanner = () => {
  return (
    <section className="relative border-y border-border/60 bg-surface-muted/40">
      <div className="container-premium py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {metrics.map((m, i) => (
            <div key={i} className="group relative bg-surface-muted hover:bg-surface transition-colors duration-200 p-6 md:p-8">
              <div className={`text-3xl md:text-5xl font-display font-semibold mb-2 ${m.accent === "gold" ? "gradient-text-gold" : "gradient-text-cyan"}`}>
                {m.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs md:text-sm text-muted-foreground/80 max-w-3xl">
          Metrics represent owned or influenced outcomes across roles. Detailed context is provided in the case studies below.
        </p>
      </div>
    </section>
  );
};

export default ImpactBanner;
