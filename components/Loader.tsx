"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

interface AnimateLoaderProps {
  onComplete?: () => void;
}

export default function AnimateLoader({ onComplete }: AnimateLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const letters = gsap.utils.toArray<HTMLDivElement>(".letter");
    const container = containerRef.current;

    if (!container) return;

    // Initial animation - letters come together
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        scale: 0,
        rotation: gsap.utils.wrap([90, -90, 180, -180]),
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );

    // Flip animation loop
    const animate = () => {
      // Get current state
      const state = Flip.getState(letters);

      // Randomly shuffle letters
      letters.forEach((letter) => {
        const randomX = gsap.utils.random(-50, 50);
        const randomY = gsap.utils.random(-50, 50);
        gsap.set(letter, { x: randomX, y: randomY });
      });

      // Animate to new positions
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.05,
        onComplete: () => {
          // Reset positions
          const resetState = Flip.getState(letters);
          gsap.set(letters, { x: 0, y: 0 });
          
          Flip.from(resetState, {
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.05,
            delay: 0.5,
            onComplete: animate,
          });
        },
      });
    };

    // Start animation loop after initial animation
    const timer = setTimeout(() => {
      animate();
    }, 2000);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf(letters);
    };
  }, []);

  const animateOut = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    gsap.to(wrapper, {
      y: "-100%",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  // Expose animateOut for parent to call
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).animateOut = animateOut;
    }
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      <div
        ref={containerRef}
        className="flex gap-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        <div className="letter">L</div>
        <div className="letter">o</div>
        <div className="letter">a</div>
        <div className="letter">d</div>
        <div className="letter">i</div>
        <div className="letter">n</div>
        <div className="letter">g</div>
      </div>
    </div>
  );
}