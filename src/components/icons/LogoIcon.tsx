import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Siddharatha Khanal Logo"
  >
    <path d="M32.0625 0C20.3125 0 14.875 6.0625 14.875 14.8125V17.875H29V14.8125C29 10.1875 31.25 7.6875 35.125 7.6875C39 7.6875 41.25 10.1875 41.25 14.8125V35.1875C41.25 39.8125 39 42.3125 35.125 42.3125C31.25 42.3125 29 39.8125 29 35.1875V32.125H14.875V35.1875C14.875 43.9375 20.3125 50 32.0625 50C43.8125 50 49.25 43.9375 49.25 35.1875V14.8125C49.25 6.0625 43.8125 0 32.0625 0Z" fill="#0F172A"/>
    <path d="M8.875 43.125C11.75 43.125 14.125 40.75 14.125 37.875C14.125 35 11.75 32.625 8.875 32.625C6 32.625 3.625 35 3.625 37.875C3.625 40.75 6 43.125 8.875 43.125Z" fill="#F97316"/>
  </svg>
);