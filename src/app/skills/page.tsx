'use client';

const skills = [
  {
    category: 'Programming Languages & Scripting',
    items: [
      { name: 'Python', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Solidity', level: 4 },
      { name: 'Shell Scripting', level: 3 },
      { name: 'C++', level: 3 },
      { name: 'Java', level: 3 },
      { name: 'Dart', level: 3 },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Docker', level: 4 },
      { name: 'Kubernetes', level: 3 },
      { name: 'GitHub Actions', level: 4 },
      { name: 'Terraform', level: 3 },
      { name: 'AWS', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'Bash', level: 3 },
      { name: 'Ansible', level: 2 },
      { name: 'Prometheus', level: 2 },
      { name: 'Grafana', level: 2 },
    ],
  },
  {
    category: 'DevSecOps & Security Tools',
    items: [
      { name: 'Snyk', level: 3 },
      { name: 'OWASP ZAP', level: 3 },
      { name: 'SonarQube', level: 3 },
      { name: 'Trivy', level: 2 },
      { name: 'Secrets Detection', level: 3 },
      { name: 'Dependency Scanning', level: 3 },
      { name: 'Code Quality Checks', level: 4 },
    ],
  },
  {
    category: 'Web3 / Blockchain',
    items: [
      { name: 'Solidity', level: 4 },
      { name: 'Hardhat', level: 3 },
      { name: 'Remix', level: 3 },
      { name: 'EVM', level: 3 },
      { name: 'IPFS', level: 3 },
      { name: 'Ethereum', level: 3 },
      { name: 'Polygon', level: 2 },
      { name: 'Chainlink', level: 2 },
      { name: 'Smart Contracts', level: 4 },
      { name: 'Decentralized Architecture', level: 3 },
      { name: 'ERC-20', level: 3 },
      { name: 'ERC-721', level: 3 },
      { name: 'Custom L1 Blockchain Design', level: 2 },
    ],
  },
  {
    category: 'Artificial Intelligence / Machine Learning',
    items: [
      { name: 'TensorFlow', level: 4 },
      { name: 'Keras', level: 3 },
      { name: 'Sklearn', level: 4 },
      { name: 'XGBoost', level: 3 },
      { name: 'LangChain', level: 3 },
      { name: 'OpenAI GPT-4', level: 4 },
      { name: 'Whisper', level: 2 },
      { name: 'CLIP', level: 2 },
      { name: 'RAG', level: 3 },
      { name: 'Hugging Face Transformers', level: 3 },
      { name: 'Fine-tuning', level: 3 },
      { name: 'Data Preprocessing', level: 4 },
      { name: 'Model Deployment', level: 3 },
    ],
  },
  {
    category: 'Automation / No-Code / AI Agents',
    items: [
      { name: 'n8n', level: 4 },
      { name: 'Zapier', level: 3 },
      { name: 'Python Task Bots', level: 4 },
      { name: 'Streamlit', level: 3 },
      { name: 'FastAPI', level: 3 },
      { name: 'GPT Agents', level: 3 },
      { name: 'Email + CRM Automation', level: 3 },
      { name: 'Webhooks', level: 3 },
      { name: 'Persona Switching', level: 2 },
    ],
  },
  {
    category: 'Generative AI & Multimodal Systems',
    items: [
      { name: 'Stable Diffusion', level: 3 },
      { name: 'LoRA', level: 2 },
      { name: 'RunPod', level: 3 },
      { name: 'Text-to-Image', level: 3 },
      { name: 'Multimodal GPT', level: 2 },
      { name: 'NSFW Filtering', level: 2 },
      { name: 'Custom Fine-Tuning', level: 2 },
    ],
  },
  {
    category: 'App Development',
    items: [
      { name: 'Flutter', level: 3 },
      { name: 'React Native', level: 3 },
      { name: 'React.js', level: 4 },
      { name: 'Next.js', level: 4 },
      { name: 'Node.js', level: 4 },
      { name: 'Express.js', level: 3 },
      { name: 'Firebase', level: 3 },
      { name: 'MongoDB', level: 4 },
      { name: 'SQLite', level: 3 },
    ],
  },
  {
    category: 'Databases & Data Handling',
    items: [
      { name: 'MongoDB', level: 4 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'ChromaDB', level: 2 },
      { name: 'Pinecone', level: 2 },
      { name: 'FAISS', level: 2 },
      { name: 'SQLite', level: 3 },
      { name: 'Notion API', level: 2 },
      { name: 'REST APIs', level: 4 },
    ],
  },
  {
    category: 'Tools, Platforms, and Frameworks',
    items: [
      { name: 'RunPod', level: 3 },
      { name: 'Streamlit', level: 3 },
      { name: 'VS Code', level: 4 },
      { name: 'Linux', level: 4 },
      { name: 'Hugging Face', level: 3 },
      { name: 'OpenAI', level: 4 },
      { name: 'Notion', level: 3 },
      { name: 'Google Cloud (basic)', level: 2 },
      { name: 'HubSpot CRM', level: 2 },
    ],
  },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services (AWS)', date: 'Feb 2025' },
  { name: 'TensorFlow Developer Certificate', issuer: 'Google / TensorFlow', date: 'Mar 2025' },
  { name: 'Certified AI Automation Developer (Internal Projects)', issuer: 'Self-built AI Bots & Agents (Documented)', date: 'Ongoing' },
  { name: 'DevSecOps Pipeline Architect (Practical)', issuer: 'Internal Projects using Snyk, SonarQube, OWASP ZAP', date: 'Ongoing' },
];

export default function Skills() {
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
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow">Skills</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
          {skills.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold mb-4 text-sky-300 drop-shadow-sm">{cat.category}</h2>
              <ul className="space-y-2">
                {cat.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-32 font-medium text-gray-800">{skill.name}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded h-3">
                      <div className={`bg-blue-500 h-3 rounded transition-all`} style={{ width: `${skill.level * 20}%` }}></div>
                    </div>
                    <span className="text-sm text-black">Level {skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 w-full">
          <h2 className="text-xl font-bold mb-4 text-sky-300 drop-shadow-sm">Certifications</h2>
          <div className="flex flex-col gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-purple-50 dark:bg-gray-800 rounded-lg px-4 py-2 shadow text-purple-700 dark:text-purple-300 font-medium flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span>{cert.name}</span>
                <span className="text-xs text-gray-400">{cert.issuer}</span>
                <span className="text-xs text-gray-400">({cert.date})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 