
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ZoomParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
      },
    });

    tl.fromTo(textRef.current, 
      { scale: 0.8, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* Cinematic Quote Container */}
      <div ref={textRef} className="relative z-20 text-center px-6 max-w-5xl">
        <div className="w-12 h-12 border-t-2 border-l-2 border-white/20 mb-12 animate-pulse"></div>
        
        <h2 className="text-5xl md:text-8xl font-serif italic mb-12 leading-tight">
          "The best way to <span className="text-blue-500">predict</span> the future is to <span className="underline decoration-blue-500/50 underline-offset-8">create</span> it."
        </h2>
        
        <div className="flex items-center justify-center gap-4 opacity-40">
           <div className="w-8 h-px bg-white"></div>
           <p className="text-sm font-light tracking-[0.5em] uppercase">Philosophy of Build</p>
           <div className="w-8 h-px bg-white"></div>
        </div>

        <div className="absolute -bottom-12 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20"></div>
      </div>
    </div>
  );
};

export default ZoomParallax;
