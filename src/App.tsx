import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { siteConfig } from '@/config';
import { useLenis } from '@/hooks/useLenis';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navigation from '@/sections/Navigation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    // Set document title and language from config
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
    if (siteConfig.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', siteConfig.description);
      }
    }
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Handle resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-linen cursor-custom">
      {/* Noise texture overlay */}
      <NoiseOverlay />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Education Section */}
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
