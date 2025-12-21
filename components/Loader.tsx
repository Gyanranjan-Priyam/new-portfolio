"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

interface AnimateLoaderProps {
  onComplete?: () => void;
}

export default function AnimateLoader({ onComplete }: AnimateLoaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapperRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: onComplete
        });
      }
    });

    // Initial State
    gsap.set(barRef.current, { scaleX: 0 });

    // 1. Progress Bar & Counter (Base Timeline)
    tl.to(barRef.current, {
      scaleX: 1,
      duration: 5,
      ease: "expo.inOut",
      transformOrigin: "left"
    }, 0);

    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 5,
      ease: "expo.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counterObj.value).toString().padStart(3, '0') + "%";
        }
      }
    }, 0);

    // 2. Text Replacement Sequence
    // We use TextPlugin to swap words with a "scramble-like" feel by changing them quickly
    const textTl = gsap.timeline();
    
    // Start with "INITIALIZING"
    textTl.to(textRef.current, {
      text: { value: "GATHERING ASSETS", delimiter: "" },
      duration: 1.2,
      ease: "none",
      delay: 0.5
    });
    
    textTl.to(textRef.current, {
      text: { value: "COMPILING DATA", delimiter: "" },
      duration: 1.2,
      ease: "none",
      delay: 0.8
    });

    textTl.to(textRef.current, {
      text: { value: "READY TO LAUNCH", delimiter: "" },
      duration: 1.2,
      ease: "none",
      delay: 0.8
    });

    // 3. Exit Elements
    tl.to([textRef.current, counterRef.current, barRef.current], {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.in"
    }, "-=0.5");

  }, { scope: wrapperRef });

  return (
    <div 
      ref={wrapperRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] text-white"
    >
      <div className="w-[300px] md:w-[400px] flex flex-col gap-4">
        {/* Dynamic Text */}
        <div 
          ref={textRef}
          className="text-xl md:text-2xl font-bold tracking-widest text-center h-8"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          INITIALIZING
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
          <div 
            ref={barRef}
            className="absolute inset-0 bg-white origin-left"
          />
        </div>

        {/* Counter */}
        <div className="flex justify-between items-center text-xs font-mono text-white/50">
          <span>SYSTEM STATUS</span>
          <span ref={counterRef}>000%</span>
        </div>
      </div>
    </div>
  );
}