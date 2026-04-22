import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  return (
    <section id="connect" className="section-padding relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-gold/10 blur-3xl rounded-full" />
      </div>

      <div className="container-premium">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow mb-4 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Let's Connect
          </div>
          <h2 className="heading-section font-display">
            Ready to build a{" "}
            <span className="gradient-text-cyan">predictable growth engine?</span>
          </h2>
          <p className="text-lead mt-6">
            I work with leadership teams that want to turn marketing from a cost center into a measurable, compounding business asset. Book a 30-minute strategy call.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:seelianvesh@gmail.com"
              className="premium-card flex items-start gap-4 hover:border-primary/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-medium">seelianvesh@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anvesh-seeli/"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card flex items-start gap-4 hover:border-primary/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</div>
                <div className="text-foreground font-medium">anvesh-seeli</div>
              </div>
            </a>

            <div className="premium-card flex items-start gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Based in</div>
                <div className="text-foreground font-medium">Hyderabad, India</div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-cyan text-primary-foreground hover:opacity-90 shadow-glow-cyan h-14"
            >
              <a
                href="https://calendly.com/seelianvesh/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book 30-min Strategy Call
              </a>
            </Button>
          </div>

          {/* Calendly embed */}
          <div className="lg:col-span-3 premium-card p-2 md:p-3 overflow-hidden">
            <div className="rounded-xl overflow-hidden bg-surface-muted h-[640px]">
              <iframe
                src="https://calendly.com/seelianvesh/30min?embed_domain=lovable.app&embed_type=Inline&background_color=1E2937&text_color=FFFFFF&primary_color=22D3EE&hide_event_type_details=0&hide_landing_page_details=0"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a strategy call with Anvesh Seeli"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
