/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '@/src/constants';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden pointer-events-none"
        >
          <div className="max-w-md mx-auto pointer-events-auto">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-6 rounded-2xl shadow-2xl font-bold active:scale-95 transition-transform"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>Call {BUSINESS_INFO.phones[0]}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
