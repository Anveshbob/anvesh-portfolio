
import React from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9052451354!2d78.27362503727096!3d17.41228070909086!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1685529338815!5m2!1sen!2sin" 
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
