import React from 'react';
// import { LogoIcon } from '../icons/LogoIcon'; // Removed as we are using an <img> tag directly

export const Header = () => (
  <header className="bg-white py-5 shadow-md sticky top-0 z-50">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <a href="#hero" aria-label="Siddharatha Khanal Home">
        <img 
          src="/public/logo-icon.png" 
          alt="Siddharatha Khanal Logo" 
          className="h-10 w-auto" // Added example class for sizing, adjust as needed
        />
      </a>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="siddharatha-khanal-cv.pdf" 
              download
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
              Download CV
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 inline-flex items-center text-sm"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);