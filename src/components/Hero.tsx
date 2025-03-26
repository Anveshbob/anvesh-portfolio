import React, { useEffect, useState } from 'react';

const Hero = () => {
  // State to track current secret index
  const [secretIndex, setSecretIndex] = useState(-1);
  const [showSecret, setShowSecret] = useState(false);
  const [secretTimer, setSecretTimer] = useState<NodeJS.Timeout | null>(null);
  // Add state for visitor counter
  const [visitorCount, setVisitorCount] = useState(539);
  
  const secretPoints = [
    "My approach combines data-driven strategy with creative execution to deliver measurable results.",
    "By focusing on ROI and customer-centric solutions, I've consistently achieved growth targets and optimized marketing performance across channels.",
    "Strategic partnerships and innovative CRM optimization have been key drivers of my success.",
    "My ability to lead cross-functional teams has delivered remarkable business outcomes.",
    "Award-winning marketing strategies that exceed industry standards.",
    "Certified expertise in AI-Powered Performance Ads and digital marketing optimization.",
    "Lean Six Sigma Green Belt certified with a focus on process improvement.",
    "Consistently delivering ROI above industry standards through analytical decision-making.",
    "Digital-only approach revolutionized store location selection during challenging times.",
    "Proven track record of exceeding marketing KPIs through data-backed strategies."
  ];
  
  // Reset secret after 5 seconds
  const startSecretTimer = () => {
    if (secretTimer) {
      clearTimeout(secretTimer);
    }
    
    const timer = setTimeout(() => {
      setShowSecret(false);
      setSecretIndex(-1);
    }, 5000);
    
    setSecretTimer(timer);
  };
  
  // Toggle secret visibility
  const toggleSecret = () => {
    if (showSecret) {
      setShowSecret(false);
      setSecretIndex(-1);
      if (secretTimer) {
        clearTimeout(secretTimer);
        setSecretTimer(null);
      }
    } else {
      const newIndex = Math.floor(Math.random() * secretPoints.length);
      setSecretIndex(newIndex);
      setShowSecret(true);
      startSecretTimer();
    }
  };
  
  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (secretTimer) {
        clearTimeout(secretTimer);
      }
    };
  }, [secretTimer]);
  
  // Animation for the elements when the component mounts
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
        el.classList.remove('opacity-0');
      }, 200 * index);
    });

    // Increment visitor count by 1 on each mount
    setVisitorCount(prevCount => prevCount + 1);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center netflix-section pt-32 pb-20">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4b-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-netflix-background/90"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="mb-3 inline-block px-3 py-1 border border-netflix-red rounded-full text-sm text-netflix-red opacity-0 animate-on-mount">
            Welcome to my portfolio
          </div>
          
          <h1 className="netflix-title opacity-0 animate-on-mount">
            <span className="text-shadow">Anvesh Seeli</span>
          </h1>
          
          <h2 className="netflix-subtitle opacity-0 animate-on-mount">
            Results-driven Marketing Leader | 4+ Years in Digital & Social Media Marketing
          </h2>
          
          <p className="text-lg text-netflix-muted mb-8 opacity-0 animate-on-mount">
            Specializing in customer acquisition, retention, and ROI-driven campaigns
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-on-mount">
            <a href="#case-studies" className="netflix-button">
              Explore My Work
            </a>
            <a href="#contact" className="border border-white text-white py-3 px-6 rounded hover:bg-white/10 transition-all duration-300">
              Get In Touch
            </a>
          </div>
          
          <div className="mt-16 opacity-0 animate-on-mount">
            <p className="text-netflix-muted">
              <span className="font-semibold text-white">The Secret Behind My Success</span> — Click to discover
            </p>
            <div 
              className="mt-2 p-4 bg-netflix-card rounded-md cursor-pointer hover:bg-netflix-dark transition-all duration-300 group relative overflow-hidden"
              onClick={toggleSecret}
            >
              {!showSecret ? (
                <div className="lock-icon flex items-center justify-center py-4 animate-pulse">
                  <svg className="w-8 h-8 text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              ) : (
                <div className="animate-fade-in py-4">
                  <p className="text-white">{secretPoints[secretIndex]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-netflix-muted mb-2 opacity-0 animate-on-mount">
          <span id="visitor-counter" className="text-white font-semibold">{visitorCount}</span> people visited this site this week
        </p>
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
