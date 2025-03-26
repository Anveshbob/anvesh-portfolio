
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
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
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
