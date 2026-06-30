import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA — Marketing & Organizational Behavior",
    school: "Indian Institute of Management, Calcutta",
    years: "2019 — 2021",
  },
  {
    degree: "B.Tech — Mechanical Engineering",
    school: "National Institute of Technology, Calicut",
    years: "2013 — 2017",
  },
];

const certGroups = [
  {
    title: "Performance & Ad Tech",
    items: [
      "Google Ads Measurement Certification",
      "Google Ads Display Certification",
      "Google Ads Apps Certification",
      "AI-Powered Performance Ads Certification",
      "Setting up Ad Campaigns",
    ],
  },
  {
    title: "Marketing Strategy",
    items: [
      "Fundamentals of Digital Marketing",
      "Product, Pricing, and Promotion in the Marketing Mix",
      "Reaching Customers Digitally",
      "Helping Customers Find You",
    ],
  },
  {
    title: "Analytics & Insights",
    items: [
      "Analyzing Audiences & User Behavior",
      "Creating & Managing Properties",
      "Report Insights on Social Media Marketing",
    ],
  },
  {
    title: "Leadership & Operations",
    items: ["Lean Six Sigma — Green Belt", "Communicating with Confidence"],
  },
];

const stackGroups = [
  {
    title: "Marketing Platforms",
    items: ["Google Ads", "Meta Ads", "Performance Max", "YouTube", "DV360", "Programmatic", "Instagram Shop"],
  },
  {
    title: "Analytics & Data",
    items: ["GA4", "SQL", "Power BI", "Amplitude", "Singular", "Cube", "Marketing Mix Modeling"],
  },
  {
    title: "Growth Strategy",
    items: ["GTM Strategy", "Incrementality Testing", "CAC Optimization", "CRM & Lifecycle", "Product Marketing", "Social Commerce"],
  },
];

const Chip = ({ children, accent }: { children: React.ReactNode; accent?: "gold" | "cyan" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
      accent === "gold"
        ? "border-gold/30 bg-gold/5 text-gold"
        : "border-border bg-surface-muted text-foreground/85"
    }`}
  >
    {children}
  </span>
);

const Credentials = () => {
  return (
    <section id="credentials" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Credentials
          </div>
          <h2 className="heading-section font-display">
            Education, certifications, and{" "}
            <span className="gradient-text-cyan">technical stack</span>
          </h2>
        </div>

        {/* Education */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Education</div>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map((e, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-surface p-6 flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold flex-shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold leading-snug">{e.degree}</h3>
                  <div className="text-sm text-foreground/80 mt-1">{e.school}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.years}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Certifications</div>
          <div className="grid md:grid-cols-2 gap-5">
            {certGroups.map((g, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((c, j) => (
                    <Chip key={j}>{c}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Technical Stack</div>
          <div className="grid md:grid-cols-3 gap-5">
            {stackGroups.map((g, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((c, j) => (
                    <Chip key={j}>{c}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
