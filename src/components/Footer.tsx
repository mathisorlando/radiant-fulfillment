
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="bg-coach-yellow px-6 py-2 rounded-full">
              <h2 className="font-playfair font-bold text-coach-black text-lg">
                RISE
              </h2>
            </div>
          </div>
          
          <div className="text-center md:text-right text-coach-white/60 text-sm">
            <p>© {currentYear} Heike Ziegler. All rights reserved.</p>
            <p className="mt-1">Life Coach & Performance Consultant</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
