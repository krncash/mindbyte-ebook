import React, { useState } from 'react';
import { BookOpen, MessageCircle, Mail, Shield, FileText, RefreshCw, X } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'refund' | 'contact' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-[#0A0A0A] text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-[#0055FF] flex items-center justify-center text-white font-bold text-xs">
                M
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight">
                {CONFIG.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practical digital products for everyday productivity.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setActiveModal('refund')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <button
              onClick={() => setActiveModal('contact')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => openWhatsAppOrder()}
              className="text-[#0055FF] hover:text-blue-400 font-bold inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {CONFIG.year} {CONFIG.brandName}. All rights reserved.</p>
          <p className="text-slate-500">Digital publication • Ebook: {CONFIG.productName}</p>
        </div>

      </div>

      {/* Policy Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0A0A0A] border border-slate-800 text-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Privacy Policy */}
            {activeModal === 'privacy' && (
              <div>
                <div className="flex items-center gap-2.5 text-[#0055FF] mb-4">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-display text-white">Privacy Policy</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>At MindByte, we respect your privacy. This static website does not collect tracking cookies, store financial passwords, or share personal data with third parties.</p>
                  <p>When you initiate an order, communication takes place directly via WhatsApp. Your contact information is solely used to verify your transaction reference and deliver the digital ebook.</p>
                  <p>We do not store credit card credentials, bank passwords, or UPI PINs on any server.</p>
                </div>
              </div>
            )}

            {/* Terms of Service */}
            {activeModal === 'terms' && (
              <div>
                <div className="flex items-center gap-2.5 text-[#0055FF] mb-4">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-display text-white">Terms of Service</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>By purchasing "{CONFIG.productName}", you are granted a single-user personal license to read and utilize the ebook content.</p>
                  <p>Redistribution, resale, unauthorized sharing, or public hosting of the digital PDF file is strictly prohibited.</p>
                  <p>The content is provided for educational and practical productivity purposes. Always review and verify AI output before using it in critical professional or legal contexts.</p>
                </div>
              </div>
            )}

            {/* Refund Policy */}
            {activeModal === 'refund' && (
              <div>
                <div className="flex items-center gap-2.5 text-[#0055FF] mb-4">
                  <RefreshCw className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-display text-white">Refund Policy</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p>Because "{CONFIG.productName}" is a downloadable digital product (PDF), purchases are generally non-returnable once the file has been delivered.</p>
                  <p>If you experience any difficulties downloading or opening the file, or if you made a duplicate payment by accident, simply message us on WhatsApp with your payment UTR for immediate verification and resolution.</p>
                </div>
              </div>
            )}

            {/* Contact */}
            {activeModal === 'contact' && (
              <div>
                <div className="flex items-center gap-2.5 text-[#0055FF] mb-4">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-display text-white">Contact MindByte</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
                  <p>Have questions, need help with your order, or want to discuss enterprise licenses?</p>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                    <p className="text-white font-medium">WhatsApp Support:</p>
                    <p className="text-[#0055FF]">Available via the "Buy" button or direct message</p>
                    <p className="text-white font-medium pt-2">Email Inquiries:</p>
                    <p className="text-[#0055FF]">{CONFIG.supportEmail}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Close */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

