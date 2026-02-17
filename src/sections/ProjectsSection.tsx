import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { projectsConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      // Project cards animation
      const cards = projectsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
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
      id="projects"
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-brand-primary/10">
              <FolderGit2 className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-brand-muted font-roboto">
              My Work
            </span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4">
            {projectsConfig.sectionTitle}
          </h2>
          <p className="text-xl text-brand-secondary font-roboto max-w-2xl mx-auto">
            {projectsConfig.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsConfig.projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-white/70 backdrop-blur-sm border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent" />
                <Layers className="w-16 h-16 text-brand-primary/30 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-brand-primary text-xs font-medium rounded-full font-roboto">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-brand-primary hover:scale-110 transition-transform duration-300"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-brand-primary hover:scale-110 transition-transform duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-secondary font-roboto mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-brand-primary mt-1 flex-shrink-0" />
                      <span className="text-xs text-brand-muted font-roboto">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-brand-primary/5 text-brand-secondary text-xs rounded font-roboto"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <MagneticButton
            onClick={() => window.open('https://github.com/239aditya', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary font-roboto font-medium rounded-full hover:bg-brand-primary hover:text-brand-linen transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
