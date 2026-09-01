import React, { useState } from 'react';
import { MessageSquare, Copy, Check, ExternalLink, Settings, X, Phone } from 'lucide-react';
import { CONFIG, buildWhatsAppMessage, getWhatsAppOrderUrl } from '../config';

interface WhatsAppSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppSimulatorModal: React.FC<WhatsAppSimulatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [testNumber, setTestNumber] = useState(
    CONFIG.whatsappNumber === 'YOUR_WHATSAPP_NUMBER' ? '919876543210' : CONFIG.whatsappNumber
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentMessage = buildWhatsAppMessage();
  const directLink = getWhatsAppOrderUrl(testNumber);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Settings className="w-5 h-5" />
          <h3 className="text-lg font-bold font-display text-white">WhatsApp Order Flow Inspector</h3>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Verify and preview the exact order message generated for your customers.
        </p>

        {/* Number Tester Input */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Target WhatsApp Phone Number (International format, no +)</span>
          </label>
          <input
            type="text"
            value={testNumber}
            onChange={(e) => setTestNumber(e.target.value)}
            placeholder="e.g. 919876543210"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Preview Box */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Pre-filled Message Preview:
          </label>
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm font-mono text-emerald-400 whitespace-pre-line leading-relaxed relative">
            {currentMessage}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Message!' : 'Copy Text'}</span>
          </button>

          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Test Live Link</span>
          </a>
        </div>

      </div>
    </div>
  );
};
