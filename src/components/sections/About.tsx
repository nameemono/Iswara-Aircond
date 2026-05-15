/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BUSINESS_INFO } from '@/src/constants';

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Trusted Local Family Business</h2>
              <p className="text-xl text-blue-50 leading-relaxed mb-8">
                Iswara Aircond Services is a locally-owned family business dedicated to keeping Kuantan cool. We specialize in residential and commercial cooling solutions with a focus on trust, transparency, and superior workmanship.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="italic text-lg text-blue-50">
                  "As a local business owner in Kuantan, I understand how important a reliable aircond is in our weather. We treat every customer's home like our own, ensuring the best service every time."
                </p>
                <div className="mt-4 font-bold text-lg">— Owner of Iswara Aircond</div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <img
                  src="https://picsum.photos/seed/kountan-ac/600/800"
                  alt="Iswara Team"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="absolute -bottom-6 -right-6 bg-white text-blue-600 p-6 rounded-2xl shadow-xl font-bold hidden md:block">
                <div className="text-3xl">Quality</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
