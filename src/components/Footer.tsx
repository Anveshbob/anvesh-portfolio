const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Timeline", href: "#timeline" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-surface-muted/40">
      <div className="container-premium py-12 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground font-bold">
                A
              </span>
              Anvesh Seeli — Performance Marketing & Growth Leader
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Built for clarity, measurement, and better growth decisions.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anvesh Seeli. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            seelianvesh@gmail.com · Based in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
