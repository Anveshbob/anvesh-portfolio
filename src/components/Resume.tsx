
import React, { useState } from 'react';
import { Download, ChevronRight, ChevronDown, TrendingUp, Database, Users, Target, Share2, Crown } from 'lucide-react';

const Resume = () => {
  // Direct download function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Anvesh_Seeli_Resume.pdf';
    link.download = 'Anvesh_Seeli_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="resume" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Interactive Resume</h2>
        <p className="section-subheading opacity-0 animate-fade-in">
          Explore my professional journey and skillset
        </p>
        
        <div className="mt-12">
          <Education />
        </div>
        
        <div className="mt-12">
          <Timeline />
        </div>
        
        <div className="mt-16">
          <Skills />
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in">
          <button 
            onClick={downloadResume}
            className="netflix-button inline-flex items-center text-white"
          >
            <Download className="mr-2 w-5 h-5" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  // Ordered chronologically, present to past
  return (
    <div className="space-y-12">
      <TimelineItem 
        years="Jun'24 - Present"
        title="Performance Marketing Manager (Pet Nutrition)"
        company="Mars International"
        details={[
          "Delivered 655K product samples in Q3 2024—achieving 50% of the annual target in just 3 months—while reducing cost-per-sample by 40% via GPay, PhonePe & Paytm partnerships",
          "Orchestrate end-to-end performance strategy for Pedigree, Whiskas, and Sheba across Google Ads (SEM), Meta Ads, and Performance Max (PMax) channels",
          "Spearheading the Data-Driven Marketing (DDM) Programme for Mars Pet Nutrition India, focusing on new channel acquisitions to enhance cost efficiencies and revenue generation",
          "Pioneer social commerce innovation on Instagram Shop to reduce friction in the customer journey and improve conversion rates",
          "Utilized GA4 for in-depth website performance tracking, attribution modeling, and audience analysis to inform future media spend"
        ]}
      />
      
      <TimelineItem 
        years="Mar'24 - Feb'25"
        title="Product Leader Marketing"
        company="Brane Enterprises Pvt Ltd"
        details={[
          "Led and developed high-performing product team of product managers, designers, and engineers, fostering a collaborative and innovative culture",
          "Aligned product vision with business objectives by constructing robust roadmaps and establishing clear goals"
        ]}
      />
      
      <TimelineItem 
        years="Aug'21 – Mar'24"
        title="Deputy Manager - Digital Marketing"
        company="Jubilant Foodworks Ltd (Domino's)"
        details={[
          "Achieved 17% YoY customer acquisition growth while managing a monthly marketing budget of ₹7 Crore with strict ROI accountability",
          "Designed and executed five incrementality tests, generating a ₹2 Crore increase in average monthly spend and 8% uplift in incremental revenue",
          "Delivered a 35% increase in traffic and 25% improvement in conversion rates through CRM and lifecycle optimization, boosting sales by 11%",
          "Managed a diverse digital marketing portfolio across social media, Facebook, UAC, YouTube, SEM, influencer, affiliate, and brand partnership channels",
          "Leveraged Singular, Google Analytics, Google Ads, and Facebook Ads Manager to measure, report, and optimize campaign performance",
          "Delivered impactful weekly and quarterly presentations to a cross-functional audience of 30+ stakeholders, collaborating with 10+ partners and agencies"
        ]}
      />
      
      <TimelineItem 
        years="Summer '20"
        title="S&M Intern"
        company="Cloudtail India Pvt Ltd"
        details={[
          "Contributed to Amazon Easy franchise marketing strategy by developing a scalable model for identifying flagship store locations",
          "Generated a robust lead pipeline by executing two targeted marketing campaigns, resulting in over 1,500 leads and a 5 times increase in hot leads",
          "Optimized lead generation costs by conducting in-depth benchmarking analysis, reducing cost per hot lead by 96%",
          "Developed a data-driven location selection tool to expedite real estate search process by analyzing over ten key factors and reducing identification time by 70%",
          "Collaborated with regional marketing teams to streamline operations and achieve business objectives"
        ]}
      />
      
      <TimelineItem 
        years="Summer '20"
        title="Live Project"
        company="Jumia Egypt"
        details={[
          "Implemented data-driven strategies to reduce return rates in Jumia Egypt by 30%, identifying over 20 opportunities and policy changes",
          "Developed a comprehensive return rate dashboard to track key performance indicators and inform decision-making",
          "Enhanced user experience by conceptualizing and implementing six user-centric initiatives",
          "Optimized logistics operations through benchmarking and process improvement, resulting in a 10% efficiency gain"
        ]}
      />
      
      <TimelineItem 
        years="Dec'17 - Nov'18"
        title="Asst. Sales Manager"
        company="Simply Grow Technologies Pvt Ltd"
        details={[
          "Managed strategic partnerships with 35 BSE-listed AMC fund houses, the Bombay Stock Exchange, and Simply Grow Tech Pvt Ltd",
          "Drove B2B and B2C growth, expanding the SIP book value by Rs. 120 crores and increasing lump sum investments by Rs. 42 crores",
          "Achieved rapid customer acquisition, generating over 12,500 registrations in seven months with a peak month-over-month growth rate of 190%",
          "Oversaw customer support operations, managing a team of 5 to resolve over 11,000 tickets and reduce first response time by six hours",
          "Implemented process improvements, including the development and launch of the \"Track Your Order\" feature",
          "Delivered exceptional customer satisfaction, maintaining a 95% customer satisfaction rating"
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
            className="netflix-card cursor-pointer hover:bg-netflix-dark hover:text-white transition-all duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-netflix-muted group-hover:text-white hover:text-white transition-colors duration-300">{company}</p>
                </div>
                <button className="text-netflix-red hover:text-white transition-colors duration-300">
                  {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
              
              {isExpanded && (
                <div className="mt-4 space-y-2 animate-fade-in">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-netflix-red hover:text-white transition-colors duration-300 mr-2">•</div>
                      <p className="text-netflix-muted hover:text-white transition-colors duration-300">{detail}</p>
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
      category: "Marketing Platforms",
      icon: <TrendingUp className="w-8 h-8 text-netflix-red" />,
      description: "End-to-end campaign execution across paid and organic channels",
      skills: ["Google Ads (Search, PMax, UAC)", "Meta Ads", "YouTube", "Social Commerce", "Influencer Marketing", "Programmatic"]
    },
    {
      category: "Analytics & Data",
      icon: <Database className="w-8 h-8 text-netflix-red" />,
      description: "Data-driven decision making with advanced analytics tools",
      skills: ["GA4", "SQL", "PowerBI", "Amplitude", "Singular", "Marketing Mix Modeling"]
    },
    {
      category: "Strategy",
      icon: <Target className="w-8 h-8 text-netflix-red" />,
      description: "Strategic planning and optimization for measurable business outcomes",
      skills: ["GTM Strategy", "Incrementality Testing", "CAC Optimization", "CRM & Lifecycle", "Revenue Planning"]
    },
    {
      category: "Customer Acquisition & Retention",
      icon: <Users className="w-8 h-8 text-netflix-red" />,
      description: "Proven ability to scale growth and retain customers across industries",
      skills: ["Customer Growth Strategy", "Retention Optimization", "User Journey Design", "Conversion Rate Optimization"]
    },
    {
      category: "Collaboration & Leadership",
      icon: <Share2 className="w-8 h-8 text-netflix-red" />,
      description: "Cross-functional leadership with CXOs, agencies, and global teams",
      skills: ["Cross-functional Leadership", "Stakeholder Management", "Agency Partnerships", "Team Development"]
    }
  ];
  
  return (
    <div className="netflix-card p-6">
      <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="flex items-center gap-3 mb-3">
              {category.icon}
              <h4 className="text-netflix-red font-semibold">{category.category}</h4>
            </div>
            <p className="text-netflix-muted mb-3">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-white hover:bg-netflix-red transition-colors duration-300"
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

const Education = () => {
  return (
    <div className="netflix-card p-6">
      <h3 className="text-2xl font-semibold mb-6">Education</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="opacity-0 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <Crown className="w-6 h-6 text-netflix-red" />
            <h4 className="text-lg font-semibold">MBA</h4>
          </div>
          <p className="text-netflix-red font-medium">Indian Institute of Management Calcutta (IIM Calcutta)</p>
          <p className="text-netflix-muted">2019 – 2021 | Major: Marketing | Minor: Organizational Behavior</p>
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-2">
            <Crown className="w-6 h-6 text-netflix-red" />
            <h4 className="text-lg font-semibold">B.Tech (Mechanical Engineering)</h4>
          </div>
          <p className="text-netflix-red font-medium">National Institute of Technology, Calicut (NIT Calicut)</p>
          <p className="text-netflix-muted">Graduated 2017</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
