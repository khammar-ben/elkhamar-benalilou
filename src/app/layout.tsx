import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elkhamar Benalilou | Full Stack Software Engineer",
  description: "Portfolio of Elkhamar Benalilou, a Software Engineer specializing in modern web applications, distributed systems, and real-time backend architectures.",
  keywords: ["Elkhamar Benalilou", "Software Engineer", "Full Stack Developer", "React", "Next.js", "Java", "Spring Boot", "Tangier", "Portfolio"],
  authors: [{ name: "Elkhamar Benalilou" }],
  openGraph: {
    title: "Elkhamar Benalilou | Dev Portfolio",
    description: "Explore my latest projects, technical skills, and engineering journey.",
    url: "https://github.com/BenalilouElkhamar",
    siteName: "Elkhamar Benalilou Portfolio",
    images: [
      {
        url: "/profile.png", // Uses your actual photo when shared
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
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-[#0a0a0a] text-gray-300 font-sans selection:bg-green-500/30 selection:text-green-200`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
