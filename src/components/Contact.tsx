
import React from 'react';
import { Circle, Starburst } from './Shapes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your message! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Shapes */}
      <Circle 
        size="md" 
        className="absolute top-[10%] left-[10%] opacity-20" 
      />
      
      <Starburst 
        size="md" 
        className="absolute bottom-[10%] right-[10%] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in-left">
              <h2 className="inline-block px-4 py-1 rounded-full bg-coach-yellow/20 text-coach-yellow text-sm font-medium mb-4">
                GET IN TOUCH
              </h2>
              <h3 className="font-playfair text-3xl md:text-4xl mb-6">
                Begin Your Transformation Today
              </h3>
              <p className="text-coach-white/80 mb-8">
                Ready to start your journey to a more fulfilled life? Contact me for a consultation 
                and discover how my coaching can help you achieve your goals.
              </p>
              
              <div className="glass-card p-8 rounded-2xl mb-8">
                <h4 className="font-playfair text-xl mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-coach-yellow mb-1">Email</p>
                    <p className="text-coach-white/80">heike@risecoaching.com</p>
                  </div>
                  <div>
                    <p className="text-coach-yellow mb-1">Phone</p>
                    <p className="text-coach-white/80">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-coach-yellow mb-1">Location</p>
                    <p className="text-coach-white/80">New York City, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in-right">
              <div className="glass-card p-8 rounded-2xl">
                <h4 className="font-playfair text-xl mb-6">Send a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-white/5 border-white/10 focus:border-coach-yellow/50 text-coach-white h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-white/5 border-white/10 focus:border-coach-yellow/50 text-coach-white h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input 
                        placeholder="Subject" 
                        className="bg-white/5 border-white/10 focus:border-coach-yellow/50 text-coach-white h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="bg-white/5 border-white/10 focus:border-coach-yellow/50 text-coach-white resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-coach-yellow hover:bg-coach-yellow/90 text-coach-black font-medium rounded-full px-8 py-6 h-12 transition duration-300"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
