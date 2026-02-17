import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from 'lucide-react';
import { educationConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

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

      // Education cards animation
      const cards = educationRef.current?.querySelectorAll('.education-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: educationRef.current,
              start: 'top 75%',
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
      id="education"
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-primary/10">
              <GraduationCap className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-brand-muted font-roboto">
              Learning Journey
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
            {educationConfig.sectionTitle}
          </h2>
          <p className="text-xl text-brand-secondary font-roboto max-w-2xl mx-auto">
            {educationConfig.subtitle}
          </p>
        </div>

        {/* Education Cards */}
        <div ref={educationRef} className="space-y-6">
          {educationConfig.educations.map((education, index) => (
            <div
              key={education.id}
              className="education-card relative bg-white/70 backdrop-blur-sm border border-brand-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Icon and Score */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 lg:w-48 flex-shrink-0">
                  <div className="p-4 bg-brand-primary/10 rounded-xl">
                    {index === 0 ? (
                      <GraduationCap className="w-8 h-8 text-brand-primary" />
                    ) : (
                      <BookOpen className="w-8 h-8 text-brand-primary" />
                    )}
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-oswald text-3xl md:text-4xl font-bold text-brand-primary">
                      {education.score}
                    </p>
                    <p className="text-sm text-brand-muted font-roboto uppercase tracking-wider">
                      {education.scoreLabel}
                    </p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-oswald text-xl md:text-2xl font-semibold text-brand-primary mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-brand-secondary font-roboto">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-brand-muted font-roboto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brand-secondary font-roboto mb-4">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {education.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-brand-primary/5 text-brand-secondary text-xs rounded-full font-roboto"
                      >
                        <Star className="w-3 h-3 text-brand-primary" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
