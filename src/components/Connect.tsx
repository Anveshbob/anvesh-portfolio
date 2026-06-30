import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Let's Connect
            </div>
            <h2 className="heading-section font-display">
              Want a sharper view of your{" "}
              <span className="gradient-text-cyan">growth funnel?</span>
            </h2>
            <p className="text-lead mt-5">
              Book a 30-minute call if you need help with paid media efficiency, campaign structure, measurement quality, or growth strategy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-glow"
              >
                <a href="https://calendly.com/seelianvesh/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Growth Audit Call
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/60">
                <a href="mailto:seelianvesh@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-surface">
                <a href="https://www.linkedin.com/in/anvesh-seeli/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground italic">
              Clear diagnosis. Practical recommendations. No generic marketing fluff.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <a
              href="mailto:seelianvesh@gmail.com"
              className="premium-card flex items-start gap-4 hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-medium">seelianvesh@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anvesh-seeli/"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card flex items-start gap-4 hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">LinkedIn</div>
                <div className="text-foreground font-medium">linkedin.com/in/anvesh-seeli</div>
              </div>
            </a>

            <div className="premium-card flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Location</div>
                <div className="text-foreground font-medium">Based in India</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Available for remote consulting, growth audits, and performance marketing advisory.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
