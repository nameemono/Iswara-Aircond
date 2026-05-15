/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BUSINESS_INFO } from '@/src/constants';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = "Hi En Ashari! saya perlukan Expertise service tuan!";
    const text = `${prefix}\n\nMy name is ${formData.name}.\nPhone: ${formData.phone}.\nI'm interested in: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact Us Today</h2>
            <p className="text-lg text-slate-600 mb-8">
              Want a free quote or need emergency repair? Get in touch with our friendly team in Kuantan. We respond fastest via WhatsApp!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600 text-sm max-w-xs">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <p className="text-slate-600 text-sm">{BUSINESS_INFO.phones.join(' / ')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600 text-sm">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600 text-sm">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] -mr-4 -mt-4 -z-0" />
             
             <form onSubmit={sendWhatsApp} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-bold">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="h-14 rounded-xl border-slate-200 focus:ring-blue-600"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-bold">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Example: 016-921 2490" 
                    className="h-14 rounded-xl border-slate-200 focus:ring-blue-600"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-bold">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Mention if it's for installation, repair, or servicing..." 
                    className="min-h-[120px] rounded-xl border-slate-200 focus:ring-blue-600"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Button type="submit" className="w-full h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl text-lg font-bold shadow-xl shadow-green-100 flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6 fill-current" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-center text-slate-400 text-xs font-medium uppercase tracking-widest">
                    Quick Booking • Reliable Service • Honest Pricing
                  </p>
                </div>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
