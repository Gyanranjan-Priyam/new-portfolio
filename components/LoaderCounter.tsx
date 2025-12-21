"use client";

import CountUp from "./CountUp";

interface LoaderCounterProps {
  onComplete: () => void;
}

export default function LoaderCounter({ onComplete }: LoaderCounterProps) {
  const handleCountEnd = () => {
    // Wait a moment before completing
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Loading:</span>
        <CountUp
          from={0}
          to={100}
          duration={5}
          className="text-2xl font-bold text-foreground"
          onEnd={handleCountEnd}
        />
        <span className="text-xl font-bold text-foreground">%</span>
      </div>
    </div>
  );
}
