"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ClickSpark from "./ClickSpark";

export default function ThemeClickSpark({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const sparkColor =
    !mounted || resolvedTheme === "dark" ? "#ffffff" : "#1a1a1a";

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}
