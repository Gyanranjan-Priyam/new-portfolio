import { motion } from "motion/react";
import { WordRotate } from "@/components/ui/word-rotate";
import { HyperText } from "@/components/ui/hyper-text";
import Image from "next/image";
import { SpinningText } from "@/components/ui/spinning-text";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-svh px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          {/* Mobile Background */}
          <Image
            src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571144/nf5bhlydzksfwsf5nfia.jpg"
            alt="Background"
            fill
            priority
            className="object-cover md:hidden"
          />
          {/* Desktop Background */}
          <Image
            src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1763571899/sychlfwf6xottddf5nzx.png"
            alt="Background"
            fill
            priority
            className="object-cover hidden md:block"
            sizes="100vw"
          />
          {/* Color Overlay Shade */}
          <div className="absolute inset-0 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div 
          className="flex flex-col items-start justify-end p-10 sm:pt-32 md:pt-40 lg:pt-20 space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-3xl font-semibold sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-center leading-tight tracking-[0.1em]"
            style={{ fontFamily: "var(--font-accent)" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Gyanranjan
          </motion.span>
          <motion.span 
            className="text-4xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl xl:text-4xl text-center leading-tight tracking-[0.1em]"
            style={{ fontFamily: "var(--font-accent)" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Priyam
          </motion.span>
        </motion.div>

        <div className="absolute bottom-20 left-8 sm:bottom-20 sm:right-12 md:bottom-40 md:right-16 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <motion.div className="md:hidden relative flex flex-col items-center justify-end text-right">
            <div className="flex items-center justify-center gap-2">
              <WordRotate
                className="text-4xl font-bold text-center text-black dark:text-white"
                style={{ fontFamily: "var(--font-accent)" }}
                words={[
                  "नमस्ते",
                  "Hello",
                  "Hola",
                  "Bonjour",
                  "Hallo",
                  "Ciao",
                  "Olá",
                  "안녕하세요",
                ]}
              />
            </div>
            <div
              className="text-sm text-center sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed space-y-1"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <span className="flex text-center items-center justify-center gap-4">
                I'm{" "}
                <HyperText
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Priyam
                </HyperText>
              </span>
              <span className="block">
                a software developer focused on building seamless,
              </span>
              <span className="block">
                efficient, and user-centric digital experiences
              </span>
              <span className="block">
                across both front-end and back-end technologies.
              </span>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block absolute bottom-20 right-20 sm:bottom-20 md:bottom-60 md:right-50 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <motion.div className="relative flex flex-col items-center justify-end text-right">
            <SpinningText>Click • Here • Click • Here •</SpinningText>
          </motion.div>
        </div>
        <div className="hidden md:block absolute bottom-20 sm:bottom-20 md:bottom-10 w-full flex-col items-center justify-center overflow-hidden">
          <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
            <ScrollVelocityRow baseVelocity={20} direction={1}>
              <span className="flex items-center justify-between gap-4">Scroll Down <ArrowDown size={49} className="mr-2 text-center" /> </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </>
  );
}
