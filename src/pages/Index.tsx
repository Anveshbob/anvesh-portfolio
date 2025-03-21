
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Random visitor count animation effect
  useEffect(() => {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
      const startCount = 538;
      const endCount = 542;
      let currentCount = startCount;
      
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          currentCount = Math.min(currentCount + 1, endCount);
          counterElement.textContent = currentCount.toString();
        }
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, []);
  
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-heading, .section-subheading, .netflix-card, .animate-on-scroll').forEach(el => {
      if (el.classList.contains('opacity-0')) {
        observer.observe(el);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-netflix-background text-netflix-text font-netflix">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
