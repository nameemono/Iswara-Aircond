/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQS } from '@/src/constants';

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about our air-conditioning services.</p>
        </div>

        <Accordion className="w-full space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-slate-50 overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-slate-900 group hover:no-underline py-6">
                <span className="group-hover:text-blue-600 transition-colors uppercase tracking-tight text-sm md:text-base">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
