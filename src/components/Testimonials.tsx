
import React from 'react';
import { Circle, Plus } from './Shapes';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, delay }) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-coach-yellow/5",
        "opacity-0",
        delay
      )}
    >
      <div className="mb-6">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6 31.36C12.2 31.36 10.1333 30.4267 8.4 28.56C6.66667 26.6933 5.8 24.4267 5.8 21.76C5.8 19.6267 6.33333 17.4133 7.4 15.12C8.46667 12.8267 9.86667 10.6133 11.6 8.48C13.3333 6.34667 15.2667 4.48 17.4 2.88C19.5333 1.28 21.6 0.106666 23.6 0.36C23.6 2.22667 23 4.13333 21.8 6.08C20.6 8.02667 19.0667 9.86667 17.2 11.6C15.3333 13.3333 13.7333 15.12 12.4 16.96C11.0667 18.8 10.4 20.48 10.4 22C10.4 23.0667 10.6667 24 11.2 24.8C11.7333 25.6 12.4667 26 13.4 26C14.6 26 15.6667 25.3333 16.6 24C17.5333 22.6667 18.1333 21.0133 18.4 19.04C18.6667 17.0667 18.8 14.96 18.8 12.72C18.8 10.48 18.7333 8.32 18.6 6.24C18.4667 4.16 18.4 2.29333 18.4 0.64H28C28 2.56 27.9333 4.61333 27.8 6.8C27.6667 8.98667 27.6 11.1733 27.6 13.36C27.6 15.5467 27.6667 17.6533 27.8 19.68C27.9333 21.7067 28.2667 23.52 28.8 25.12C29.3333 26.72 30.1333 28.0267 31.2 29.04C32.2667 30.0533 33.7333 30.56 35.6 30.56C37.2 30.56 38.4 30.24 39.2 29.6L37.6 31.36C36.5333 31.36 35.5333 31.28 34.6 31.12C33.6667 30.96 32.7333 30.6933 31.8 30.32C30.8667 29.9467 29.9333 29.44 29 28.8C28.0667 28.16 27.1333 27.36 26.2 26.4C24.9333 28.48 23.3333 29.9467 21.4 30.8C19.4667 31.1733 17.1333 31.36 14.6 31.36ZM0 31.36V24.16C0 19.3067 0.733333 15.1733 2.2 11.76C3.66667 8.34667 5.33333 5.6 7.2 3.52C9.06667 1.44 10.8 0.533334 12.4 0.799999L10.4 5.2C9.33333 5.94667 8.26667 7.06667 7.2 8.56C6.13333 10.0533 5.2 11.7867 4.4 13.76C3.6 15.7333 3.2 17.84 3.2 20.08V31.36H0Z" fill="#F5A623" fillOpacity="0.6"/>
        </svg>
      </div>
      
      <p className="text-coach-white/90 italic mb-8">
        "{quote}"
      </p>
      
      <div>
        <p className="font-playfair text-lg">{author}</p>
        <p className="text-coach-white/60 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-coach-black/80">
      {/* Shapes */}
      <Circle 
        size="lg" 
        className="absolute -bottom-32 -right-32 opacity-20" 
      />
      
      <Plus 
        size="md" 
        color="white" 
        className="absolute top-20 left-20 opacity-20"
        rotate
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="inline-block px-4 py-1 rounded-full bg-coach-yellow/20 text-coach-yellow text-sm font-medium mb-4">
            TESTIMONIALS
          </h2>
          <h3 className="font-playfair text-4xl md:text-5xl mb-6">
            Client Success Stories
          </h3>
          <p className="text-coach-white/80">
            Real experiences from individuals and businesses who have experienced transformative results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Working with Heike was truly life-changing. Her guidance helped me find clarity and purpose when I needed it most."
            author="Sarah Johnson"
            role="Executive"
            delay="animate-fade-in"
          />
          
          <TestimonialCard
            quote="Our company performance improved dramatically after implementing Heike's leadership coaching program. The team is more cohesive and motivated than ever."
            author="Michael Chen"
            role="CEO, Innovate Tech"
            delay="animate-fade-in-delay-1"
          />
          
          <TestimonialCard
            quote="Heike has a unique ability to identify your strengths and help you leverage them. I'm now living a more balanced and fulfilling life thanks to her coaching."
            author="Elena Rodriguez"
            role="Entrepreneur"
            delay="animate-fade-in-delay-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
