import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Timeline", href: "#timeline" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-premium flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground font-bold">
            A
          </span>
          <span className="hidden sm:inline">Anvesh Seeli</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary-glow">
            <a href="#contact">Book Growth Audit</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60">
          <div className="container-premium py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 bg-primary text-primary-foreground">
              <a href="#contact" onClick={() => setOpen(false)}>Book Growth Audit</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
