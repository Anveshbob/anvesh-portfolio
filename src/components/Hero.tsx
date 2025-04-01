
import React, { useEffect, useState, useRef } from 'react';
import ThreeBackground from './ThreeBackground';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  // State to track current secret index
  const [secretIndex, setSecretIndex] = useState(-1);
  const [showSecret, setShowSecret] = useState(false);
  const [secretTimer, setSecretTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Initial visitor count - will be incremented on component mount
  const [visitorCount, setVisitorCount] = useState(540);
  const countIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
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
  
  // Start visitor counter increment with random values
  useEffect(() => {
    // Array of possible increment values
    const incrementValues = [1, 2, 3, 4];
    let currentIncrementIndex = 0;
    
    countIntervalRef.current = setInterval(() => {
      // Get the current increment value from the array
      const incrementAmount = incrementValues[currentIncrementIndex];
      
      // Update the visitor count by the current increment amount
      setVisitorCount(prevCount => prevCount + incrementAmount);
      
      // Move to the next increment value in the array, cycling back to the start if necessary
      currentIncrementIndex = (currentIncrementIndex + 1) % incrementValues.length;
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
    <section id="home" className="relative min-h-screen flex items-center netflix-section pt-32 pb-20">
      {/* 3D Background */}
      <ThreeBackground />
      
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4b-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-5">
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl f-pattern">
          <div className="col-span-3">
            <div className="mb-3 inline-block px-3 py-1 border border-netflix-gold rounded-full text-sm text-netflix-gold opacity-0 animate-on-mount btn-3d">
              Welcome to my portfolio
            </div>
            
            <h1 className="netflix-title opacity-0 animate-on-mount text-3d">
              <span>Anvesh Seeli</span>
            </h1>
            
            <h2 className="netflix-subtitle opacity-0 animate-on-mount">
              Results-driven Marketing Leader | <span className="highlight">4+ Years</span> in Digital & Social Media Marketing
            </h2>
            
            <p className="text-lg text-netflix-muted mb-8 opacity-0 animate-on-mount leading-readable">
              Specializing in customer acquisition, retention, and <span className="highlight">ROI-driven campaigns</span>
            </p>
            
            <div className="data-point opacity-0 animate-on-mount card-3d glassmorphism p-3 mb-4">
              <div className="data-number">42%</div>
              <span>Increase in customer acquisition</span>
            </div>
            
            <div className="data-point opacity-0 animate-on-mount card-3d glassmorphism p-3 mb-4">
              <div className="data-number">35%</div>
              <span>Boost in traffic through CRM optimization</span>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6 opacity-0 animate-on-mount">
              <a href="#case-studies" className="netflix-button btn-3d">
                Explore My Work
              </a>
              <a href="#contact" className="border border-netflix-green text-netflix-green py-3 px-6 rounded hover:bg-netflix-green/10 transition-all duration-300 btn-3d">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="col-span-3 mt-16 opacity-0 animate-on-mount">
            <p className="text-netflix-muted">
              <span className="font-semibold text-netflix-text">The Secret Behind My Success</span> — Click to discover
            </p>
            <div 
              className="mt-2 p-4 bg-netflix-card rounded-md cursor-pointer hover:bg-netflix-card/80 transition-all duration-300 group relative overflow-hidden rotate-hover preserve-3d shadow-lg"
              onClick={toggleSecret}
            >
              {!showSecret ? (
                <div className="lock-icon flex items-center justify-center py-4 animate-pulse">
                  <svg className="w-8 h-8 text-netflix-red float-element" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              ) : (
                <div className="animate-fade-in py-4">
                  <p className="text-netflix-text">{secretPoints[secretIndex]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Visitor counter moved much lower to avoid overlap */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center z-20">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="bg-netflix-card/70 backdrop-blur-sm text-netflix-text px-4 py-2 rounded-full shadow-md border border-netflix-gold/30 animate-on-mount opacity-0 cursor-help">
              <p className="flex items-center justify-center gap-2">
                <span id="visitor-counter" className="text-netflix-red font-semibold counter-animate" data-target={visitorCount}>{visitorCount}</span> 
                <span>people visited this site this week</span>
                <span className="text-xs text-netflix-gold ml-1">(but my campaigns generate 1000x that traffic)</span>
              </p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-netflix-card text-netflix-text border-netflix-gold/30">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Real-time Visitor Counter</h4>
                <p className="text-sm">
                  This counter updates every 5 seconds with varying increments to simulate real traffic patterns. My actual marketing campaigns typically generated 5,400+ visitors per week for target audiences.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="animate-bounce mt-4">
          <svg className="w-6 h-6 mx-auto text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
