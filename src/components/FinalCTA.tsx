import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[10px] font-bold tracking-widest uppercase mb-5">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span>START YOUR AI JOURNEY</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white mb-4 leading-tight">
          Ready to Make AI Part of Your Everyday Life?
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Get <strong className="text-white">THE AI SHORTCUT</strong> for {CONFIG.price} and start using AI with confidence and precision.
        </p>

        {/* Purchase CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            id="final-cta-button"
            onClick={() => openWhatsAppOrder()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#0055FF] hover:bg-blue-600 active:bg-blue-700 rounded-2xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get THE AI SHORTCUT — {CONFIG.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Instant WhatsApp order trigger • Digital PDF guide • No recurring fees</span>
        </div>

      </div>
    </section>
  );
};

