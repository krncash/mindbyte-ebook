import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const ValueSection: React.FC = () => {
  const withoutGuide = [
    'Repeating everyday tasks manually without leverage',
    'Searching Google for hours instead of getting structured summaries',
    'Struggling with vague prompts that return useless generic replies',
    'Spending unnecessary time drafting emails, notes, and outlines from scratch'
  ];

  const withGuide = [
    'Write clear, 4-part prompts that work on the first try',
    'Understand complex study topics and documents in minutes',
    'Execute smart AI workflows for writing, brainstorming, and planning',
    'Apply practical, everyday use cases across work, study, and life'
  ];

  return (
    <section id="value" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            The Real Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            Stop Guessing. Build a System.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Compare a trial-and-error approach with having a structured, beginner-friendly handbook.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Without Ebook Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#0A0A0A]">
                  Without a Practical System
                </h3>
                <span className="text-xs text-red-600 font-medium">Trial-and-error & wasted effort</span>
              </div>
            </div>

            <ul className="space-y-3.5">
              {withoutGuide.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Ebook Card */}
          <div className="bg-white border-2 border-[#0055FF] rounded-3xl p-6 sm:p-7 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Top highlight badge */}
              <div className="absolute top-0 right-0 bg-[#0055FF] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-bl-2xl uppercase">
                Recommended
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0055FF]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#0A0A0A]">
                    With "THE AI SHORTCUT"
                  </h3>
                  <span className="text-xs text-[#0055FF] font-medium">Structured clarity for only {CONFIG.price}</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-6">
                {withGuide.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => openWhatsAppOrder()}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#0055FF] hover:bg-blue-600 rounded-2xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Get the Ebook for {CONFIG.price}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

