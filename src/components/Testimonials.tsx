import React from 'react';
import { Star, CheckCircle, Quote, MapPin, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C88A58] block mb-2">
            Client Voices from Vadodara
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Trusted by 500+ Gujarat Homeowners
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            Read unfiltered feedback from families and business owners across Alkapuri, Gotri, Vasna Road, and Sevasi.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-[#F9F8F6] px-4 py-2 rounded-full border border-[#EAE7E1] mt-6 shadow-xs">
            <div className="flex text-amber-500 text-sm">
              {'★'.repeat(5)}
            </div>
            <span className="text-xs font-bold text-[#18191B]">4.98 / 5.0 Rating</span>
            <span className="text-[#A0A1A4] text-xs">•</span>
            <span className="text-xs text-[#55565A]">Based on 320+ Google & Direct Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 bg-[#F9F8F6] rounded-xs border border-[#EAE7E1] hover:border-[#C88A58]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Project type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-sm">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#C88A58] bg-white px-2.5 py-1 rounded-xs border border-[#EAE7E1]">
                    {t.projectType}
                  </span>
                </div>

                {/* Quote body */}
                <p className="text-xs sm:text-sm text-[#333438] italic font-normal leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#EAE7E1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#EAE7E1]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#18191B]">{t.name}</h4>
                    <p className="text-[11px] text-[#68696B] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C88A58]" />
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-1 rounded-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Verified Handover</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
