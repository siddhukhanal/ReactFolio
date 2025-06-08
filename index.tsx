/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Import Common Components
import { Header } from './src/components/common/Header';
import { Footer } from './src/components/common/Footer';
import { SectionSeparator } from './src/components/common/SectionSeparator';

// Import Section Components
import { Hero } from './src/components/sections/Hero';
import { Services } from './src/components/sections/Services';
import { About } from './src/components/sections/About';
import { DesignTools } from './src/components/sections/DesignTools';
import { ExperienceEducation } from './src/components/sections/ExperienceEducation';
import { PortfolioShowcase } from './src/components/sections/PortfolioShowcase';
import { Awards } from './src/components/sections/Awards';
import { Contact } from './src/components/sections/Contact';
import { Testimonials } from './src/components/sections/Testimonials';
import { Blog } from './src/components/sections/Blog';
import { FAQ } from './src/components/sections/FAQ';

// Import Effects
import CursorFollower from './src/components/effects/CursorFollower';


function App() {
  const separatorItems1 = ['Website Design', 'Dashboard', 'Wireframe', 'User Research'];
  const separatorItems2 = ['App Design', 'Prototyping', 'UI Kits', 'Branding'];
  const separatorItems3 = ['Interaction Design', 'Visual Design', 'Mobile First', 'Accessibility'];

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motionQuery.matches) {
        return;
      }
      
      // Create and append ripple
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple animate-waterRipple'; 
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      
      document.body.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 700); // Match waterRipple animation duration

      // Impact animation logic removed
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);


  return (
    <>
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <SectionSeparator items={separatorItems1} />
        <Services />
        <About />
        <DesignTools /> 
        <SectionSeparator items={separatorItems2} />
        <ExperienceEducation />
        <PortfolioShowcase />
        <Awards /> 
        <SectionSeparator items={separatorItems3} />
        <Contact />
        <Testimonials /> 
        <Blog /> 
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);