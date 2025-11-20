"use client";
import FlowingMenu from "@/components/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-end p-10">
        <h1
          className="text-5xl font-bold mb-8 text-foreground"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Projects
        </h1>
        <div
          className="mt-45"
          style={{ height: "600px", width: "100%", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </div>
  );
}
