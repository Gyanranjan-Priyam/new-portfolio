"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileUser,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DockBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show dock when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide dock when scrolling down (but only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // MenuDock items for mobile with active state
  const getActiveIndex = () => {
    if (pathname === '/') return 0;
    if (pathname === '/about') return 1;
    if (pathname.startsWith('/projects')) return 2;
    if (pathname === '/contact') return 3;
    return 0;
  };




  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <TooltipProvider>
        <Dock
          className="bg-background/40 backdrop-blur-2xl border-border/30 shadow-2xl shadow-black/20"
          iconSize={52}
          iconMagnification={84}
          iconDistance={140}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://github.com/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="hover:-translate-y-2 transition-all duration-300 ease-out">
                  <Github className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={15}>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://linkedin.com/in/gyanranjan-priyam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="hover:-translate-y-2 transition-all duration-300 ease-out">
                  <Linkedin className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={15}>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://x.com/gr_priyam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="hover:-translate-y-2 transition-all duration-300 ease-out">
                  <Twitter className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={15}>
              <p>X (Twitter)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://instagram.com/gyanranjanpriyam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="hover:-translate-y-2 transition-all duration-300 ease-out">
                  <Instagram className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={15}>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://drive.google.com/file/d/146Wlv6D7RSiyhqTOpYMDmZ0Ly2762A5P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DockIcon className="hover:-translate-y-2 transition-all duration-300 ease-out">
                  <FileUser className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={15}>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
