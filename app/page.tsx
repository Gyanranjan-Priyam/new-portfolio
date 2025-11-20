"use client";

import { useState, useRef } from "react";
import AnimateLoader from "@/components/Loader";
import HeroSection from "./_components/HeroSection";
import LoaderCounter from "@/components/LoaderCounter";
import HomeProjectsPage from "./_components/Projects";
import HomeAboutPage from "./_components/About";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    // Trigger the loader animation out
    if (loaderRef.current && (loaderRef.current as any).animateOut) {
      (loaderRef.current as any).animateOut();
    }
    
    // Remove loader from DOM after animation completes
    setTimeout(() => {
      setShowLoader(false);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {showLoader && (
        <>
          <div ref={loaderRef}>
            <AnimateLoader />
          </div>
          {isLoading && <LoaderCounter onComplete={handleLoadingComplete} />}
        </>
      )}
      <div className="min-h-screen text-foreground">
        <HeroSection />
        <HomeAboutPage />
        <HomeProjectsPage />
      </div>
    </>
  );
}
