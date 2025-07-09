'use client';
import { useState } from 'react';

const services = ['General Inquiry', 'GPT PDF Chatbot', 'Smart Contract', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', service: services[0] });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xzzglkrb', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          service: form.service,
        }),
      });
      const data = await res.json();
      if (data.ok || data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '', service: services[0] });
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
      <div className="relative z-10 max-w-xl w-full p-10 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center backdrop-blur-2xl bg-white/50">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow">Contact</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-transparent w-full">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="px-4 py-2 rounded border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <select name="service" value={form.service} onChange={handleChange} className="px-4 py-2 rounded border border-gray-300 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {services.map((s, i) => <option key={i}>{s}</option>)}
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" rows={4} className="px-4 py-2 rounded border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" disabled={loading} className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {submitted && <div className="text-green-600 font-medium mt-2">Thank you! Your message has been sent.</div>}
          {error && <div className="text-red-600 font-medium mt-2">{error}</div>}
        </form>
        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Vivek11-09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold text-lg transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vivek-pandey-0b855b17b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold text-lg transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              LinkedIn
            </a>
            <a href="https://twitter.com/VivekPa78896663" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold text-lg transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="inline"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
              Twitter
            </a>
          </div>
        <a href="https://wa.me/918600528102" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition">WhatsApp Me</a>
          {/* <iframe src="https://calendly.com/your-link" className="w-full h-96 mt-4 rounded" /> */}
        </div>
      </div>
    </section>
  );
} 