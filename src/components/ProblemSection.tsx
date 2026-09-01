import React from 'react';
import { HelpCircle, AlertCircle, Clock, Frown, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { openWhatsAppOrder } from '../config';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: HelpCircle,
      title: "Don't know what to ask AI",
      desc: "Staring at a blank chat box with no idea how to phrase prompts for real-world tasks."
    },
    {
      icon: AlertCircle,
      title: "Get poor answers because of weak prompts",
      desc: "Receiving generic, robotic, or useless replies due to missing context and constraints."
    },
    {
      icon: Clock,
      title: "Waste time doing repetitive tasks manually",
      desc: "Spending hours writing routine emails, formatting notes, and doing manual research."
    },
    {
      icon: Frown,
      title: "Don't know how AI can help with study & work",
      desc: "Missing out on simple AI-assisted study schedules, meeting summaries, and workflows."
    },
    {
      icon: Cpu,
      title: "Feel overwhelmed by complicated AI tools",
      desc: "Confused by endless technical buzzwords, complex frameworks, and developer jargon."
    }
  ];

  return (
    <section id="problem" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            The Common Struggle
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight leading-tight">
            AI is powerful. But most people don't know how to use it practically.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Everyone is talking about AI, but without a clear, simple framework, it's easy to get stuck getting mediocre answers or wasting time on trial-and-error.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#0A0A0A] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Bridge Card / The Solution */}
          <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-1 border border-slate-800">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#0055FF] flex items-center justify-center text-white mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2">
                Your Practical Shortcut
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                This guide bypasses all theoretical fluff and gives you plug-and-play prompts, frameworks, and actionable examples you can apply in 5 minutes.
              </p>
            </div>

            <button
              onClick={() => openWhatsAppOrder()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0055FF] hover:bg-blue-600 py-3 px-5 rounded-2xl transition-all self-start shadow-md shadow-blue-500/20"
            >
              <span>Get the Guide (₹79)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
