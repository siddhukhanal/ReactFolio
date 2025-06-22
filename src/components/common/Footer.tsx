import React from 'react';
import { IconLinkedIn } from '../icons/IconLinkedIn';
import { IconDribbble } from '../icons/IconDribbble';
import { IconBehance } from '../icons/IconBehance';
import { IconFacebook } from '../icons/IconFacebook';
import { IconTwitterX } from '../icons/IconTwitterX';
import { IconInstagram } from '../icons/IconInstagram';


export const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12 text-center">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-center">
        <a href="#hero" className="text-3xl font-bold text-gray-200 hover:text-primary transition-colors" aria-label="Siddharatha Khanal Home">
          Siddharatha <span className="text-primary">Khanal</span>
        </a>
      </div>
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
          <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
          <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </nav>
      <div className="flex justify-center space-x-6 mb-8 text-2xl">
        <a href="https://www.facebook.com/siddharthasiddhu.khanal" aria-label="Facebook" title="Facebook" className="text-gray-300 hover:text-primary transition-colors">
          <IconFacebook />
        </a>
        <a href="https://x.com/khanal_siddhu" aria-label="Twitter X" title="Twitter X" className="text-gray-300 hover:text-primary transition-colors">
          <IconTwitterX />
        </a>
        <a href="#instagram-siddharatha" aria-label="Instagram" title="Instagram" className="text-gray-300 hover:text-primary transition-colors">
          <IconInstagram />
        </a>
        <a href="https://www.linkedin.com/in/siddhu-khanal-6807a2179/" aria-label="LinkedIn" title="LinkedIn" className="text-gray-300 hover:text-primary transition-colors">
          <IconLinkedIn />
        </a>
        <a href="https://github.com/siddhukhanal" aria-label="GitHub" title="GitHUb" className="text-gray-300 hover:text-primary transition-colors">
          <IconDribbble />
        </a>
        <a href="https://www.behance.net/siddhukhanal" aria-label="Behance" title="Behance" className="text-gray-300 hover:text-primary transition-colors">
          <IconBehance />
        </a>
      </div>
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Siddharatha Khanal. All Rights Reserved.</p>
    </div>
  </footer>
);