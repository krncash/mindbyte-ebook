import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Zap, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const Hero: React.FC = () => {
  const scrollToChapters = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#chapters');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-6 sm:py-10 lg:py-12 bg-[#F8FAFC] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card (High Density) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-[#0055FF] text-[10px] font-bold tracking-widest uppercase rounded-full mb-5">
                <Sparkles className="w-3 h-3 text-[#0055FF]" />
                <span>Practical AI Guide</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3 text-[#0A0A0A] tracking-tight font-display">
                THE AI SHORTCUT
              </h1>

              {/* Strong Supporting Line */}
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0055FF] mb-3 tracking-tight">
                Learn Faster. Work Smarter. Save Time.
              </p>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                A Practical Beginner's Guide to Using AI to Learn Faster, Work Smarter, Save Time &amp; Simplify Everyday Life.
              </p>

              {/* Price Block */}
              <div className="flex items-end gap-3 mb-8 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 w-fit">
                <span className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] font-display">
                  {CONFIG.price}
                </span>
                <span className="text-slate-400 text-sm line-through mb-1">
                  ₹499
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full mb-1 ml-1">
                  84% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  id="hero-primary-cta"
                  onClick={() => openWhatsAppOrder()}
                  className="flex-1 bg-[#0055FF] text-white py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-blue-200 hover:bg-blue-600 active:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get THE AI SHORTCUT — {CONFIG.price}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={scrollToChapters}
                  className="flex-1 bg-white border border-slate-200 py-3.5 px-6 rounded-2xl font-semibold text-slate-700 hover:bg-slate-50 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#0055FF]" />
                  <span>See What's Inside</span>
                </button>
              </div>
            </div>

            {/* Trust Notice */}
            <div className="pt-5 border-t border-slate-100 flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Digital Ebook • Delivered After Payment Verification</span>
            </div>
          </div>

          {/* Right Column: High Density Preview & Metric Tiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 3D Ebook Render Preview Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden flex-1 min-h-[300px]">
              
              {/* Decorative Subtle Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* 3D Cover Mockup */}
              <div className="relative group z-10 w-full max-w-[240px]">
                <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 bg-white">
                  <img
                    src="/assets/ebook-cover.svg"
                    alt="THE AI SHORTCUT Ebook Cover by MindByte"
                    className="w-full h-auto object-cover block rounded-2xl"
                    loading="eager"
                  />
                </div>

                {/* Floating Ebook Tag */}
                <div className="absolute -bottom-3 -right-2 bg-[#0A0A0A]/90 border border-slate-700 text-white text-[11px] px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">Digital PDF</span>
                  <span className="text-slate-400">| 12 Chapters</span>
                </div>
              </div>

              <div className="mt-6 text-white z-10">
                <h4 className="text-base font-bold">Premium Digital Edition</h4>
                <p className="text-xs text-blue-200">Instant PDF download via verified WhatsApp chat</p>
              </div>
            </div>

            {/* High Density Mini-Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center text-center">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0055FF] flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                  ⚡
                </div>
                <h4 className="text-xs font-bold uppercase tracking-tight text-[#0A0A0A]">Save Time</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Automate daily repetitive tasks</p>
              </div>

              <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center text-center">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0055FF] flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                  💡
                </div>
                <h4 className="text-xs font-bold uppercase tracking-tight text-[#0A0A0A]">Work Smart</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Write better prompts easily</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

