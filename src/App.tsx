/**
 * MindByte - "THE AI SHORTCUT"
 * Premium Mobile-First Digital Ebook Landing Page
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ChaptersSection } from './components/ChaptersSection';
import { PreviewSection } from './components/PreviewSection';
import { AudienceSection } from './components/AudienceSection';
import { ValueSection } from './components/ValueSection';
import { PricingSection } from './components/PricingSection';
import { PaymentStepsSection } from './components/PaymentStepsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppSimulatorModal } from './components/WhatsAppSimulatorModal';
import { Settings } from 'lucide-react';
import { CONFIG } from './config';

export default function App() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative pb-16 sm:pb-0">
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenWhatsAppSimulator={() => setIsSimulatorOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <BenefitsSection />
        <ChaptersSection />
        <PreviewSection />
        <AudienceSection />
        <ValueSection />
        <PricingSection />
        <PaymentStepsSection />
        <FAQSection />
        <FinalCTA />
      </main>

      {/* Footer & Legal Modals */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar />

      {/* WhatsApp Message & Number Simulator Modal */}
      <WhatsAppSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      {/* Floating Seller Config Helper Button */}
      <button
        onClick={() => setIsSimulatorOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-30 bg-slate-900/90 hover:bg-slate-900 text-slate-300 hover:text-white p-2.5 rounded-full shadow-lg border border-slate-700/80 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="WhatsApp Order Link Inspector & Tester"
        aria-label="Inspect WhatsApp order link"
      >
        <Settings className="w-4 h-4 text-blue-400" />
      </button>

    </div>
  );
}
