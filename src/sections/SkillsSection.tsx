import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Globe, Wrench, Database } from 'lucide-react';
import { skillsConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Wrench,
  Database,
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      // Category cards animation
      const cards = categoriesRef.current?.querySelectorAll('.skill-category');
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
              trigger: categoriesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Skill bars animation
      const skillBars = categoriesRef.current?.querySelectorAll('.skill-bar-fill');
      if (skillBars) {
        skillBars.forEach((bar) => {
          const level = bar.getAttribute('data-level');
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${(parseInt(level || '0') / 5) * 100}%`,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-primary/10">
              <Code2 className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-brand-muted font-roboto">
              My Expertise
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
            {skillsConfig.sectionTitle}
          </h2>
          <p className="text-xl text-brand-secondary font-roboto max-w-2xl mx-auto">
            {skillsConfig.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillsConfig.categories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={categoryIndex}
                className="skill-category p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-brand-border rounded-2xl hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-brand-primary/10">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-oswald text-xl md:text-2xl font-semibold text-brand-primary">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-brand-secondary font-roboto">
                          {skill.name}
                        </span>
                        <span className="text-xs text-brand-muted font-roboto">
                          {skill.level === 5
                            ? 'Expert'
                            : skill.level === 4
                            ? 'Advanced'
                            : skill.level === 3
                            ? 'Intermediate'
                            : skill.level === 2
                            ? 'Basic'
                            : 'Beginner'}
                        </span>
                      </div>
                      <div className="h-2 bg-brand-border rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                          data-level={skill.level}
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
