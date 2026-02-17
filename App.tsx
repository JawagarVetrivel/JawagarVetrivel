
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import ZoomParallax from './components/ZoomParallax';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { fetchGithubProjects } from './services/githubService';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Smooth Scrolling Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Fetch projects
    const loadData = async () => {
      try {
        const repos = await fetchGithubProjects('JawagarVetrivel');
        setProjects(repos);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    loadData();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <HorizontalScrollSection projects={projects} />

        <ZoomParallax />

        <section id="work" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-serif mb-20">Recent <br /><span className="italic opacity-50">Explorations</span></h2>
            <ProjectsGrid projects={projects} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
