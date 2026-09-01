import React, { useState } from 'react';
import { BookOpen, FileCheck, ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { PAGE_PREVIEWS } from '../data/ebookData';
import { CONFIG, openWhatsAppOrder } from '../config';

export const PreviewSection: React.FC = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const activePage = PAGE_PREVIEWS[activePageIndex];

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : PAGE_PREVIEWS.length - 1));
  };

  const handleNext = () => {
    setActivePageIndex((prev) => (prev < PAGE_PREVIEWS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="preview" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Sample Excerpts
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            Take a Look Inside
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Read sample pages to experience the clear, conversational, and practical teaching style.
          </p>
          <div className="mt-2 text-xs text-slate-400">
            Preview pages are shown for demonstration.
          </div>
        </div>

        {/* Page Switcher Tabs */}
        <div className="flex justify-center items-center gap-2 mb-8 overflow-x-auto pb-2">
          {PAGE_PREVIEWS.map((page, index) => (
            <button
              key={page.id}
              onClick={() => setActivePageIndex(index)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activePageIndex === index
                  ? 'bg-[#0055FF] text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Sample {index + 1}: Page {page.pageNumber}</span>
            </button>
          ))}
        </div>

        {/* Ebook Page Reader Mockup */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
            
            {/* Top Page Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#0055FF]" />
                <span className="font-semibold text-slate-600">MINDBYTE DIGITAL GUIDE</span>
              </div>
              <span className="font-mono text-slate-500">PAGE {activePage.pageNumber}</span>
            </div>

            {/* Chapter Breadcrumb & Title */}
            <div className="mb-5">
              <span className="text-[11px] font-bold text-[#0055FF] tracking-wider uppercase block mb-1">
                {activePage.chapterTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0A0A0A] leading-tight">
                {activePage.title}
              </h3>
            </div>

            {/* Body Content */}
            <div className="space-y-3.5 text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
              {activePage.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Takeaway Box */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
              <FileCheck className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-blue-900 leading-snug">
                {activePage.takeaway}
              </p>
            </div>

            {/* Bottom Page Navigation */}
            <div className="flex items-center justify-between pt-5 mt-6 border-t border-slate-100 text-xs">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0055FF] font-medium py-1.5 px-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Sample</span>
              </button>

              <span className="text-xs text-slate-400 font-mono">
                {activePageIndex + 1} of {PAGE_PREVIEWS.length}
              </span>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0055FF] font-medium py-1.5 px-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>Next Sample</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Quick CTA beneath sample */}
          <div className="mt-6 text-center">
            <button
              onClick={() => openWhatsAppOrder()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0055FF] hover:text-blue-700 bg-blue-50/80 border border-blue-100 hover:border-blue-200 py-2.5 px-5 rounded-full transition-all cursor-pointer"
            >
              <span>Unlock the full 12-chapter ebook for {CONFIG.price}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

