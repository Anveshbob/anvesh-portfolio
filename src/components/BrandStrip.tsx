import { useState } from "react";

type Brand = {
  name: string;
  domain: string;
  slug?: string; // simpleicons fallback
};

const brands: Brand[] = [
  { name: "Domino's", domain: "dominos.com", slug: "dominos" },
  { name: "Pedigree", domain: "pedigree.com", slug: "pedigree" },
  { name: "Whiskas", domain: "whiskas.com", slug: "whiskas" },
  { name: "Sheba", domain: "sheba.com" },
  { name: "Mars", domain: "mars.com", slug: "mars" },
  { name: "Amazon", domain: "amazon.com", slug: "amazon" },
  { name: "Jumia", domain: "jumia.com", slug: "jumia" },
];

const LogoImg = ({ b }: { b: Brand }) => {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  if (stage === 2) {
    // graceful text fallback
    return (
      <span className="text-sm font-display text-muted-foreground/80 hover:text-foreground transition-colors whitespace-nowrap">
        {b.name}
      </span>
    );
  }
  const src =
    stage === 0
      ? `https://cdn.brandfetch.io/${b.domain}/w/200/h/60/logo`
      : `https://cdn.simpleicons.org/${b.slug ?? b.domain.split(".")[0]}`;
  return (
    <img
      src={src}
      alt={`${b.name} logo`}
      loading="lazy"
      className="h-11 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      onError={() => setStage((s) => (s === 0 ? 1 : 2))}
    />
  );
};

const BrandStrip = () => {
  const row = (keyPrefix: string) => (
    <div className="flex items-center gap-12 md:gap-16 px-6 shrink-0">
      {brands.map((b, i) => (
        <div key={`${keyPrefix}-${i}`} className="flex items-center h-11">
          <LogoImg b={b} />
        </div>
      ))}
    </div>
  );

  return (
    <section aria-label="Brands I have worked with" className="border-y border-border/60 bg-surface-muted/30">
      <div className="container-premium py-10 md:py-12">
        <div className="text-center mb-6">
          <div className="eyebrow justify-center inline-flex mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Brands I've worked with
          </div>
        </div>

        {/* Mobile: wrapped centered */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {brands.map((b, i) => (
            <div key={i} className="flex items-center h-11">
              <LogoImg b={b} />
            </div>
          ))}
        </div>

        {/* Desktop: marquee */}
        <div className="hidden md:block relative overflow-hidden marquee-mask group">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {row("a")}
            {row("b")}
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-muted-foreground/70 max-w-2xl mx-auto">
          Logos are trademarks of their respective owners; shown to indicate brands I have worked with or on.
        </p>
      </div>
    </section>
  );
};

export default BrandStrip;
