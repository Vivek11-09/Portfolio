'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4">
      {/* Funky Animated SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="funkyGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <circle cx="30%" cy="30%" r="200" fill="url(#funkyGradient)" opacity="0.15">
            <animate attributeName="cx" values="30%;70%;30%" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="70%" cy="70%" r="180" fill="url(#funkyGradient)" opacity="0.12">
            <animate attributeName="cy" values="70%;30%;70%" dur="12s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 max-w-3xl w-full glass p-10 rounded-3xl shadow-2xl border-2 border-pink-300/40 dark:border-purple-700/40 flex flex-col items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70">
        <Image
          src="/profile.jpg"
          alt="Vivek Pandey"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 text-center">
          Hi, I’m Vivek Pandey — a Blockchain Architect, AI Innovator, and DevSecOps Specialist with a passion for building the next era of decentralized and intelligent systems.
        </p>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl whitespace-pre-line">
            Hi, I’m Vivek Pandey — a Blockchain Architect, AI Innovator, and DevSecOps Specialist with a passion for building the next era of decentralized and intelligent systems.\n\nI design robust blockchain protocols, engineer GPT-powered AI agents, and develop automation bots that save time, reduce friction, and deliver real value. My journey combines deep tech with startup energy — from creating decentralized marketplaces like DeServChain to launching multimodal AI agents, building image generation platforms, and automating CRM and sales with tools like n8n + GPT.\n\nFueled by curiosity and execution, I thrive at the intersection of:
          </p>
          <ul className="list-none mt-4 mb-4 text-blue-700 dark:text-blue-300 space-y-2">
            <li>🔗 <b>Decentralized Systems & Web3</b></li>
            <li>🧠 <b>AI/ML & Generative Intelligence</b></li>
            <li>🔐 <b>Security-first DevOps (DevSecOps)</b></li>
            <li>⚙️ <b>Cloud Infrastructure & Automation</b></li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl whitespace-pre-line">
            Beyond coding, I love product-thinking, system design, and mentoring builders. Whether it’s creating full-stack dApps, smart contracts, custom AI models, or launching scalable backend systems — I focus on real-world impact over buzzwords.\n\nI’m currently:
          </p>
          <ul className="list-none mt-4 mb-4 text-purple-700 dark:text-purple-300 space-y-2">
            <li>🚧 Architecting a custom L1 blockchain for a decentralized service platform</li>
            <li>🧠 Building AI agents that talk, see, learn, and adapt</li>
            <li>🎯 Exploring government-fundable innovations and tech-for-good ventures</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl whitespace-pre-line">
            Let’s collaborate on ideas that matter. 🚀
          </p>
      </div>
    </section>
  );
} 