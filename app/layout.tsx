import type { Metadata } from "next";
import { 
  Bokor, 
  Geist, 
  Geist_Mono,
  Playfair_Display,
  Montserrat,
  Roboto,
  Open_Sans,
  Lato,
  Raleway,
  Poppins,
  Dancing_Script,
  Bebas_Neue,
  Merriweather
} from "next/font/google";
import "./globals.css";
import DockBar from "./_components/DockBar";
import ClickSpark from "@/components/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bokor = Bokor({
  variable: "--font-bokor",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${bokor.variable} ${playfair.variable} ${montserrat.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${raleway.variable} ${poppins.variable} ${dancingScript.variable} ${bebasNeue.variable} ${merriweather.variable} antialiased`}
      >
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
