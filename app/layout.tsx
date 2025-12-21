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
  title: "Gyanranjan Priyam - Portfolio",
  description: "Portfolio of Gyanranjan Priyam - Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${anonymousPro.variable} ${mokoto.variable} antialiased font-sans`}
      >
          <MobileBlocker />
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <DockBar />
            {children}
          </ClickSpark>
      </body>
    </html>
  );
}
