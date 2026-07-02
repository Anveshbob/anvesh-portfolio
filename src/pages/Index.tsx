import { ArrowRight } from "lucide-react";

const NEW_URL = "https://anveshseeli.com";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">
          Portfolio Update
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-900">
          Anvesh Seeli's Portfolio Has Moved
        </h1>
        <p className="mt-5 text-lg text-slate-700">
          My official portfolio is now available at{" "}
          <a
            href={NEW_URL}
            className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
          >
            anveshseeli.com
          </a>
          .
        </p>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          I've moved my updated performance marketing and growth portfolio to a new
          custom domain. Please visit the new site for my latest work, case
          studies, resume, and contact details.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={NEW_URL}
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Visit Updated Portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
          If you are looking for my work across performance marketing, paid
          media, GA4/GTM measurement, growth strategy, geo-incrementality, D2C
          growth, and consumer brand marketing, please use the new domain:{" "}
          <a
            href={NEW_URL}
            className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
          >
            anveshseeli.com
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default Index;
