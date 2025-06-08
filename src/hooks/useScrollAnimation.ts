// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  delay?: number; // milliseconds
  initialVisibilityClass?: string; // e.g., 'opacity-0' - applied before animation
}

export function useScrollAnimation<T extends HTMLElement>(
  animationClass: string, // e.g., 'animate-fadeInUp'
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, once = true, delay = 0, initialVisibilityClass = 'opacity-0' } = options;
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Apply initial visibility class
    if (initialVisibilityClass) {
      // Ensure not to add if already animated (e.g. if 'once' is false and element re-enters)
      const alreadyHasAnimation = animationClass.split(' ').some(cls => currentElement.classList.contains(cls));
      if (!alreadyHasAnimation) {
        currentElement.classList.add(...initialVisibilityClass.split(' '));
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const applyAnimation = () => {
            if (initialVisibilityClass) {
              currentElement.classList.remove(...initialVisibilityClass.split(' '));
            }
            currentElement.classList.add(...animationClass.split(' '));
            if (once) {
              observer.unobserve(currentElement);
            }
          };

          if (delay > 0) {
            setTimeout(applyAnimation, delay);
          } else {
            applyAnimation();
          }
        } else {
          // If not 'once', you might want to reset the animation here
          // For simplicity and current request, 'once' is default and we don't reset.
          // Example for reset (if !once):
          // if (!once && initialVisibilityClass) {
          //   currentElement.classList.remove(...animationClass.split(' '));
          //   currentElement.classList.add(...initialVisibilityClass.split(' '));
          // }
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animationClass, threshold, once, delay, initialVisibilityClass]);

  return elementRef;
}
