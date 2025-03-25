import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, Users, Target, Map } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const caseStudies = [
  {
    id: 1,
    title: "Driving Customer Growth at Jubilant Foodworks",
    background: "As Deputy Manager of Marketing at Jubilant Foodworks from August 2021 to March 2024, I was responsible for managing a comprehensive digital marketing portfolio with a monthly budget of ₹7 crores.",
    narrative: `
      <p>Recognizing the need for sustainable customer acquisition in a competitive quick-service restaurant market, I developed and executed ROI-focused performance marketing campaigns across multiple channels including social media, Facebook, UAC, YouTube, SEM, influencer marketing, affiliate programs, and brand partnerships.</p>
      
      <p>Through meticulous budget allocation and continuous optimization, we achieved a remarkable 17% year-over-year growth in customer acquisition. This growth was sustained through careful monitoring using analytics platforms like Singular, Google Analytics, Google Ads, and Facebook Ads Manager.</p>
      
      <p>Five marketing incrementality tests conducted during this period resulted in a significant ₹2 crore+ increase in average monthly spend, demonstrating an 8% uplift in incremental revenue. This data-driven approach allowed us to confidently allocate resources to the most effective channels.</p>
    `,
    metrics: "17% YoY customer acquisition growth",
    icon: <BarChart2 className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 2,
    title: "Optimizing Customer Engagement Through CRM Strategies",
    background: "During my tenure at Jubilant Foodworks, I spearheaded CRM strategy optimization and in-app experience enhancement initiatives.",
    narrative: `
      <p>Identifying opportunities to deepen customer relationships, I implemented data-driven optimizations to improve user engagement and conversion pathways across our digital platforms.</p>
      
      <p>By leveraging Google Analytics, Amplitude, and custom dashboards, we were able to track user behavior patterns and identify key moments for intervention. This approach led to a 35% increase in website traffic, 25% improvement in conversions, and an 11% boost in sales.</p>
      
      <p>Beyond the technical implementation, I developed and executed the annual operational plan while facilitating weekly and quarterly presentations to over 30 stakeholders. This required balancing diverse perspectives while maintaining focus on our core objectives.</p>
    `,
    metrics: "35% traffic increase, 25% conversion improvement",
    icon: <Users className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 3,
    title: "Cost-Efficient Lead Generation for Amazon Easy Franchise",
    background: "During my internship at Cloudtail India Pvt Ltd, I contributed to the Amazon Easy franchise marketing strategy through targeted campaigns and benchmarking analysis.",
    narrative: `
      <p>Facing the challenge of generating quality leads while minimizing acquisition costs, I executed two targeted marketing campaigns that utilized in-depth benchmarking analysis.</p>
      
      <p>This strategic approach generated over 1,500 qualified leads while reducing the cost per hot lead by an impressive 96%. The success was achieved through careful channel selection and message customization based on demographic and behavioral data.</p>
      
      <p>I also created a data-driven location selection tool that analyzed over ten key factors including foot traffic, demographic information, and competitive presence. This tool enabled our team to make informed decisions without the need for physical site visits, saving both time and resources.</p>
    `,
    metrics: "1,500+ leads generated, 96% cost reduction",
    icon: <Target className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 4,
    title: "Innovative Digital Approach to Store Location Selection",
    background: "During my internship at Cloudtail India Pvt Ltd, I developed a novel digital-only approach for store location selection that proved invaluable during lockdown restrictions.",
    narrative: `
      <p>Recognizing the limitations of traditional site selection methods, particularly during periods of restricted movement, I created a comprehensive digital location selection tool.</p>
      
      <p>This tool analyzed multiple factors including demographic data, market trends, competitive landscape, and digital mapping information to identify optimal locations without requiring physical visits.</p>
      
      <p>The implementation of this approach reduced the time-to-action (TAT) for selecting ideal store locations by 70%, significantly accelerating our expansion timeline. This innovation was particularly valuable during lockdown when physical site visits were impossible, but continues to provide efficiency benefits beyond the pandemic.</p>
    `,
    metrics: "70% reduction in location selection time",
    icon: <Map className="w-8 h-8 text-netflix-red" />
  }
];

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`netflix-card opacity-0 animate-fade-in ${isExpanded ? 'md:col-span-3 lg:col-span-3' : ''}`}
      style={{ animationDelay: `${study.id * 200}ms` }}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center">
          {study.icon}
          <span className="ml-3 text-netflix-red font-semibold text-sm">{study.metrics}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
        <p className="text-netflix-muted mb-4">{study.background}</p>
        
        {!isExpanded ? (
          <button 
            className="flex items-center text-netflix-red hover:text-white transition-colors duration-300"
            onClick={() => setIsExpanded(true)}
          >
            Read Full Case Study <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-6" dangerouslySetInnerHTML={{ __html: study.narrative }} />
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">Key Outcome</h4>
              <p className="text-netflix-red font-semibold text-lg">{study.metrics}</p>
            </div>
            
            <button 
              className="text-netflix-red hover:text-white transition-colors duration-300"
              onClick={() => setIsExpanded(false)}
            >
              Collapse
            </button>
          </div>
        )}
      </div>
    </motion.div>
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
        
        <div className="card-grid relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
