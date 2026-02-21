"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── project data ─── */
const projects = [
  {
    id: "01",
    label: "Event Platform",
    title: "TECHFEST /\nPLATFORM",
    description:
      "A comprehensive event management system handling thousands of participant registrations, real-time payments, and scheduling for a major technical festival.",
    tags: ["Next.js", "TypeScript", "AWS", "Prisma"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639700/h4frc8kui8spiqqf6w0a.png",
    github: "https://github.com/Gyanranjan-Priyam/insprano-dashboard",
    link:   "https://registration-insprano.vercel.app/login",
  },
  {
    id: "02",
    label: "EdTech / LMS",
    title: "SAMS SCHOOL /\nLMS",
    description:
      "Full-featured Learning Management System empowering educators with course creation tools, student analytics, and seamless payment integration via Stripe.",
    tags: ["Next.js", "Stripe", "Prisma", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639812/nfdwvhhz29ye3kefeayz.png",
    github: "https://github.com/Gyanranjan-Priyam/lms",
    link:   "https://lms-gyanranjan.vercel.app/",
  },
  {
    id: "03",
    label: "AI Education",
    title: "JEE / NEET\nPREP AI",
    description:
      "AI-driven educational platform providing personalised study paths, adaptive testing, and performance analytics for competitive exam aspirants.",
    tags: ["Next.js", "Supabase", "AI Integration", "BetterAuth"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639888/uwehpvwy3rmlaked0rog.png",
    github: "https://github.com/Gyanranjan-Priyam/jee-neet",
    link:   "https://jee-neet.vercel.app/",
  },
  {
    id: "04",
    label: "Enterprise",
    title: "COLLEGE /\nCMS",
    description:
      "Enterprise-grade College Management System streamlining administrative workflows from student admission to result publication and certification.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640285/ptgzujvahlxxnbr6ug2l.png",
    github: "https://github.com/Gyanranjan-Priyam/cms",
    link:   "https://cms-gyanranjanpriyam.netlify.app/",
  },
  {
    id: "05",
    label: "Inventory",
    title: "INVENTORY /\nAI",
    description:
      "Smart inventory management featuring POS integration, multi-store support, and predictive analytics for stock optimisation.",
    tags: ["React", "Node.js", "Razorpay", "AI Analytics"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640034/o7uckf8ambkq2fcojljd.png",
    github: "https://github.com/Gyanranjan-Priyam/ims",
    link:   "https://ims-gyanranjanpriyam.netlify.app",
  },
  {
    id: "06",
    label: "Community",
    title: "CODEBREAKERS /\nWEBSITE",
    description:
      "Official website for the CodeBreakers community, showcasing events, resources, and member achievements with a modern editorial feel.",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "AWS"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766294666/z9i9js9marw3o6oxxnmt.png",
    github: "https://github.com/Gyanranjan-Priyam/codebreakersgcek",
    link:   "https://www.codebreakersgcek.tech/",
  },
  {
    id: "07",
    label: "Mobile App",
    title: "ORBIT",
    description:
      "A flexible project management app that helps teams plan, track, and organise work in one place — built to keep projects moving and teams aligned.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766294522/eqxfix8s0nbej0ztavpd.png",
    github: "https://github.com/Gyanranjan-Priyam/orbit",
    link:   "https://github.com/Gyanranjan-Priyam/orbit/releases/tag/apk",
  },
];

/* ════════════════════════════════════
   PROJECTS COMPONENT
════════════════════════════════════ */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    /* ── DESKTOP: sticky-left / scrolling-right ── */
    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".left-panel");
      const cards  = gsap.utils.toArray<HTMLElement>(".right-card");
      let active   = 0;

      /* seed: first panel visible, rest hidden */
      gsap.set(panels, { opacity: 0, y: 32 });
      gsap.set(panels[0], { opacity: 1, y: 0 });

      /* progress dots initial state */
      gsap.utils.toArray<HTMLElement>(".prog-dot").forEach((dot, i) => {
        gsap.set(dot, { scaleY: i === 0 ? 2.8 : 1, opacity: i === 0 ? 1 : 0.18 });
      });

      function switchPanel(next: number) {
        if (next === active) return;
        const dir  = next > active ? 1 : -1;
        const prev = active;
        active     = next;

        /* animate out old */
        gsap.to(panels[prev], {
          y: -28 * dir,
          opacity: 0,
          duration: 0.38,
          ease: "power2.in",
          overwrite: true,
        });

        /* animate in new */
        gsap.fromTo(
          panels[next],
          { y: 28 * dir, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, ease: "power3.out", delay: 0.1, overwrite: true }
        );

        /* progress dots */
        gsap.utils.toArray<HTMLElement>(".prog-dot").forEach((dot, i) => {
          gsap.to(dot, {
            scaleY: i === next ? 2.8 : 1,
            opacity: i === next ? 1 : 0.18,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      cards.forEach((card, i) => {
        /* switch left panel when this card crosses viewport midpoint */
        ScrollTrigger.create({
          trigger: card,
          start: "top 52%",
          end:   "bottom 52%",
          onEnter:     () => switchPanel(i),
          onEnterBack: () => switchPanel(i),
        });

        /* image card: clip-path entrance from bottom */
        const imgCard = card.querySelector<HTMLElement>(".proj-img-card");
        if (imgCard) {
          gsap.from(imgCard, {
            clipPath: "inset(100% 0% 0% 0% round 1.25rem)",
            duration: 1.05,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    /* ── MOBILE: simple fade-up ── */
    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray<HTMLElement>(".mob-card").forEach((card) => {
        gsap.from(card, {
          y: 55,
          opacity: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="projects" className="bg-t-bg text-t-fg">

      {/* ══════════════ DESKTOP ══════════════ */}
      <div
        className="hidden md:flex"
        style={{ height: `${projects.length * 100}svh` }}
      >

        {/* ── LEFT STICKY ── */}
        <div
          className="sticky top-0 h-svh w-[38%] shrink-0 overflow-hidden
                     border-r border-t-fg/6 dark:border-white/6"
        >
          {/* Fixed top: section label + progress dots */}
          <div className="absolute top-10 left-12 right-10 flex items-center justify-between z-20 pointer-events-none">
            <span
              className="text-[9px] uppercase tracking-[0.45em] text-t-fg/22 dark:text-white/20"
              style={{ fontFamily: "var(--font-u)" }}
            >
              Featured Projects
            </span>
            <div className="flex items-center gap-1.5">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className="prog-dot w-px rounded-full origin-top bg-t-fg dark:bg-white"
                  style={{ height: 14 }}
                />
              ))}
            </div>
          </div>

          {/* Switching panels — stacked absolutely */}
          {projects.map((p, i) => (
            <div
              key={i}
              className="left-panel absolute inset-0 flex flex-col justify-center px-12 pt-20 pb-16"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {/* Large dim index */}
              <p
                className="text-[8.5rem] xl:text-[10.5rem] font-bold leading-none
                           text-t-fg/20 dark:text-white/18
                           select-none -ml-2 mb-1"
                style={{ fontFamily: "var(--font-mokoto)" }}
              >
                {p.id}
              </p>

              <span className="text-t-fg/18 dark:text-white/15 mb-4">
                <Plus className="w-4 h-4" />
              </span>

              <h3
                className="text-[2.6rem] xl:text-[3.2rem] font-black leading-tight
                           tracking-tight text-t-fg dark:text-white mb-5 whitespace-pre-line"
                style={{ fontFamily: "var(--font-gta)" }}
              >
                {p.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.18em]
                               text-t-fg/45 dark:text-white/40
                               border border-t-fg/15 dark:border-white/15
                               rounded-full px-3 py-1"
                    style={{ fontFamily: "var(--font-u)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="text-[15px] leading-relaxed
                           text-t-fg/55 dark:text-white/45 max-w-[34ch] mb-8"
                style={{ fontFamily: "var(--font-u)", textAlign: "justify" }}
              >
                {p.description}
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href={p.link}
                  target="_blank"
                  className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]
                             px-4 py-2 rounded-full
                             border border-t-fg/25 text-t-fg/70
                             hover:bg-t-fg hover:text-t-bg hover:border-t-fg
                             dark:bg-white dark:text-black dark:border-white
                             dark:hover:bg-white/85 dark:hover:border-white/85
                             transition-all duration-300 cursor-target"
                  style={{ fontFamily: "var(--font-u)" }}
                >
                  View Project
                  <ArrowUpRight className="w-3 h-3" />
                </Link>

                <Link
                  href={p.github}
                  target="_blank"
                  className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.24em]
                             px-4 py-2 rounded-full
                             border border-t-fg/12 text-t-fg/40
                             hover:bg-t-fg/8 hover:text-t-fg/70 hover:border-t-fg/25
                             dark:bg-white/10 dark:text-white/55 dark:border-white/10
                             dark:hover:bg-white/18 dark:hover:text-white/80 dark:hover:border-white/20
                             transition-all duration-300 cursor-target"
                  style={{ fontFamily: "var(--font-u)" }}
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </Link>
              </div>
            </div>
          ))}

          {/* Fixed bottom: see-all link */}
          <div className="absolute bottom-9 left-12 z-20">
            <Link
              href="https://github.com/Gyanranjan-Priyam"
              target="_blank"
              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.4em]
                         text-t-fg/16 dark:text-white/12
                         hover:text-t-fg/40 dark:hover:text-white/35
                         transition-colors duration-300 cursor-target"
              style={{ fontFamily: "var(--font-u)" }}
            >
              All Projects <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT SCROLLING ── */}
        <div className="flex-1 flex flex-col pl-8 pr-10 lg:pr-14 xl:pr-20">
          {projects.map((p, i) => (
            <div key={i} className="right-card h-svh py-6 flex flex-col">
              <div
                className="proj-img-card flex-1 relative rounded-2xl overflow-hidden
                           dark:ring-1 dark:ring-white/4"
                style={{ clipPath: "inset(0% 0% 0% 0% round 1.25rem)" }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-center scale-105"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  priority={i === 0}
                />

                {/* theme-aware scrim */}
                <div className="absolute inset-0 bg-black/15 dark:bg-black/40 z-10 pointer-events-none" />

                {/* top-left label */}
                <div className="absolute top-6 left-8 z-20">
                  <span
                    className="text-[8px] uppercase tracking-[0.42em] text-white/32"
                    style={{ fontFamily: "var(--font-u)" }}
                  >
                    {p.label}
                  </span>
                </div>

                {/* bottom-right ghost number */}
                <div className="absolute bottom-3 right-5 z-20 select-none pointer-events-none">
                  <span
                    className="text-[8.5rem] xl:text-[10.5rem] font-bold leading-none text-white/4"
                    style={{ fontFamily: "var(--font-mokoto)" }}
                  >
                    {p.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ MOBILE ══════════════ */}
      <div className="block md:hidden">

        <div className="px-6 pt-20 pb-10 border-b border-t-fg/8 dark:border-white/6">
          <p
            className="text-[9px] uppercase tracking-[0.42em] text-t-fg/22 dark:text-white/18 mb-4"
            style={{ fontFamily: "var(--font-u)" }}
          >
            Featured Projects
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-t-fg dark:text-white"
            style={{ fontFamily: "var(--font-gta)" }}
          >
            Selected<br />
            <span className="text-t-fg/16 dark:text-white/12">Work.</span>
          </h2>
        </div>

        {projects.map((p, i) => (
          <div key={i} className="mob-card border-b border-t-fg/8 dark:border-white/6 px-6 py-10">
            <div
              className="relative w-full rounded-xl overflow-hidden mb-7"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
              />
              <span
                className="absolute top-4 left-5 text-[8px] uppercase tracking-[0.35em] text-white/40"
                style={{ fontFamily: "var(--font-u)" }}
              >
                {p.label}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="text-5xl font-bold text-t-fg/5 dark:text-white/4 leading-none -ml-0.5"
                style={{ fontFamily: "var(--font-mokoto)" }}
              >
                {p.id}
              </p>

              <span className="text-t-fg/20 dark:text-white/16">
                <Plus className="w-3.5 h-3.5" />
              </span>

              <h3
                className="text-2xl font-bold text-t-fg dark:text-white leading-tight whitespace-pre-line"
                style={{ fontFamily: "var(--font-gta)" }}
              >
                {p.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] uppercase tracking-[0.2em]
                               text-t-fg/25 dark:text-white/22
                               border border-t-fg/8 dark:border-white/8
                               rounded-full px-2.5 py-0.5"
                    style={{ fontFamily: "var(--font-u)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="text-[13px] text-t-fg/34 dark:text-white/28 leading-relaxed line-clamp-3"
                style={{ fontFamily: "var(--font-u)" }}
              >
                {p.description}
              </p>

              <div className="flex items-center gap-5 mt-1">
                <Link
                  href={p.link}
                  target="_blank"
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]
                             text-t-fg/50 dark:text-white/40
                             hover:text-t-fg dark:hover:text-white
                             transition-colors cursor-target"
                  style={{ fontFamily: "var(--font-u)" }}
                >
                  <span className="w-4 h-4 rounded-full border border-t-fg/30 dark:border-white/25 flex items-center justify-center">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                  View Project
                </Link>
                <Link
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em]
                             text-t-fg/22 dark:text-white/18
                             hover:text-t-fg/50 dark:hover:text-white/40
                             transition-colors cursor-target"
                  style={{ fontFamily: "var(--font-u)" }}
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center py-10 border-t border-t-fg/8 dark:border-white/6">
          <Link
            href="https://github.com/Gyanranjan-Priyam"
            target="_blank"
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.38em]
                       text-t-fg/25 dark:text-white/20
                       hover:text-t-fg dark:hover:text-white
                       transition-colors duration-300 cursor-target"
            style={{ fontFamily: "var(--font-u)" }}
          >
            See All Projects <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
