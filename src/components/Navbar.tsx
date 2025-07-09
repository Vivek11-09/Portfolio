'use client';

import Link from 'next/link';

import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '700' });

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800/90 backdrop-blur border-b border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-300">
          <span className={dancingScript.className + " tracking-wide"} style={{ fontSize: '3.1rem' }}>
            Vivek Pandey
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="space-x-6 hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-200 hover:text-blue-400 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 