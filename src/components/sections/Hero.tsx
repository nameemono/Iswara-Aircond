/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/src/constants';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-30 translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted local aircond specialists in Kuantan
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Fast & Reliable <span className="text-blue-600">Aircond Services</span> in Kuantan
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Professional installation, servis, repair and maintenance for your home and office. Stay cool with Kuantan's most trusted aircond team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-xl text-lg text-white font-bold shadow-xl shadow-blue-200 transition-all">
                Get Free Quote
              </a>
              <a href={`tel:${BUSINESS_INFO.phones[0].replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl text-lg border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 font-bold transition-all">
                <Phone className="w-5 h-5 text-blue-600" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Fast Response", "Expert Technicians", "Affordable Price", "Warranty Included"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                src="https://picsum.photos/seed/aircond-service/800/600"
                alt="Aircond Service Highlight"
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hidden">
                 {/* Video Play Placeholder */}
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5+
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-tight">Years in Business</div>
                  <div className="text-sm text-slate-500 italic">Serving Kuantan since 2018</div>
                </div>
              </div>
            </motion.div>

             {/* Floating reviews card */}
             <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900">100+ Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
