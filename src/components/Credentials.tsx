import { GraduationCap, Award, Wrench } from "lucide-react";

const education = [
  {
    degree: "MBA — Marketing & Organizational Behavior",
    school: "Indian Institute of Management, Calcutta",
    period: "2019 — 2021",
  },
  {
    degree: "B.Tech — Mechanical Engineering",
    school: "National Institute of Technology, Calicut",
    period: "2013 — 2017",
  },
];

const certifications = [
  "Google Ads — Measurement Certification",
  "AI-Powered Performance Ads (Google)",
  "Lean Six Sigma Green Belt — KPMG",
];

const skills = {
  "Marketing Platforms": ["Google Ads", "Meta Ads", "Performance Max", "YouTube", "DV360", "Programmatic", "Instagram Shop"],
  "Analytics & Data": ["GA4", "SQL", "PowerBI", "Amplitude", "Singular", "Cube", "Marketing Mix Modeling"],
  "Strategy": ["GTM Strategy", "Incrementality Testing", "CAC Optimisation", "CRM & Lifecycle", "Product Marketing"],
};

const Credentials = () => {
  return (
    <section id="credentials" className="section-padding relative">
      <div className="container-premium">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Credentials
          </div>
          <h2 className="heading-section font-display">
            Education, certifications and the{" "}
            <span className="gradient-text-gold">technical stack.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="premium-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold mb-6">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-4">
                  <div className="text-xs uppercase tracking-widest text-gold mb-1">{e.period}</div>
                  <div className="font-medium text-foreground">{e.degree}</div>
                  <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="premium-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-6">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="premium-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold mb-6">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-6">Technical Stack</h3>
            <div className="space-y-5">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat}>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {cat}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
