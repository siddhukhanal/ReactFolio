import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const About = () => {
  const imageRef = useScrollAnimation<HTMLDivElement>('animate-fadeInLeft');
  const textContentRef = useScrollAnimation<HTMLDivElement>('animate-fadeInRight', { delay: 100 });
  
  const statsData = [
    { value: '750+', label: 'Projects Completed' },
    { value: '20+', label: 'Happy Clients' },
    { value: '5+', label: 'Years of Experience' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About <span className="text-primary">Me</span></SectionTitle>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div ref={imageRef} className="lg:w-1/3 opacity-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-xl shadow-xl overflow-hidden">
              <img 
                src="./public/2.jpeg" 
                alt="Siddharatha Khanal - About Me" 
                className="w-full h-2000px object-cover" 
                loading="lazy"
              />
            </div>
          </div>
          <div ref={textContentRef} className="lg:w-2/3 text-center lg:text-left opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hi, I'm Siddharatha Khanal</h3>
            <p className="text-gray-800 mb-6 leading-relaxed">
              I am a creative and detail-oriented UI/UX Designer with a passion for building intuitive and engaging digital experiences. With a strong foundation in design principles and user-centered methodologies, I strive to create interfaces that are not only visually appealing but also highly functional and easy to use. I enjoy tackling complex problems and transforming them into elegant solutions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-center">
              {statsData.map((stat, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const statRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 150 + 200 });
                return (
                  <div 
                    key={stat.label} 
                    ref={statRef} 
                    className={`bg-white p-4 rounded-lg shadow-md opacity-0 ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <h4 className="text-3xl font-bold text-primary">{stat.value}</h4>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="space-x-4">
              <a 
                href="siddharatha-khanal-cv.pdf" 
                download
                className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 inline-flex items-center"
              >
                Download CV
              </a>
              <a 
                href="#contact" 
                className="bg-white text-primary border-2 border-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-0.5 inline-flex items-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};