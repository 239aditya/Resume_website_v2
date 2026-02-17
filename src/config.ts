// ============================================================
// Resume Configuration - Aditya Saini
// ============================================================
// Edit this file to update your resume content
// All sections are customizable through this config file
// ============================================================

// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Aditya Saini | Software Developer",
  description: "Final-year B.Tech CSE student skilled in Core Java, Python, OOPs, DBMS, and DSA. Passionate about software development and scalable applications.",
  language: "en",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  links: NavLink[];
  resumeDownloadText: string;
  resumeFileName: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Aditya Saini",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ],
  resumeDownloadText: "Download Resume",
  resumeFileName: "Aditya_Saini_Resume.pdf",
};

// ============================================================
// Hero Section
// ============================================================

export interface HeroConfig {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  portrait: string;
  portraitAlt: string;
  ctaPrimary: string;
  ctaSecondary: string;
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export const heroConfig: HeroConfig = {
  greeting: "Hello, I'm",
  name: "Aditya Saini",
  title: "Software Developer",
  tagline: "Building Scalable Solutions with Code",
  description: "Final-year B.Tech CSE student at GL Bajaj Institute of Technology and Management. Passionate about software development, problem-solving, and creating impactful applications.",
  portrait: "/hero-portrait.jpg",
  portraitAlt: "Aditya Saini - Software Developer",
  ctaPrimary: "View My Work",
  ctaSecondary: "Get In Touch",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/aditya-saini-059590259",
    github: "https://github.com/239aditya",
    email: "mailto:aditya.saini@example.com",
  },
};

// ============================================================
// About Section
// ============================================================

export interface AboutConfig {
  sectionTitle: string;
  subtitle: string;
  paragraphs: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  softSkills: string[];
}

export const aboutConfig: AboutConfig = {
  sectionTitle: "About Me",
  subtitle: "Passionate Developer & Problem Solver",
  paragraphs: [
    "I am a final-year B.Tech Computer Science and Engineering student at GL Bajaj Institute of Technology and Management with a CGPA of 7.77. My journey in tech has been driven by a deep curiosity for how things work and a desire to build solutions that make a difference.",
    "With a strong foundation in Core Java, Python, and Object-Oriented Programming, I enjoy tackling complex problems and transforming ideas into functional, user-friendly applications. My experience spans web development, database management, and software engineering principles.",
    "I believe in continuous learning and staying updated with the latest technologies. Whether it's developing a responsive web application or optimizing algorithms, I approach every challenge with dedication and creativity."
  ],
  highlights: [
    { label: "CGPA", value: "7.77" },
    { label: "Years of Study", value: "4" },
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "15+" },
  ],
  softSkills: [
    "Leadership",
    "Adaptability",
    "Communication",
    "Pressure Handling",
    "Continuous Learning",
  ],
};

// ============================================================
// Skills Section
// ============================================================

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

export interface SkillsConfig {
  sectionTitle: string;
  subtitle: string;
  categories: SkillCategory[];
}

export const skillsConfig: SkillsConfig = {
  sectionTitle: "Technical Skills",
  subtitle: "Technologies & Tools I Work With",
  categories: [
    {
      category: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Core Java", level: 4 },
        { name: "Python", level: 3 },
        { name: "C", level: 3 },
      ],
    },
    {
      category: "Web Development",
      icon: "Globe",
      skills: [
        { name: "HTML5", level: 4 },
        { name: "CSS3", level: 4 },
        { name: "JavaScript", level: 3 },
        { name: "React (Basic)", level: 2 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 3 },
        { name: "IntelliJ IDEA", level: 4 },
        { name: "VS Code", level: 4 },
      ],
    },
    {
      category: "Concepts & Databases",
      icon: "Database",
      skills: [
        { name: "OOPs", level: 4 },
        { name: "Data Structures", level: 4 },
        { name: "DBMS/SQL", level: 3 },
        { name: "REST APIs", level: 3 },
      ],
    },
  ],
};

// ============================================================
// Experience Section
// ============================================================

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ExperienceConfig {
  sectionTitle: string;
  subtitle: string;
  experiences: ExperienceItem[];
}

export const experienceConfig: ExperienceConfig = {
  sectionTitle: "Experience",
  subtitle: "Internships & Professional Work",
  experiences: [
    {
      id: 1,
      role: "Cloud Security Intern",
      company: "Virtual Internship Program",
      type: "Internship",
      duration: "Summer 2024",
      location: "Remote",
      description: "Completed a comprehensive virtual internship focused on modern cloud security practices and infrastructure management.",
      achievements: [
        "Studied and implemented Zero Trust security principles",
        "Worked on cloud infrastructure simulations and security protocols",
        "Gained hands-on experience with cloud security frameworks",
        "Learned about threat detection and mitigation strategies",
      ],
      technologies: ["Cloud Security", "Zero Trust", "Infrastructure Management"],
    },
  ],
};

// ============================================================
// Projects Section
// ============================================================

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

export interface ProjectsConfig {
  sectionTitle: string;
  subtitle: string;
  projects: ProjectItem[];
}

export const projectsConfig: ProjectsConfig = {
  sectionTitle: "Projects",
  subtitle: "Featured Work & Personal Builds",
  projects: [
    {
      id: 1,
      title: "Sports Shopping Website",
      description: "A fully functional e-commerce platform for sports equipment with modern UI and interactive features.",
      longDescription: "Developed a comprehensive sports shopping website that provides users with a seamless shopping experience. The platform includes product browsing, filtering, cart management, and search functionality with a responsive design that works across all devices.",
      image: "/project-sports-shop.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      features: [
        "Product listing with dynamic filtering",
        "Shopping cart functionality with local storage",
        "Search algorithms for product discovery",
        "Responsive UI for all screen sizes",
        "Interactive product cards",
      ],
      githubUrl: "https://github.com/239aditya",
      liveUrl: "#",
      category: "Web Development",
    },
  ],
};

// ============================================================
// Education Section
// ============================================================

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  description: string;
  achievements: string[];
}

export interface EducationConfig {
  sectionTitle: string;
  subtitle: string;
  educations: EducationItem[];
}

export const educationConfig: EducationConfig = {
  sectionTitle: "Education",
  subtitle: "Academic Background & Qualifications",
  educations: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "GL Bajaj Institute of Technology and Management",
      location: "Greater Noida, India",
      duration: "2022 - 2026",
      score: "7.77",
      scoreLabel: "CGPA",
      description: "Pursuing B.Tech in Computer Science and Engineering with focus on software development, algorithms, and system design.",
      achievements: [
        "Consistent academic performance",
        "Active participation in coding activities",
        "Completed multiple technical projects",
      ],
    },
    {
      id: 2,
      degree: "Senior Secondary (Class 12)",
      institution: "High School",
      location: "India",
      duration: "2021 - 2022",
      score: "86.7%",
      scoreLabel: "Percentage",
      description: "Completed senior secondary education with focus on Science and Mathematics.",
      achievements: [
        "Excellent academic performance",
        "Strong foundation in Mathematics and Physics",
      ],
    },
    {
      id: 3,
      degree: "Secondary (Class 10)",
      institution: "High School",
      location: "India",
      duration: "2019 - 2020",
      score: "95.2%",
      scoreLabel: "Percentage",
      description: "Completed secondary education with outstanding academic performance.",
      achievements: [
        "Top performer in class",
        "Strong foundation in all subjects",
      ],
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  quickLinks: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
  };
  contactInfo: {
    email: string;
    location: string;
  };
  copyright: string;
  backToTopText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Aditya Saini",
  tagline: "Software Developer",
  description: "Final-year CSE student passionate about building scalable software solutions and creating impactful applications.",
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/aditya-saini-059590259",
    github: "https://github.com/239aditya",
    email: "mailto:aditya.saini@example.com",
  },
  contactInfo: {
    email: "aditya.saini@example.com",
    location: "Greater Noida, India",
  },
  copyright: "© 2025 Aditya Saini. All rights reserved.",
  backToTopText: "Back to Top",
};
