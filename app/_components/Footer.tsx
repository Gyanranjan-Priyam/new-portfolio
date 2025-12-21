"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
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
                    className="text-white/60 hover:text-white transition-colors"
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
            <ul className="space-y-4">
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
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Gyanranjan Priyam.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}