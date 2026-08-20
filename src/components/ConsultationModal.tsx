import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, MapPin, Calculator, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO, VADODARA_LOCALITIES } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    source?: string;
    serviceName?: string;
    spaceType?: string;
    style?: string;
    area?: number;
    estimatedMin?: number;
    estimatedMax?: number;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillData
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '3BHK Flat',
    carpetArea: '1500',
    locality: 'Alkapuri',
    preferredTime: 'Morning (10 AM - 1 PM)',
    budgetRange: '',
    serviceInterest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        propertyType: prefillData.spaceType || prev.propertyType,
        carpetArea: prefillData.area ? String(prefillData.area) : prev.carpetArea,
        serviceInterest: prefillData.serviceName || prev.serviceInterest,
        budgetRange: prefillData.estimatedMin && prefillData.estimatedMax
          ? `₹${(prefillData.estimatedMin / 100000).toFixed(2)}L - ₹${(prefillData.estimatedMax / 100000).toFixed(2)}L (${prefillData.style || 'Custom'})`
          : prev.budgetRange
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18191B]/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl bg-[#F9F8F6] rounded-xs shadow-2xl overflow-hidden border border-[#EAE7E1] my-auto">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#EAE7E1] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#C88A58]"></span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C88A58]">
                Siddhivinayak Interior Vadodara
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#18191B]">
              Book Free Design Consultation
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4A4B4D] hover:text-[#18191B] hover:bg-[#EAE7E1] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* If opened from Budget Estimator, show summary badge */}
          {prefillData?.estimatedMin && (
            <div className="mb-6 p-3.5 bg-white rounded-xs border border-[#C88A58]/50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#18191B]">
                <Calculator className="w-4 h-4 text-[#C88A58]" />
                <span>
                  <strong>{prefillData.spaceType}</strong> ({prefillData.area} sq.ft) • {prefillData.style}
                </span>
              </div>
              <span className="font-bold text-[#C88A58]">
                ₹{(prefillData.estimatedMin / 100000).toFixed(1)}L - ₹{(prefillData.estimatedMax / 100000).toFixed(1)}L
              </span>
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#18191B]">
                Your Consultation is Scheduled!
              </h4>
              <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our Senior Architect will contact you at <strong>{formData.phone}</strong> to confirm your slot for your property in <strong>{formData.locality}, Vadodara</strong>.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#18191B] text-white text-xs font-semibold rounded-xs hover:bg-[#C88A58] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Trivedi"
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98250 XXXXX"
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    Property Typology
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  >
                    <option value="2BHK Flat">2BHK Apartment</option>
                    <option value="3BHK Flat">3BHK Apartment</option>
                    <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                    <option value="Luxury Villa / Bungalow">Luxury Villa / Bungalow</option>
                    <option value="Commercial Space">Commercial Space</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                    <option value="Full Renovation">Full Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    Vadodara Locality
                  </label>
                  <select
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  >
                    {VADODARA_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    Carpet Area (sq.ft)
                  </label>
                  <input
                    type="number"
                    value={formData.carpetArea}
                    onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                    placeholder="1500"
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="Weekend In-Person Studio Visit">Weekend In-Person Studio Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1">
                  Notes / Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details such as target possession date, floor plan link, or Vastu queries..."
                  className="w-full px-3 py-2 bg-white text-xs rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C88A58] hover:bg-[#B77948] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Discovery Session</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#7A7B7E] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C88A58]" /> 10-Year Warranty
                </span>
                <span>•</span>
                <span>Zero Obligation Consultation</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
