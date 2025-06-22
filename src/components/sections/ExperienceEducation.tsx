import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface EducationItem {
  school: string;
  degree: string;
  field?: string;
  years: string;
  location?: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  years: string;
  description?: string;
  responsibilities?: string[];
}


export const ExperienceEducation = () => {
  const education: EducationItem[] = [
    { 
      school: 'Sagarmatha College Of Science & Technology', 
      degree: 'Bachelor', 
      field: 'BSc CSIT',
      years: '2075-2080', 
      location: 'Sanepa, Lalitpur' 
    },
    { 
      school: 'DAV COllege', 
      degree: '+2', 
      field: 'Science',
      years: '2073', 
      location: 'Jawalakhel, Lalitpur' 
    },
    { 
      school: 'Gyanaodaya Higher Secondary School', 
      degree: 'SLC', 
      field: 'BSc CSIT',
      years: '2071', 
      location: 'Bafal, Kathmandu' 
    },
  ];

  const experience: ExperienceItem[] = [
    {
      company: 'Link Plus',
      role: 'Senior Web Designer',
      years: 'MARCH 2024 - PRESENT',
      description: 'Working as a Senior/ Lead designer at Link plus since one & half year where I am actively involved in managing products for different stores, store related design and design for the website while actively working as a front end designer as well.',
      responsibilities: [
        "Leadership and team management: Led a cross functional team of 9 designers, delegating tasks, Mentoring Juniors designers and Hire a new team member was my major tasks. Collaborated closely with stakeholders to align design strategies with business goals",
        "UI/UX & Front-End Design: Designed User Centric Interfaces for e-commerce website using ODOO. Developed front-end components using ODOO, HTML, CSS while maintaining brand consistency across all formats",
        "Graphic Design and & ERP integration: Created graphics for a ERP supporting the management of 10,000+ products SKUs. Designed all of the visual assets for e-commerce platform",
        "Product Management and Logistics: End-to-end product management for 10000+ products within ODOO ERP software ensuring inventory management. Monitored a product listing daily including launching time, promotion and its updates."
      ]
    },
    {
      company: 'Web Tuned Studio',
      role: 'Graphic & UI/UX Designer',
      years: 'APRIL - DEC 2023',
      description: 'Worked as a Graphic & UI/UX designer at Web Tuned Studio. I was responsible for all graphic related content. Designed UI for different websites. Designed Logos for Australian Clients, Designed products for different merchandise items.',
      responsibilities: [
        "UI/UX Design: Designed website layouts for the different website for the international as well and Nepali clients",
        "Logo Design: During my tenure at web tuned studio I was actively engaged into logo design."
      ]
    },
    {
      company: 'AN4SOFT',
      role: 'UI/UX Intern',
      years: '2022 DEC - 2023 FEB',
      description: 'Worked as UI/UX intern at AN4SOFT where I was responsible for designing websites UI for national and international clients. Designed UI for mobile applications and different web applications as well during my internship period.'
    },
    {
      company: 'Etheric Tales',
      role: 'Book Cover Designer',
      years: '2020 DEC - 2022 MAY',
      description: 'Etheric Tales is a Book Cover Design agency located in Australia during my journey in etherictales I was responsible to design book covers related to Ya/Na fantasy, Urban fantasy, High fantasy, Paranormal fantasy & Romance. It was wonderful working experience working with international clients.'
    },
    {
      company: 'Part Time Graphic Designer',
      role: 'Graphic Designer',
      years: '2020 DEC - PRESENT',
      description: 'I was able to manage different client since early stage of my design career. I am still handling different clients remotely.'
    },
  ];

  const educationColRef = useScrollAnimation<HTMLDivElement>('animate-fadeInLeft');
  const experienceColRef = useScrollAnimation<HTMLDivElement>('animate-fadeInRight', { delay: 100 });

  const knownHighlightPrefixes = [
    "Leadership and team management:",
    "UI/UX & Front-End Design:",
    "Graphic Design and & ERP integration:",
    "Product Management and Logistics:",
    "UI/UX Design:",
    "Logo Design:"
  ];

  return (
    <section id="experience-education" className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Education & Work <span className="text-primary">Experience</span></SectionTitle>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Education Column */}
          <div ref={educationColRef} className="flex-1 md:self-start bg-white p-6 rounded-lg shadow-lg md:sticky md:top-28 h-fit opacity-0"> 
            <h3 className="text-2xl font-semibold text-primary mb-6 pb-3 border-b-2 border-primary inline-block">
              Education
            </h3>
            {education.map((item, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const itemRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 150 + 200 }); // Stagger within column
              return (
                <div 
                  ref={itemRef}
                  key={`${item.school}-${index}`} // Ensure unique key if items are identical
                  className={`relative ${index !== education.length - 1 ? 'pb-6 border-l-2 border-gray-200' : 'pb-2'} ml-3 pl-8 opacity-0`}
                >
                   {index !== education.length - 1 && <div className="absolute -left-[0.4rem] top-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>}
                   <div className="absolute -left-[0.4rem] top-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                  <span className="bg-gray-800 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                    {item.years}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.degree}{item.field && ` - ${item.field}`}</h4>
                  <p className="text-gray-700 italic">{item.school}</p>
                  {item.location && <p className="text-gray-600 text-sm">{item.location}</p>}
                </div>
              );
            })}
          </div>

          {/* Experience Column */}
          <div ref={experienceColRef} className="flex-1 bg-white p-8 rounded-lg shadow-lg opacity-0">
            <h3 className="text-2xl font-semibold text-primary mb-6 pb-3 border-b-2 border-primary inline-block">
              Work Experience
            </h3>
            {experience.map((item, index) => {
               // eslint-disable-next-line react-hooks/rules-of-hooks
              const itemRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 100 + 200 }); // Stagger within column
              return (
                <div ref={itemRef} key={item.company + item.role} className={`relative pb-6 ${index !== experience.length - 1 ? 'border-l-2 border-gray-200 ml-3 pl-8' : 'ml-3 pl-8'} opacity-0`}>
                  <div className="absolute -left-[0.4rem] top-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                  <span className="bg-gray-800 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                    {item.years}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.role}</h4>
                  <p className="text-gray-700 italic mb-2">{item.company}</p>
                  {item.description && <p className="text-gray-800 text-sm mb-2 leading-relaxed">{item.description}</p>}
                  {item.responsibilities && (
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-1 leading-relaxed">
                      {item.responsibilities.map((resp, i) => {
                        let matchedPrefix = null;
                        for (const prefix of knownHighlightPrefixes) {
                          if (resp.startsWith(prefix)) {
                            matchedPrefix = prefix;
                            break;
                          }
                        }

                        if (matchedPrefix) {
                          const restOfText = resp.substring(matchedPrefix.length);
                          return (
                            <li key={i}>
                              <strong className="text-gray-900 font-semibold">{matchedPrefix}</strong>
                              {restOfText}
                            </li>
                          );
                        }
                        return <li key={i}>{resp}</li>;
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};