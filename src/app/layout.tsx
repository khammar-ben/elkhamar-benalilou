import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Elkhamar Benalilou | Full Stack Software Engineer",
  description: "Portfolio of Elkhamar Benalilou, a Software Engineer specializing in modern web applications, distributed systems, and real-time backend architectures.",
  keywords: ["Elkhamar Benalilou", "Software Engineer", "Full Stack Developer", "React", "Next.js", "Java", "Spring Boot", "Tangier", "Portfolio"],
  authors: [{ name: "Elkhamar Benalilou" }],
  openGraph: {
    title: "Elkhamar Benalilou | Dev Portfolio",
    description: "Explore my latest projects, technical skills, and engineering journey.",
    url: "https://www.elkhamar-benalilou.com",
    siteName: "Elkhamar Benalilou Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Elkhamar Benalilou",
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-[#0a0a0a] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
