import React from 'react';
import { ShieldCheck, AlertTriangle, QrCode, Lock, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { PAYMENT_STEPS } from '../data/ebookData';
import { CONFIG, openWhatsAppOrder } from '../config';

export const PaymentStepsSection: React.FC = () => {
  return (
    <section id="payment-process" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#0055FF] font-bold text-[10px] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Transparent Order Flow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0A0A0A] tracking-tight">
            How The Order Process Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A simple, human-verified purchase flow that guarantees secure delivery directly to your WhatsApp.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PAYMENT_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0055FF] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Step {step.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display text-[#0A0A0A] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning & Security Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          
          {/* Security Notice */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-[#0A0A0A]">
                    Important Payment Security Note
                  </h4>
                  <span className="text-xs text-amber-700 font-semibold">Official MindByte Policy</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                <strong>Only pay using the payment details/QR code sent through the official MindByte WhatsApp conversation.</strong>
              </p>

              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>We NEVER ask for your UPI PIN, ATM PIN, or bank passwords.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No card credentials or private payment data are stored on this site.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Manual payment verification ensures accurate and honest fulfillment.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Process Card */}
          <div className="lg:col-span-5 bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#0055FF]" />
                <h4 className="text-base font-bold font-display text-white">
                  How You'll Receive Your Ebook
                </h4>
              </div>

              <ol className="space-y-3 text-xs text-slate-300 mb-5">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0055FF] font-mono">1.</span>
                  <span>Customer sends UTR / transaction reference number on WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0055FF] font-mono">2.</span>
                  <span>Seller verifies the payment transaction with the bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#0055FF] font-mono">3.</span>
                  <span>Seller sends the digital PDF ebook directly inside WhatsApp.</span>
                </li>
              </ol>
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Your ebook is delivered after payment verification.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
