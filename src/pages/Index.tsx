
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          // For counter elements
          if (entry.target.classList.contains('counter-animate')) {
            animateCounter(entry.target as HTMLElement);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-heading, .section-subheading, .netflix-card, .animate-on-scroll, .counter-animate').forEach(el => {
      if (el.classList.contains('opacity-0')) {
        observer.observe(el);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Function to animate counters
  const animateCounter = (element: HTMLElement) => {
    const target = parseInt(element.getAttribute('data-target') || '0', 10);
    const duration = 2000; // ms
    const stepTime = 50; // ms
    const steps = duration / stepTime;
    const stepValue = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, stepTime);
  };

  return (
    <div className="min-h-screen bg-netflix-background text-netflix-text font-inter">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Resume />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Interactive data tooltip that follows mouse */}
      <div className="fixed bottom-6 right-6 z-50">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="bg-netflix-card/80 backdrop-blur-md text-netflix-text px-4 py-2 rounded-full shadow-lg border border-netflix-red/20 flex items-center gap-2 cursor-help hover:bg-netflix-card transition-all duration-300">
              <div className="w-3 h-3 bg-netflix-red rounded-full animate-pulse"></div>
              <span className="font-semibold">Performance Insights</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 p-4 bg-netflix-card border-netflix-gold/30 text-netflix-text">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Marketing Performance Summary</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-netflix-muted">Customer Acquisition</span>
                  <span className="text-sm font-medium text-netflix-text">+17% YoY</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-netflix-muted">Traffic Growth</span>
                  <span className="text-sm font-medium text-netflix-text">+35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-netflix-muted">Digital Orders</span>
                  <span className="text-sm font-medium text-netflix-text">65% of Total</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-netflix-muted">Outlet Expansion</span>
                  <span className="text-sm font-medium text-netflix-text">1,600+</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Index;
