import React, { useState, useEffect, useRef } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches);
    };
    motionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      motionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      setIsVisible(false); // Ensure it's hidden if motion is reduced
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isReducedMotion, isVisible]);

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`;
      dotRef.current.style.opacity = isVisible && !isReducedMotion ? '1' : '0';
    }
    if (outlineRef.current) {
      outlineRef.current.style.transform = `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`;
      outlineRef.current.style.opacity = isVisible && !isReducedMotion ? '0.5' : '0';
    }
  }, [position, isVisible, isReducedMotion]);

  if (isReducedMotion) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CursorFollower;
