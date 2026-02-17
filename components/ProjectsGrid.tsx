
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#0e0e0e] border border-white/5 p-8 h-full flex flex-col justify-between hover:border-white/20 transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-4xl italic group-hover:opacity-40 transition-opacity">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-blue-500"></div>
          <span className="text-[10px] tracking-widest uppercase text-blue-500 font-bold">{project.language || 'Code'}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-blue-400 transition-colors">
          {project.name.replace(/-/g, ' ')}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
          {project.description || "A deep dive into complex architectures and visual excellence."}
        </p>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest hover:text-blue-500 transition-colors flex items-center gap-2 group/link"
        >
          View Source
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
        <div className="text-[10px] opacity-40 uppercase tracking-widest">
          {project.stargazers_count} Stars
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
      {projects.slice(0, 9).map((project, idx) => (
        <ProjectCard key={project.id} project={project} index={idx} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
