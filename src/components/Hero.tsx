
import React from 'react';
import { Circle, Starburst, Plus } from './Shapes';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background shapes */}
      <Circle 
        size="lg" 
        className="absolute -bottom-32 -left-32 opacity-50" 
      />
      
      <Starburst 
        size="md" 
        className="absolute top-[20%] right-[10%] opacity-60"
        animate
      />
      
      <Plus 
        size="lg" 
        color="white" 
        className="absolute bottom-[15%] right-[5%] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-coach-yellow px-4 py-1 rounded-full mb-6 overflow-hidden opacity-0 animate-fade-in">
            <p className="text-coach-black font-medium">
              Life Coach & Performance Consultant
            </p>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight opacity-0 animate-fade-in-delay-1">
            <span className="block">Life-transforming Journey</span>
            <span className="block mt-2">to Happiness & Fulfillment</span>
          </h1>

          <p className="text-lg md:text-xl text-coach-white/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            Guiding individuals and businesses to unlock their full potential and achieve 
            lasting transformation through personalized coaching.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-3">
            <a 
              href="#services" 
              className="bg-coach-yellow hover:bg-coach-yellow/90 text-coach-black font-medium rounded-full px-8 py-3 transition duration-300 inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/5 border border-coach-white/20 hover:border-coach-white/40 text-coach-white rounded-full px-8 py-3 transition duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>

      {/* Large circle overlay */}
      <Circle 
        size="xl" 
        className="absolute top-[40%] right-[50%] transform translate-x-1/2 -translate-y-1/2 opacity-10" 
      />
    </section>
  );
};

export default Hero;
