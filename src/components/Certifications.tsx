
import React from 'react';
import { Award, BookCheck, Book, GraduationCap, CheckCircle, Database, Target, Globe, Star, TrendingUp } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Certifications</h2>
        <p className="section-subheading opacity-0 animate-fade-in">
          Professional qualifications and specialized training
        </p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CertificationCategory 
            title="Technical Certifications"
            icon={<Database className="w-8 h-8 text-netflix-red" />}
            certifications={[
              { name: "Google Ads Apps Certification", icon: <CheckCircle className="w-5 h-5" /> },
              { name: "AI-Powered Performance Ads Certification", icon: <TrendingUp className="w-5 h-5" /> },
              { name: "Google Ads - Measurement Certification", icon: <Target className="w-5 h-5" /> },
              { name: "Advanced Google Analytics Implementation", icon: <CheckCircle className="w-5 h-5" /> },
              { name: "Facebook Ads Manager Expert", icon: <Globe className="w-5 h-5" /> }
            ]}
          />
          
          <CertificationCategory 
            title="Process Improvement"
            icon={<BookCheck className="w-8 h-8 text-netflix-red" />}
            certifications={[
              { name: "Lean Six Sigma Green Belt (KPMG, 2020)", icon: <Award className="w-5 h-5" /> },
              { name: "Certified in Data-Driven Marketing Optimization", icon: <Star className="w-5 h-5" /> }
            ]}
          />
          
          <CertificationCategory 
            title="Professional Development"
            icon={<GraduationCap className="w-8 h-8 text-netflix-red" />}
            certifications={[
              { name: "Digital Marketing Strategy Certification", icon: <Book className="w-5 h-5" /> },
              { name: "Influencer Marketing Specialist", icon: <Star className="w-5 h-5" /> },
              { name: "SEO/SEM Professional Certification", icon: <Target className="w-5 h-5" /> },
              { name: "LinkedIn Learning: Marketing Analytics, Data Visualization for Marketers", icon: <Database className="w-5 h-5" /> }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const CertificationCategory = ({ 
  title, 
  icon, 
  certifications 
}: { 
  title: string; 
  icon: React.ReactNode; 
  certifications: { name: string; icon: React.ReactNode }[];
}) => {
  return (
    <div className="netflix-card p-6 opacity-0 animate-fade-in hover-scale">
      <div className="flex items-center gap-3 mb-6 border-b border-netflix-dark pb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li 
            key={index} 
            className="flex items-center gap-3 p-3 rounded-md hover:bg-netflix-dark hover:text-white transition-colors duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="text-netflix-red group-hover:text-white">{cert.icon}</span>
            <span>{cert.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
