import React, { useState } from 'react';
import { BookOpen, Check, ChevronDown, ChevronUp, FileText, ArrowRight } from 'lucide-react';
import { CHAPTERS } from '../data/ebookData';
import { CONFIG, openWhatsAppOrder } from '../config';

export const ChaptersSection: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>('01');

  const toggleChapter = (num: string) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  return (
    <section id="chapters" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            The Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            Inside the Ebook
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A comprehensive, 12-chapter roadmap built step-by-step for absolute beginners.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            <FileText className="w-3.5 h-3.5 text-[#0055FF]" />
            <span>Complete 12-Chapter Outline • Instant PDF Delivery</span>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {CHAPTERS.map((chapter) => {
            const isExpanded = expandedChapter === chapter.number;
            return (
              <div
                key={chapter.number}
                className={`rounded-3xl border transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between ${
                  isExpanded 
                    ? 'bg-white border-[#0055FF] shadow-sm ring-1 ring-blue-500/20' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#0055FF] border border-blue-100">
                      {chapter.number}
                    </span>
                    <button
                      onClick={() => toggleChapter(chapter.number)}
                      className="text-slate-400 hover:text-[#0055FF] text-xs font-medium inline-flex items-center gap-1 focus:outline-none cursor-pointer"
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <h3 className="text-base font-bold font-display text-[#0A0A0A] leading-snug mb-2">
                    {chapter.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {chapter.summary}
                  </p>
                </div>

                {isExpanded && (
                  <div className="pt-3 border-t border-slate-100 mt-2 space-y-1.5 animate-in fade-in duration-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Key Highlights:
                    </span>
                    {chapter.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Chapter Banner */}
        <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Get all 12 chapters in one clean, formatted digital PDF.
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Includes prompt templates, cheatsheets, and real-world examples for only {CONFIG.price}.
            </p>
          </div>
          <button
            onClick={() => openWhatsAppOrder()}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#0055FF] hover:bg-blue-600 rounded-2xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <span>Get the Ebook – {CONFIG.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
