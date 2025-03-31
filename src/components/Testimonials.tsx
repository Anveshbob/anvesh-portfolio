
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Anvesh's strategic approach to digital marketing transformed our customer acquisition efforts. His data-driven campaigns delivered measurable results that significantly impacted our business.",
    name: "Marketing Director",
    company: "Jubilant Foodworks Ltd",
    designation: "Marketing Director at Jubilant Foodworks Ltd"
  },
  {
    id: 2,
    quote: "As a product leader, Anvesh demonstrated exceptional vision and execution. His ability to align product development with business goals is remarkable.",
    name: "Chief Product Officer",
    company: "Brane Enterprises Pvt Ltd",
    designation: "Chief Product Officer at Brane Enterprises Pvt Ltd"
  },
  {
    id: 3,
    quote: "Anvesh's innovative marketing strategies generated substantial leads while reducing costs. His analytical approach to campaign optimization was invaluable.",
    name: "Co-Founder",
    company: "Influencer Marketing Agency",
    designation: "Co-Founder at Influencer Marketing Agency"
  },
  {
    id: 4,
    quote: "Working with Anvesh was transformative for our sales operations. His customer acquisition strategies and process improvements drove significant growth.",
    name: "Sales Director",
    company: "Simply Grow Technologies Pvt Ltd",
    designation: "Sales Director at Simply Grow Technologies Pvt Ltd"
  },
  {
    id: 5,
    quote: "Anvesh's leadership as School Pupil Leader showcased his exceptional organizational skills and ability to inspire teams.",
    name: "Former Faculty Advisor",
    company: "DAV Public School",
    designation: "Former Faculty Advisor at DAV Public School"
  }
];

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const scrollToTestimonial = (index: number) => {
    if (testimonialRef.current) {
      const scrollAmount = testimonialRef.current.offsetWidth * index;
      testimonialRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        const nextIndex = (activeIndex + 1) % testimonials.length;
        scrollToTestimonial(nextIndex);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);
  
  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToTestimonial(prevIndex);
  };
  
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    scrollToTestimonial(nextIndex);
  };
  
  return (
    <section id="testimonials" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">What Others Say</h2>
        
        <div className="relative mt-16">
          <div 
            className="overflow-x-hidden" 
            ref={testimonialRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex transition-all duration-500" style={{ width: `${testimonials.length * 100}%` }}>
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="netflix-card p-8 h-full flex flex-col hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                    <div className="relative mb-8">
                      <div className="absolute -top-4 -left-2 text-netflix-red text-6xl font-serif opacity-20">"</div>
                      <p className="text-lg text-netflix-text relative z-10">
                        {testimonial.quote}
                      </p>
                      <div className="absolute -bottom-8 -right-2 text-netflix-red text-6xl font-serif opacity-20">"</div>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="text-netflix-text font-semibold">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-netflix-card flex items-center justify-center text-netflix-text hover:bg-netflix-red hover:text-netflix-text transition-colors duration-300 shadow-lg"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-netflix-card flex items-center justify-center text-netflix-text hover:bg-netflix-red hover:text-netflix-text transition-colors duration-300 shadow-lg"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-netflix-red' : 'bg-netflix-card'
                } transition-colors duration-300 hover:bg-netflix-red/70`}
                onClick={() => scrollToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
