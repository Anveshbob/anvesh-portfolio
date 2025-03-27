
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-netflix-red flex items-center justify-center hover:bg-[#F40612] transition-colors duration-300"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#home" className="text-netflix-muted hover:text-white transition-colors duration-300">Home</a>
            <a href="#case-studies" className="text-netflix-muted hover:text-white transition-colors duration-300">Case Studies</a>
            <a href="#resume" className="text-netflix-muted hover:text-white transition-colors duration-300">Resume</a>
            <a href="#testimonials" className="text-netflix-muted hover:text-white transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="text-netflix-muted hover:text-white transition-colors duration-300">Contact</a>
          </div>
          
          <p className="text-netflix-muted mb-2">seelianvesh@gmail.com</p>
          <p className="text-netflix-muted mb-2">+91 8143130661</p>
          <p className="text-netflix-muted text-sm">
            &copy; {new Date().getFullYear()} Anvesh Seeli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
