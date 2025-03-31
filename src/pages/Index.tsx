
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
  
  // Real data for Jubilant Foodworks performance
  const customerAcquisitionData = [
    { label: "2021", value: 100, color: "#2563EB", details: "Base year: Reference point" },
    { label: "2022", value: 117, color: "#10B981", details: "17% YoY growth in customer acquisition" },
    { label: "2023", value: 135, color: "#F59E0B", details: "15% additional growth on enhanced baseline" }
  ];
  
  const trafficOptimizationData = [
    { label: "Before", value: 100, color: "#2563EB", details: "Base traffic level" },
    { label: "After CRM", value: 135, color: "#10B981", details: "35% increase through CRM optimization" }
  ];
  
  const revenueGrowthData = [
    { label: "Q1", value: 950, color: "#2563EB", details: "Q1 FY2022-23: ₹950 crores" },
    { label: "Q2", value: 1050, color: "#10B981", details: "Q2 FY2022-23: ₹1,050 crores" },
    { label: "Q3", value: 1150, color: "#F59E0B", details: "Q3 FY2022-23: ₹1,150 crores" },
    { label: "Q4", value: 1200, color: "#9333EA", details: "Q4 FY2022-23: ₹1,200 crores" }
  ];
  
  const digitalTransformationData = [
    { label: "Digital", value: 65, color: "#2563EB", details: "65% of orders through digital platforms" },
    { label: "Traditional", value: 35, color: "#10B981", details: "35% through traditional channels" }
  ];
  
  const marketExpansionData = [
    { label: "2022", value: 1400, color: "#2563EB", details: "1,400+ outlets in 2022" },
    { label: "2023", value: 1600, color: "#10B981", details: "1,600+ outlets in 2023" }
  ];
  
  const costReductionData = [
    { label: "Before", value: 100, color: "#2563EB", details: "Original cost per lead" },
    { label: "After", value: 4, color: "#10B981", details: "96% reduction in cost per lead" }
  ];
  
  const npsScoreData = [
    { label: "2022", value: 65, color: "#2563EB", details: "NPS of 65 in 2022" },
    { label: "2023", value: 70, color: "#10B981", details: "NPS of 70 in 2023" },
    { label: "2024", value: 75, color: "#F59E0B", details: "Target NPS of 75+ for 2024" }
  ];

  return (
    <div className="min-h-screen bg-netflix-background text-netflix-text font-inter">
      <Navbar />
      <Hero />
      
      <div className="netflix-section py-16">
        <div className="container mx-auto">
          <h2 className="section-heading">Performance Metrics</h2>
          <p className="section-subheading opacity-0 animate-fade-in">
            Real performance data from my tenure at Jubilant Foodworks
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ThreeDChart 
              data={customerAcquisitionData} 
              title="Customer Acquisition Growth" 
              height={300}
              chartType="bar"
              tooltipText="17% YoY growth in customer acquisition during my tenure"
            />
            <ThreeDChart 
              data={trafficOptimizationData} 
              title="Traffic Growth Through CRM Optimization" 
              height={300}
              chartType="bar"
              tooltipText="35% boost in traffic through strategic CRM optimization"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ThreeDChart 
              data={revenueGrowthData} 
              title="Quarterly Revenue Growth (in Crores)" 
              height={300}
              chartType="line"
              tooltipText="Steady revenue growth across quarters, reaching ₹1,200 crores in Q4"
            />
            <ThreeDChart 
              data={digitalTransformationData} 
              title="Order Channel Distribution" 
              height={300}
              chartType="pie"
              tooltipText="65% of orders came through digital platforms"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ThreeDChart 
              data={marketExpansionData} 
              title="Outlet Expansion" 
              height={250}
              chartType="bar"
              tooltipText="Expanded from 1,400+ to 1,600+ outlets"
            />
            <ThreeDChart 
              data={costReductionData} 
              title="Cost Per Lead Reduction" 
              height={250}
              chartType="bar"
              tooltipText="96% reduction in cost per lead through optimization"
            />
            <ThreeDChart 
              data={npsScoreData} 
              title="Net Promoter Score Growth" 
              height={250}
              chartType="line"
              tooltipText="NPS improved from 65 to 70, targeting 75+ in 2024"
            />
          </div>
        </div>
      </div>
      
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
            <div className="bg-white/80 backdrop-blur-md text-netflix-text px-4 py-2 rounded-full shadow-lg border border-netflix-red/20 flex items-center gap-2 cursor-help hover:bg-white transition-all duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Performance Insights</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 p-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Marketing Performance Summary</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Customer Acquisition</span>
                  <span className="text-sm font-medium">+17% YoY</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Traffic Growth</span>
                  <span className="text-sm font-medium">+35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Digital Orders</span>
                  <span className="text-sm font-medium">65% of Total</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Outlet Expansion</span>
                  <span className="text-sm font-medium">1,600+</span>
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
