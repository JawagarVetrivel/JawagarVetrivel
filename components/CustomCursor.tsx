
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cursorOuterRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorOuterRef.current, { scale: 0.5 });
    };

    const handleMouseUp = () => {
      gsap.to(cursorOuterRef.current, { scale: 1 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      />
      <div 
        ref={cursorOuterRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
      />
    </>
  );
};

export default CustomCursor;
