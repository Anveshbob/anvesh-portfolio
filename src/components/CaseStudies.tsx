import { ArrowUpRight } from "lucide-react";
import marsImg from "@/assets/case-mars.jpg";
import dominosImg from "@/assets/case-dominos.jpg";
import braneImg from "@/assets/case-brane.jpg";

type Study = {
  number: string;
  title: string;
  client: string;
  image: string;
  challenge: string;
  approach: string;
  results: string;
  methods?: string;
  metrics: { value: string; label: string }[];
};

const studies: Study[] = [
  {
    number: "01",
    client: "Mars Pet Nutrition",
    title: "Scaling Mars Pet Nutrition through Social Commerce & Data-Driven Marketing",
    image: marsImg,
    challenge:
      "Launch premium pet nutrition brands in a competitive market with high customer acquisition costs.",
    approach:
      "Built end-to-end performance strategy including Performance Max, Meta Advantage+, Instagram Shop innovation, and a comprehensive Data-Driven Marketing (DDM) program. Created seamless shopping experiences and reduced cost-per-sample by 40%.",
    results:
      "Delivered 655,000 product samples in Q3 2024 (50% of annual target in 3 months), identified new high-ROI acquisition channels, and significantly improved ROAS through multi-touch attribution modeling.",
    methods: "GA4 · SQL · Singular · Marketing Mix Modeling",
    metrics: [
      { value: "655K", label: "Samples in Q3" },
      { value: "−40%", label: "Cost per sample" },
      { value: "50%", label: "Annual target in 3 months" },
    ],
  },
  {
    number: "02",
    client: "Domino's Pizza India",
    title: "Building Domino's 17% Growth Engine Across Paid + Owned + Social Commerce",
    image: dominosImg,
    challenge:
      "Drive customer acquisition and retention for India's largest QSR brand while maintaining strict ROI thresholds.",
    approach:
      "Designed and led full-funnel strategy across Meta, Google, YouTube, Influencers, and CRM/lifecycle marketing. Ran five major incrementality tests and transformed CRM + app experience.",
    results:
      "17% YoY customer growth, 35% traffic increase, 25% improvement in conversion rate, ₹2+ Cr incremental monthly revenue, 11% sales growth.",
    methods:
      "GA4 · Singular · Incrementality testing · Marketing automation · Cross-functional leadership of 30+ stakeholders",
    metrics: [
      { value: "17%", label: "YoY customer growth" },
      { value: "₹2+ Cr", label: "Incremental monthly rev" },
      { value: "25%", label: "CR improvement" },
    ],
  },
  {
    number: "03",
    client: "Brane Enterprises",
    title: "Product Marketing Transformation at Brane (SaaS)",
    image: braneImg,
    challenge:
      "Bridge product, design, engineering and business teams to launch market-driven products.",
    approach:
      "Built product marketing function from the ground up. Created product roadmaps, GTM strategies, positioning, and multi-channel launch campaigns. Implemented OKR framework and agile collaboration.",
    results:
      "Successfully launched multiple products with clear market fit, improved cross-functional velocity, and established measurable success metrics.",
    metrics: [
      { value: "0→1", label: "PMM function built" },
      { value: "Multi", label: "Product launches" },
      { value: "OKR", label: "Framework rollout" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Signature Work
          </div>
          <h2 className="heading-section font-display">
            Case studies that compounded into{" "}
            <span className="gradient-text-cyan">measurable business outcomes.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {studies.map((s, i) => (
            <article
              key={s.number}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="relative group rounded-2xl overflow-hidden border border-border/60 shadow-elegant">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                  <img
                    src={s.image}
                    alt={s.client}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-border/60 text-xs font-medium text-foreground">
                    {s.client}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-5xl gradient-text-gold leading-none">
                    {s.number}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>

                <h3 className="heading-card font-display text-2xl md:text-3xl mb-6 leading-tight">
                  {s.title}
                </h3>

                <div className="space-y-5 text-sm md:text-base">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary mb-1.5">Challenge</div>
                    <p className="text-foreground/80 leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary mb-1.5">Approach</div>
                    <p className="text-foreground/80 leading-relaxed">{s.approach}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold mb-1.5">Results</div>
                    <p className="text-foreground/80 leading-relaxed">{s.results}</p>
                  </div>
                  {s.methods && (
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Methods</div>
                      <p className="text-muted-foreground text-sm">{s.methods}</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-px bg-border/60 mt-8 rounded-xl overflow-hidden border border-border/60">
                  {s.metrics.map((m, j) => (
                    <div key={j} className="bg-surface p-4">
                      <div className="font-display text-xl md:text-2xl gradient-text-cyan font-semibold">
                        {m.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
