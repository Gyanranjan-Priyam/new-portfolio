"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md text-center shadow-2xl border border-white/20">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Desktop Only
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-6">
          This portfolio is optimized for desktop viewing to provide the best experience with animations and interactions.
        </p>
        <p className="text-white/80 text-sm">
          Please visit from a desktop or laptop computer.
        </p>
        <div className="mt-8 text-white/60 text-xs">
          <p>Screen Size: {typeof window !== 'undefined' ? window.innerWidth : 0}px</p>
        </div>
      </div>
    </div>
  );
}
