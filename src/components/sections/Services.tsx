

import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tintClass: string; 
  hoverTintClass: string; 
  underlineColorClass: string;
  // glowColorClass: string; // Removed for no glow
}

const servicesData: ServiceItem[] = [
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user interfaces and experiences. Focusing on user research, wireframing, prototyping, and usability testing to deliver seamless digital products.',
    tintClass: 'bg-orange-50/60',
    hoverTintClass: 'hover:bg-orange-100/80',
    underlineColorClass: 'bg-orange-500',
    // glowColorClass: 'shadow-orange-500/70',
  },
  {
    id: 'app-design',
    number: '02',
    title: 'Application Design',
    description: 'Designing comprehensive application interfaces for mobile and web platforms. Ensuring functionality meets aesthetic appeal for optimal user engagement.',
    tintClass: 'bg-sky-50/60',
    hoverTintClass: 'hover:bg-sky-100/80',
    underlineColorClass: 'bg-sky-500',
    // glowColorClass: 'shadow-sky-500/70',
  },
  {
    id: 'web-design',
    number: '03',
    title: 'Website Design',
    description: 'Creating visually stunning and highly functional websites that reflect brand identity and achieve business goals. Responsive design for all devices.',
    tintClass: 'bg-emerald-50/60',
    hoverTintClass: 'hover:bg-emerald-100/80',
    underlineColorClass: 'bg-emerald-500',
    // glowColorClass: 'shadow-emerald-500/70',
  },
  {
    id: 'ui-system',
    number: '04',
    title: 'UI Design System',
    description: 'Developing robust and scalable UI design systems to ensure consistency and efficiency across all digital products. Includes component libraries and style guides.',
    tintClass: 'bg-rose-50/60',
    hoverTintClass: 'hover:bg-rose-100/80',
    underlineColorClass: 'bg-rose-500',
    // glowColorClass: 'shadow-rose-500/70',
  },
  {
    id: 'branding-identity',
    number: '05',
    title: 'Branding & Identity',
    description: 'Creating memorable brand identities, including logo design, color palettes, and typography that resonate with your target audience and elevate your brand.',
    tintClass: 'bg-violet-50/60',
    hoverTintClass: 'hover:bg-violet-100/80',
    underlineColorClass: 'bg-violet-500',
    // glowColorClass: 'shadow-violet-500/70',
  },
  {
    id: 'interactive-prototyping',
    number: '06',
    title: 'Interactive Prototyping',
    description: 'Building clickable prototypes that simulate user flows and interactions, allowing for early feedback and validation of design concepts before development.',
    tintClass: 'bg-yellow-50/60',
    hoverTintClass: 'hover:bg-yellow-100/80',
    underlineColorClass: 'bg-yellow-500',
    // glowColorClass: 'shadow-yellow-500/70',
  }
];

const ServiceCard: React.FC<Omit<ServiceItem, 'glowColorClass'> & { delay: number }> = ({ 
    number, 
    title, 
    description, 
    tintClass, 
    hoverTintClass,
    underlineColorClass,
    // glowColorClass, // Removed
    delay 
}) => {
  const cardRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay });

  return (
    <div 
      ref={cardRef}
      className={`group relative ${tintClass} ${hoverTintClass} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out flex flex-col items-start overflow-hidden opacity-0 border border-gray-200 min-h-[270px] sm:min-h-[250px] hover:scale-105`}
    >
      <div className="absolute bottom-3 right-3 z-0">
        <span className="text-[7rem] sm:text-[8rem] lg:text-[9rem] font-bold text-gray-300 opacity-25 select-none leading-none group-hover:opacity-30 transition-opacity duration-300">
          {number}
        </span>
      </div>
      
      <div className="relative z-10 w-full flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-2">{description}</p>
      </div>

      <div 
        className={`absolute bottom-4 left-0 w-[90%] h-[3px] ${underlineColorClass} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
      ></div>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Services I <span className="text-primary">Provide</span></SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8"> 
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};