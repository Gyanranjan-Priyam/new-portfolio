"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Gyanranjan-Priyam" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/gyanranjan-priyam" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/gr_priyam" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/gyanranjanpriyam" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* --- MOBILE LAYOUT --- */}
        <div className="flex flex-col gap-12 md:hidden">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-widest" style={{ fontFamily: "var(--font-mokoto)" }}>Gyanranjan Priyam</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed" style={{fontFamily: "var(--font-a)"}}>
              Crafting digital experiences with code and creativity. Focused on scalable, accessible web apps.
            </p>
          </div>

          {/* Navigation & Socials */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Menu</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-sm text-white/80 hover:text-white block py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Connect</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} target="_blank" className="text-sm text-white/80 hover:text-white flex items-center gap-2 py-1">
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-8 border-t border-white/10 space-y-6">
            <button 
              onClick={scrollToTop}
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
            
            <div className="text-center space-y-2">
              <p className="text-xs text-white/40">© {new Date().getFullYear()} Gyanranjan Priyam</p>
            </div>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="col-span-2 space-y-6">
              <div>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="w-12 h-12 object-contain"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold tracking-widest" style={{ fontFamily: "var(--font-mokoto)" }}>
                Gyanranjan Priyam
              </h2>
              <p className="text-white/60 max-w-sm leading-relaxed" style={{fontFamily: "var(--font-a)"}}>
                Crafting digital experiences with code and creativity. 
                Full Stack Developer focused on building scalable, accessible, and performant web applications.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-white/60 cursor-target hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
                Socials
              </h3>
              <ul className="space-y-4 ">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <Link 
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-white/10 gap-6">
            <div className="flex items-center gap-8 text-sm text-white/40">
              <p>© {new Date().getFullYear()} Gyanranjan Priyam.</p>
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors cursor-target"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}