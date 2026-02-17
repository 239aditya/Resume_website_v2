import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { navigationConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set up intersection observer for sections
    const sections = navigationConfig.links.map((link) => link.href.slice(1));
    sections.push('hero');

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Nav entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      }
    );
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Create a simple PDF download (in production, replace with actual resume PDF)
    const link = document.createElement('a');
    link.href = '#';
    link.download = navigationConfig.resumeFileName;
    // For demo purposes, show alert
    alert(`Resume download would start: ${navigationConfig.resumeFileName}`);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-linen/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2 group"
            >
              <div className="p-2 rounded-lg bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors duration-300">
                <Code2 className="w-5 h-5 text-brand-primary" />
              </div>
              <span className="font-oswald text-lg font-semibold text-brand-primary">
                {navigationConfig.brandName}
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationConfig.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-roboto text-sm transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-brand-primary'
                      : 'text-brand-secondary hover:text-brand-primary'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <MagneticButton
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-brand-linen font-roboto text-sm font-medium rounded-full hover:bg-brand-secondary transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                {navigationConfig.resumeDownloadText}
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-primary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-brand-linen border-b border-brand-border shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navigationConfig.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left font-roboto text-lg py-2 ${
                  activeSection === link.href.slice(1)
                    ? 'text-brand-primary font-medium'
                    : 'text-brand-secondary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-brand-border">
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 w-full px-5 py-3 bg-brand-primary text-brand-linen font-roboto font-medium rounded-full"
              >
                <Download className="w-4 h-4" />
                {navigationConfig.resumeDownloadText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
