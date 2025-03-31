
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThreeDChart from '../components/ThreeDChart';

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

  // Data for 3D charts
  const marketingPerformanceData = [
    { label: "SEO", value: 75, color: "#2563EB" },
    { label: "SEM", value: 85, color: "#10B981" },
    { label: "Social", value: 92, color: "#F59E0B" },
  ];
  
  const acquisitionData = [
    { label: "2020", value: 42, color: "#2563EB" },
    { label: "2021", value: 65, color: "#10B981" },
    { label: "2022", value: 78, color: "#F59E0B" },
  ];
  
  return (
    <div className="min-h-screen bg-netflix-background text-netflix-text font-inter">
      <Navbar />
      <Hero />
      <div className="netflix-section">
        <div className="container mx-auto">
          <h2 className="section-heading">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d">
              <ThreeDChart 
                data={marketingPerformanceData} 
                title="Channel Performance" 
                height={300}
              />
            </div>
            <div className="card-3d">
              <ThreeDChart 
                data={acquisitionData} 
                title="Customer Acquisition Growth" 
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
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
