
import React from 'react';
import { Circle, Starburst } from './Shapes';
import { Check } from 'lucide-react';

const About = () => {
  const achievements = [
    "10+ years of coaching experience",
    "Helped 500+ individuals transform their lives",
    "Worked with 50+ businesses to improve performance",
    "Certified in multiple coaching methodologies",
    "Featured in leading publications",
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Shapes */}
      <Circle 
        size="md" 
        className="absolute top-[20%] left-[5%] opacity-30" 
        animate
      />
      
      <Starburst 
        size="lg" 
        className="absolute bottom-[10%] right-[5%] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 opacity-0 animate-fade-in-left">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-coach-yellow to-coach-orange rounded-2xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-coach-black/20 backdrop-blur-sm flex items-center justify-center">
                  <h4 className="font-playfair text-3xl text-white text-center">Heike Ziegler</h4>
                </div>
              </div>
              <Circle 
                size="md" 
                className="absolute -bottom-10 -left-10 z-10 opacity-80" 
              />
            </div>
          </div>

          <div className="lg:w-1/2 opacity-0 animate-fade-in-right">
            <h2 className="inline-block px-4 py-1 rounded-full bg-coach-yellow/20 text-coach-yellow text-sm font-medium mb-4">
              ABOUT ME
            </h2>
            <h3 className="font-playfair text-3xl md:text-4xl mb-6">
              Guiding You to Unlock Your Potential
            </h3>
            <p className="text-coach-white/80 mb-6">
              I'm Heike Ziegler, a dedicated life coach with a passion for helping people and organizations
              achieve their highest potential. My approach combines proven methodologies with intuitive
              understanding to create transformative experiences.
            </p>
            <p className="text-coach-white/80 mb-8">
              Through my years of experience, I've developed a unique coaching style that addresses
              both the practical and emotional aspects of transformation, ensuring sustainable results
              and profound fulfillment.
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-coach-yellow/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-coach-yellow" />
                  </div>
                  <p className="text-coach-white/90">{achievement}</p>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="bg-coach-yellow hover:bg-coach-yellow/90 text-coach-black font-medium rounded-full px-8 py-3 transition duration-300 inline-block"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
