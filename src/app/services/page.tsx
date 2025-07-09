'use client';
import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    title: 'Set up a RunPod AI image generator with LoRA and NSFW support',
    description: 'Stable Diffusion setup on RunPod with LoRA support and NSFW filters off. Strong niche gig with high demand from AI artists and adult creators.',
    deliverables: ['RunPod AI image generator', 'LoRA integration', 'NSFW support'],
    pricing: 'Custom',
    fiverr: 'https://www.fiverr.com/s/8zEV49v',
    category: 'AI Development',
    focus: 'Stable Diffusion setup on RunPod with LoRA support, NSFW filters off',
  },
  {
    title: 'Build your Web3 dApp with smart contracts and full stack integration',
    description: 'Solidity contracts, React frontend, and wallet integrations. Covers broad Web3 use cases like NFT, DAO, and staking.',
    deliverables: ['Solidity smart contracts', 'Full stack dApp', 'Wallet integration'],
    pricing: 'Custom',
    fiverr: 'https://www.fiverr.com/s/wkNZlBB',
    category: 'Blockchain & Cryptocurrency',
    focus: 'Solidity contracts + React frontend + wallet integrations',
  },
  {
    title: 'Build a GPT chatbot that chats with your PDFs, Notion, or websites',
    description: 'LangChain, RAG, GPT-4, and context search. Ideal for educators, SaaS, and knowledge workers.',
    deliverables: ['GPT chatbot', 'PDF/Notion/website integration', 'Contextual search'],
    pricing: 'Custom',
    fiverr: 'https://www.fiverr.com/s/DB6E2ro',
    category: 'Chatbots',
    focus: 'LangChain + RAG + GPT-4 + context search',
  },
  {
    title: 'Create GPT and RAG-based AI chatbots with WebUI',
    description: 'Technical chatbot development for advanced use cases. Broader than PDF/Notion chatbots.',
    deliverables: ['GPT/RAG chatbot', 'WebUI integration', 'Custom features'],
    pricing: 'Custom',
    fiverr: '#',
    category: 'AI Development or Chatbots',
    focus: 'More technical chatbot dev, possibly broader than #3',
  },
];

export default function Services() {
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
      <div className="relative z-10 max-w-4xl w-full glass p-10 rounded-3xl shadow-2xl border-2 border-pink-300/40 dark:border-purple-700/40 flex flex-col items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow">Services</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
} 