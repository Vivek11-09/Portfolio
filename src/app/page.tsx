'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] px-4 py-24 overflow-hidden">
      {/* Animated Background Placeholder */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Add SVG mesh, particles, or animated gradient here */}
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center backdrop-blur-lg bg-white/60">
        {/* Profile Image */}
        <Image
          src="/profile.jpg"
          alt="Vivek Pandey"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
          Vivek - Cloud Developer | Blockchain Architect | AI Innovator | Entrepreneur
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 mb-8 font-medium">
        Empowering digital transformation with secure cloud infrastructure, decentralized systems, and intelligent automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-2">
          <a
            href="mailto:vivek110902@outlook.com"
            className="flex-1 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-all text-lg flex items-center gap-2 justify-center"
          >
            🔗 Let’s Collaborate
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 transition-all text-lg flex items-center gap-2 justify-center"
          >
            📄 View Resume
          </a>
          <a
            href="https://github.com/Vivek11-09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 dark:hover:bg-gray-900 hover:scale-105 transition-all text-lg flex items-center gap-2 justify-center"
          >
            🧠 Explore My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
