import type { Metadata } from "next";
import { 
  Urbanist,
  Anonymous_Pro
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import DockBar from "./_components/DockBar";
import ClickSpark from "@/components/ClickSpark";
import MobileBlocker from "./_components/MobileBlocker";
import TargetCursor from "@/components/TargetCursor";

const urbanist = Urbanist({
  variable: "--font-u",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-a",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mokoto = localFont({
  src: "../public/fonts/mokoto.regular.ttf",
  variable: "--font-mokoto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gyanranjanpriyam.tech"),
  title: {
    default: "Gyanranjan Priyam | Full Stack Developer",
    template: "%s | Gyanranjan Priyam"
  },
  description: "Portfolio of Gyanranjan Priyam - A Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable and user-centric digital experiences.",
  keywords: [
    "Gyanranjan Priyam",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "GSAP Animation"
  ],
  authors: [{ name: "Gyanranjan Priyam", url: "https://github.com/Gyanranjan-Priyam" }],
  creator: "Gyanranjan Priyam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gyanranjanpriyam.tech",
    title: "Gyanranjan Priyam | Full Stack Developer",
    description: "Explore the portfolio of Gyanranjan Priyam, a Full Stack Developer crafting exceptional digital experiences with modern web technologies.",
    siteName: "Gyanranjan Priyam Portfolio",
    images: [
      {
        url: "/og-image.png", // You should create this image in your public folder
        width: 1200,
        height: 630,
        alt: "Gyanranjan Priyam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyanranjan Priyam | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, and modern web tech.",
    images: ["/og-image.png"],
    creator: "@gr_priyam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    other: {
      "msvalidate.01": "1178BCCD0F20BFE8F63DCAD6EAC35DB3",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gyanranjan Priyam",
    "url": "https://www.gyanranjanpriyam.tech",
    "image": "https://www.gyanranjanpriyam.tech/logo.png",
    "sameAs": [
      "https://linkedin.com/in/gyanranjan-priyam",
      "https://github.com/Gyanranjan-Priyam",
      "https://x.com/gr_priyam",
      "https://instagram.com/gyanranjanpriyam"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies."
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gyanranjan Priyam",
    "url": "https://www.gyanranjanpriyam.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.gyanranjanpriyam.tech/logo.png",
      "width": "512",
      "height": "512"
    },
    "sameAs": [
      "https://linkedin.com/in/gyanranjan-priyam",
      "https://github.com/Gyanranjan-Priyam",
      "https://x.com/gr_priyam",
      "https://instagram.com/gyanranjanpriyam"
    ],
    "description": "Portfolio of Gyanranjan Priyam - Full Stack Developer specializing in modern web technologies."
  };

  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${anonymousPro.variable} ${mokoto.variable} antialiased font-sans`}
      >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          {/* <MobileBlocker /> */}
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <DockBar />
            <TargetCursor/>
            {children}
          </ClickSpark>
      </body>
    </html>
  );
}
