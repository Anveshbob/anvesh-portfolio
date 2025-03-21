
import React, { useState } from 'react';
import { ChevronDown, BarChart2, Users, Target, Map } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Driving 17% YoY Customer Acquisition at Jubilant Foodworks",
    background: "As Deputy Manager, Marketing from Aug'21 – Mar'24, I managed a diverse digital marketing portfolio with a monthly budget of 7 crores.",
    approach: "Developed and executed ROI and CAC-focused performance campaigns across social media, Facebook, UAC, YouTube, SEM, influencer, affiliate, and brand partnership channels.",
    metrics: "Achieved 17% year-over-year growth in customer acquisition.",
    tools: "Leveraged data analytics platforms such as Singular, Google Analytics, Google Ads, and Facebook Ads Manager.",
    additional: "Conducted five marketing incrementality tests resulting in a 2 crore+ increase in average monthly spend and an 8% uplift in incremental revenue.",
    icon: <BarChart2 className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 2,
    title: "Increasing Traffic by 35% Through CRM Optimization",
    background: "While at Jubilant Foodworks, I optimized CRM strategies and in-app experiences.",
    approach: "Implemented data-driven optimizations to improve user engagement and conversion pathways.",
    metrics: "Boosted traffic by 35%, conversions by 25%, and sales by 11%.",
    tools: "Used Google Analytics, Amplitude, and custom dashboards to track performance.",
    additional: "Developed and executed the annual operational plan while delivering weekly and quarterly presentations to 30+ stakeholders.",
    icon: <Users className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 3,
    title: "Generating 1,500 Leads with 96% Cost Reduction",
    background: "During my internship at Cloudtail India Pvt Ltd, I contributed to the Amazon Easy franchise marketing strategy.",
    approach: "Executed two targeted marketing campaigns with in-depth benchmarking analysis.",
    metrics: "Generated over 1,500 leads and reduced cost per hot lead by 96%.",
    tools: "Created a data-driven location selection tool analyzing over ten key factors.",
    additional: "Collaborated with regional marketing teams to streamline operations and achieve business objectives.",
    icon: <Target className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 4,
    title: "Digital-Only Store Location Selection During Lockdown",
    background: "During my internship at Cloudtail India Pvt Ltd, I developed a novel digital-only approach for store location selection.",
    approach: "Created a data-driven location selection tool that analyzed multiple factors without physical site visits.",
    metrics: "Reduced time-to-action (TAT) for selecting ideal store locations by 70%.",
    tools: "Utilized digital mapping tools, demographic data analysis, and market trend analysis.",
    additional: "This approach was particularly valuable during lockdown when physical site visits were impossible.",
    icon: <Map className="w-8 h-8 text-netflix-red" />
  }
];

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`netflix-card opacity-0 animate-fade-in ${isExpanded ? 'md:col-span-3 lg:col-span-3' : ''}`}
      style={{ animationDelay: `${study.id * 200}ms` }}
    >
      <div className="p-6">
        <div className="mb-4">
          {study.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
        <p className="text-netflix-muted mb-4">{study.background}</p>
        
        {!isExpanded ? (
          <button 
            className="flex items-center text-netflix-red hover:text-white transition-colors duration-300"
            onClick={() => setIsExpanded(true)}
          >
            Learn More <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Approach</h4>
              <p className="text-netflix-muted">{study.approach}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Results</h4>
              <p className="text-netflix-red font-semibold">{study.metrics}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Tools Used</h4>
              <p className="text-netflix-muted">{study.tools}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">Additional Details</h4>
              <p className="text-netflix-muted">{study.additional}</p>
            </div>
            
            <button 
              className="text-netflix-red hover:text-white transition-colors duration-300"
              onClick={() => setIsExpanded(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Selected Work That Moved the Needle</h2>
        <p className="section-subheading opacity-0 animate-fade-in">
          Discover how data-driven strategies delivered measurable results
        </p>
        
        <div className="card-grid relative">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
