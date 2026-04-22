import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Role = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "Mars International",
    role: "Performance Marketing Manager — Pet Nutrition",
    period: "Jun 2024 — Present",
    location: "Hyderabad, India",
    highlights: [
      "End-to-end performance marketing for Pedigree, Whiskas and Sheba across Google Ads, Meta Ads and Performance Max.",
      "Led sampling campaigns via media + payment partners (GPay, PhonePe, Paytm) — 655K samples in 3 months at 40% lower cost per sample.",
      "Spearheading the Data-Driven Marketing (DDM) programme for Mars Pet Nutrition India.",
      "Pioneering Instagram Shop and social commerce experiences to lift conversion.",
      "GA4-led measurement: attribution modeling, audience analysis, future media planning.",
    ],
  },
  {
    company: "Brane Enterprises",
    role: "Product Leader — Marketing",
    period: "Mar 2024 — Feb 2025",
    location: "India",
    highlights: [
      "Built and led a high-performing team of product managers, designers and engineers.",
      "Aligned product vision with business objectives via robust roadmaps and clear OKRs.",
      "Established the product marketing function from the ground up.",
    ],
  },
  {
    company: "Jubilant FoodWorks (Domino's Pizza India)",
    role: "Deputy Manager — Digital Marketing",
    period: "Aug 2021 — Mar 2024",
    location: "Noida, India",
    highlights: [
      "Owned a Pan-India digital portfolio: social, Meta, UAC, YouTube, SEM, influencer, affiliate, brand partnerships.",
      "17% YoY customer acquisition growth while managing ₹7 Cr monthly budget.",
      "Five incrementality tests → ₹2 Cr+ uplift in average monthly spend, 8% incremental revenue.",
      "CRM + in-app optimisation lifted traffic 35%, conversions 25% and sales 11%.",
      "Cross-functional leadership of 30+ stakeholders and 10+ partner agencies.",
    ],
  },
  {
    company: "Simply Grow Technologies",
    role: "Assistant Sales Manager",
    period: "Dec 2017 — Nov 2018",
    location: "Hyderabad, India",
    highlights: [
      "Managed strategic partnerships with 35 BSE-listed AMC fund houses.",
      "Expanded SIP book by ₹120 Cr and lump-sum investments by ₹42 Cr.",
      "12,500+ registrations in 7 months with peak MoM growth of 190%.",
      "Maintained 95% CSAT across 11,000+ resolved tickets.",
    ],
  },
];

const Career = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="career" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Career Trajectory
          </div>
          <h2 className="heading-section font-display">
            A decade of compounding{" "}
            <span className="gradient-text-cyan">leadership and impact.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-gold/60" />

          <div className="space-y-6">
            {roles.map((r, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 md:left-4 top-6 h-3 w-3 rounded-full transition-all duration-500 ${
                      isOpen
                        ? "bg-primary shadow-glow-cyan scale-125"
                        : "bg-surface border-2 border-border"
                    }`}
                  />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left premium-card cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-widest text-primary mb-2">
                          {r.period}
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                          {r.company}
                        </h3>
                        <div className="text-muted-foreground text-sm md:text-base">
                          {r.role}
                          {r.location && <span className="text-muted-foreground/60"> · {r.location}</span>}
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-500 flex-shrink-0 mt-2 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden space-y-3">
                        {r.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-sm md:text-base text-foreground/80">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
