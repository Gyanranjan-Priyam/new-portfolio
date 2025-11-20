"use client";
import FlowingMenu from "@/components/FlowingMenu";
import { Calendar, GraduationCap, BookOpen, Building2, Package } from "lucide-react";

const demoItems = [
  {
    icon: Calendar,
    link: "https://github.com/Gyanranjan-Priyam/techfest",
    text: "College TechFest",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639700/h4frc8kui8spiqqf6w0a.png",
  },
  {
    icon: GraduationCap,
    link: "https://lms-gyanranjan.vercel.app/",
    text: "Sams School",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639812/nfdwvhhz29ye3kefeayz.png",
  },
  {
    icon: BookOpen,
    link: "https://github.com/Gyanranjan-Priyam/jee-neet",
    text: "JEE-NEET Platform",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763639888/uwehpvwy3rmlaked0rog.png",
  },
  {
    icon: Building2,
    link: "https://cms-gyanranjanpriyam.netlify.app/",
    text: "College Management",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640285/ptgzujvahlxxnbr6ug2l.png",
  },
  {
    icon: Package,
    link: "https://ims-gyanranjanpriyam.netlify.app",
    text: "Inventory System",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1763640034/o7uckf8ambkq2fcojljd.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1
        className="text-7xl font-bold mb-12 text-foreground"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        Projects
      </h1>
      <div
        className="w-full max-w-6xl"
        style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}
