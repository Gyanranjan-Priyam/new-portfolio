import { motion } from "motion/react";
import { WordRotate } from "@/components/ui/word-rotate";
import Image from "next/image";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

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
      {/* Logo */}
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

      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571144/nf5bhlydzksfwsf5nfia.jpg"
          alt="Background Mobile"
          fill
          priority
          className="object-cover md:hidden opacity-80"
        />
        <Image
          src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571899/sychlfwf6xottddf5nzx.png"
          alt="Background Desktop"
          fill
          priority
          className="hidden object-cover md:block opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 grid h-full grid-cols-1 content-between p-6 sm:p-12 md:grid-cols-12 md:p-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top: Name */}
        <div className="col-span-1 md:col-span-12 pt-7 md:pt-5 text-right">
          <motion.div variants={itemVariants}>
            <h1
              className="text-4xl font-bold tracking-widest sm:text-6xl md:text-6xl lg:text-8xl leading-[0.9]"
              style={{ fontFamily: "var(--font-mokoto)" }}
            >
              <span className="block text-white/90">Gyanranjan</span>
              <span className="block text-white/40">Priyam</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Left: Bio */}
        <div className="col-span-1 flex flex-col justify-end gap-6 md:col-span-7 lg:col-span-6 pb-12 md:pb-0">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 text-xl font-medium text-white/80 md:text-2xl">
               <span className="h-px w-8 bg-white/60" />
               <WordRotate
                className="font-bold text-3xl text-white"
                style={{ fontFamily: "var(--font-a)" }}
                words={["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá", "안녕하세요"]}
              />
            </div>

            <div className="max-w-lg font-bold text-base leading-relaxed text-white/70 md:text-lg" style={{ fontFamily: "var(--font-u)" }}>
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
