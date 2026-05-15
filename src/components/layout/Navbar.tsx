/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/src/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
            I
          </div>
          <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            Iswara <span className="text-blue-600">Aircond</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all rounded-full px-6 py-2.5 h-10 text-sm font-medium">
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phones[0]}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-600 font-medium">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-600 font-medium">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 text-slate-600 font-medium">Contact</a>
              <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="w-full bg-blue-600 text-white hover:bg-blue-700 py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all">
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phones[0]}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
