
import React, { useState } from 'react';
import { Download, ChevronRight, ChevronDown } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Interactive Resume</h2>
        <p className="section-subheading opacity-0 animate-fade-in">
          Explore my professional journey and skillset
        </p>
        
        <div className="mt-12">
          <Timeline />
        </div>
        
        <div className="mt-16">
          <Skills />
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in">
          <a 
            href="#" 
            className="netflix-button inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download feature will be implemented in the production version.");
            }}
          >
            <Download className="mr-2 w-5 h-5" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <div className="space-y-12">
      <TimelineItem 
        years="2021-2024"
        title="Deputy Manager, Marketing"
        company="Jubilant Foodworks Ltd"
        details={[
          "Managed digital marketing portfolio across multiple channels with a monthly budget of 7 crores",
          "Achieved 17% YoY customer acquisition growth",
          "Spearheaded ROI and CAC-focused performance campaigns",
          "Optimized CRM strategies boosting traffic by 35%"
        ]}
      />
      
      <TimelineItem 
        years="2024-present"
        title="Product Leader Marketing"
        company="Brane Enterprises Pvt Ltd"
        details={[
          "Led product team of managers, designers, and engineers",
          "Aligned product vision with business objectives through robust roadmaps",
          "Fostered collaborative and innovative culture"
        ]}
      />
      
      <TimelineItem 
        years="2017-2018"
        title="Asst. Sales Manager"
        company="Simply Grow Technologies Pvt Ltd"
        details={[
          "Managed strategic partnerships with 35 BSE-listed AMC fund houses",
          "Drove customer acquisition generating 12,500 registrations in seven months",
          "Implemented process improvements including "Track Your Order" feature"
        ]}
      />
    </div>
  );
};

const TimelineItem = ({ years, title, company, details }: {
  years: string;
  title: string;
  company: string;
  details: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="opacity-0 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="text-netflix-red font-semibold text-lg">{years}</div>
          <div className="hidden md:block h-full w-px bg-netflix-red/20 ml-2 mt-2"></div>
        </div>
        
        <div className="md:w-3/4">
          <div 
            className="netflix-card cursor-pointer hover:bg-netflix-dark transition-all duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-netflix-muted">{company}</p>
                </div>
                <button className="text-netflix-red">
                  {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
              
              {isExpanded && (
                <div className="mt-4 space-y-2 animate-fade-in">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-netflix-red mr-2">•</div>
                      <p className="text-netflix-muted">{detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Digital Marketing",
      skills: ["Google Ads", "Facebook-Meta Ads", "SEO", "SEM", "Email Marketing", "Influencer Marketing", "Programmatic"]
    },
    {
      category: "Data Analysis",
      skills: ["Excel", "PowerBI", "Google Analytics", "SQL", "Singular", "Amplitude"]
    },
    {
      category: "Customer Acquisition & Retention",
      skills: ["CRM Strategy Implementation", "User Engagement", "Conversion Optimization"]
    },
    {
      category: "Strategic Thinking",
      skills: ["Data-driven Marketing Planning", "Campaign Optimization", "Performance Analysis"]
    },
    {
      category: "Collaboration",
      skills: ["Cross-functional Team Management", "Stakeholder Communication", "Project Leadership"]
    }
  ];
  
  return (
    <div className="netflix-card p-6">
      <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
            <h4 className="text-netflix-red font-semibold mb-3">{category.category}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-netflix-dark px-3 py-1 rounded-full text-sm hover:bg-netflix-red transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
