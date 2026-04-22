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
              Leadership <span className="gradient-text-cyan">Narrative</span>
            </h2>
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-px w-10 bg-gold" />
                IIM Calcutta MBA
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                <span className="h-px w-10 bg-gold" />
                NIT Calicut B.Tech
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                <span className="h-px w-10 bg-gold" />
                5+ years · ₹7Cr+ monthly P&L
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              I am a strategic marketing leader who sits at the intersection of{" "}
              <span className="text-foreground font-medium">performance marketing</span>,{" "}
              <span className="text-foreground font-medium">product thinking</span>, and{" "}
              <span className="text-foreground font-medium">business strategy</span>.
            </p>
            <p>
              At <span className="text-foreground font-medium">Mars Pet Nutrition</span>, I orchestrate integrated performance ecosystems across Google, Meta, and social commerce channels for three of India's most loved pet brands. Previously at <span className="text-foreground font-medium">Domino's Pizza India</span>, I built and scaled a full-funnel digital marketing engine that delivered{" "}
              <span className="gradient-text-gold font-semibold">17% YoY customer growth</span> while managing <span className="gradient-text-gold font-semibold">₹7 Cr+ monthly budgets</span> with extreme ROI accountability.
            </p>
            <p>
              My expertise lies in building{" "}
              <span className="gradient-text-cyan font-semibold">incrementality-first</span>{" "}
              marketing systems — leveraging advanced measurement (GA4 + SQL + marketing mix modeling), social commerce innovation, and cross-functional leadership to drive both scalable acquisition and profitable growth.
            </p>
            <p className="text-muted-foreground italic border-l-2 border-primary/60 pl-6">
              MBA from IIM Calcutta. Obsessed with turning complex data into clear strategic advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
