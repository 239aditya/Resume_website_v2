import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

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

      // Experience cards animation
      const cards = experiencesRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Achievement items animation
      const achievements = experiencesRef.current?.querySelectorAll('.achievement-item');
      if (achievements) {
        gsap.fromTo(
          achievements,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: experiencesRef.current,
              start: 'top 70%',
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
      id="experience"
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-primary/10">
              <Briefcase className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-brand-muted font-roboto">
              Professional Journey
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
            {experienceConfig.sectionTitle}
          </h2>
          <p className="text-xl text-brand-secondary font-roboto max-w-2xl mx-auto">
            {experienceConfig.subtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div ref={experiencesRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-border md:-translate-x-1/2" />

          {experienceConfig.experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`experience-card relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-brand-linen md:-translate-x-1/2 z-10`}
              />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <div className="p-6 md:p-8 bg-white/70 backdrop-blur-sm border border-brand-border rounded-2xl hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full mb-3 font-roboto">
                        {experience.type}
                      </span>
                      <h3 className="font-oswald text-xl md:text-2xl font-semibold text-brand-primary mb-1">
                        {experience.role}
                      </h3>
                      <p className="text-brand-secondary font-roboto">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-brand-muted font-roboto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brand-secondary font-roboto mb-4">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {experience.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="achievement-item flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-secondary font-roboto">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-brand-primary/5 text-brand-secondary text-xs rounded-full font-roboto"
                      >
                        {tech}
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
