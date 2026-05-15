/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BUSINESS_INFO, BRANDS } from '@/src/constants';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  I
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  Iswara <span className="text-blue-500">Aircond</span>
                </span>
              </div>
              <p className="mb-6 leading-relaxed">
                The preferred choice for air conditioning services in Kuantan. Fast, reliable, and affordable solutions for your tropical home.
              </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Services</h4>
            <ul className="space-y-4">
              {["Installation", "Servicing", "Repair", "Chemical Wash", "Gas Refill"].map(item => (
                <li key={item}>
                  <a href="#services" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-xs font-bold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Contact", "FAQ"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors uppercase tracking-widest text-xs font-bold">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Contact Info</h4>
            <p className="text-sm leading-relaxed mb-4">{BUSINESS_INFO.address}</p>
            <p className="text-sm font-bold text-blue-500 mb-2">{BUSINESS_INFO.phones[0]}</p>
            <p className="text-sm font-bold text-blue-500">{BUSINESS_INFO.phones[1]}</p>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em]">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
