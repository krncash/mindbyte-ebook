import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/ebookData';
import { openWhatsAppOrder } from '../config';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Questions &amp; Answers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Everything you need to know about the ebook, ordering, and delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0055FF] bg-white shadow-sm ring-1 ring-blue-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-display text-[#0A0A0A] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0055FF] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <p className="text-xs sm:text-sm text-slate-700 font-medium mb-3">
            Have a different question about the guide?
          </p>
          <button
            onClick={() => openWhatsAppOrder()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0055FF] hover:text-blue-700 bg-blue-50 border border-blue-100 hover:border-blue-200 px-4 py-2 rounded-2xl transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With MindByte Support on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

