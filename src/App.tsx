/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { MobileStickyCTA } from '@/src/components/layout/MobileStickyCTA';
import { FloatingWhatsApp } from '@/src/components/ui/WhatsAppButton';
import { Hero } from '@/src/components/sections/Hero';
import { Services } from '@/src/components/sections/Services';
import { ServiceArea } from '@/src/components/sections/ServiceArea';
import { About } from '@/src/components/sections/About';
import { TrustRow } from '@/src/components/sections/TrustRow';
import { FAQ } from '@/src/components/sections/FAQ';
import { ContactForm } from '@/src/components/sections/ContactForm';
import { BrandShowcase } from '@/src/components/sections/BrandShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <BrandShowcase />
        <Services />
        <TrustRow />
        <ServiceArea />
        <About />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

