import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Mail, MapPin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { footerConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="relative py-16 md:py-24 bg-brand-primary text-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-brand-linen" />
              <span className="font-oswald text-2xl font-bold text-brand-linen">
                {footerConfig.brandName}
              </span>
            </div>
            <p className="text-brand-linen/70 font-roboto mb-2">
              {footerConfig.tagline}
            </p>
            <p className="text-brand-linen/60 font-roboto mb-6 max-w-md">
              {footerConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-linen/70 font-roboto text-sm">
                <Mail className="w-4 h-4" />
                <span>{footerConfig.contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-linen/70 font-roboto text-sm">
                <MapPin className="w-4 h-4" />
                <span>{footerConfig.contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-brand-linen mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerConfig.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-brand-linen/70 hover:text-brand-linen font-roboto text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-brand-linen mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              <a
                href={footerConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-linen/10 rounded-full text-brand-linen hover:bg-brand-linen hover:text-brand-primary transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={footerConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-linen/10 rounded-full text-brand-linen hover:bg-brand-linen hover:text-brand-primary transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={footerConfig.socialLinks.email}
                className="p-3 bg-brand-linen/10 rounded-full text-brand-linen hover:bg-brand-linen hover:text-brand-primary transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-linen/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-brand-linen/60 font-roboto text-sm text-center md:text-left">
              {footerConfig.copyright}
            </p>

            {/* Made with love */}
            <p className="flex items-center gap-1 text-brand-linen/60 font-roboto text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using React & Tailwind
            </p>

            {/* Back to Top */}
            <MagneticButton
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-brand-linen/10 text-brand-linen font-roboto text-sm rounded-full hover:bg-brand-linen hover:text-brand-primary transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              {footerConfig.backToTopText}
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
