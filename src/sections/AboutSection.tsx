import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Sparkles, Target, Lightbulb } from 'lucide-react';
import { aboutConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content paragraphs animation
      const paragraphs = contentRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Highlights animation
      const highlightCards = highlightsRef.current?.querySelectorAll('.highlight-card');
      if (highlightCards) {
        gsap.fromTo(
          highlightCards,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Soft skills animation
      const skillTags = skillsRef.current?.querySelectorAll('.skill-tag');
      if (skillTags) {
        gsap.fromTo(
          skillTags,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-primary/10">
              <User className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-brand-muted font-roboto">
              Get To Know Me
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
            {aboutConfig.sectionTitle}
          </h2>
          <p className="text-xl text-brand-secondary font-roboto">
            {aboutConfig.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div ref={contentRef} className="space-y-6">
            {aboutConfig.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-brand-secondary leading-relaxed font-roboto"
              >
                {paragraph}
              </p>
            ))}

            {/* Soft Skills */}
            <div ref={skillsRef} className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                <span className="text-sm font-medium text-brand-primary font-roboto">
                  Soft Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {aboutConfig.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag px-4 py-2 bg-brand-primary/5 border border-brand-border rounded-full text-sm text-brand-secondary font-roboto hover:bg-brand-primary hover:text-brand-linen hover:border-brand-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div ref={highlightsRef} className="grid grid-cols-2 gap-4">
            {aboutConfig.highlights.map((highlight, index) => (
              <div
                key={index}
                className="highlight-card p-6 md:p-8 bg-white/50 backdrop-blur-sm border border-brand-border rounded-2xl hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="mb-2">
                  {index === 0 && <Target className="w-6 h-6 text-brand-primary mb-3" />}
                  {index === 1 && <Lightbulb className="w-6 h-6 text-brand-primary mb-3" />}
                  {index === 2 && <Sparkles className="w-6 h-6 text-brand-primary mb-3" />}
                  {index === 3 && <User className="w-6 h-6 text-brand-primary mb-3" />}
                </div>
                <p className="font-oswald text-3xl md:text-4xl font-bold text-brand-primary mb-1">
                  {highlight.value}
                </p>
                <p className="text-sm text-brand-muted font-roboto uppercase tracking-wider">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
