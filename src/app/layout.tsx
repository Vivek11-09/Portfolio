import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Pandey - Blockchain Architect | AI Agent Builder | Automation Specialist",
  description: "Portfolio of Vivek Pandey - Building decentralized systems, intelligent agents, and automation bots to transform how people work, connect, and scale.",
  keywords: ["blockchain", "AI", "automation", "web3", "smart contracts", "GPT", "DevSecOps"],
  authors: [{ name: "Vivek Pandey" }],
  creator: "Vivek Pandey",
  openGraph: {
    title: "Vivek Pandey - Blockchain Architect | AI Agent Builder",
    description: "Building the next era of decentralized and intelligent systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
