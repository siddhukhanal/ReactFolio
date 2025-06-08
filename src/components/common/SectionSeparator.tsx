import React from 'react';

export const SectionSeparator = ({ items }: { items: string[] }) => {
  const displayItems: string[] = [];
  
  // Define targets for the length of the display block
  const TARGET_TOTAL_ITEMS_IN_DISPLAY_BLOCK = 60; // Aim for this many individual items in one seamless block
  const MINIMUM_REPETITIONS_OF_INPUT_SET = 10;    // Repeat the original `items` array at least this many times

  let numRepetitionsOfInputSet;

  if (items.length > 0) {
    // Calculate how many times the input `items` array needs to be repeated
    // to meet the TARGET_TOTAL_ITEMS_IN_DISPLAY_BLOCK.
    const repetitionsNeededForTarget = Math.ceil(TARGET_TOTAL_ITEMS_IN_DISPLAY_BLOCK / items.length);
    // Use the greater of MINIMUM_REPETITIONS_OF_INPUT_SET or repetitionsNeededForTarget.
    numRepetitionsOfInputSet = Math.max(MINIMUM_REPETITIONS_OF_INPUT_SET, repetitionsNeededForTarget);
  } else {
    // If items is empty, the loop won't run, but set a default for completeness.
    numRepetitionsOfInputSet = 0; 
  }

  for (let i = 0; i < numRepetitionsOfInputSet; i++) {
    displayItems.push(...items);
  }

  return (
    <div className="bg-gray-800 text-white py-5 overflow-hidden w-full">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render displayItems once */}
        {displayItems.map((item, index) => (
          <span key={`original-${index}`} className="text-lg sm:text-xl font-medium px-8 sm:px-12 flex-shrink-0">
            {item} <span className="text-primary">+</span>
          </span>
        ))}
        {/* Render displayItems a second time for the seamless loop */}
        {displayItems.map((item, index) => (
          <span key={`duplicate-${index}`} className="text-lg sm:text-xl font-medium px-8 sm:px-12 flex-shrink-0">
            {item} <span className="text-primary">+</span>
          </span>
        ))}
      </div>
    </div>
  );
};