import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface DesignTool {
  name: string;
  level: number; 
  logoUrl: string; 
}

export const DesignTools = () => {
  const tools: DesignTool[] = [
    { name: 'Adobe Photoshop', level: 88, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Adobe Illustrator', level: 85, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
    { name: 'Figma', level: 98, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'HTML & CSS', level: 94, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'JavaScript', level: 90, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'Tailwind CSS', level: 92, logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    
  ];

  return (
    <section id="design-tools" className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Design Tools That <span className="text-primary">Power My Work</span></SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
          {tools.map((tool, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useScrollAnimation<HTMLDivElement>('animate-scaleIn', { delay: index * 100 });
            return (
              <div 
                key={tool.name} 
                ref={cardRef}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-start opacity-0"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center p-1">
                  <img 
                    src={tool.logoUrl} 
                    alt={`${tool.name} logo`} 
                    className="max-w-full max-h-full object-contain" 
                    aria-label={`${tool.name} logo`}
                    loading="lazy"
                  />
                </div>
                <h4 className="text-md sm:text-lg font-semibold text-gray-900 mb-1">{tool.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};