const timeline = [
  {
    company: "Mars International / Mars Pet Nutrition",
    title: "DDM Program Manager — Pet Nutrition",
    location: "Hyderabad, India",
    dates: "May 2025 — February 2026",
    description:
      "Worked across performance marketing, sampling-led acquisition, DDM planning, social commerce, and measurement initiatives for Mars Pet Nutrition brands including Pedigree, Whiskas, and Sheba.",
    bullets: [
      "Supported Google, Meta, and Performance Max-led acquisition initiatives.",
      "Worked on sampling campaigns across media and partner channels.",
      "Contributed to DDM reporting, planning, and performance governance.",
      "Helped improve visibility into channel efficiency and cost-per-sample performance.",
      "Coordinated with agencies and internal stakeholders for campaign execution and handovers.",
    ],
  },
  {
    company: "Brane Enterprises",
    title: "Product Leader — Marketing",
    location: "India",
    dates: "March 2024 — February 2025",
    description:
      "Worked across product marketing, GTM planning, positioning, roadmap alignment, and cross-functional operating systems.",
    bullets: [
      "Built product marketing workflows and launch planning structures.",
      "Created GTM narratives, positioning documents, and product communication frameworks.",
      "Worked with product, design, engineering, and business teams.",
      "Supported OKR-based planning and execution tracking.",
      "Improved clarity across product goals, business priorities, and launch readiness.",
    ],
  },
  {
    company: "Jubilant FoodWorks / Domino's Pizza India",
    title: "Deputy Manager — Digital Marketing",
    location: "Noida, India",
    dates: "August 2021 — March 2023",
    description:
      "Worked on Pan-India digital marketing across acquisition, retention, app growth, CRM, paid media, influencers, affiliates, and brand partnerships.",
    bullets: [
      "Managed digital channels across Meta, Google, YouTube, UAC, CRM, affiliates, influencers, and brand partnerships.",
      "Worked on a ₹7Cr+ monthly media portfolio with ROI accountability.",
      "Contributed to 17% YoY customer acquisition growth.",
      "Improved traffic by 35% and conversion rate by 25% through CRM and app journey optimization.",
      "Coordinated with 30+ stakeholders and 10+ partner agencies.",
    ],
  },
  {
    company: "Simply Grow Technologies",
    title: "Assistant Sales Manager",
    location: "Hyderabad, India",
    dates: "December 2017 — November 2018",
    description:
      "Worked on strategic partnerships, customer acquisition, and service operations in the financial services ecosystem.",
    bullets: [
      "Managed strategic partnerships with 35 BSE-listed AMC fund houses.",
      "Expanded SIP book by ₹120Cr and lump-sum investments by ₹42Cr.",
      "Delivered 12,500+ registrations in 7 months.",
      "Achieved peak month-on-month growth of 190%.",
      "Maintained 95% CSAT across 11,000+ resolved tickets.",
    ],
  },
];

const Career = () => {
  return (
    <section id="timeline" className="section-padding relative bg-surface-muted/30">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Career Timeline
          </div>
          <h2 className="heading-section font-display">
            Experience across consumer growth, product marketing, and{" "}
            <span className="gradient-text-cyan">performance media</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                <span className="absolute left-0 top-2 h-6 w-6 md:h-8 md:w-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="rounded-2xl border border-border/60 bg-surface p-6 md:p-7 hover:border-primary/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-primary mb-1">{t.company}</div>
                      <h3 className="font-display text-lg md:text-xl font-semibold">{t.title}</h3>
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground md:text-right">
                      <div>{t.dates}</div>
                      <div>{t.location}</div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">{t.description}</p>

                  <ul className="space-y-2">
                    {t.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/85">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
