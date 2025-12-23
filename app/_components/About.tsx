"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Code2, Palette, Rocket, ArrowUpRight, Trophy, FileUser } from "lucide-react";
import { HyperText } from "@/components/ui/hyper-text";
import { Tooltip } from "@/components/ui/tooltip-card";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Title Reveal Animation
    const titles = gsap.utils.toArray<HTMLElement>('.reveal-text');
    titles.forEach((title) => {
      gsap.fromTo(title, 
        { y: 100, opacity: 0, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 2. Image Parallax & Scale
    if (imageRef.current) {
      gsap.fromTo(imageRef.current.querySelector("img"), 
        { scale: 1.2, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }

    // 3. Skills Grid Stagger
    gsap.from(".skill-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
      }
    });

    // 4. Divider Line Animation
    gsap.utils.toArray<HTMLElement>('.divider-line').forEach(line => {
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative w-full bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-7 md:mb-10">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold leading-[0.9] tracking-tight reveal-text" style={{ fontFamily: "var(--font-gta" }}>
              About <span className="text-white/50">the</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <HyperText 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight reveal-text" 
            style={{ fontFamily: "var(--font-a)" }}> 
              Developer.
            </HyperText>
          </div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="flex flex-col gap-8 md:hidden">
           {/* Mobile Image */}
           <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763650481/zb9w1qqtmajfq8k12uuz.jpg"
                alt="Gyanranjan Priyam"
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs font-mono text-white/60 mb-1">BASED IN INDIA</p>
                        <h2 className="text-2xl font-bold text-white">Gyanranjan Priyam</h2>
                    </div>
                 </div>
              </div>
           </div>

           {/* Mobile Bio */}
           <div className="space-y-8">
              <div className="space-y-4">
                  <p className="text-lg text-white/90 leading-relaxed font-medium">
                    I&apos;m <span className="text-white font-bold">Priyam</span>. An electrical engineering student and software developer focused on building seamless digital experiences.
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    I combine my engineering background with a passion for web technologies to create efficient, user-centric applications.
                  </p>
              </div>

              {/* Cards for Sections */}
              <div className="grid gap-4">
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2.5 bg-white/10 rounded-full"><Trophy className="w-5 h-5 text-white" /></div>
                       <h3 className="font-bold text-white text-lg">Education</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-neutral-400">
                       <li className="flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                          <span>B.Tech in Electrical Engineering, GCE Kalahandi</span>
                       </li>
                       <li className="flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                          <span>Topper of Divine Higher Secondary School (2020)</span>
                       </li>
                       <li className="flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                          <span>Recipient of multiple merit scholarships</span>
                       </li>
                    </ul>
                 </div>

                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="p-2.5 bg-white/10 rounded-full"><Rocket className="w-5 h-5 text-white" /></div>
                       <h3 className="font-bold text-white text-lg">Interests</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["Web Development", "Reading", "Research", "Technology", "Design"].map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                       I enjoy exploring different genres of literature and continuously learning through reading and hands-on projects.
                    </p>
                 </div>
              </div>

              {/* Resume Button */}
              <a 
                  href="https://drive.google.com/file/d/146Wlv6D7RSiyhqTOpYMDmZ0Ly2762A5P/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-5 bg-white text-black rounded-2xl font-bold hover:bg-neutral-200 transition-all active:scale-[0.98]"
              >
                  <span className="flex items-center gap-2">
                    <FileUser className="w-5 h-5" />
                    Download Resume
                  </span>
                  <ArrowUpRight className="w-5 h-5" />
              </a>
           </div>
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Image */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div ref={imageRef} className="relative aspect-[4/6] w-full overflow-hidden rounded-sm bg-neutral-900 image-container">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763650481/zb9w1qqtmajfq8k12uuz.jpg"
                alt="Gyanranjan Priyam"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="mt-6 flex justify-between items-center text-sm text-white/60 font-mono">
              <span>..................</span>
              <span>BASED IN INDIA</span>
            </div>
          </div>

          {/* Right Column: Bio & Stats */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between h-full">
            <div className="space-y-8">
              <div className="h-px w-full bg-white/20 divider-line" />
              <div
            className="text-sm text-white text-left sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed space-y-1 mt-4"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            <span className="flex text-left items-center justify-start gap-4">
              I'm{" "}
              <HyperText
                className="text-3xl font-semibold"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Priyam
              </HyperText>
            </span>
            <span className="block">
              I’m an electrical engineering student with a passion for
              technology and web development. Alongside my core studies I am
              also a software developer focused on building seamless, efficient,
              and user-centric digital experiences across both front-end and
              back-end technologies.
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-white"
              style={{ fontFamily: "var(--font-a)" }}
            >
              <p className="text-2xl font-bold mb-3 underline">
                Educational Background And achivements
              </p>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                I had completed my{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content="Intermediate Completed from Divine HSS, Nayagarh, Odisha with 85 percentage mark from Science stream under CHSE Board."
                >
                  <span className="font-bold">intermediate</span>
                </Tooltip>{" "}
                with first division and also topper of the{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content="Divine Higher Secondary School, Nayagarh Odisha"
                >
                  <span className="font-bold">College</span>
                </Tooltip>{" "}
                in 2020. Currently, I am pursuing my{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content="Bachelor of Technology in Electrical Engineering from Government College of Engineering, Kalahandi, Bhawanipatna, Odisha under BPUT University."
                >
                  <span className="font-bold">B.Tech</span>
                </Tooltip>{" "}
                from Government College of Engineering, Kalahandi. I have also
                achieved{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content="Secured 2nd position in District Level Science Exhibition held at Nayagarh in 2019."
                >
                  <span className="font-bold">various prizes</span>
                </Tooltip>{" "}
                in the field of science and technology during my school and
                college time. Also I have achived various State level{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content=" Awarded Meritious Scholarships by the Government of Odisha for academic excellence in 2015 and 2016. Along with this I have also get NRTS Scholarship for the year 2019."
                >
                  <span className="cursor-target font-bold">
                    Meritious Scholarships
                  </span>
                </Tooltip>{" "}
                and{" "}
                <Tooltip
                  containerClassName="text-white  cursor-target"
                  content=" Awarded 1st Prize in Quiz District Level held at Nayagarh in 2018."
                >
                  <span className="cursor-target font-bold">Prizes</span>
                </Tooltip>{" "}
                during my academic career.
              </p>
            </span>
            <span
              className="text-white mt-10"
              style={{ fontFamily: "var(--font-a)" }}
            >
              <p className="text-xl font-bold mb-3 underline">
                Hobbies and Interest
              </p>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                My hobbies include{" "}
                <Tooltip
                  containerClassName="text-white cursor-target"
                  content="I enjoy reading a wide range of books that help me expand my imagination, improve my thinking, and gain new perspectives."
                >
                  <span className="font-bold">reading books</span>
                </Tooltip>{" "}
                and{" "}
                <Tooltip
                  containerClassName="text-white cursor-target"
                  content="I love building websites, learning new web technologies, and improving my development skills through hands-on projects."
                >
                  <span className="font-bold">web development</span>
                </Tooltip>
                . I enjoy exploring different genres of literature and
                continuously learning through reading. Along with this, creating
                websites and working on development projects keeps me motivated
                to improve my technical skills.
                <br />
                <br />I also have a strong interest in{" "}
                <Tooltip
                  containerClassName="text-white cursor-target"
                  content="I am passionate about exploring new topics, learning about emerging fields, and conducting research to expand my understanding."
                >
                  <span className="font-bold">research</span>
                </Tooltip>{" "}
                across various fields. Research helps me explore new ideas, stay
                updated with advancements, and continuously gain knowledge about
                the world around me.
              </p>
            </span>
          </div>

              <div className="pt-8">
                <a 
                  href="https://drive.google.com/file/d/146Wlv6D7RSiyhqTOpYMDmZ0Ly2762A5P/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center cursor-target gap-2 text-lg font-medium text-white hover:text-white/80 transition-colors reveal-text"
                >
                <FileUser className="w-5 h-5" />
                  Download Resume
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack / Logo Loop */}
        <div className="mt-32 border-t border-white/10 pt-16">
           <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-12 reveal-text" >Technologies & Tools</p>
           <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
             <div className="flex overflow-hidden whitespace-nowrap py-4 mask-image-gradient">
                <div className="flex animate-marquee gap-16 items-center">
                   {["React", "Next.js", "TypeScript", "GSAP", "Node.js", "GraphQL", "AWS", "Tailwind", "Figma", "Three.js", "WebGL"].map((tech, i) => (
                      <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase font-mono">{tech}</span>
                   ))}
                   {["React", "Next.js", "TypeScript", "GSAP", "Node.js", "GraphQL", "AWS", "Tailwind", "Figma", "Three.js", "WebGL"].map((tech, i) => (
                      <span key={`dup-${i}`} className="text-2xl md:text-4xl font-bold text-white/20 uppercase font-mono">{tech}</span>
                   ))}
                </div>
             </div>
           </div>
        </div>

      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
