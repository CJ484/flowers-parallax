import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { Navigation, SocialLinks } from "@/app/components";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/app/lib/utils";
import styles from "@/app/styles/index.module.scss";
import "./styles/globals.css";
import 'lenis/dist/lenis.css'

const playfairDisplayHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Flowers Parallax Website",
  description: "A website about flowers and their beauty",
  icons: {
    icon: "/FBB_logo.png",
  },
  keywords: ["flowers", "parallax", "website"],
  authors: [{ name: "John Doe", url: "https://www.john doe.com" }],
  openGraph: {
    title: "Flowers Parallax Website",
    description: "A website about flowers and their beauty",
    siteName: "Flowers Parallax Website",
    images: [
      { url: "/FBB_logo.png", width: 1200, height: 630, alt: "Flowers Parallax Website" },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, playfairDisplayHeading.variable)}>
      <body className={cn(styles.body, "min-h-full flex flex-col")}>
        <ReactLenis root>
          <Navigation />
          {children}
        </ReactLenis>
      </body>
      <SocialLinks />
    </html>
  );
}
