"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Copy, Check, Mail, MapPin } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gyanranjanpriyam@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".contact-reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

  }, { scope: container });

  return (
    <section id="contact" ref={container} className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase contact-reveal">
                Contact
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] contact-reveal" style={{ fontFamily: "var(--font-u)" }}>
                Let's work <br/> <span className="text-white/40">together.</span>
              </h1>
              <p className="text-lg text-white/60 max-w-md contact-reveal" style={{ fontFamily: "var(--font-a)" }}>
                I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative touch, let's chat.
              </p>
            </div>

            <div className="space-y-8 contact-reveal">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-1">Email</p>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-xl md:text-2xl font-medium hover:text-white/80 transition-colors flex items-center gap-3 group"
                  >
                    gyanranjanpriyam@gmail.com
                    <span className="relative">
                      <Copy className={`w-4 h-4 transition-all duration-300 ${copied ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                      <Check className={`w-4 h-4 absolute top-0 left-0 text-green-400 transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl md:text-2xl font-medium">Bhubaneswar, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-8 contact-reveal">
               {/* Social Links */}
               {[
                 { name: 'LinkedIn', href: 'https://linkedin.com/in/gyanranjan-priyam' },
                 { name: 'GitHub', href: 'https://github.com/gyanranjan-priyam' },
                 { name: 'X (Twitter)', href: 'https://x.com/gr_priyam' },
                 { name: 'Instagram', href: 'https://instagram.com/gyanranjanpriyam' }
               ].map((social) => (
                 <Link key={social.name} href={social.href} target="_blank" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-white pb-1">
                   {social.name}
                 </Link>
               ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-neutral-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 contact-reveal">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/60 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/60 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/60 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
