import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import MarketingPlayground from '../components/MarketingPlayground';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
      <MarketingPlayground />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
