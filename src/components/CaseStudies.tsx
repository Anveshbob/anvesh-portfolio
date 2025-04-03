
import React, { useState } from 'react';
import { ChevronDown, BarChart2, Users, Target, Map } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Driving App Installations & Growth for a Leading QSR Company",
    introduction: "As a key member of the marketing team at a market-leading food tech company, I was tasked with increasing app installations and driving customer engagement through digital marketing strategies. The goal was to boost the app's visibility, attract new users, and enhance the overall customer experience.",
    challenge: "At the beginning of my tenure, the app faced several challenges: Low visibility in app stores, limited user engagement, competition from other food delivery apps, and the need for a cohesive digital marketing strategy.",
    approach: "Developed a multi-faceted digital marketing strategy focused on App Store Optimization (ASO), targeted campaigns across multiple platforms, influencer partnerships, CRM optimization, and enhanced in-app experiences. Managed a monthly budget of 7 crores for high-performing campaigns across multiple channels.",
    results: "Achieved 42% increase in app installations, 35% boost in user engagement, 17% year-over-year growth in customer acquisition, and 8% uplift in incremental revenue confirmed by marketing incrementality tests.",
    tools: "Utilized tools like Singular and Google Analytics to measure campaign performance and optimize strategies in real-time.",
    additional: "Partnered with 20,000+ influencers to create authentic content and conducted A/B testing on app features and landing pages to identify high-converting elements.",
    icon: <BarChart2 className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 2,
    title: "Transforming Customer Engagement Through Data-Driven CRM Optimization",
    introduction: "At Jubilant Foodworks, I led initiatives to enhance customer relationships through optimized CRM strategies.",
    challenge: "The existing CRM system needed improvement to better engage customers and convert them into repeat purchasers.",
    approach: "Implemented data-driven optimizations across all digital touchpoints, including in-app experiences and email marketing. Developed custom dashboards to track user behavior and identify key intervention moments.",
    results: "Boosted website traffic by 35%, conversions by 25%, and sales by 11%. These improvements were sustained through continuous monitoring and adjustment of customer journeys.",
    tools: "Utilized Google Analytics, Amplitude, and custom-built dashboards for performance tracking.",
    additional: "Managed the annual operational plan and coordinated with 10+ partners and support agencies to ensure campaign effectiveness.",
    icon: <Users className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 3,
    title: "Revolutionizing Lead Generation with Targeted Marketing Campaigns",
    introduction: "During my internship at Cloudtail India Pvt Ltd, I developed innovative approaches to lead generation for the Amazon Easy franchise.",
    challenge: "The business needed to generate high-quality leads while significantly reducing acquisition costs.",
    approach: "Executed two targeted marketing campaigns with in-depth benchmarking analysis. Created a data-driven location selection tool analyzing over ten key factors including demographic trends, competitive presence, and foot traffic patterns.",
    results: "Generated over 1,500 qualified leads while reducing cost per hot lead by 96%. This approach enabled more efficient resource allocation and faster expansion.",
    tools: "Utilized Excel for data analysis, PowerBI for visualization, and developed custom analysis tools.",
    additional: "Collaborated with regional marketing teams to implement these strategies, ensuring alignment with broader business objectives.",
    icon: <Target className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 4,
    title: "Innovating Real Estate Strategy with Digital Location Selection Tool",
    introduction: "During my internship at Cloudtail India Pvt Ltd, I developed a novel digital approach to store location selection.",
    challenge: "Traditional site selection methods were time-consuming and impractical during lockdown restrictions.",
    approach: "Created a comprehensive digital location selection tool that analyzed demographic data, market trends, competitive landscape, and digital mapping information. This tool eliminated the need for physical site visits while maintaining accuracy.",
    results: "Reduced turn-around-time (TAT) for selecting ideal store locations by 70%, accelerating expansion timelines significantly.",
    tools: "Utilized digital mapping tools, demographic databases, and custom analysis frameworks.",
    additional: "This innovation proved particularly valuable during lockdown periods and continues to provide efficiency benefits beyond the pandemic.",
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
        <p className="text-netflix-muted mb-4">{study.introduction}</p>
        
        {!isExpanded ? (
          <button 
            className="flex items-center text-netflix-red hover:text-netflix-dark transition-colors duration-300"
            onClick={() => setIsExpanded(true)}
          >
            Learn More <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Challenge</h4>
              <p className="text-netflix-muted">{study.challenge}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Approach</h4>
              <p className="text-netflix-muted">{study.approach}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Results</h4>
              <p className="text-netflix-red font-semibold">{study.results}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tools & Technologies</h4>
              <p className="text-netflix-muted">{study.tools}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Additional Insights</h4>
              <p className="text-netflix-muted">{study.additional}</p>
            </div>
            
            <button 
              className="text-netflix-red hover:text-netflix-dark transition-colors duration-300"
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
