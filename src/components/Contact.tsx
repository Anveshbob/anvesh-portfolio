import React, { useState } from 'react';
import { Linkedin, Github, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Create a schema for form validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contactNumber: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      message: ""
    }
  });
  
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Format data to match the Google Sheet columns exactly
    const formattedData = {
      Name: values.name,
      Email: values.email,
      "Contact Number": values.contactNumber || "",
      Message: values.message,
      Timestamp: new Date().toISOString()
    };
    
    console.log("Submitting form data:", formattedData);
    
    // Updated Google Apps Script Web App URL
    const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwyvcYd6xmzJcnVZGFIdTPoJ2sKnI1FkEVW5fseZWxruEb4NnUfYJbDsOGq8o0k-UvM/exec';
    
    // Use URLSearchParams to send data as form data
    const formParams = new URLSearchParams();
    formParams.append('Name', formattedData.Name);
    formParams.append('Email', formattedData.Email);
    formParams.append('Contact Number', formattedData["Contact Number"]);
    formParams.append('Message', formattedData.Message);
    formParams.append('Timestamp', formattedData.Timestamp);

    try {
      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formParams.toString(),
        mode: 'no-cors'
      });
      
      // Since no-cors doesn't return a readable response, we assume success
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive"
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
              <div className="netflix-card p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-netflix-muted">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="bg-netflix-dark border border-netflix-card rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white"
                            />
                          </FormControl>
                          <FormMessage className="text-netflix-red text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-netflix-muted">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Email" 
                              type="email" 
                              {...field} 
                              className="bg-netflix-dark border border-netflix-card rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white"
                            />
                          </FormControl>
                          <FormMessage className="text-netflix-red text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-netflix-muted">Contact Number (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Contact Number" 
                              {...field} 
                              className="bg-netflix-dark border border-netflix-card rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white"
                            />
                          </FormControl>
                          <FormMessage className="text-netflix-red text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-netflix-muted">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can I assist you?" 
                              {...field} 
                              rows={5}
                              className="bg-netflix-dark border border-netflix-card rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red/50 text-white"
                            />
                          </FormControl>
                          <FormMessage className="text-netflix-red text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="netflix-button w-full hover:bg-netflix-dark transition-colors duration-300"
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
                    </Button>
                  </form>
                </Form>
              </div>
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
