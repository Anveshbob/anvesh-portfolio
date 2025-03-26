
import React from 'react';
import { Mail, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    // Open the user's default email client with a pre-filled email to your address
    const emailBody = `Hello,\n\nI came across your portfolio site and was impressed by your work. I would like to discuss potential collaboration opportunities.\n\nBest regards,\n[User's Name]`;
    const userFullName = "Your Full Name"; // Replace with the actual user's full name if you can get it

    const mailto = "seelianvesh@gmail.com"; // Your email address

    const link = `mailto:${mailto}?subject=Interesting Opportunity&body=${encodeURIComponent(emailBody)}`;
    window.location.href = link;
  };

  return (
    <section id="contact" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Let&apos;s Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-fade-in">
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
                      href="https://www.instagram.com/howtodigitalmarketing_ind/profilecard/?igsh=bG54bHRtaTB1MWkz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5 text-white" />
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
                    {/* Using a simpler embed code that doesn't rely on the pb parameter */}
                    <iframe 
                      src="https://maps.google.com/maps?q=hyderabad,india&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      title="Hyderabad Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <Button onClick={handleButtonClick} className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact via Email
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
