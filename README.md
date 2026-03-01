# Aditya Saini - Resume Website

A modern, responsive, and animated personal resume website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Live Demo

**[View Live Website(External Server)](https://resume-website-v2-beta.vercel.app/)**
**[View Live Website(Github Server)](https://239aditya.github.io/Resume_website_v2/)**

## 📁 Project Structure

```
/mnt/okcomputer/output/app/
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable components
│   │   ├── CustomCursor.tsx    # Custom cursor effect
│   │   ├── MagneticButton.tsx  # Magnetic hover button
│   │   └── NoiseOverlay.tsx    # Film grain overlay
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx     # Hero/Intro section
│   │   ├── AboutSection.tsx    # About me section
│   │   ├── SkillsSection.tsx   # Technical skills
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── ProjectsSection.tsx # Project showcase
│   │   ├── EducationSection.tsx # Education history
│   │   ├── Footer.tsx          # Footer with links
│   │   └── Navigation.tsx      # Sticky navigation
│   ├── hooks/                  # Custom React hooks
│   │   └── useLenis.ts         # Smooth scroll hook
│   ├── config.ts               # ⭐ ALL CONTENT HERE
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## ✏️ How to Edit Content

All content is centralized in **`src/config.ts`**. Simply edit this file to update your resume information.

### 1. Personal Information (Hero Section)

```typescript
export const heroConfig: HeroConfig = {
  greeting: "Hello, I'm",
  name: "Aditya Saini",           // Your name
  title: "Software Developer",     // Your title
  tagline: "Building Scalable Solutions with Code",
  description: "Your bio here...",
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    email: "mailto:your.email@example.com",
  },
};
```

### 2. About Section

```typescript
export const aboutConfig: AboutConfig = {
  sectionTitle: "About Me",
  subtitle: "Passionate Developer & Problem Solver",
  paragraphs: [
    "Your first paragraph...",
    "Your second paragraph...",
  ],
  highlights: [
    { label: "CGPA", value: "7.77" },
    { label: "Years of Study", value: "4" },
  ],
  softSkills: ["Leadership", "Adaptability", "Communication"],
};
```

### 3. Skills Section

```typescript
export const skillsConfig: SkillsConfig = {
  categories: [
    {
      category: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Core Java", level: 4 },  // level: 1-5
        { name: "Python", level: 3 },
      ],
    },
    // Add more categories...
  ],
};
```

### 4. Experience Section

```typescript
export const experienceConfig: ExperienceConfig = {
  experiences: [
    {
      id: 1,
      role: "Cloud Security Intern",
      company: "Virtual Internship Program",
      type: "Internship",
      duration: "Summer 2024",
      location: "Remote",
      description: "Description here...",
      achievements: ["Achievement 1", "Achievement 2"],
      technologies: ["Cloud Security", "Zero Trust"],
    },
  ],
};
```

### 5. Projects Section

```typescript
export const projectsConfig: ProjectsConfig = {
  projects: [
    {
      id: 1,
      title: "Sports Shopping Website",
      description: "Short description...",
      longDescription: "Detailed description...",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Feature 1", "Feature 2"],
      githubUrl: "https://github.com/...",
      liveUrl: "https://...",
      category: "Web Development",
    },
  ],
};
```

### 6. Education Section

```typescript
export const educationConfig: EducationConfig = {
  educations: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "GL Bajaj Institute of Technology",
      location: "Greater Noida, India",
      duration: "2022 - 2026",
      score: "7.77",
      scoreLabel: "CGPA",
      description: "Description...",
      achievements: ["Achievement 1"],
    },
  ],
};
```

### 7. Footer & Navigation

```typescript
export const navigationConfig: NavigationConfig = {
  brandName: "Aditya Saini",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    // Add more links...
  ],
  resumeDownloadText: "Download Resume",
  resumeFileName: "Aditya_Saini_Resume.pdf",
};

export const footerConfig: FooterConfig = {
  socialLinks: {
    linkedin: "https://linkedin.com/in/...",
    github: "https://github.com/...",
    email: "mailto:...",
  },
  // ...
};
```

## 🛠️ How to Add New Sections

1. **Create a new section component** in `src/sections/`:

```typescript
// src/sections/NewSection.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Add animations here
  }, []);

  return (
    <section ref={sectionRef} id="new-section" className="py-24">
      {/* Your content */}
    </section>
  );
}
```

2. **Add the section to App.tsx**:

```typescript
import NewSection from '@/sections/NewSection';

// In the main component:
<main>
  {/* existing sections */}
  <NewSection />
</main>
```

3. **Add navigation link** in `config.ts`:

```typescript
export const navigationConfig: NavigationConfig = {
  links: [
    // existing links
    { label: "New Section", href: "#new-section" },
  ],
};
```

## 🚀 How to Deploy

### Build the project:

```bash
cd /mnt/okcomputer/output/app
npm run build
```

### Deploy:

The `dist/` folder contains the built files. Upload these to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **AWS S3**: Upload `dist/` contents to S3 bucket

## 🎨 Design System

### Colors
- **Primary**: `#161616` (near black)
- **Secondary**: `#535353` (dark gray)
- **Muted**: `#b1b1b1` (light gray)
- **Background**: `#f2ede7` (warm linen)
- **Border**: `#e5e5e5` (light border)

### Typography
- **Headings**: Oswald (sans-serif)
- **Body**: Roboto (sans-serif)

### Features
- ✅ Smooth scroll with Lenis
- ✅ Custom cursor with hover states
- ✅ GSAP scroll animations
- ✅ Responsive design (mobile + tablet + desktop)
- ✅ Magnetic button effects
- ✅ Noise texture overlay
- ✅ Section reveal animations

## 📦 Dependencies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GSAP + ScrollTrigger** - Animations
- **Lenis** - Smooth scrolling
- **Lucide React** - Icons

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Aditya Saini**
