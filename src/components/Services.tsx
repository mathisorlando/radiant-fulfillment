
import React from 'react';
import { Circle, Plus } from './Shapes';
import { Heart, Lightbulb, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-coach-yellow/5",
        "opacity-0",
        delay
      )}
    >
      <div className="bg-coach-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-playfair text-2xl mb-4">{title}</h3>
      <p className="text-coach-white/70">{description}</p>
      <div className="mt-6">
        <a href="#contact" className="text-coach-yellow hover:text-coach-yellow/80 font-medium link-underline transition duration-300">
          Learn more
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Shapes */}
      <Circle 
        size="lg" 
        className="absolute -top-32 -right-32 opacity-30" 
      />
      
      <Plus 
        size="lg" 
        className="absolute bottom-10 left-10 opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="inline-block px-4 py-1 rounded-full bg-coach-yellow/20 text-coach-yellow text-sm font-medium mb-4">
            SERVICES
          </h2>
          <h3 className="font-playfair text-4xl md:text-5xl mb-6">
            Transformative Coaching Services
          </h3>
          <p className="text-coach-white/80">
            Tailored guidance for individuals and businesses seeking profound change and lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Personal Development"
            description="Discover your purpose and strengths through personalized coaching that addresses your unique challenges and aspirations."
            icon={<Heart className="text-coach-yellow w-7 h-7" />}
            delay="animate-fade-in"
          />
          
          <ServiceCard
            title="Business Coaching"
            description="Transform your organization with strategies that enhance performance, leadership, and team dynamics."
            icon={<Lightbulb className="text-coach-yellow w-7 h-7" />}
            delay="animate-fade-in-delay-1"
          />
          
          <ServiceCard
            title="Life Transformation"
            description="Achieve fulfillment through a holistic approach to happiness, balance, and purpose in all aspects of life."
            icon={<Star className="text-coach-yellow w-7 h-7" />}
            delay="animate-fade-in-delay-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
