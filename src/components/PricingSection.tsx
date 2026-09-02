import React from 'react';
import { Check, ShieldCheck, MessageCircle, FileText, Sparkles, Smartphone } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const PricingSection: React.FC = () => {
  const features = [
    'Practical beginner-friendly guide',
    'AI prompts and real-world examples',
    'Everyday use cases for work, study & home',
    'Learning & productivity strategies',
    'Digital ebook (Universal PDF format)',
    '12 complete structured chapters'
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Simple Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            Invest in Your AI Skills Today
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A single, affordable price with zero recurring charges or surprise fees.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#0055FF] bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full">
              Official Edition
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Product Title & Cover Preview */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-22 sm:w-20 sm:h-28 rounded-xl overflow-hidden shadow-lg border border-slate-700/80 shrink-0 bg-white">
              <img
                src={`${import.meta.env.BASE_URL}assets/ebook-cover.png`}
                alt="THE AI SHORTCUT Cover"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight mb-1.5">
                {CONFIG.productName}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {CONFIG.subtitle}
              </p>
            </div>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-3 py-4 border-y border-slate-800 mb-5">
            <span className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
              {CONFIG.price}
            </span>
            <span className="text-slate-500 text-sm line-through">
              ₹499
            </span>
            <span className="text-xs text-slate-400 font-medium ml-auto">
              One-time payment
            </span>
          </div>

          {/* Features List */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Main CTA */}
          <button
            id="pricing-buy-button"
            onClick={() => openWhatsAppOrder()}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-sm sm:text-base font-bold text-white bg-[#0055FF] hover:bg-blue-600 active:bg-blue-700 rounded-2xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Buy the Ebook for {CONFIG.price}</span>
          </button>

          {/* WhatsApp Redirection Note */}
          <p className="text-center text-[11px] text-slate-400 mt-3">
            You'll be redirected to WhatsApp to place your order.
          </p>

          {/* Trust Security Footer */}
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Safe &amp; Verified WhatsApp Seller Flow</span>
          </div>

        </div>

      </div>
    </section>
  );
};

