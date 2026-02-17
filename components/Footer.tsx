
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="text-6xl md:text-9xl font-serif italic mb-10 opacity-10">Let's Create.</h2>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-widest uppercase opacity-40">Drop a line</span>
            <a href="mailto:hello@jawagar.dev" className="text-2xl md:text-4xl hover:text-blue-500 transition-colors">
              hello@jawagar.dev
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8">
          <div className="flex gap-8 text-xs tracking-widest uppercase">
            <a href="https://github.com/JawagarVetrivel" target="_blank" className="hover:opacity-60">GitHub</a>
            <a href="https://www.linkedin.com/in/jawagar-vetri-42a608285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:opacity-60">LinkedIn</a>
            <a href="#" className="hover:opacity-60">Twitter</a>
          </div>
          <p className="text-[10px] opacity-40 tracking-widest uppercase text-right">
            &copy; 2024 Jawagar Vetrivel. <br /> Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
