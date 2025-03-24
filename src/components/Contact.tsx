import React, { useState } from 'react';
import { Linkedin, Github, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Format data to match the Google Sheet columns exactly
      const formattedData = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        message: formData.message,
        timestamp: new Date().toISOString()
      };
      
      console.log("Submitting form data:", formattedData);
      
      // The correct Google Apps Script Web App URL
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbx1q6bHLQ-pD5DRVlDIhzVm2WCVXSOKnosJeR8pYxIHuL7IqYAyYdyXa_X8qsNQC0Ck/exec';
      
      // Using fetch with proper headers and error handling
      fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData),
        mode: 'no-cors' // Required for Google Apps Script
      })
      .then(() => {
        // Since no-cors doesn't return a readable response, we assume success
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          message: ''
        });

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch(error => {
        setIsSubmitting(false);
        console.error('Error:', error);
        toast({
          title: "Error",
          description: "An error occurred. Please try again.",
          variant: "destructive"
        });
      });
    }
  };
  
  return (
    <section id="contact" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Let's Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            {isSubmitted ? (
              <div className="netflix-card p-8 animate-fade-in">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-netflix-red mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-netflix-muted">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="netflix-card p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-netflix-muted mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 bg-netflix-dark border ${
                      errors.name ? 'border-netflix-red' : 'border-netflix-card'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white`}
                  />
                  {errors.name && <p className="text-netflix-red text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-netflix-muted mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 bg-netflix-dark border ${
                      errors.email ? 'border-netflix-red' : 'border-netflix-card'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white`}
                  />
                  {errors.email && <p className="text-netflix-red text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="contactNumber" className="block text-netflix-muted mb-2">Contact Number (Optional)</label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Your Contact Number"
                    className="w-full px-4 py-3 bg-netflix-dark border border-netflix-card rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-netflix-muted mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I assist you?"
                    rows={5}
                    className={`w-full px-4 py-3 bg-netflix-dark border ${
                      errors.message ? 'border-netflix-red' : 'border-netflix-card'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white`}
                  />
                  {errors.message && <p className="text-netflix-red text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="netflix-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send className="mr-2 w-4 h-4" /> Let's Connect and Create Something Amazing
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
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

const Check = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Contact;
