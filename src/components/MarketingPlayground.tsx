
import React from 'react';
import { Lightbulb, Beaker, LineChart, Brain } from 'lucide-react';

const MarketingPlayground = () => {
  return (
    <section id="marketing-playground" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Marketing Playground</h2>
        <p className="section-subheading opacity-0 animate-fade-in">
          Experiments, insights, and the fun side of marketing
        </p>
        
        <div className="mt-12 bg-netflix-card p-8 rounded-lg shadow-md opacity-0 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex gap-4">
              <Lightbulb className="w-8 h-8 text-netflix-red" />
              <Beaker className="w-8 h-8 text-netflix-red" />
              <LineChart className="w-8 h-8 text-netflix-red" />
              <Brain className="w-8 h-8 text-netflix-red" />
            </div>
          </div>
          
          <div className="prose max-w-none text-netflix-text">
            <p className="text-lg mb-4">
              Ever wondered if that marketing "best practice" is actually true? Or if a tiny tweak can lead to a surprising boost? 
              Welcome to my little corner of the web where we ditch the jargon and dive into the fun side of marketing!
            </p>
            
            <p className="mb-4">
              Think of this as a peek behind the curtain, where I share real-life marketing experiments, A/B tests with 
              (sometimes unexpected!) results, and explorations into the fascinating world of consumer psychology. 
              It's all about testing hypotheses, uncovering insights, and maybe even debunking a few myths along the way.
            </p>
            
            <p className="mb-4">
              Consider this your invitation to see marketing in action, raw and unfiltered. What you find here might just change 
              how you think about engagement, conversions, and what truly makes people tick.
            </p>
            
            <p className="mb-6">
              This space is constantly evolving, with new experiments and findings being added over time. 
              So, buckle up and get ready to have some fun with marketing!
            </p>
            
            <p className="font-bold text-netflix-red text-center text-xl">
              Intrigued? More experiments and insights are brewing... Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPlayground;
