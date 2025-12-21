import { motion } from "motion/react";
import { WordRotate } from "@/components/ui/word-rotate";
import Image from "next/image";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative h-svh w-full overflow-hidden bg-black text-white">
      {/* Logo (Mobile & Desktop) */}
      <div className="absolute top-6 left-6 z-50 md:top-8 md:left-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
          priority
        />
      </div>

      {/* Name (Mobile Only - Right Corner) */}
      <div className="absolute top-6 right-6 z-50 flex flex-col items-end md:hidden">
        <span className="text-lg font-bold tracking-widest text-white leading-none" style={{ fontFamily: "var(--font-mokoto)" }}>
          GYANRANJAN
        </span>
        <span className="text-sm font-bold tracking-[0.2em] text-white/60 leading-none mt-1 " style={{ fontFamily: "var(--font-mokoto)" }}>
          PRIYAM
        </span>
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571144/nf5bhlydzksfwsf5nfia.jpg"
          alt="Background Mobile"
          fill
          priority
          className="object-cover md:hidden opacity-60"
        />
        <Image
          src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571899/sychlfwf6xottddf5nzx.png"
          alt="Background Desktop"
          fill
          priority
          className="hidden object-cover md:block opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/90" />
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Bottom Content */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-white/80" />
            <WordRotate
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-a)" }}
              words={["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá", "안녕하세요"]}
            />
          </div>
          <p className="text-sm font-medium leading-relaxed text-white/80" style={{ fontFamily: "var(--font-u)" }}>
            I&apos;m <span className="text-white font-bold">Priyam</span>.  a software developer focused on building seamless, efficient, and user-centric digital experiences across the full stack.
          </p>

          <div className="flex items-end justify-between border-t border-white/10 pt-6 mt-2">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Role</span>
              <span className="text-sm font-medium text-white/90">Full Stack Developer</span>
            </div>
            
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
               <ArrowDownRight className="h-5 w-5 text-white/80" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- DESKTOP LAYOUT --- */}
      <motion.div
        className="relative z-10 hidden h-full grid-cols-12 content-between p-16 md:grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top: Name */}
        <div className="col-span-12 pt-5 text-right">
          <motion.div variants={itemVariants}>
            <h1
              className="text-6xl font-bold tracking-widest lg:text-8xl leading-[0.9]"
              style={{ fontFamily: "var(--font-mokoto)" }}
            >
              <span className="block text-white/90">Gyanranjan</span>
              <span className="block text-white/40">Priyam</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Left: Bio */}
        <div className="col-span-7 lg:col-span-6 flex flex-col justify-end gap-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 text-2xl font-medium text-white/80">
               <span className="h-px w-8 bg-white/60" />
               <WordRotate
                className="font-bold text-5xl text-white"
                style={{ fontFamily: "var(--font-a)" }}
                words={["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá", "안녕하세요"]}
              />
            </div>

            <div className="max-w-lg ml-11 font-bold text-lg leading-relaxed text-white/70" style={{ fontFamily: "var(--font-u)" }}>
              <p>
                I&apos;m <span className="font-bold text-white">Priyam</span>, a software developer focused on building seamless, efficient, and user-centric digital experiences across the full stack.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Velocity Text */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <ScrollVelocityContainer className="text-[12rem] font-black uppercase leading-[0.8] tracking-tighter text-white">
          <ScrollVelocityRow baseVelocity={-1}>
            GYANRANJAN PRIYAM — CREATIVE DEVELOPER —
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </motion.div>
    </section>
  );
}
