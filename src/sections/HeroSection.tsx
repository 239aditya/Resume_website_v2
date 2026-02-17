import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Mail, ArrowDown, Code2 } from 'lucide-react';
import { heroConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image animation
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      )
        .fromTo(
          nameRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.7'
        )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          socialsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        );

      // Scroll-triggered fade out
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              opacity: 1 - self.progress * 0.8,
              y: self.progress * 50,
              duration: 0.1,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-linen"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-primary/5 rounded-full" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Portrait */}
          <div ref={imageRef} className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-brand-primary/10 rounded-full" />
              <div className="absolute -inset-8 border border-brand-primary/5 rounded-full" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={heroConfig.portrait}
                  alt={heroConfig.portraitAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-brand-primary text-brand-linen px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-roboto font-medium">Available for Hire</span>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-sm uppercase tracking-[0.3em] text-brand-muted mb-4 font-roboto">
              {heroConfig.greeting}
            </p>

            {/* Name */}
            <h1
              ref={nameRef}
              className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold text-brand-primary mb-4 tracking-tight"
            >
              {heroConfig.name}
            </h1>

            {/* Title */}
            <p
              ref={titleRef}
              className="font-oswald text-2xl sm:text-3xl text-brand-secondary mb-2"
            >
              {heroConfig.title}
            </p>

            {/* Tagline */}
            <p className="text-lg text-brand-muted mb-6 font-roboto italic">
              {heroConfig.tagline}
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-brand-secondary leading-relaxed mb-8 font-roboto"
            >
              {heroConfig.description}
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <MagneticButton
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 bg-brand-primary text-brand-linen font-roboto font-medium rounded-full hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                {heroConfig.ctaPrimary}
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('#footer')}
                className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-roboto font-medium rounded-full hover:bg-brand-primary hover:text-brand-linen transition-colors duration-300"
              >
                {heroConfig.ctaSecondary}
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div ref={socialsRef} className="flex justify-center lg:justify-start gap-4">
              <a
                href={heroConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={heroConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={heroConfig.socialLinks.email}
                className="p-3 rounded-full border border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-brand-muted" />
        </div>
      </div>
    </section>
  );
}
