import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Instagram, Send, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  contactNumber: z.string().optional().refine(value => !value || /^\d+$/.test(value), {
    message: "Contact number must contain only digits (0-9)."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});
type FormValues = z.infer<typeof formSchema>;
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      message: ""
    }
  });

  // Handle email contact button
  const handleEmailButtonClick = () => {
    const emailBody = `Hello,\n\nI came across your portfolio site and was impressed by your work. I would like to discuss potential collaboration opportunities.\n\nBest regards,\n[User's Name]`;
    const mailto = "seelianvesh@gmail.com";
    const link = `mailto:${mailto}?subject=Interesting Opportunity&body=${encodeURIComponent(emailBody)}`;
    window.location.href = link;
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Use the provided Google Apps Script Web App URL
      const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyu99UznwhyM8Lc4JsnWP8t7KFoM2-pS-bab8Vetl8zQtEMxfg_jBod6gzeIlrCyLKNpA/exec";

      // Add timestamp (server will set this to Indian timezone)
      const formData = {
        ...data,
        timestamp: new Date().toISOString()
      };

      // Send the data to the Google Apps Script Web App
      const response = await fetch(WEBAPP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        mode: "no-cors" // This is required for Google Apps Script
      });

      // Since no-cors mode doesn't allow reading the response, we assume success
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again or contact me via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Let&apos;s Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
            <div className="space-y-6 bg-slate-50">
                <div className="flex items-start">
                  <Mail className="text-netflix-red mt-1 w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-netflix-muted mb-1">Email</p>
                    <a href="mailto:seelianvesh@gmail.com" className="text-blue hover:text-netflix-red transition-colors duration-300">
                      seelianvesh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-netflix-red mt-1 w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-netflix-muted mb-1">Phone</p>
                    <a href="tel:+918143130661" className="text-white hover:text-netflix-red transition-colors duration-300">
                      +91 8143130661
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
                    <a href="https://www.linkedin.com/in/anvesh-seeli/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.instagram.com/howtodigitalmarketing_ind/profilecard/?igsh=bG54bHRtaTB1MWkz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center hover:bg-netflix-red transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-netflix-muted mb-4">Location</p>
                  <div className="relative h-[240px] rounded-md overflow-hidden">
                    <iframe src="https://maps.google.com/maps?q=hyderabad,india&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" allowFullScreen loading="lazy" title="Hyderabad Map" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <Button onClick={handleEmailButtonClick} className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact via Email
              </Button>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-netflix-dark border-netflix-card text-white placeholder:text-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-netflix-dark border-netflix-card text-white placeholder:text-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="contactNumber" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white">Contact Number (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-netflix-dark border-netflix-card text-white placeholder:text-gray-300" onKeyPress={e => {
                      // Allow only digits
                      if (!/\d/.test(e.key)) {
                        e.preventDefault();
                      }
                    }} />
                        </FormControl>
                        <FormDescription className="text-netflix-muted">
                          This field is optional (numbers only)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write your message here..." {...field} className="bg-netflix-dark border-netflix-card min-h-[120px] text-white placeholder:text-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" className="w-full bg-netflix-red hover:bg-[#F40612] text-white" disabled={isSubmitting}>
                    {isSubmitting ? <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </div> : <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;