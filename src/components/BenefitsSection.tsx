import React from 'react';
import { Sparkles, Briefcase, Clock, MessageSquareText, Layers, ShieldCheck } from 'lucide-react';
import { BENEFITS } from '../data/ebookData';

export const BenefitsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Briefcase,
    Clock,
    MessageSquareText,
    Layers,
    ShieldCheck
  };

  return (
    <section id="benefits" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Actionable Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            What You Will Learn
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real skills for real daily productivity. No exaggerated income claims or hype.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.iconName] || Sparkles;
            return (
              <div
                key={benefit.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0055FF] mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#0A0A0A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

