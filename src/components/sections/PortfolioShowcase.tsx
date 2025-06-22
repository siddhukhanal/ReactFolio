
import React, { useState, useEffect } from 'react';
import { IconArrowRight } from '../icons/IconArrowRight';
import { Modal } from '../common/Modal';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface PortfolioItem {
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  imagePlaceholder: string;
  modalImages: Array<{
    imagePlaceholder: string;
    caption: string;
    imageDescription?: string; // Added for unique image descriptions
  }>;
  technologiesUsed: string[];
}

const INITIAL_ITEMS_COUNT = 6;

export const PortfolioShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0); // State for active image in modal

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Photomanipulation Projects',
      category: 'Photomanipulations',
      shortDescription: 'A collection of creative photomanipulation projects showcasing various digital art techniques.',
      longDescription: 'This collection features diverse photomanipulation pieces, blending reality with imagination. Each project explores different themes and technical skills in Adobe Photoshop, focusing on seamless integration, lighting, and storytelling to create compelling visual narratives.',
      imagePlaceholder: '/portfolio showcase/mani1.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/clouds.png',
          caption: 'Surreal Cloudscape Manipulation',
          imageDescription: 'This piece combines multiple cloud textures and lighting effects to create a dreamlike atmosphere. Advanced masking and color grading were used to achieve a seamless blend.'
        },
        {
          imagePlaceholder: '/portfolio showcase/movie-posters.png',
          caption: 'Concept Movie Poster Design',
          imageDescription: 'A conceptual movie poster designed to evoke a sense of mystery and adventure, utilizing strong typography and cinematic lighting.'
        },
        {
          imagePlaceholder: '/portfolio showcase/Halloween Night Party.png',
          caption: 'Halloween Themed Flyer/Poster',
          imageDescription: 'A vibrant and spooky flyer design for a Halloween event, focusing on high-impact visuals and clear event details.'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Digital Painting', 'Composition'],
    },
    {
      title: 'Book Cover Design',
      category: 'Cover Designs',
      shortDescription: 'Professional book cover designs tailored to various genres, aiming to capture attention and convey story essence.',
      longDescription: 'A showcase of book cover designs created for authors and publishers. Each cover is thoughtfully designed to reflect the genre, themes, and target audience of the book, utilizing typography, imagery, and layout to create an impactful first impression.',
      imagePlaceholder: '/portfolio showcase/book cover 3.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/arcane.png',
          caption: 'Fantasy Book Cover Example',
          imageDescription: 'This fantasy cover aims to draw the reader into a world of magic and adventure with its evocative imagery and title treatment.'
        },
        {
          imagePlaceholder: '/portfolio showcase/cutlass.png',
          caption: 'Thriller Book Cover Design',
          imageDescription: 'Designed to create suspense and intrigue, this thriller cover uses dark tones and a striking central image to hint at the story within.'
        },
        {
          imagePlaceholder: '/portfolio showcase/book cover 3.png',
          caption: 'Sci-Fi Book Cover Art',
          imageDescription: 'A futuristic sci-fi book cover featuring bold typography and a cosmic backdrop, perfect for an epic space opera.'
        },
         {
          imagePlaceholder: '/portfolio showcase/forsted nymph.png',
          caption: 'Sci-Fi Book Cover Art',
          imageDescription: 'A futuristic sci-fi book cover featuring bold typography and a cosmic backdrop, perfect for an epic space opera.'
        },
         {
          imagePlaceholder: '/portfolio showcase/book cover 4.png',
          caption: 'Sci-Fi Book Cover Art',
          imageDescription: 'A futuristic sci-fi book cover featuring bold typography and a cosmic backdrop, perfect for an epic space opera.'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Layout Design'],
    },
    {
      title: 'UI/UX Designs Projects',
      category: 'UI/UX',
      shortDescription: 'UI/UX design for an event management application, focusing on intuitive navigation and user engagement.',
      longDescription: 'This project involved designing the user interface and experience for an event management platform. The goal was to create a seamless and intuitive application for users to discover, register for, and manage events, with features like personalized recommendations and interactive schedules.',
      imagePlaceholder: '/portfolio showcase/even management.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/HQD.jpg',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/wine.png',
          caption: 'Event Listing Screen',
          imageDescription: 'The main event listing screen, designed for easy browsing and filtering. Key information is presented clearly to help users make quick decisions.'
        },
        
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/mobile.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/FEEN.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/event organizer.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/BOOK COVER.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/techmedia.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
        {
          imagePlaceholder: '/portfolio showcase/UI_UX/Vapebin.png',
          caption: 'Event Detail Page',
          imageDescription: 'The event detail page provides comprehensive information about a specific event, including schedule, speakers, and location, with a clear call-to-action for registration.'
        },
      ],
      technologiesUsed: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Cubex Solutions Logo',
      category: 'Logo Design',
      shortDescription: 'Brand identity design for Cubex Solutions, reflecting innovation and reliability.',
      longDescription: 'The logo design for Cubex Solutions aimed to create a modern and memorable brand mark. The process involved understanding the company\'s values and target market, followed by concept development, iteration, and finalization of a versatile logo suitable for various applications.',
      imagePlaceholder: '/portfolio showcase/cubex solution.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/logo/cubex solution.png',
          caption: 'Logo variations and color palette'
        },
        {
          imagePlaceholder: '/portfolio showcase/logo/bear.png',
          caption: 'Logo mockup on stationery'
        },
         {
          imagePlaceholder: '/portfolio showcase/logo/vivaan.jpg',
          caption: 'Logo mockup on stationery'
        },
      ],
      technologiesUsed: ['Adobe Illustrator', 'Branding', 'Vector Design'],
    },
     {
      title: 'Flyer Design Projects',
      category: 'Printing Materials',
      shortDescription: 'A variety of flyer designs for events, promotions, and informational purposes.',
      longDescription: 'This collection includes flyer designs created for different clients and purposes, such as event promotions, product advertisements, and informational handouts. Each design focuses on clear communication, visual appeal, and adherence to brand guidelines.',
      imagePlaceholder: '/portfolio showcase/Halloween Night Party.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/flyers/Loyaltyprogram draft 02-1.png',
          caption: 'Corporate Event Flyer'
        },
        {
          imagePlaceholder: '/portfolio showcase/flyers/loyalty program-1.png',
          caption: 'Product Promotion Flyer'
        },
         {
          imagePlaceholder: '/portfolio showcase/flyers/loyalty program-2.png',
          caption: 'Product Promotion Flyer'
        },
         {
          imagePlaceholder: '/portfolio showcase/flyers/sales reps banner01-01.png',
          caption: 'Product Promotion Flyer'
        },
        {
          imagePlaceholder: '/portfolio showcase/flyers/dallas deals flyer01-01.png',
          caption: 'Product Promotion Flyer'
        },
        {
          imagePlaceholder: '/portfolio showcase/flyers/772.png',
          caption: 'Product Promotion Flyer'
        },
        {
          imagePlaceholder: '/portfolio showcase/flyers/Halloween Night Party.png',
          caption: 'Product Promotion Flyer'
        },
        {
          imagePlaceholder: '/portfolio showcase/flyers/flag banner final-1.png',
          caption: 'Product Promotion Flyer'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Adobe InDesign', 'Print Layout'],
    },
    {
      title: 'Social Media Campaign Graphics',
      category: 'Social Media',
      shortDescription: 'Engaging graphics designed for various social media platforms to boost online presence and campaigns.',
      longDescription: 'A series of graphics created for social media campaigns, optimized for different platforms like Instagram, Facebook, and Twitter. The designs aim to capture attention, convey key messages effectively, and encourage user interaction, aligning with overall marketing strategies.',
      imagePlaceholder: '/portfolio showcase/3,6,15 mg square-06.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/social media/e2.png',
          caption: 'Instagram Post Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/e1.png',
          caption: 'Facebook Banner Example'
        },
         {
          imagePlaceholder: '/portfolio showcase/social media/c2.png',
          caption: 'Facebook Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/c3.png',
          caption: 'Facebook Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/s1.png',
          caption: 'Facebook Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/h2.png',
          caption: 'Facebook Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/3,6,15 mg square-06.png',
          caption: 'Facebook Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/social media/p1.png',
          caption: 'Facebook Banner Example'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Illustrator', 'Social Media Marketing'],
    },
    {
      title: 'Restaurant Mobile App UI/UX',
      category: 'UI/UX',
      shortDescription: 'User interface and experience design for a restaurant mobile application, enhancing ordering and discovery.',
      longDescription: 'This project focused on designing a user-friendly mobile app for a restaurant. Key features include easy menu browsing, seamless online ordering, table reservations, and loyalty program integration. The UI was crafted to be visually appealing and intuitive, enhancing the overall customer experience.',
      imagePlaceholder: '/portfolio showcase/mobile.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/mobile_menu.png',
          caption: 'Restaurant App - Menu Screen',
          imageDescription: 'The menu screen showcases various food categories with appealing visuals, making it easy for users to navigate and select items.'
        },
        {
          imagePlaceholder: '/portfolio showcase/mobile_order.png',
          caption: 'Restaurant App - Order Process',
          imageDescription: 'A streamlined order process, from adding items to the cart to checkout, designed for speed and convenience.'
        },
      ],
      technologiesUsed: ['Figma', 'Adobe XD', 'Mobile App Design', 'User Testing'],
    },
    {
      title: 'Movie Posters',
      category: 'Movie Posters',
      shortDescription: 'Conceptual movie poster designs exploring different visual styles and themes.',
      longDescription: 'A collection of conceptual movie posters created to showcase versatility in visual storytelling and design. Each poster aims to capture the essence of a fictional film, experimenting with typography, imagery, and mood to create compelling promotional art.',
      imagePlaceholder: '/portfolio showcase/movie-posters.png',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/movie posters/book cover 5.png',
          caption: 'Sci-Fi Movie Poster '
        },
        {
          imagePlaceholder: '/portfolio showcase/movie posters/movie posters 4.png',
          caption: 'Romance Movie Poster '
        },
        {
          imagePlaceholder: '/portfolio showcase/movie posters/movie-posters.png',
          caption: 'Drama Movie Poster '
        },
        {
          imagePlaceholder: '/portfolio showcase/movie posters/movie posters.png',
          caption: 'Drama Movie Poster '
        },
        {
          imagePlaceholder: '/portfolio showcase/movie posters/Blade.png',
          caption: 'Drama Movie Poster '
        },
        {
          imagePlaceholder: '/portfolio showcase/movie posters/Tomb Raider.png',
          caption: 'Drama Movie Poster'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Graphic Design', 'Typography'],
    },
    {
      title: 'Website Banners',
      category: 'Website Banners',
      shortDescription: 'A series of promotional and informational banners designed for Nepa Wholesale e-commerce website.',
      longDescription: 'This project involved creating a set of website banners for Nepa Wholesale, an e-commerce platform. The banners were designed to highlight promotions, new arrivals, and key product categories, aiming to improve user engagement and drive sales. Designs were optimized for web visibility and brand consistency.',
      imagePlaceholder: '/portfolio showcase/website banners.webp',
      modalImages: [
        {
          imagePlaceholder: '/portfolio showcase/Website Banners/tpe.webp',
          caption: 'Promotional Banner Example'
        },
        {
          imagePlaceholder: '/portfolio showcase/Website Banners/cigar.webp',
          caption: 'Category Feature Banner'
        },
         {
          imagePlaceholder: '/portfolio showcase/Website Banners/fume pro.webp',
          caption: 'Category Feature Banner'
        },
         {
          imagePlaceholder: '/portfolio showcase/Website Banners/qit.webp',
          caption: 'Category Feature Banner'
        },
         {
          imagePlaceholder: '/portfolio showcase/Website Banners/HQD.webp',
          caption: 'Category Feature Banner'
        },
        {
          imagePlaceholder: '/portfolio showcase/Website Banners/orion bar.png',
          caption: 'Category Feature Banner'
        },
      ],
      technologiesUsed: ['Adobe Photoshop', 'Web Design', 'E-commerce Graphics'],
    }
  ];

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setActiveModalImageIndex(0); // Reset to the first image
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(prev => !prev);
  };

  const initialItems = portfolioItems.slice(0, INITIAL_ITEMS_COUNT);
  const additionalItems = portfolioItems.slice(INITIAL_ITEMS_COUNT);

  const renderPortfolioCard = (item: PortfolioItem, index: number, isAdditional: boolean) => {
    const delay = isAdditional ? index * 100 : (index % INITIAL_ITEMS_COUNT) * 100;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cardRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay });
    return (
      <div
        ref={cardRef}
        key={item.title + (isAdditional ? '-add' : '-init')}
        className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col opacity-0 cursor-pointer group"
        onClick={() => openModal(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
        aria-label={`View details for ${item.title}`}
      >
        <div className="relative w-full h-56 bg-gray-300 overflow-hidden">
          <img src={item.imagePlaceholder} alt={`Preview of ${item.title}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold py-2 px-4 border-2 border-white rounded">View Project</span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-xs font-bold uppercase text-primary mb-1 group-hover:text-primary-dark transition-colors">{item.category}</span>
          <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
          <p className="text-gray-700 text-sm mb-4 flex-grow">{item.shortDescription}</p>
          <div
            className="mt-auto self-start text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group/button text-sm"
            aria-hidden="true"
          >
            View Details <span className="ml-1 transition-transform group-hover/button:translate-x-1"><IconArrowRight /></span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="portfolio" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Let's Have a Look at My <span className="text-primary">Portfolio</span></SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialItems.map((item, index) => renderPortfolioCard(item, index, false))}
          </div>

          {additionalItems.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out mt-8 ${showAllProjects ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={!showAllProjects}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalItems.map((item, index) => renderPortfolioCard(item, index, true))}
              </div>
            </div>
          )}

          {portfolioItems.length > INITIAL_ITEMS_COUNT && (
            <div className="text-center mt-12">
              <button
                onClick={toggleShowAllProjects}
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 inline-flex items-center"
                aria-live="polite"
                aria-expanded={showAllProjects}
              >
                {showAllProjects ? 'Show Less Projects' : 'View All My Projects'}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProject.title}>
          <div className="portfolio-modal-content">
            {/* Image Gallery */}
            {selectedProject.modalImages && selectedProject.modalImages.length > 0 && (
              <div className="mb-6">
                {/* Main Displayed Image */}
                <div className="mb-4">
                  <img
                    src={selectedProject.modalImages[activeModalImageIndex].imagePlaceholder}
                    alt={selectedProject.modalImages[activeModalImageIndex].caption || `Image ${activeModalImageIndex + 1} for ${selectedProject.title}`}
                    className="w-full h-auto max-h-[55vh] object-contain rounded-lg mx-auto" 
                    loading="lazy"
                  />
                  {selectedProject.modalImages[activeModalImageIndex].caption && (
                    <p className="text-sm text-gray-600 mt-2 text-center italic">{selectedProject.modalImages[activeModalImageIndex].caption}</p>
                  )}
                  {/* Image Specific Description */}
                  {selectedProject.modalImages[activeModalImageIndex].imageDescription && (
                    <div className="mt-3 text-center">
                        <p className="text-gray-700 text-sm leading-relaxed prose prose-sm max-w-xl mx-auto">
                            {selectedProject.modalImages[activeModalImageIndex].imageDescription}
                        </p>
                    </div>
                  )}
                </div>

                 {/* Thumbnail Images */}
                 {selectedProject.modalImages.length > 1 && (
                  <div className="flex justify-center flex-wrap gap-2 mt-4">
                    {selectedProject.modalImages.map((img, idx) => (
                      <button
                        key={idx}
                        className={`w-20 h-20 overflow-hidden rounded-md border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                    ${activeModalImageIndex === idx ? 'border-primary scale-105 shadow-lg' : 'border-gray-300 hover:border-primary-dark opacity-75 hover:opacity-100'}`}
                        aria-label={`View image ${idx + 1} of ${selectedProject.modalImages.length} for ${selectedProject.title}`}
                        aria-pressed={activeModalImageIndex === idx}
                        onClick={() => setActiveModalImageIndex(idx)}
                        >
                        <img
                            src={img.imagePlaceholder}
                            alt={img.caption || `Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Project Description:</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed prose max-w-none">{selectedProject.longDescription}</p>
                </div>
                <div className="md:col-span-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Project Type:</h4>
                    <p className="text-primary font-medium mb-4">{selectedProject.category}</p>

                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Key Technologies:</h4>
                    <ul className="flex flex-wrap gap-2">
                        {selectedProject.technologiesUsed.map((tech, i) => (
                        <li key={i} className="bg-gray-200 text-gray-800 text-xs font-semibold py-1 px-3 rounded-full">
                            {tech}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
