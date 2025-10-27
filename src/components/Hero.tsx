
import React, { useEffect, useState, useRef } from 'react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  // State to track current secret index
  const [secretIndex, setSecretIndex] = useState(-1);
  const [showSecret, setShowSecret] = useState(false);
  const [secretTimer, setSecretTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Visitor count state
  const [visitorCount, setVisitorCount] = useState(0);
  const countIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const secretPoints = [
    "I transform data into actionable strategies that consistently exceed KPI targets by 20-30%.",
    "My hybrid approach combines creative intuition with analytical rigor to unlock new growth opportunities.",
    "I've developed an expertise in optimizing CAC and ROI across diverse marketing channels and industries.",
    "My leadership philosophy centers on empowering cross-functional teams to deliver exceptional results.",
    "I excel at identifying untapped market segments and crafting tailored acquisition strategies.",
    "My technical marketing acumen allows me to bridge the gap between marketing vision and technical execution.",
    "I've cultivated the ability to predict emerging trends and pivot strategies before competitors catch on.",
    "My process optimization mindset has consistently reduced operational costs while improving performance.",
    "I've mastered the balance between short-term performance wins and long-term brand building initiatives.",
    "My customer-centric approach enables me to create marketing experiences that truly resonate with audiences."
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
  
  // Initialize and update visitor counter
  useEffect(() => {
    // Check if it's a new week (Monday) to reset counter
    const checkIfNewWeek = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const lastVisit = localStorage.getItem('lastVisitTime');
      let storedCount = localStorage.getItem('visitorCount');
      
      // If it's Monday and either no last visit or last visit was before today
      if (dayOfWeek === 1) {
        const today = new Date().setHours(0, 0, 0, 0);
        
        if (!lastVisit || new Date(parseInt(lastVisit)).setHours(0, 0, 0, 0) < today) {
          // Reset to base count
          storedCount = '540';
          localStorage.setItem('visitorCount', storedCount);
        }
      }
      
      // Update last visit time
      localStorage.setItem('lastVisitTime', Date.now().toString());
      
      return storedCount ? parseInt(storedCount) : 540;
    };
    
    // Get or initialize the visitor count
    const initialCount = checkIfNewWeek();
    setVisitorCount(initialCount);
    
    // Setup interval for incrementing
    const incrementValues = [1, 2, 3, 4, 5];
    
    countIntervalRef.current = setInterval(() => {
      // Get random increment value
      const randomIndex = Math.floor(Math.random() * incrementValues.length);
      const incrementAmount = incrementValues[randomIndex];
      
      // Update count
      setVisitorCount(prevCount => {
        const newCount = prevCount + incrementAmount;
        localStorage.setItem('visitorCount', newCount.toString());
        return newCount;
      });
    }, 5000);
    
    return () => {
      if (countIntervalRef.current) {
        clearInterval(countIntervalRef.current);
      }
    };
  }, []);
  
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
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-white">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://images.samsung.com/is/image/samsung/assets/us/home/062420/HP-KV-S20-Plus-Note-20-heros-1440x640.jpg')] bg-cover bg-center opacity-5">
      </div>
      
      {/* Samsung-style content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl f-pattern">
          <div className="col-span-3">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="mb-3 inline-block px-3 py-1 border border-netflix-red/30 rounded-md text-sm text-black bg-white shadow-sm opacity-0 animate-on-mount">
                Welcome to my portfolio
              </div>
              
              <div className="bg-white text-black px-2 py-0.5 rounded shadow-sm border border-gray-200 animate-on-mount opacity-0 mt-2 md:mt-0">
                <p className="flex items-center justify-center gap-1 text-xs">
                  <span id="visitor-counter" className="text-netflix-red font-semibold counter-animate" data-target={visitorCount}>{visitorCount}</span> 
                  <span>visitors this week</span>
                </p>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 opacity-0 animate-on-mount">
              <span className="bg-gradient-to-r from-netflix-dark via-netflix-red to-blue-400 bg-clip-text text-transparent">Anvesh Seeli</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-netflix-muted mb-8 opacity-0 animate-on-mount">
              Marketing Solution Lead | <span className="text-netflix-red font-medium">4+ Years</span> in Digital & Social Media Marketing
            </h2>
            
            <p className="text-lg text-netflix-muted mb-8 opacity-0 animate-on-mount leading-readable">
              Specializing in customer acquisition, retention, and <span className="text-netflix-red font-medium">ROI-driven campaigns</span>. 
              Proven track record of achieving 17% YoY growth and 35% increase in traffic through optimized CRM strategies. 
              Adept at leveraging data analytics to drive decision-making and deliver measurable business outcomes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-netflix-card border border-gray-200 rounded-lg p-4 shadow-sm opacity-0 animate-on-mount">
                <div className="text-netflix-red text-2xl font-bold mb-1">17%</div>
                <span className="text-black">YoY growth in customer acquisition</span>
              </div>
              
              <div className="bg-netflix-card border border-gray-200 rounded-lg p-4 shadow-sm opacity-0 animate-on-mount">
                <div className="text-netflix-red text-2xl font-bold mb-1">35%</div>
                <span className="text-black">Boost in traffic through CRM optimization</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6 opacity-0 animate-on-mount">
              <a href="#case-studies" className="bg-netflix-red hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-md transition-all duration-300">
                Explore My Work
              </a>
              <a href="#contact" className="border border-netflix-red text-netflix-red py-2.5 px-5 rounded-md hover:bg-netflix-red/5 transition-all duration-300">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="col-span-3 mt-16 opacity-0 animate-on-mount">
            <p className="text-netflix-muted">
              <span className="font-semibold text-black">The Secret Behind My Success</span> — Click to discover
            </p>
            <div 
              className="mt-2 p-4 bg-netflix-card border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300 group relative overflow-hidden shadow-sm"
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
                  <p className="text-black">{secretPoints[secretIndex]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
