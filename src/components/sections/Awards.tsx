import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { IconTrophy } from '../icons/IconTrophy'; 
import { IconAward } from '../icons/IconAward';
import { IconCode } from '../icons/IconCode'; 
import { useScrollAnimation } from '../../hooks/useScrollAnimation';


interface AwardItem {
  title: string;
  year: string;
  description: string;
  icon?: React.ReactNode;
}

export const Awards = () => {
  const awardsData: AwardItem[] = [
    {
      title: 'Innovative Design Award',
      year: '2023',
      description: 'Recognized for outstanding creativity and innovation in UI/UX design for the "ConnectApp" project.',
      icon: <IconAward />,
    },
    {
      title: 'UserExperience Excellence',
      year: '2022',
      description: 'Awarded for exceptional user-centric design approach in the "HealthTrack" mobile application.',
      icon: <IconTrophy />,
    },
    {
      title: 'Best Visual Design',
      year: '2021',
      description: 'Commended for aesthetically pleasing and impactful visual design in the "EcoSavers" website project.',
      icon: <IconCode />,
    },
  ];

  return (
    <section id="awards" className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Award Winning <span className="text-primary">Journey</span></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsData.map((award, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 100 });
            return (
              <div 
                ref={cardRef}
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow group opacity-0"
              >
                <div className="text-4xl text-primary mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:animate-wiggle">
                  {award.icon || <IconTrophy />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-primary font-medium mb-3">{award.year}</p>
                <p className="text-gray-700 text-sm">{award.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};