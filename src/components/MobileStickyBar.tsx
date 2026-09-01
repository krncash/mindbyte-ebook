import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400">
            PRICE
          </span>
          <span className="text-base font-bold font-display text-white">
            {CONFIG.price}
          </span>
        </div>

        <button
          id="mobile-sticky-buy-btn"
          onClick={() => openWhatsAppOrder()}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] text-xs font-bold text-white bg-[#0055FF] active:bg-blue-600 rounded-2xl shadow-md shadow-blue-500/20 transition-transform active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Get Ebook — {CONFIG.price}</span>
        </button>
      </div>
    </div>
  );
};

