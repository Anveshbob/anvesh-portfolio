import { useState } from "react";
import { ChevronDown } from "lucide-react";
import jumiaValidation from "@/assets/jumia-validation.png.asset.json";


type CaseStudy = {
  label: string;
  title: string;
  context: string;
  scope: string;
  interventions: string[];
  outcomes: string[];
  tools: string;
  cta: string;
  proof?: { src: string; caption: string };
};


const studies: CaseStudy[] = [
  {
    label: "01 · Domino's Pizza India / Jubilant FoodWorks",
    title: "Building a full-funnel digital growth engine for Domino's India",
    context:
      "Domino's needed to grow customer acquisition and retention across India while maintaining strict ROI discipline across a large and complex digital media portfolio.",
    scope:
      "I worked across Pan-India digital marketing channels including Meta, Google, YouTube, UAC, CRM, affiliates, influencers, and brand partnerships. The role involved campaign planning, performance tracking, agency coordination, stakeholder alignment, and continuous optimization across acquisition and retention journeys.",
    interventions: [
      "Managed and optimized a ₹7Cr+ monthly digital media portfolio.",
      "Rebalanced channel priorities based on acquisition efficiency and business impact.",
      "Worked on incrementality tests to validate the true contribution of media investments.",
      "Improved CRM and app communication journeys to increase traffic and conversion efficiency.",
      "Coordinated across 30+ internal stakeholders and 10+ partner agencies.",
      "Built clearer reporting structures for leadership visibility and media accountability.",
    ],
    outcomes: [
      "17% YoY customer acquisition growth.",
      "35% traffic increase.",
      "25% conversion rate improvement.",
      "11% sales growth.",
      "₹2Cr+ incremental monthly revenue impact.",
    ],
    tools: "Google Ads · Meta Ads · YouTube · UAC · CRM · GA4 · Singular · Incrementality Testing · Marketing Automation",
    cta: "View growth levers",
  },
  {
    label: "02 · Mars Pet Nutrition",
    title: "Scaling sampling-led acquisition and performance marketing for pet care brands",
    context:
      "Mars Pet Nutrition needed to scale product trial and acquisition across a competitive pet care market while improving sampling efficiency, media measurement, and digital commerce readiness.",
    scope:
      "I worked across performance marketing and data-driven marketing initiatives for Pedigree, Whiskas, and Sheba. The work involved Google and Meta campaigns, sampling-led acquisition, partner-led activations, GA4-led measurement, reporting, and agency coordination.",
    interventions: [
      "Supported performance marketing across Google Ads, Meta Ads, and Performance Max.",
      "Worked on sampling-led acquisition initiatives across media and partner channels.",
      "Helped improve visibility into acquisition quality, cost efficiency, and channel contribution.",
      "Contributed to DDM planning, reporting, and performance governance.",
      "Worked with internal teams and agencies to improve campaign clarity and execution discipline.",
      "Supported social commerce and Instagram Shop-led growth initiatives where relevant.",
    ],
    outcomes: [
      "655K product samples delivered in one quarter.",
      "40% reduction in cost per sample.",
      "Improved visibility into high-performing acquisition channels.",
      "Stronger performance reporting across sampling and paid media initiatives.",
    ],
    tools: "Google Ads · Meta Ads · Performance Max · GA4 · SQL · Power BI · Singular · Partner Dashboards",
    cta: "View acquisition system",
  },
  {
    label: "03 · Brane Enterprises",
    title: "Building product marketing and GTM operating systems",
    context:
      "Brane required stronger alignment between product, design, engineering, and business teams to improve product-market clarity, launch readiness, and GTM execution.",
    scope:
      "I worked at the intersection of product marketing, GTM planning, roadmap alignment, and cross-functional execution. The role involved translating product capabilities into clearer positioning, launch documentation, and structured business narratives.",
    interventions: [
      "Created product marketing workflows from the ground up.",
      "Developed GTM planning structures for product launches.",
      "Worked on product positioning, messaging, and launch narratives.",
      "Supported roadmap alignment between product, design, engineering, and business teams.",
      "Introduced OKR-based planning and execution tracking.",
      "Improved cross-functional clarity around product goals and launch priorities.",
    ],
    outcomes: [
      "Established product marketing operating structure.",
      "Improved GTM readiness for multiple product initiatives.",
      "Created clearer alignment between product, business, and execution teams.",
      "Strengthened documentation and planning discipline.",
    ],
    tools: "GTM Strategy · Product Positioning · OKRs · Roadmap Planning · Cross-functional Workshops · Launch Documentation",
    cta: "View GTM system",
  },
  {
    label: "04 · Amazon Easy · Prione / Cloudtail (Amazon–Catamaran JV) · MBA Internship, 2020",
    title: "Amazon Easy: Lead Generation & Store-Location Model",
    context:
      "Amazon Easy Exclusive Stores needed cost-effective lead generation and faster store-location scouting across Tier-2 India to scale offline-assisted commerce.",
    scope:
      "I owned the lead-generation and location-scouting workstreams during a live MBA internship. This included evaluating digital and non-digital channels, designing paid social campaigns end-to-end, and building an internal scouting tool to accelerate store site selection.",
    interventions: [
      "Built a channel cost-effectiveness framework comparing digital and non-digital acquisition sources.",
      "Designed and ran A/B-tested Meta lead-gen campaigns with iterative creative and audience testing.",
      "Structured lead-gen funnels with clear hot-lead qualification criteria.",
      "Built a scalable location-scouting tool using Google My Maps, browser automation, and Excel macros.",
      "Documented playbooks so the internal team could replicate the scouting workflow across cities.",
    ],
    outcomes: [
      "4,000+ leads targeted via cost-effective channels.",
      "Hot-lead conversion lifted to 66–74%.",
      "Cost-per-hot-lead reduced to ~₹29.",
      "Store-location turnaround time reduced by ~40%.",
    ],
    tools: "Meta Ads · A/B Testing · Lead-gen Funnels · Google My Maps · Browser Automation · Excel Macros",
    cta: "View acquisition model",
  },
  {
    label: "05 · Jumia Egypt · Live Project (validated by Country Manager)",
    title: "Return-Rate Reduction & Reverse Logistics",
    context:
      "Jumia Egypt needed to reduce product return rates and improve reverse-logistics efficiency across categories, sellers, and warehouses.",
    scope:
      "I worked on a live consulting project spanning policy benchmarking, user-journey analysis, and analytics tooling. The output was a prioritized roadmap of policy and UX interventions plus a diagnostic dashboard for operations.",
    interventions: [
      "Benchmarked Jumia Egypt's return policy against local and international peers.",
      "Identified 20+ opportunities and policy changes across the returns lifecycle.",
      "Ran user-journey analysis and ideated 6 UX initiatives to reduce return intent.",
      "Suggested reverse and forward logistics flow changes to improve authenticity and efficiency.",
      "Built an interactive dashboard tracking return-rate contributors across categories, sellers, and warehouses.",
    ],
    outcomes: [
      "Roadmap targeting up to 30% return-rate reduction.",
      "~10% projected improvement in return authenticity and reverse-logistics efficiency.",
      "6 UX initiatives ideated to enhance the customer experience.",
      "All project points formally validated by Jumia Egypt's Country Manager.",
    ],
    tools: "Policy Benchmarking · User-Journey Analysis · Excel Dashboards · Reverse Logistics Design",
    cta: "View returns roadmap",
    proof: {
      src: jumiaValidation.url,
      caption: "Email validation from Thomas Maudet, Country Manager, Jumia Services — Egypt.",
    },
  },
];


const CaseStudies = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="work" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Selected Work
          </div>
          <h2 className="heading-section font-display">
            Case studies grounded in <span className="gradient-text-gold">business outcomes</span>
          </h2>
          <p className="text-lead mt-5">
            A closer look at the growth systems, media operations, and measurement work I have contributed to across consumer and product-led businesses.
          </p>
        </div>

        <div className="space-y-4">
          {studies.map((s, i) => {
            const isOpen = open === i;
            return (
              <article key={i} className="rounded-2xl border border-border/60 bg-surface overflow-hidden transition-colors hover:border-primary/40">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary mb-2">{s.label}</div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug">{s.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden md:inline text-xs uppercase tracking-widest text-muted-foreground">
                      {isOpen ? "Collapse" : s.cta}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 grid lg:grid-cols-2 gap-8 border-t border-border/60 pt-8">
                    <div className="space-y-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Context</div>
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">{s.context}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">My Scope</div>
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">{s.scope}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Tools Used</div>
                        <p className="text-sm text-muted-foreground">{s.tools}</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Key Interventions</div>
                        <ul className="space-y-2.5">
                          {s.interventions.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm text-foreground/85">
                              <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Outcomes</div>
                        <ul className="space-y-2">
                          {s.outcomes.map((b, j) => (
                            <li key={j} className="flex gap-3 text-sm text-foreground/90">
                              <span className="text-gold mt-1.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
