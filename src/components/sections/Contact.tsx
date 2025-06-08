
import React, { useState } from 'react';
import { IconLinkedIn } from '../icons/IconLinkedIn';
import { IconDribbble } from '../icons/IconDribbble';
import { IconBehance } from '../icons/IconBehance';
import { SectionTitle } from '../common/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState<string>('');

  const formRef = useScrollAnimation<HTMLFormElement>('animate-fadeInLeft');
  const infoRef = useScrollAnimation<HTMLDivElement>('animate-fadeInRight', { delay: 100 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form Data Submitted (Demo):', formData);

    setIsSubmitting(false);
    setSubmissionStatus('success');
    setSubmissionMessage('Your message has been "sent" successfully! (This is a demo - data logged to console.)');
    setFormData(initialFormData); // Reset form

    // Optional: Clear message after a few seconds
    setTimeout(() => {
        setSubmissionStatus(null);
        setSubmissionMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-gray-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle lightText>Let's Talk For Your Next <span className="text-primary">Projects</span></SectionTitle>
        <div className="bg-gray-700 p-8 sm:p-12 rounded-lg shadow-xl flex flex-col lg:flex-row gap-10">
          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 lg:w-3/5 opacity-0">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe" 
                  className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-primary focus:ring-primary transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john.doe@example.com" 
                  className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-primary focus:ring-primary transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange} 
                  placeholder="+977 98612345678" 
                  className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-primary focus:ring-primary transition-colors" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject*</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="Project Inquiry" 
                  className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-primary focus:ring-primary transition-colors" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message*</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                required 
                placeholder="Tell me about your project..." 
                className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-primary focus:ring-primary transition-colors resize-vertical"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {submissionStatus && (
              <div 
                className={`mt-4 p-3 rounded-md text-sm ${submissionStatus === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
                role="alert"
              >
                {submissionMessage}
              </div>
            )}
          </form>
          <div ref={infoRef} className="flex-1 lg:w-2/5 text-gray-300 opacity-0">
            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
            <p className="mb-3"><strong>Address:</strong> kalanki Kathmandu, Nepal</p>
            <p className="mb-3"><strong>Email:</strong> <a href="mailto:siddharatha.khanal@example.com" className="hover:text-primary transition-colors">siddharatha.khanal@example.com</a></p>
            <p className="mb-3"><strong>Phone:</strong> <a href="tel:+9779861099262" className="hover:text-primary transition-colors">+977 9861099262</a></p>
            <p className="mb-6"><strong>Availability:</strong> Mon - Fri, 9:00 AM - 6:00 PM (GMT+5:45)</p>
            <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Connect With Me</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#linkedin-siddharatha" aria-label="LinkedIn" title="LinkedIn" className="text-gray-300 hover:text-primary transition-colors"><IconLinkedIn /></a>
              <a href="#dribbble-siddharatha" aria-label="Dribbble" title="Dribbble" className="text-gray-300 hover:text-primary transition-colors"><IconDribbble /></a>
              <a href="#behance-siddharatha" aria-label="Behance" title="Behance" className="text-gray-300 hover:text-primary transition-colors"><IconBehance /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
