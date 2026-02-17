
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-10 mix-blend-difference">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold tracking-tighter">JV.</span>
        <div className="h-px w-8 bg-white opacity-40 hidden md:block"></div>
        <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 hidden md:block">Available for Freelance</span>
      </div>

      <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium items-center">
        <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
        <a href="mailto:contact@jawagar.vetrivel" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
