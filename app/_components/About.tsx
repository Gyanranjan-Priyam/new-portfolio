"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { HyperText } from "@/components/ui/hyper-text";
import { WordRotate } from "@/components/ui/word-rotate";
import LogoLoop from "@/components/LogoLoop";
import { Tooltip } from "@/components/ui/tooltip-card";
import ChromaGrid from "@/components/ChromaGrid";

const items = [
  {
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763650481/zb9w1qqtmajfq8k12uuz.jpg",
    title: "Gyanranjan Priyam",
    subtitle: "Frontend Developer",
    handle: "@gyanranjanpriyam",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/gyanranjan-priyam",
  },
];

export default function HomeAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !spanRef.current) return;

    const ctx = gsap.context(() => {
      if (containerRef.current && spanRef.current) {
        const spanWidth = spanRef.current.offsetWidth;
        const viewportWidth = window.innerWidth;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=400%",
              pin: true,
              scrub: 1,
            },
          })
          .fromTo(
            spanRef.current,
            {
              x: viewportWidth * 0.05,
            },
            {
              x: -spanWidth + viewportWidth * 0.5,
              ease: "none",
            }
          );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-background"
      >
        <div className="flex items-center justify-start h-screen pl-[5vw]">
          <h1 ref={headingRef} className="whitespace-nowrap ">
            <span
              ref={spanRef}
              className="text-[45vw] font-bold inline-block "
              style={{ fontFamily: "var(--font-accent)" }}
            >
              About Me
            </span>
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-1 justify-start p-8 pl-16">
        <motion.div className="relative flex flex-col items-start justify-center max-w-2xl">
          <div className="flex items-start justify-start gap-2">
            <WordRotate
              className="text-4xl font-bold text-left text-black"
              style={{ fontFamily: "var(--font-accent)" }}
              words={[
                "नमस्ते",
                "Hello",
                "Hola",
                "Bonjour",
                "Hallo",
                "Ciao",
                "Olá",
                "안녕하세요",
              ]}
            />
          </div>
          <div
            className="text-sm text-black text-left sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed space-y-1 mt-4"
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
          <div className="flex flex-col mt-15">
            <span
              className="text-black"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <p className="text-xl font-bold mb-3 underline">
                Educational Background And achivements
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I had completed my{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400  cursor-pointer"
                  content="Intermediate Completed from Divine HSS, Nayagarh, Odisha with 85 percentage mark from Science stream under CHSE Board."
                >
                  <span className="font-bold">intermediate</span>
                </Tooltip>{" "}
                with first division and also topper of the{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400  cursor-pointer"
                  content="Divine Higher Secondary School, Nayagarh Odisha"
                >
                  <span className="font-bold">College</span>
                </Tooltip>{" "}
                in 2020. Currently, I am pursuing my{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400  cursor-pointer"
                  content="Bachelor of Technology in Electrical Engineering from Government College of Engineering, Kalahandi, Bhawanipatna, Odisha under BPUT University."
                >
                  <span className="font-bold">B.Tech</span>
                </Tooltip>{" "}
                from Government College of Engineering, Kalahandi. I have also
                achieved{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400  cursor-pointer"
                  content="Secured 2nd position in District Level Science Exhibition held at Nayagarh in 2019."
                >
                  <span className="font-bold">various prizes</span>
                </Tooltip>{" "}
                in the field of science and technology during my school and
                college time. Also I have achived various State level{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400"
                  content=" Awarded Meritious Scholarships by the Government of Odisha for academic excellence in 2015 and 2016. Along with this I have also get NRTS Scholarship for the year 2019."
                >
                  <span className="cursor-pointer font-bold">
                    Meritious Scholarships
                  </span>
                </Tooltip>{" "}
                and{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400"
                  content=" Awarded 1st Prize in Quiz District Level held at Nayagarh in 2018."
                >
                  <span className="cursor-pointer font-bold">Prizes</span>
                </Tooltip>{" "}
                during my academic career.
              </p>
            </span>
            <span
              className="text-black mt-10"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <p className="text-xl font-bold mb-3 underline">
                Hobbies and Interest
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                My hobbies include{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400 cursor-pointer"
                  content="I enjoy reading a wide range of books that help me expand my imagination, improve my thinking, and gain new perspectives."
                >
                  <span className="font-bold">reading books</span>
                </Tooltip>{" "}
                and{" "}
                <Tooltip
                  containerClassName="text-neutral-600 dark:text-neutral-400 cursor-pointer"
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
                  containerClassName="text-neutral-600 dark:text-neutral-400 cursor-pointer"
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
        </motion.div>
      <div className="flex flex-2 items-center justify-center p-8 pr-10 mb-50">
        <div style={{ height: "600px", width: "600px", position: "absolute" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
      </div>
      <div className="w-full bg-white py-5">
        <LogoLoop
          logos={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "React",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              alt: "Next.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              alt: "TypeScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              alt: "Node.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              alt: "Express",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              alt: "MongoDB",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
              alt: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              alt: "Git",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
              alt: "AWS",
            },
          ]}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={48}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
        />
      </div>
    </>
  );
}
