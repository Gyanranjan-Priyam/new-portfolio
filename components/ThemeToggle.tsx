"use client";

import { useRef, useCallback, useEffect, useState, startTransition } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { startTransition(() => setMounted(true)); }, []);

  const toggle = useCallback(() => {
    if (isAnimating.current || !buttonRef.current || !overlayRef.current)
      return;
    isAnimating.current = true;

    const isDark = resolvedTheme === "dark";
    const newTheme = isDark ? "light" : "dark";
    const newBg = isDark ? "#fcf4e6" : "#000000";

    // Get button center for the expanding circle origin
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const overlay = overlayRef.current;
    overlay.style.backgroundColor = newBg;
    overlay.style.display = "block";
    overlay.style.opacity = "1";

    // Icon spin + scale
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: "+=360",
        scale: 0.6,
        duration: 0.35,
        ease: "power2.in",
        yoyo: true,
        repeat: 1,
      });
    }

    // Button press
    gsap.to(buttonRef.current, {
      scale: 0.85,
      duration: 0.15,
      ease: "power2.in",
      yoyo: true,
      repeat: 1,
    });

    // Expanding circle wipe
    gsap.fromTo(
      overlay,
      { clipPath: `circle(0% at ${x}px ${y}px)` },
      {
        clipPath: `circle(150% at ${x}px ${y}px)`,
        duration: 0.75,
        ease: "power3.inOut",
        onComplete: () => {
          // Switch theme while overlay covers everything
          setTheme(newTheme);

          // Brief hold, then fade overlay
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.35,
            delay: 0.05,
            ease: "power2.out",
            onComplete: () => {
              overlay.style.display = "none";
              overlay.style.opacity = "1";
              isAnimating.current = false;
            },
          });
        },
      }
    );
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    // Render placeholder to prevent layout shift
    return (
      <div className="fixed top-6 left-17 md:left-auto md:top-8 md:right-8 z-100 w-10 h-10 md:w-11 md:h-11 rounded-full bg-transparent" />
    );
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggle}
        className="fixed top-6 left-17 md:left-auto md:top-8 md:right-8 z-100 w-10 h-10 md:w-11 md:h-11 rounded-full bg-t-fg/10 backdrop-blur-md border border-t-fg/10 flex items-center justify-center hover:bg-t-fg/20 transition-colors cursor-target"
        aria-label="Toggle theme"
      >
        <div ref={iconRef}>
          {resolvedTheme === "dark" ? (
            <Sun className="w-4.5 h-4.5 md:w-5 md:h-5 text-t-fg/70" />
          ) : (
            <Moon className="w-4.5 h-4.5 md:w-5 md:h-5 text-t-fg/70" />
          )}
        </div>
      </button>

      {/* Full-screen overlay for circle-wipe transition */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-99 pointer-events-none"
        style={{ display: "none" }}
      />
    </>
  );
}
