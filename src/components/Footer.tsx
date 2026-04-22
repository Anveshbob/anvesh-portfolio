import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-surface-muted/40">
      <div className="container-premium py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-display text-lg font-semibold mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground font-bold">
                A
              </span>
              Anvesh Seeli
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Performance marketing leader building incrementality-first growth systems for global brands.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#case-studies" className="text-foreground/80 hover:text-primary transition-colors">Work</a></li>
              <li><a href="#capabilities" className="text-foreground/80 hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#career" className="text-foreground/80 hover:text-primary transition-colors">Career</a></li>
              <li><a href="#credentials" className="text-foreground/80 hover:text-primary transition-colors">Credentials</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:seelianvesh@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4" />
                  seelianvesh@gmail.com
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anvesh-seeli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
                >
                  <Linkedin className="h-4 w-4" />
                  /in/anvesh-seeli
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Anvesh Seeli. Crafted with intent.</div>
          <div className="font-mono">v2.0 · Executive Dark</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
