
import React, { useEffect } from 'react';

const Hero = () => {
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
              onClick={(e) => {
                const target = e.currentTarget;
                target.querySelector('.hidden-content')?.classList.toggle('hidden');
                target.querySelector('.lock-icon')?.classList.toggle('hidden');
              }}
            >
              <div className="lock-icon flex items-center justify-center py-4">
                <svg className="w-8 h-8 text-netflix-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div className="hidden-content hidden animate-fade-in">
                <p className="text-white mb-2">
                  My approach combines data-driven strategy with creative execution to deliver measurable results.
                </p>
                <p className="text-netflix-muted">
                  By focusing on ROI and customer-centric solutions, I've consistently achieved growth targets and optimized marketing performance across channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-netflix-muted mb-2 opacity-0 animate-on-mount">
          <span id="visitor-counter" className="text-white font-semibold">538</span> people visited this site this week
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
