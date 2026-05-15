/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '@/src/constants';

export function ServiceArea() {
  const areas = [
    "Kuantan Town",
    "Taman Kg Padang Damai",
    "Bandar Indera Mahkota",
    "Bukit Ubi",
    "Semambu",
    "Tanjung Lumpur",
    "Beserah",
    "Balok",
    "Gambang"
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Service Areas in <span className="text-blue-600">Pahang</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              We provide fast and reliable aircond services throughout Kuantan and surrounding Pahang areas. Our technicians are ready to visit your location.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-1">On-Site Servicing</h4>
                <p className="text-blue-700 text-sm">We provide home and office visits across these locations within 24-48 hours of booking.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-8 border-white bg-slate-100"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.4!2d${BUSINESS_INFO.location.lng}!3d${BUSINESS_INFO.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c94d93d393d93d%3A0xdeadbeef!2sTaman%20Kampung%20Padang%20Damai!5e0!3m2!1sen!2smy!4v1621000000000!5m2!1sen!2smy`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
