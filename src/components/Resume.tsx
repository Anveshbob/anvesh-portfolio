
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
        title="Deputy Manager, Marketing"
        company="Jubilant Foodworks Ltd"
        details={[
          "Managed a diverse digital marketing portfolio encompassing social media, Facebook, UAC, YouTube, SEM, influencer, affiliate, and brand partnership channels",
          "Drove Pan-India new customer acquisition and retention, achieving a 17% year-over-year growth rate while managing a monthly budget of 7 crores",
          "Spearheaded ROI and CAC-focused performance campaigns for the market-leading QSR brand, prioritizing visibility and profitability",
          "Optimized CRM strategies and in-app experiences to boost traffic by 35%, conversions by 25%, and sales by 11%",
          "Leveraged data analytics platforms such as Singular, Google Analytics, Google Ads, and Facebook Ads Manager to measure and report campaign performance",
          "Conducted five marketing incrementality tests, resulting in a 2 crore+ increase in average monthly spend and an 8% uplift in incremental revenue",
          "Employed data-driven insights to optimize campaigns and troubleshoot challenges. Developed and executed the annual operational plan",
          "Delivered impactful weekly and quarterly presentations to a cross-functional audience of 30+ stakeholders, collaborating with 10+ partners and support agencies"
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
      category: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8 text-netflix-red" />,
      description: "Expertise in various social media channels",
      skills: ["Google Ads", "Facebook-Meta Ads", "SEO", "SEM", "Email Marketing", "Influencer Marketing", "Programmatic"]
    },
    {
      category: "Data Analysis",
      icon: <Database className="w-8 h-8 text-netflix-red" />,
      description: "Proficiency in using data analytics tools to measure and optimize processes and campaign performance",
      skills: ["Excel", "Powerpoint", "PowerBI", "Google Analytics", "Ad Managers", "Singular", "Amplitude", "SQL", "Cube"]
    },
    {
      category: "Customer Acquisition & Retention",
      icon: <Users className="w-8 h-8 text-netflix-red" />,
      description: "Proven ability to implement customer growth and retention strategies through CRM",
      skills: ["CRM Strategy", "User Engagement", "Retention Optimization"]
    },
    {
      category: "Strategic Thinking",
      icon: <Target className="w-8 h-8 text-netflix-red" />,
      description: "Demonstrated ability to think strategically and develop data-driven marketing plans",
      skills: ["Marketing Planning", "Campaign Optimization", "Performance Analysis"]
    },
    {
      category: "Collaboration",
      icon: <Share2 className="w-8 h-8 text-netflix-red" />,
      description: "Experience working effectively with cross-functional teams including CXOs and agencies",
      skills: ["Cross-functional Collaboration", "Stakeholder Management", "Agency Partnerships"]
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

export default Resume;
