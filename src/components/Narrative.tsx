const Narrative = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About
            </div>
            <h2 className="heading-section font-display">
              I operate where media, measurement, and{" "}
              <span className="gradient-text-cyan">business outcomes meet.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              I am a performance marketing and growth professional with experience across{" "}
              <span className="text-foreground font-medium">QSR, FMCG / pet care, SaaS product marketing, and financial services</span>.
            </p>
            <p>
              At <span className="text-foreground font-medium">Domino's Pizza India</span>, I worked on large-scale digital acquisition and retention across Meta, Google, YouTube, UAC, CRM, affiliates, influencers, and brand partnerships while managing high-accountability media budgets.
            </p>
            <p>
              At <span className="text-foreground font-medium">Mars Pet Nutrition</span>, I worked across performance marketing, sampling-led acquisition, social commerce, and data-driven marketing initiatives for brands including Pedigree, Whiskas, and Sheba.
            </p>
            <p>
              My strength is combining campaign execution, measurement discipline, and business context — turning marketing activity into clear decisions for leadership teams.
            </p>
            <p className="text-muted-foreground italic border-l-2 border-primary/60 pl-6">
              I care about clean measurement, practical execution, and growth systems that can survive real-world complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
