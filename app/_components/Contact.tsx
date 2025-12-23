"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const successModalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
        setShowSuccessModal(true);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animate success modal when it shows
  useEffect(() => {
    if (showSuccessModal && successModalRef.current) {
      const modal = successModalRef.current;
      const backdrop = modal.querySelector('.success-backdrop');
      const content = modal.querySelector('.success-content');
      const icon = modal.querySelector('.success-icon');
      const title = modal.querySelector('.success-title');
      const subtitle = modal.querySelector('.success-subtitle');
      const sparkles = modal.querySelectorAll('.sparkle');
      
      gsap.set(modal, { display: 'flex' });
      
      const tl = gsap.timeline({
        onComplete: () => {
          // Auto-hide after 4 seconds
          setTimeout(() => {
            closeSuccessModal();
          }, 4000);
        }
      });
      
      // Backdrop fade in
      tl.fromTo(backdrop, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      // Content scale and fade in
      tl.fromTo(content,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
      
      // Icon animation with bounce
      tl.fromTo(icon,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        "-=0.4"
      );
      
      // Title slide up
      tl.fromTo(title,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.5"
      );
      
      // Subtitle slide up
      tl.fromTo(subtitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );
      
      // Sparkles animation
      sparkles.forEach((sparkle, i) => {
        tl.fromTo(sparkle,
          { scale: 0, opacity: 0, rotation: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 360,
            duration: 0.6,
            ease: "back.out(2)",
          },
          `-=${0.6 - (i * 0.1)}`
        );
        
        // Floating animation
        tl.to(sparkle, {
          y: -10,
          x: gsap.utils.random(-10, 10),
          duration: 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.2
        }, "-=0.6");
      });
      
      // Pulse icon
      tl.to(icon, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true
      }, "-=0.5");
    }
  }, [showSuccessModal]);

  const closeSuccessModal = () => {
    if (successModalRef.current) {
      gsap.to(successModalRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setShowSuccessModal(false);
          if (successModalRef.current) {
            gsap.set(successModalRef.current, { display: 'none', opacity: 1 });
          }
        }
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('success-backdrop')) {
      closeSuccessModal();
    }
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
              <h2 className="text-4xl font-bold tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-gta)" }}>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
              />
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                required
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors resize-none disabled:opacity-50"
              />
              {submitStatus.type && (
                <div className={`p-3 rounded-xl text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] contact-reveal" style={{ fontFamily: "var(--font-gta)" }}>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/60 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/60 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/60 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-xl text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-colors cursor-target flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          ref={successModalRef}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ display: 'none' }}
        >
          {/* Backdrop */}
          <div 
            className="success-backdrop absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={handleBackdropClick}
          />
          
          {/* Modal Content */}
          <div 
            className="success-content relative bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sparkles */}
            <div className="absolute -top-6 -left-6 sparkle">
              <Sparkles className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute -top-4 -right-4 sparkle">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute -bottom-6 -right-6 sparkle">
              <Sparkles className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 sparkle">
              <Sparkles className="w-7 h-7 text-pink-400" />
            </div>
            
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="success-icon relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-6">
                  <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-center space-y-4">
              <h3 className="success-title text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-u)" }}>
                Message Sent!
              </h3>
              <p className="success-subtitle text-lg text-white/70" style={{ fontFamily: "var(--font-a)" }}>
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
            </div>
            
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      )}
    </section>
  );
}
