"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "TechFest Platform",
    description: "A comprehensive event management system handling thousands of participant registrations, real-time payments, and scheduling for a major technical festival.",
    tags: ["Next.js", "TypeScript", "AWS", "Prisma"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639700/h4frc8kui8spiqqf6w0a.png",
    github: "https://github.com/Gyanranjan-Priyam/insprano-dashboard",
    link: "https://registration-insprano.vercel.app/login",
    color: "#18181b"
  },
  {
    title: "Sams School LMS",
    description: "Full-featured Learning Management System empowering educators with course creation tools, student analytics, and seamless payment integration via Stripe.",
    tags: ["Next.js", "Stripe", "Prisma", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639812/nfdwvhhz29ye3kefeayz.png",
    github: "https://github.com/Gyanranjan-Priyam/lms",
    link: "https://lms-gyanranjan.vercel.app/",
    color: "#09090b"
  },
  {
    title: "JEE/NEET Prep AI",
    description: "AI-driven educational platform providing personalized study paths, adaptive testing, and performance analytics for competitive exam aspirants.",
    tags: ["Next.js", "Supabase", "AI Integration", "BetterAuth"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639888/uwehpvwy3rmlaked0rog.png",
    github: "https://github.com/Gyanranjan-Priyam/jee-neet",
    link: "https://jee-neet.vercel.app/",
    color: "#18181b"
  },
  {
    title: "College CMS",
    description: "Enterprise-grade College Management System streamlining administrative workflows, from student admission to result publication and certification.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640285/ptgzujvahlxxnbr6ug2l.png",
    github: "https://github.com/Gyanranjan-Priyam/cms",
    link: "https://cms-gyanranjanpriyam.netlify.app/",
    color: "#09090b"
  },
  {
    title: "Inventory AI",
    description: "Smart inventory management solution featuring POS integration, multi-store support, and predictive analytics for stock optimization.",
    tags: ["React", "Node.js", "Razorpay", "AI Analytics"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640034/o7uckf8ambkq2fcojljd.png",
    github: "https://github.com/Gyanranjan-Priyam/ims",
    link: "https://ims-gyanranjanpriyam.netlify.app",
    color: "#18181b"
  },
  {
    title: "CodeBreakers Website",
    description: "Official website for the CodeBreakers community, showcasing events, resources, and member achievements.",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "AWS"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766294666/z9i9js9marw3o6oxxnmt.png",
    github: "https://github.com/Gyanranjan-Priyam/codebreakersgcek",
    link: "https://www.codebreakersgcek.tech/",
    color: "#09090b"
  },
  {
    title: "Orbit",
    description: "Orbit is a simple and flexible project management app that helps teams plan, track, and organize their work in one place. It makes it easy to manage tasks, set priorities, and follow progress without unnecessary complexity. Built to keep projects moving and teams aligned.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766294522/eqxfix8s0nbej0ztavpd.png",
    github: "https://github.com/Gyanranjan-Priyam/orbit",
    link: "https://github.com/Gyanranjan-Priyam/orbit/releases/tag/apk",
    color: "#18181b"
  }
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useGSAP(() => {
      const projects = gsap.utils.toArray<HTMLElement>(".project-row");
    
    projects.forEach((project) => {
      gsap.from(project, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none reverse"

        }
      });
    });

    // Header Animation
    gsap.from(".header-reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

  }, { scope: container });

  return (
    <section id="projects" ref={container} className="relative bg-black text-white py-24 md:py-32">
      
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-[0.9] header-reveal" style={{ fontFamily: "var(--font-gta)" }}>
              Featured <br/> <span className="text-white/40 text-6xl">Projects.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm text-right header-reveal">
            <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-u)" }}>
              A collection of digital products crafted with precision, performance, and passion.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Stack */}
      <div className="relative px-4 md:px-6">
        {/* --- MOBILE LAYOUT --- */}
        <div className="flex flex-col gap-16 md:hidden">
          {projects.map((project, i) => {
            const projectId = `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
            return (
              <div key={i} className="group relative" data-project={projectId}>
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl">
                {/* Image Area */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tIndex) => (
                      <span key={tIndex} className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-wider text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 relative z-10 -mt-12">
                  <div className="bg-neutral-900/80 backdrop-blur-xl rounded-xl p-5 border border-white/5 shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-a)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        className="flex items-center justify-center p-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:block" onMouseMove={handleMouseMove}>
          {projects.map((project, i) => {
            const projectId = `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
            return (
              <div 
                key={i} 
                className="project-card sticky top-0 h-screen flex items-center justify-center py-8"
                style={{ zIndex: i + 1 }}
                data-project={projectId}
              >
              <div 
                className="card-inner relative w-full max-w-7xl h-[85vh] md:h-[80vh] bg-neutral-900 rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl origin-top"
                style={{ backgroundColor: project.color }}
              >
                
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 rounded-full border border-white/10 text-xs uppercase tracking-wider text-white/80 bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-a)" }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-white/60 leading-relaxed max-w-md" style={{fontFamily: "var(--font-a)"}}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 mt-12">
                    <Link href={project.github} target="_blank" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors cursor-target">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </Link>
                    <Link href={project.link} target="_blank" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors cursor-target">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Live Demo</span>
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div 
                  className="flex-1 relative h-64 lg:h-auto overflow-hidden bg-black/20"
                  onMouseEnter={() => setHoveredImage(project.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/80 via-transparent to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>
          );
          })}
        </div>

        {/* Hover Preview - Desktop Only */}
        {hoveredImage && (
          <div 
            className="hidden md:block fixed pointer-events-none z-[9999] transition-opacity duration-300"
            style={{
              left: `${mousePosition.x + 20}px`,
              top: `${mousePosition.y + 20}px`,
              transform: 'translate(0, -50%)'
            }}
          >
            <div className="relative w-[500px] h-[350px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black/40 backdrop-blur-sm">
              <Image
                src={hoveredImage}
                alt="Project preview"
                fill
                className="object-contain"
                sizes="500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
