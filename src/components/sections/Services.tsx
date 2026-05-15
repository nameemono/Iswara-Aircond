/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Wind, RefreshCw, Wrench, Droplets, Gauge, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/src/constants';

const icons: Record<string, any> = {
  Wind,
  RefreshCw,
  Tool: Wrench,
  Droplets,
  Gauge,
  ShieldCheck
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
          <p className="text-slate-600">Expert cooling solutions tailored for Malaysian tropical weather. We handle residential, commercial, and industrial air-conditioning needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardHeader className="bg-white pb-2">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-2">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
