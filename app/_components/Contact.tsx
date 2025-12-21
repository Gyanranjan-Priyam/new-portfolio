"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

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
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* --- MOBILE LAYOUT --- */}
        <div className="flex flex-col gap-12 md:hidden">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Available for work</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-u)" }}>
                Let's build <br/> <span className="text-white/40">something great.</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-a)" }}>
                Got a project in mind? I'm ready to help you take it to the next level.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">Email me at</p>
                  <p className="text-sm font-medium text-white">contact.gyanranjan@gmail.com</p>
                </div>
              </div>
              <a 
                href="mailto:contact.gyanranjan@gmail.com"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                 { name: 'LinkedIn', href: 'https://linkedin.com/in/gyanranjan-priyam', icon: ArrowUpRight },
                 { name: 'GitHub', href: 'https://github.com/gyanranjan-priyam', icon: ArrowUpRight },
                 { name: 'X (Twitter)', href: 'https://x.com/gr_priyam', icon: ArrowUpRight },
                 { name: 'Instagram', href: 'https://instagram.com/gyanranjanpriyam', icon: ArrowUpRight }
               ].map((social) => (
                 <Link 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between gap-4 hover:bg-white/10 transition-colors"
                 >
                   <span className="text-sm font-medium text-white/60">{social.name}</span>
                   <social.icon className="w-4 h-4 self-end text-white/40" />
                 </Link>
               ))}
            </div>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
            <h3 className="text-lg font-medium mb-6">Send a message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea 
                rows={4}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
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
                  <a 
                    href="mailto:contact.gyanranjan@gmail.com"
                    className="text-xl md:text-2xl font-medium hover:text-white/80 transition-colors flex items-center gap-3 group cursor-target"
                  >
                    contact.gyanranjan@gmail.com
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl md:text-2xl font-medium">Nayagarh, India</p>
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
                 <Link key={social.name} href={social.href} target="_blank" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-white pb-1 cursor-target">
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
                className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-colors cursor-target flex items-center justify-center gap-2 group"
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
