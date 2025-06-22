import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Hero = () => {
  const roles = ["UI/UX DESIGNER", "GRAPHICS DESIGNER", "WEB DESIGNER", "Product Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  const imageRef = useScrollAnimation<HTMLDivElement>('animate-scaleIn');
  const headingRef = useScrollAnimation<HTMLHeadingElement>('animate-fadeInUp', { delay: 100 });
  const animatedTextContainerRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: 200 });
  const paragraphRef = useScrollAnimation<HTMLParagraphElement>('animate-fadeInUp', { delay: 300 });
  const buttonsRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: 400 });

  return (
    <section id="hero" className="bg-gray-50 py-20 text-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={imageRef} className="mx-auto w-40 h-200 sm:w-48 sm:h-48 rounded-full bg-primary mb-8 shadow-lg overflow-hidden opacity-0">
          <img 
            src="/public/siddharatha.jpg" 
            alt="Siddharatha Khanal - Profile" 
            className="w-100% h-1000px object-cover" 
            loading="lazy"
          />
        </div>
        <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-gray-900 opacity-0">
          I'm Siddharatha <span className="text-primary">Khanal</span>
        </h1>
        <div ref={animatedTextContainerRef} className="h-10 mb-8 overflow-hidden relative opacity-0">
          <p
            key={currentRoleIndex} 
            className="text-xl sm:text-2xl text-gray-700 uppercase tracking-wider font-bold animate-slideDownEnter"
          >
            {roles[currentRoleIndex]}
          </p>
        </div>
        <p ref={paragraphRef} className="max-w-xl mx-auto text-gray-800 mb-10 opacity-0">
          A passionate and creative designer focused on crafting user-centric digital experiences. I blend design thinking with technical skills to build beautiful and functional websites and applications.
        </p>
        <div ref={buttonsRef} className="space-x-4 opacity-0">
          <a
              href="./portfolio showcase/CV.pdf" 
              download
              className="text-gray-800 font-medium hover:text-primary transition-colors"
            >
            Download CV
          </a>
          <a
              href="#contact"
              className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 inline-flex items-center text-sm"
            >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};