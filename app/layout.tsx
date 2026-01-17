import type { Metadata } from "next";
import Script from "next/script";
import { 
  Urbanist,
  Anonymous_Pro
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import DockBar from "./_components/DockBar";
import ClickSpark from "@/components/ClickSpark";
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

const gta = localFont({
  src: "../public/fonts/pricedown.otf",
  variable: "--font-gta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gyanranjanpriyam.tech"),
  title: "Gyanranjan Priyam",
  description: "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
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
    type: "profile",
    locale: "en_US",
    url: "https://gyanranjanpriyam.tech",
    title: "Gyanranjan Priyam",
    description: "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
    siteName: "Gyanranjan Priyam",
    images: [
      {
        url: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766402986/ls67mu0pkqalizjmvuyf.png",
        width: 1200,
        height: 630,
        alt: "Gyanranjan Priyam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyanranjan Priyam",
    description: "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    images: ["https://res.cloudinary.com/dw47ib0sh/image/upload/v1766402986/ls67mu0pkqalizjmvuyf.png"],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
    "url": "https://gyanranjanpriyam.tech",
    "image": "https://res.cloudinary.com/dw47ib0sh/image/upload/v1766402986/ls67mu0pkqalizjmvuyf.png",
    "sameAs": [
      "https://instagram.com/gyanranjanpriyam",
      "https://linkedin.com/in/gyanranjan-priyam"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Full Stack Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gyanranjan Priyam",
    "url": "https://gyanranjanpriyam.tech",
    "description": "Personal website and portfolio of Gyanranjan Priyam",
    "author": {
      "@type": "Person",
      "name": "Gyanranjan Priyam"
    }
  };

  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7Q67DBX3LE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7Q67DBX3LE');
            `,
          }}
        />
      </head>
      <body
        className={`${urbanist.variable} ${anonymousPro.variable} ${mokoto.variable} ${gta.variable} antialiased font-sans`}
      >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
