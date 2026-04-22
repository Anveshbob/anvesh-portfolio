import { Layers, Microscope, ShoppingBag, Users } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Growth Systems Architecture",
    description:
      "Designing full-funnel performance ecosystems across Google, Meta, programmatic and CRM — engineered for predictable, profitable scale.",
    accent: "cyan",
  },
  {
    icon: Microscope,
    title: "Incrementality & Measurement Science",
    description:
      "GA4, SQL, Singular and marketing mix modeling. Five+ incrementality tests run at Domino's that unlocked ₹2 Cr+ in monthly incremental spend.",
    accent: "gold",
  },
  {
    icon: ShoppingBag,
    title: "Modern Social Commerce & Retail Media",
    description:
      "Pioneering Instagram Shop, payment-partner sampling (GPay, PhonePe, Paytm), and quick-commerce activation for FMCG and QSR.",
    accent: "cyan",
  },
  {
    icon: Users,
    title: "Transformational Leadership",
    description:
      "Aligning 30+ cross-functional stakeholders, building product marketing functions from zero, and translating data into clear executive narratives.",
    accent: "gold",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Strategic Capabilities
          </div>
          <h2 className="heading-section font-display">
            Four pillars that compound into a{" "}
            <span className="gradient-text-gold">durable growth advantage.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isGold = p.accent === "gold";
            return (
              <div
                key={i}
                className="premium-card group relative overflow-hidden"
              >
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
                    isGold ? "bg-gold" : "bg-primary"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 ${
                      isGold ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className={`h-px w-8 ${isGold ? "bg-gold" : "bg-primary"}`} />
                    Pillar 0{i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
