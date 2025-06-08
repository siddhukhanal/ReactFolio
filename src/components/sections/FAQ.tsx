import React, { useState } from 'react';
import { AccordionItem } from '../common/AccordionItem';
import type { AccordionItemProps } from '../common/AccordionItem';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqData: Omit<AccordionItemProps, 'isActive' | 'onClick' | 'details' | 'imagePlaceholder'>[] = [
    { title: 'What kind of design services do you offer?', content: 'I offer a wide range of design services including UI/UX design, application design, website design, and UI design system development. My goal is to create user-centered and visually appealing digital products.' },
    { title: 'What is your design process?', content: 'My design process typically involves understanding project requirements, user research, wireframing, prototyping, UI design, and usability testing. I work collaboratively with clients to ensure the final product meets their needs.' },
    { title: 'What design tools do you primarily use?', content: 'I primarily use Figma for UI/UX design and prototyping, along with Adobe Creative Suite (Photoshop, Illustrator) for specific graphic design tasks. I am also proficient in Sketch and InVision.' },
    { title: 'How long does a typical project take?', content: 'The duration of a project depends on its scope and complexity. A small website might take a few weeks, while a complex application design could take several months. I provide estimated timelines after discussing project details.' },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const sectionRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp'); // Optional: animate the whole section container

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Questions? <span className="text-primary">Look Here</span></SectionTitle>
        <div ref={sectionRef}>
          {faqData.map((item, index) => {
             // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 100 });
            return (
              <div ref={itemRef} key={index} className="opacity-0">
                <AccordionItem
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onClick={() => handleClick(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};