"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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
        
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
          },
        }).fromTo(spanRef.current, {
          x: viewportWidth * 0.05,
        }, {
          x: -spanWidth + viewportWidth * 0.5,
          ease: "none",
        });
      }
    }, containerRef);

  return () => {
    ctx.revert();
    lenis.destroy();
  };
}, []);


  return (
   <>
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-background">
      <div className="flex items-center justify-start h-screen pl-[5vw]">
        <h1 ref={headingRef} className="whitespace-nowrap ">
          <span 
            ref={spanRef}
            className="text-[45vw] font-bold inline-block "
            style={{fontFamily: "var(--font-accent)"}}
          >
            About Me
          </span>
        </h1>

      </div>
    </div>
    <div id="1" className="min-h-screen bg-white flex items-center justify-center p-8">
      <span className="text-5xl text-black font-bold">Hello This is Gyanranjan</span>
    </div>

   </>
  );
}