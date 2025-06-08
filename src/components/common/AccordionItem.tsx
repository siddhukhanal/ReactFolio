import React from 'react';
import { IconChevronUp } from '../icons/IconChevronUp';
import { IconChevronDown } from '../icons/IconChevronDown';

export interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
  details?: string[];
  imagePlaceholder?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick, details, imagePlaceholder }) => (
  <div className="bg-gray-50 mb-4 rounded-lg shadow-sm overflow-hidden">
    <div
      className={`flex justify-between items-center p-5 cursor-pointer font-bold text-lg border-b border-gray-200 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {title}
      <span className={`transition-transform duration-300 ease-in-out ${isActive ? 'text-white' : 'text-primary'}`}>
        {isActive ? <IconChevronUp /> : <IconChevronDown />}
      </span>
    </div>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[1000px] p-5' : 'max-h-0 p-0'}`} // Adjusted max-h
    >
      <div className="pb-1"> {/* Wrapper to ensure padding is part of the animated height */}
        <p className="text-gray-800">{content}</p>
        {details && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {details.map((detail, i) => (
              <li key={i} className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                {detail}
              </li>
            ))}
          </ul>
        )}
        {imagePlaceholder && (
          <div className="mt-4 w-full h-48 bg-gray-300 rounded flex items-center justify-center text-gray-600">
            {imagePlaceholder}
          </div>
        )}
      </div>
    </div>
  </div>
);