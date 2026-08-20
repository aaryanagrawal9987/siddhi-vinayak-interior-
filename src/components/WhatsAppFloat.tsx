import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/919825084729?text=Hi%20Siddhivinayak%20Interior,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services%20for%20my%20property%20in%20Vadodara.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-[#18191B] text-white text-xs px-3 py-2 rounded-xs shadow-xl border border-white/10 flex items-center gap-2 animate-bounce-subtle max-w-[220px]">
          <div>
            <p className="font-bold text-[#C88A58]">Need Instant Estimate?</p>
            <p className="text-[10px] text-[#D5CEC5]">Chat on WhatsApp with our team</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group border-2 border-white"
        aria-label="Chat on WhatsApp with Siddhivinayak Interior"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
