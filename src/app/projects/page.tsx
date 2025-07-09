'use client';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'DeServChain – Decentralized Service Marketplace Protocol',
    description: 'Designed a custom Layer-1 blockchain protocol for a decentralized platform that connects service providers and seekers (like Zomato/OYO for all services). Includes consensus mechanism, service-matching nodes, feedback validation, and escrow-based smart contracts.',
    stack: ['Blockchain Architecture', 'Consensus Design', 'Solidity', 'Service Nodes'],
    role: 'Blockchain Architect',
    github: '#',
    image: '/deservchain.jpg',
    tags: ['Blockchain', 'Layer-1', 'Protocol'],
    company: 'Dunitech Soft Solutions Pvt Ltd',
    date: 'Jul 2025 - Present',
  },
  {
    title: 'AI Sales Agent using n8n + GPT + CRM Integration',
    description: 'Built an AI-powered automated sales agent using n8n workflows integrated with OpenAI GPT, CRM tools (like HubSpot), and email systems. The agent handles lead qualification, follows up with prospects, and updates the CRM in real-time based on conversation context.',
    stack: ['N8N', 'LangChain', 'OpenAI API', 'SMTP'],
    role: 'AI Engineer',
    github: 'https://github.com/Vivek11-09/AI-Sales-Agent-using-n8n-GPT-CRM-Integration.git',
    image: '/aisalesagent.jpg',
    tags: ['AI', 'Automation', 'CRM'],
    date: 'Oct 2024 - May 2025',
  },
  {
    title: 'Motion Detection in Coma Patient',
    description: 'Developed an intelligent application for monitoring coma patients using motion detection algorithms to identify and log physical activity. Created an IoT-based wearable device in the form of a belt that tracks vital signs and provides real-time alerts to caregivers in case of abnormal variations.',
    stack: ['Project Management', 'React Native', 'Firebase', 'AI', 'ML', 'Figma', 'Node.js'],
    role: 'Lead Developer',
    github: 'https://github.com/Vivek11-09/Healthlens.git',
    image: '/motiondetection.jpg',
    tags: ['Healthcare', 'IoT', 'AI'],
    company: 'University of Mumbai',
    date: 'Jul 2023 - May 2024',
  },
  {
    title: 'Vehicle Maintenance System',
    description: 'Developed a smart Vehicle Maintenance System to help users manage and track vehicle service schedules, repairs, and health. Users can log service history, set maintenance reminders, and receive alerts for upcoming servicing based on time, mileage, or usage patterns.',
    stack: ['PHP', 'Bootstrap', 'MySQL', 'API', 'Leadership'],
    role: 'Full Stack Developer',
    github: 'https://github.com/Vivek11-09/Vehicle-Management-System.git',
    tags: ['Web App', 'Automotive', 'Maintenance'],
    company: 'University of Mumbai',
    date: 'Aug 2023 - Apr 2024',
  },
  {
    title: 'MediBuddy – Smart Disease Predictor App (React Native+ ML)',
    description: 'Built a healthcare app that uses machine learning to predict diseases based on user symptoms. Includes clean UI, medical suggestions, and Flutter-based cross-platform support.',
    stack: ['Flutter', 'Python', 'Sklearn', 'XGBoost', 'TensorFlow Lite', 'API Integration', 'Mobile Health', 'UX/UI', 'Data Preprocessing'],
    role: 'Mobile ML Developer',
    github: 'https://github.com/Vivek11-09/Medibuddy-Smart-Disease-Predictor.git',
    image: '/medibuddy.jpg',
    tags: ['Healthcare', 'ML', 'Mobile'],
    date: '',
  },
];

export default function Projects() {
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
      <div className="relative z-10 max-w-5xl w-full glass p-10 rounded-3xl shadow-2xl border-2 border-pink-300/40 dark:border-purple-700/40 flex flex-col items-center backdrop-blur-lg bg-white/70 dark:bg-gray-900/70">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow">Projects</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 