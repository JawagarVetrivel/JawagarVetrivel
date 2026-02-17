
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HorizontalScrollProps {
  projects: any[];
}

const HorizontalScrollSection: React.FC<HorizontalScrollProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollSectionRef.current || !containerRef.current) return;

    const scrollWidth = scrollSectionRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const totalScroll = scrollWidth - viewportWidth;

    gsap.to(scrollSectionRef.current, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [projects]);

  return (
    <div ref={containerRef} className="overflow-hidden bg-[#0a0a0a]">
      <div 
        ref={scrollSectionRef} 
        className="flex h-screen items-center px-[10vw]"
      >
        {/* Section 1: Intro */}
        <div className="flex-shrink-0 w-[80vw] md:w-[60vw] mr-[10vw]">
          <h3 className="text-4xl md:text-6xl font-serif mb-8 opacity-40 italic">01. Identity</h3>
          <p className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight">
            I craft <span className="text-blue-500 font-serif italic">digital environments</span> where design and performance meet seamless interaction.
          </p>
        </div>

        {/* Section 2: Skills */}
        <div className="flex-shrink-0 w-[90vw] md:w-[70vw] mr-[10vw]">
          <h3 className="text-4xl md:text-6xl font-serif mb-12 opacity-40 italic">02. Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {['React', 'Three.js', 'GSAP', 'TypeScript', 'Tailwind', 'Node.js'].map((skill) => (
              <div key={skill} className="group relative">
                <div className="text-4xl md:text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  {skill}
                </div>
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Selected Projects Peek */}
        <div className="flex-shrink-0 w-[90vw] md:w-[60vw] mr-[10vw]">
          <h3 className="text-4xl md:text-6xl font-serif mb-8 opacity-40 italic">03. Philosophy</h3>
          <div className="max-w-3xl">
            <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12">
              Every line of code is an opportunity to create meaning. I focus on <span className="font-serif italic underline decoration-blue-500 underline-offset-8">emotional engagement</span> through interaction.
            </p>
            <div className="flex items-center gap-6">
               <div className="w-20 h-px bg-white/20"></div>
               <span className="text-sm tracking-widest uppercase">Driven by Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
