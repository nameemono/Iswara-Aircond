/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Clock, BadgeCent, Star } from 'lucide-react';

export function TrustRow() {
  const highlights = [
    {
      icon: Shield,
      title: "Local Specialists",
      desc: "Kuantan HVAC Experts"
    },
    {
      icon: Clock,
      title: "Fast Response",
      desc: "Same-day booking available"
    },
    {
      icon: BadgeCent,
      title: "Affordable Price",
      desc: "No hidden charges"
    },
    {
      icon: Star,
      title: "5+ Years",
      desc: "Serving Pahang locally"
    }
  ];

  return (
    <div className="bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:text-white transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm whitespace-nowrap">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
