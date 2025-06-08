import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  children: React.ReactNode;
  lightText?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, lightText }) => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>('animate-fadeInUp');
  const underlineRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: 100 });

  return (
    <div className="text-center mb-12">
      <h2 ref={titleRef} className={`text-3xl sm:text-4xl font-bold ${lightText ? 'text-white' : 'text-gray-900'} opacity-0`}>
        {children}
      </h2>
      <div ref={underlineRef} className="mt-2.5 mx-auto w-16 h-1 bg-primary opacity-0"></div>
    </div>
  );
};