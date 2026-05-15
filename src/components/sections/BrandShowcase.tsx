/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BRANDS } from '@/src/constants';

export function BrandShowcase() {
  return (
    <div className="py-12 border-y bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap mb-4 md:mb-0">
             Authorized Service for
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black text-slate-300 hover:text-blue-600 transition-colors cursor-default select-none">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
