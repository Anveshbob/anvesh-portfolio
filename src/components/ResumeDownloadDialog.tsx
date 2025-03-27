
import React, { useState } from 'react';
import { Download, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  contactNumber: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  interest: z.string().default("Resume Download")
});

type FormValues = z.infer<typeof formSchema>;

interface ResumeDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeDownloadDialog = ({ open, onOpenChange }: ResumeDownloadDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      message: "I'm interested in learning more about your experience and background.",
      interest: "Resume Download"
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Use the provided Google Apps Script Web App URL
      const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyu99UznwhyM8Lc4JsnWP8t7KFoM2-pS-bab8Vetl8zQtEMxfg_jBod6gzeIlrCyLKNpA/exec";
      
      // Add timestamp (server will set this to Indian timezone)
      const formData = {
        ...data,
        timestamp: new Date().toISOString(),
      };
      
      // Send the data to the Google Apps Script Web App
      await fetch(WEBAPP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // This is required for Google Apps Script
      });
      
      // Since no-cors mode doesn't allow reading the response, we assume success
      toast({
        title: "Thank you for your interest!",
        description: "Your resume is downloading now.",
        variant: "default",
      });
      
      // Reset the form
      form.reset();
      
      // Close the dialog
      onOpenChange(false);
      
      // Trigger the resume download
      const link = document.createElement('a');
      link.href = '/Anvesh_Seeli_Resume.pdf';
      link.download = 'Anvesh_Seeli_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-netflix-card text-white border-netflix-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download Resume</DialogTitle>
          <DialogDescription className="text-netflix-muted">
            I'm glad you're interested! Please share your details to download the resume.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} className="bg-netflix-dark border-netflix-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} className="bg-netflix-dark border-netflix-card" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Contact Number (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} className="bg-netflix-dark border-netflix-card" />
                  </FormControl>
                  <FormDescription className="text-netflix-muted">
                    This field is optional
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Write your message here..." 
                      {...field} 
                      className="bg-netflix-dark border-netflix-card min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-4 pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="bg-netflix-dark border-netflix-card hover:bg-netflix-card text-white">
                  Cancel
                </Button>
              </DialogClose>
              
              <Button 
                type="submit" 
                className="bg-netflix-red hover:bg-[#F40612] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </div>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDownloadDialog;
