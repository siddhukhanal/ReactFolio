import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatarPlaceholder: string; 
  rating: number; 
}

export const Testimonials = () => {
  const testimonialData: Testimonial[] = [
    {
      name: 'Sujan Giri',
      role: 'Senior Backend Developer',
      company: 'Curves and Colors',
      quote: "Siddharatha's designs are not only visually stunning but also incredibly intuitive. He transformed our user experience and we've seen a significant increase in engagement since the redesign. Highly recommended!",
      avatarPlaceholder: 'SG',
      rating: 5,
    },
    {
      name: 'Bigesh Benzankar',
      role: 'Senior Frontend Developer/ Odoo Developer',
      company: 'Nepa Wholesale',
      quote: "Working with Sidharatha was a fantastic experience. His creativity in designing banners and images for our website always exceeded expectations, bringing fresh and engaging visuals to life. He was incredibly reliable and always delivered high-quality work on time. A true asset to any team!",
      avatarPlaceholder: 'BB',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>What My Clients <span className="text-primary">Are Saying</span></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialData.map((testimonial, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay: index * 100 });
            return (
              <div 
                ref={cardRef}
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow opacity-0"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mr-4">
                    {testimonial.avatarPlaceholder}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-800 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};