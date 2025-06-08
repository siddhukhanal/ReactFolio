
import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { IconArrowRight } from '../icons/IconArrowRight';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Modal } from '../common/Modal';

interface BlogImage {
  imagePlaceholder: string; // URL
  caption?: string;
}

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  imagePlaceholder: string; // URL for the card image
  galleryImages?: BlogImage[]; // Optional array for modal gallery
  fullContent: string;
}

const INITIAL_BLOG_COUNT = 3;

export const Blog = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [activeBlogModalImageIndex, setActiveBlogModalImageIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      title: 'The Art Behind the Pixels: Secrets of UI/UX Design',
      date: 'October 26, 2023',
      excerpt: 'Dive deep into the principles that make a user interface not just functional but delightful. Exploring color theory, typography, and interaction design.',
      imagePlaceholder: '/public/portfolio showcase/mani1.png',
      galleryImages: [
        { imagePlaceholder: '/public/portfolio showcase/ui-ux.jpg', caption: 'Exploring Color Theory' },
        { imagePlaceholder: 'https://placehold.co/800x600/f39c12/FFF?text=Art+Pixels+Gallery+2', caption: 'Typography in UI' },
        { imagePlaceholder: 'https://placehold.co/800x600/3498db/FFF?text=Art+Pixels+Gallery+3', caption: 'Interaction Design Patterns' },
      ],
      fullContent: 'Dive deep into the principles that make a user interface not just functional but delightful. Exploring color theory, typography, and interaction design. This post covers the fundamentals of Gestalt principles, the importance of user research in shaping UI decisions, and how effective UX writing can guide users. We also touch upon the latest trends in microinteractions and their impact on overall user satisfaction. Case studies of successful UI/UX implementations will be discussed to provide practical insights.',
    },
    {
      title: 'Frontend Frameworks: Choosing the Right Tool for Your Project',
      date: 'November 15, 2023',
      excerpt: 'A comparative look at popular frontend frameworks like React, Vue, and Angular. Helping you decide which best fits your next web development endeavor.',
      imagePlaceholder: 'https://placehold.co/600x400/33FF57/FFF?text=Frontend+Card',
      galleryImages: [
        { imagePlaceholder: 'https://placehold.co/800x600/33FF57/FFF?text=Frontend+Gallery+1', caption: 'React Ecosystem' },
        { imagePlaceholder: 'https://placehold.co/800x600/2ecc71/FFF?text=Frontend+Gallery+2', caption: 'Vue vs Angular' },
      ],
      fullContent: 'A comparative look at popular frontend frameworks like React, Vue, and Angular. Helping you decide which best fits your next web development endeavor. We evaluate them based on performance, learning curve, community support, ecosystem, and scalability. This article aims to provide developers and project managers with a clear understanding of the strengths and weaknesses of each framework, enabling informed decisions for their specific project needs.',
    },
    {
      title: 'Accessibility in Design: Why It Matters More Than Ever',
      date: 'December 05, 2023',
      excerpt: 'Understanding the importance of creating inclusive digital experiences. Tips and best practices for designing accessible websites and applications.',
      imagePlaceholder: 'https://placehold.co/600x400/5733FF/FFF?text=Accessibility+Card',
      // This post will use its card image as the single gallery image due to galleryImages being undefined.
      fullContent: 'Understanding the importance of creating inclusive digital experiences. Tips and best practices for designing accessible websites and applications. This includes adherence to WCAG guidelines, ARIA attributes, keyboard navigation, color contrast, and designing for assistive technologies. We emphasize that accessibility is not just a legal requirement but a moral imperative that broadens reach and improves usability for everyone.',
    },
    {
      title: 'Mastering State Management in Complex Applications',
      date: 'January 10, 2024',
      excerpt: 'An overview of state management patterns and libraries like Redux and Zustand, helping you build scalable and maintainable applications.',
      imagePlaceholder: 'https://placehold.co/600x400/FF33A1/FFF?text=State+Mgmt+Card',
      galleryImages: [
        { imagePlaceholder: 'https://placehold.co/800x600/FF33A1/FFF?text=State+Mgmt+Gallery+1', caption: 'Redux Data Flow' }
      ],
      fullContent: 'An overview of state management patterns and libraries like Redux, Zustand, and Context API. This post helps you understand when and how to use these tools to build scalable and maintainable applications. We explore common pitfalls, best practices for structuring state, and performance considerations. Real-world examples illustrate how different state management solutions can solve complex data flow problems in large applications.',
    },
    {
      title: 'The Future of Web Design: Trends to Watch in 2024',
      date: 'February 02, 2024',
      excerpt: 'Exploring upcoming trends in web design, including AI integration, immersive experiences, and sustainable design practices.',
      imagePlaceholder: 'https://placehold.co/600x400/F4D03F/333?text=Web+Trends+Card',
      galleryImages: [
        { imagePlaceholder: 'https://placehold.co/800x600/F4D03F/333?text=Web+Trends+Main', caption: 'AI in Web Design' },
        { imagePlaceholder: 'https://placehold.co/800x600/f1c40f/333?text=Immersive+Experiences', caption: '3D Web Elements' }
      ],
      fullContent: 'Exploring upcoming trends in web design, including AI integration, immersive 3D experiences, sustainable design practices, and the rise of no-code/low-code platforms. We delve into how these trends are shaping user expectations and the skills designers need to stay ahead. This post also discusses the ethical implications of AI in design and the importance of human-centered approaches in an increasingly automated world.',
    },
    {
      title: 'Crafting Compelling Microinteractions',
      date: 'March 18, 2024',
      excerpt: 'Learn how small, thoughtful animations and feedback can significantly enhance user engagement and delight.',
      imagePlaceholder: 'https://placehold.co/600x400/1ABC9C/FFF?text=Microinteractions+Card',
      galleryImages: [
        { imagePlaceholder: 'https://placehold.co/800x600/1ABC9C/FFF?text=Microinteractions+Gallery+1', caption: 'Button Click Feedback' },
        { imagePlaceholder: 'https://placehold.co/800x600/16a085/FFF?text=Microinteractions+Gallery+2', caption: 'Loading Animation Example' },
      ],
      fullContent: 'Learn how small, thoughtful animations and feedback, known as microinteractions, can significantly enhance user engagement and delight. This article covers the key components of effective microinteractions: triggers, rules, feedback, and loops. We provide examples of well-executed microinteractions from popular apps and discuss tools and techniques for designing and implementing them. The goal is to make digital products feel more responsive, intuitive, and alive.',
    },
  ];

  const openBlogModal = (post: BlogPost) => {
    setSelectedBlogPost(post);
    setActiveBlogModalImageIndex(0); // Reset to the first image in gallery
    setIsBlogModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
    setSelectedBlogPost(null);
    document.body.style.overflow = 'unset';
  };

  const toggleShowAllBlogs = () => {
    setShowAllBlogs(prev => !prev);
  };

  const initialBlogItems = blogPosts.slice(0, INITIAL_BLOG_COUNT);
  const additionalBlogItems = blogPosts.slice(INITIAL_BLOG_COUNT);

  const renderBlogPostCard = (post: BlogPost, index: number, isAdditional: boolean) => {
    const delay = isAdditional ? index * 100 : (index % INITIAL_BLOG_COUNT) * 100;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cardRef = useScrollAnimation<HTMLDivElement>('animate-fadeInUp', { delay });
    return (
      <div
        ref={cardRef}
        key={post.title + (isAdditional ? '-add' : '-init')}
        className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col opacity-0"
      >
        <img
          src={post.imagePlaceholder}
          alt={`Preview for ${post.title}`}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-xs text-gray-600 mb-1">{post.date}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
          <p className="text-gray-700 text-sm mb-4 flex-grow">{post.excerpt}</p>
          <button
            onClick={() => openBlogModal(post)}
            className="mt-auto self-start text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group"
            aria-label={`Read more about ${post.title}`}
          >
            Read More <span className="ml-1 transition-transform group-hover:translate-x-1"><IconArrowRight /></span>
          </button>
        </div>
      </div>
    );
  };

  // Determine the images to show in the modal
  const currentGalleryImages = selectedBlogPost?.galleryImages?.length 
    ? selectedBlogPost.galleryImages 
    : selectedBlogPost?.imagePlaceholder 
      ? [{ imagePlaceholder: selectedBlogPost.imagePlaceholder, caption: selectedBlogPost.title }] 
      : [];

  return (
    <>
      <section id="blog" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Latest <span className="text-primary">News & Blogs</span></SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initialBlogItems.map((post, index) => renderBlogPostCard(post, index, false))}
          </div>

          {additionalBlogItems.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out mt-8 ${showAllBlogs ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={!showAllBlogs}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalBlogItems.map((post, index) => renderBlogPostCard(post, index, true))}
              </div>
            </div>
          )}

          {blogPosts.length > INITIAL_BLOG_COUNT && (
            <div className="text-center mt-12"> {/* Changed from text-right to text-center for consistency */}
              <button
                onClick={toggleShowAllBlogs}
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 inline-flex items-center"
                aria-live="polite"
                aria-expanded={showAllBlogs}
              >
                {showAllBlogs ? 'Show Less Blogs' : 'See All Blogs'}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedBlogPost && (
        <Modal isOpen={isBlogModalOpen} onClose={closeBlogModal} title={selectedBlogPost.title}>
          <div className="blog-post-modal-content">
            {/* Image Gallery Area */}
            {currentGalleryImages.length > 0 && (
              <div className="mb-6">
                {/* Main Displayed Image */}
                <div className="mb-4">
                  <img
                    src={currentGalleryImages[activeBlogModalImageIndex].imagePlaceholder}
                    alt={currentGalleryImages[activeBlogModalImageIndex].caption || `Image ${activeBlogModalImageIndex + 1} for ${selectedBlogPost.title}`}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-md mx-auto"
                    loading="lazy"
                  />
                  {currentGalleryImages[activeBlogModalImageIndex].caption && (
                    <p className="text-sm text-gray-600 mt-2 text-center italic">{currentGalleryImages[activeBlogModalImageIndex].caption}</p>
                  )}
                </div>

                 {/* Thumbnail Images */}
                 {currentGalleryImages.length > 1 && (
                  <div className="flex justify-center flex-wrap gap-2">
                    {currentGalleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        className={`w-20 h-20 overflow-hidden rounded-md border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                    ${activeBlogModalImageIndex === idx ? 'border-primary scale-105 shadow-lg' : 'border-gray-300 hover:border-primary-dark opacity-75 hover:opacity-100'}`}
                        aria-label={`View image ${idx + 1} of ${currentGalleryImages.length} for ${selectedBlogPost.title}`}
                        aria-pressed={activeBlogModalImageIndex === idx}
                        onClick={() => setActiveBlogModalImageIndex(idx)}
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
            
            <p className="text-sm text-gray-500 mb-2">{selectedBlogPost.date}</p>
            <div className="prose max-w-none text-gray-800 leading-relaxed">
              <p>{selectedBlogPost.fullContent}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
