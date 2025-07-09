'use client';

import Link from 'next/link';

import { Dancing_Script } from 'next/font/google';
import { useState } from 'react';

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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-gray-800/90 backdrop-blur border-b border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-300">
          <span className={dancingScript.className + " tracking-wide"} style={{ fontSize: '3.1rem' }}>
            Vivek Pandey
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Desktop Nav */}
          <div className="space-x-6 hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-200 hover:text-blue-400 font-medium transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block w-6 h-0.5 bg-gray-200 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-200 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-200 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur border-b border-gray-700 shadow-sm px-4 pb-4 pt-2 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-blue-400 font-medium transition-colors py-2 px-2 rounded"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 