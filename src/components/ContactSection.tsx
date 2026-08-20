import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { STUDIO_INFO, VADODARA_LOCALITIES, FAQS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '3BHK Flat',
    carpetArea: '1500',
    locality: 'Alkapuri',
    preferredTime: 'Morning (10 AM - 1 PM)',
    estimatedBudget: '₹15 - ₹25 Lakhs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F8F6] border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C88A58] block mb-2">
            Visit Our Alkapuri Studio or Book On-Site Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Begin Your Design Journey
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            Schedule a complimentary discovery session. Our principal designers will review your layout, evaluate Vastu directions, and prepare a custom turnkey roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Studio Address (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Info Card */}
            <div className="p-6 sm:p-8 bg-white rounded-xs border border-[#EAE7E1] shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#18191B]">
                Siddhivinayak Experience Studio
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4A4B4D]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#F9F8F6] text-[#C88A58] rounded-xs border border-[#EAE7E1] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18191B] block mb-0.5">Studio Location:</span>
                    <p className="leading-relaxed text-[#68696B]">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#F9F8F6] text-[#C88A58] rounded-xs border border-[#EAE7E1] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18191B] block mb-0.5">Direct Line & WhatsApp:</span>
                    <a href={`tel:${STUDIO_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-[#C88A58] font-semibold hover:underline block">
                      {STUDIO_INFO.phone}
                    </a>
                    <a href={`tel:${STUDIO_INFO.secondaryPhone.replace(/[^0-9+]/g, '')}`} className="text-[#68696B] hover:underline block mt-0.5">
                      {STUDIO_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#F9F8F6] text-[#C88A58] rounded-xs border border-[#EAE7E1] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18191B] block mb-0.5">Official Inquiries:</span>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#68696B] hover:text-[#C88A58]">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#F9F8F6] text-[#C88A58] rounded-xs border border-[#EAE7E1] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#18191B] block mb-0.5">Studio Hours:</span>
                    <p className="text-[#68696B] leading-relaxed">
                      {STUDIO_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vadodara Localities Tag Cloud */}
              <div className="pt-4 border-t border-[#EAE7E1]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#18191B] mb-2">
                  Active Project Service Areas:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {VADODARA_LOCALITIES.slice(0, 8).map((loc) => (
                    <span key={loc} className="px-2 py-0.5 bg-[#F9F8F6] text-[#68696B] text-[10px] rounded-xs border border-[#EAE7E1]">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="p-6 bg-[#18191B] text-white rounded-xs border border-[#333] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#C88A58] uppercase tracking-wider">Fast-Track Response</p>
                <p className="font-serif text-lg font-bold">Prefer instant chat?</p>
                <p className="text-xs text-[#A0A1A4] mt-0.5">Connect with our Lead Architect via WhatsApp</p>
              </div>
              <a
                href={`https://wa.me/919825084729?text=Hi%20Siddhivinayak%20Interior,%20I%20would%20like%20to%20book%20a%20free%20interior%20consultation%20for%20my%20property%20in%20Vadodara.`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs shrink-0 flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-[#EAE7E1] shadow-lg">
            
            <div className="mb-6 pb-4 border-b border-[#EAE7E1]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C88A58]">
                Free 60-Minute Consultation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#18191B]">
                Book Your Studio / On-Site Appointment
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#F9F8F6] rounded-xs border border-[#C88A58]/40 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#18191B]">
                  Consultation Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#55565A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#18191B]">{formData.fullName}</strong>. Our Principal Designer will review your <strong className="text-[#18191B]">{formData.propertyType}</strong> requirements in <strong className="text-[#18191B]">{formData.locality}</strong> and contact you at <strong className="text-[#18191B]">{formData.phone}</strong> during {formData.preferredTime}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#18191B] text-white text-xs font-semibold rounded-xs hover:bg-[#C88A58] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98250 XXXXX"
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="2BHK Flat">2BHK Apartment</option>
                      <option value="3BHK Flat">3BHK Apartment</option>
                      <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                      <option value="Independent Bungalow / Villa">Independent Bungalow / Villa</option>
                      <option value="Commercial / Corporate Office">Commercial / Corporate Office</option>
                      <option value="Complete Home Renovation">Complete Home Renovation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Carpet Area (sq.ft)
                    </label>
                    <input
                      type="number"
                      value={formData.carpetArea}
                      onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                      placeholder="1500"
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Vadodara Area / Locality
                    </label>
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    >
                      {VADODARA_LOCALITIES.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                      <option value="Weekend Site Visit">Weekend Site Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18191B] mb-1.5">
                    Specific Requirements / Vastu Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your possession date, modular kitchen preferences, or specific Vastu requirements..."
                    className="w-full px-3.5 py-2.5 bg-[#F9F8F6] text-xs sm:text-sm rounded-xs border border-[#EAE7E1] focus:border-[#C88A58] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs transition-colors shadow-md flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Consultation Request</span>
                </button>

                <p className="text-[11px] text-[#88898C] text-center">
                  🔒 We respect your privacy. No spam. 100% confidential site assessment.
                </p>
              </form>
            )}

          </div>

        </div>

        {/* Section FAQ Accordion */}
        <div className="mt-20 pt-12 border-t border-[#EAE7E1]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18191B]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#68696B] mt-1">
              Clear answers regarding our materials, timelines, and payment models.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xs border border-[#EAE7E1] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#18191B]">
                      {faq.q}
                    </span>
                    <span className="text-[#C88A58] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#55565A] leading-relaxed border-t border-[#EAE7E1]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
