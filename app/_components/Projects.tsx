"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { EyeIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Lenis from "lenis";

export default function HomeProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const pannelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !spanRef.current || !pannelRef.current) return;

    const ctx = gsap.context(() => {
      if (containerRef.current && spanRef.current) {
        const spanWidth = spanRef.current.offsetWidth;
        const viewportWidth = window.innerWidth;
        
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
          },
        }).fromTo(spanRef.current, {
          x: viewportWidth * 0.05,
        }, {
          x: -spanWidth + viewportWidth * 0.5,
          ease: "none",
        });
      }

      // Second animation: stacking cards effect
      if (pannelRef.current) {
        const panels = Array.from(pannelRef.current.children) as HTMLElement[];
        
        panels.forEach((panel, i) => {
  const isLast = i === panels.length - 1;
  gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      pinSpacing: false,
    }
  }).to(panel, {
    scale: 0.97,
    borderRadius: "40px",
    ease: "none",
  });
});

      }
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-background"
      >
        <div className="flex items-center justify-start h-screen pl-[5vw]">
          <h1
            ref={headingRef}
            className="whitespace-nowrap"
          >
            <span
              ref={spanRef}
              className="text-[50vw] font-bold inline-block will-change-transform"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Projects
            </span>
          </h1>
        </div>
      </div>
      <div ref={pannelRef} className="relative">
        <div className="min-h-screen sticky top-0 bg-white flex p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-bold text-black"
              style={{ fontFamily: "var(--font-accent)" }}>
              College TechFest Registration Platform
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A full-stack registration platform for managing events sign-ups, payments, and participants tracking.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Prisma ORM</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">AWS</span>
            </div>
            <div className="flex items-center justify-start mt-4 gap-8">
              <Link href="/" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 font-semibold justify-center text-xl gap-3"><GithubIcon size={32}/>GitHub</span></Link>
              <Link href="/" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 justify-center font-semibold text-xl gap-3"><EyeIcon size={32}/>View</span></Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639700/h4frc8kui8spiqqf6w0a.png"
                fill
                className="object-cover"
                priority
                alt="College TechFest Registration Platform"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen sticky top-0 bg-amber-100 flex p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-bold text-black"
              style={{ fontFamily: "var(--font-accent)" }}>
              Sams School
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Sams School is a full stack learning management platform where we offered various types of cources at affordable prices. Also this platform provides easy to use admin dashboard to manage courses, users and payments.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Stripe</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Prisma ORM</span>
            </div>
            <div className="flex items-center justify-start mt-4 gap-8">
              <Link href="https://github.com/Gyanranjan-Priyam/lms" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 font-semibold justify-center text-xl gap-3"><GithubIcon size={32}/>GitHub</span></Link>
              <Link href="https://lms-gyanranjan.vercel.app/" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 justify-center font-semibold text-xl gap-3"><EyeIcon size={32}/>View</span></Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639812/nfdwvhhz29ye3kefeayz.png"
                fill
                className="object-cover"
                priority
                alt="Sams School"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen sticky top-0 bg-blue-100 flex p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-bold text-black"
              style={{ fontFamily: "var(--font-accent)" }}>
              JEE - NEET Preparation Platform
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A fullstack AI enable JEE and NEET preparation platform offering personalized study plans, practice tests, and performance analytics. And also this platform provides a seamless learning experience with interactive content and progress tracking.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Supabase</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">BetterAuth</span>
            </div>
            <div className="flex items-center justify-start mt-4 gap-8">
              <Link href="https://github.com/Gyanranjan-Priyam/jee-neet" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 font-semibold justify-center text-xl gap-3"><GithubIcon size={32}/>GitHub</span></Link>
              <Link href="/" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 justify-center font-semibold text-xl gap-3"><EyeIcon size={32}/>View</span></Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639888/uwehpvwy3rmlaked0rog.png"
                fill
                className="object-cover"
                priority
                alt="JEE - NEET Preparation Platform"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen sticky top-0 bg-green-100 flex p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-bold text-black"
              style={{ fontFamily: "var(--font-accent)" }}>
              College Management System
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A full-featured college management system to streamline administrative tasks, student records, and faculty management along with Fees Payment, Result Publication and Degree or Certificae Provide features.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">TypeScript</span>
            </div>
            <div className="flex items-center justify-start mt-4 gap-8">
              <Link href="https://github.com/Gyanranjan-Priyam/cms" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 font-semibold justify-center text-xl gap-3"><GithubIcon size={32}/>GitHub</span></Link>
              <Link href="https://cms-gyanranjanpriyam.netlify.app/" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 justify-center font-semibold text-xl gap-3"><EyeIcon size={32}/>View</span></Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640285/ptgzujvahlxxnbr6ug2l.png"
                fill
                className="object-cover"
                priority
                alt="College Management System"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen sticky top-0 bg-purple-100 flex p-8 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            <h2 className="text-6xl font-bold text-black"
              style={{ fontFamily: "var(--font-accent)" }}>
              Inventory Management System
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              An AI powerd Inventory Mangement System in which we can manage Stocks, Orders, Suppliers and Customers along with easy to use Dashboard and POS with Payment Integration for multi store access. Also this system provides real-time analytics and reporting features.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm">Razorpay</span>
            </div>
            <div className="flex items-center justify-start mt-4 gap-8">
              <Link href="https://github.com/Gyanranjan-Priyam/ims" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 font-semibold justify-center text-xl gap-3"><GithubIcon size={32}/>GitHub</span></Link>
              <Link href="https://ims-gyanranjanpriyam.netlify.app" className="bg-black h-15 flex justify-center items-center w-35 rounded-full "><span className="flex-row flex items-center text-center p-2 justify-center font-semibold text-xl gap-3"><EyeIcon size={32}/>View</span></Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640034/o7uckf8ambkq2fcojljd.png"
                fill
                className="object-cover"
                priority
                alt="Inventory Management System"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
