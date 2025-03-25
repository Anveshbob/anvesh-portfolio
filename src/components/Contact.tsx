import React from 'react';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Contact = () => {
  return (
    <section id="contact" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Let's Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-fade-in">
            <div className="netflix-card p-6 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-netflix-red mt-1 w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-netflix-muted mb-1">Email</p>
                    <a 
                      href="mailto:seelianvesh@gmail.com" 
                      className="text-white hover:text-netflix-red transition-colors duration-300"
                    >
                      seelianvesh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-netflix-red mt-1 w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-netflix-muted mb-1">Location</p>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-netflix-muted mb-4">Connect on Social Media</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/anvesh-seeli/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-netflix-muted mb-4">Location</p>
                  <div className="relative h-[240px] rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509524513!2d78.24323111792417!3d17.412281195556447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1635750412135!5m2!1sen!2sus" 
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      title="Hyderabad Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
