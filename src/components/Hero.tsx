import React from 'react';
import { ArrowUpRight, Calculator, ShieldCheck, Clock, Award, Compass, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToPortfolio
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#F9F8F6]">
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F0E9] -skew-x-6 transform origin-top pointer-events-none opacity-60 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAE7E1] text-[#18191B] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C88A58] animate-pulse"></span>
              <span className="font-serif italic text-sm">Vadodara's Premier Interior Architecture Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#18191B] tracking-tight leading-[1.12] mb-6">
              Transforming Spaces into <span className="italic font-normal text-[#C88A58]">Timeless Works</span> of Art.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#55565A] font-normal leading-relaxed max-w-2xl mb-8">
              Specializing in bespoke Turnkey Residential Homes, High-Performance Workspaces, Modular Kitchens, and authentic Vastu-Compliant 2D/3D design solutions across Alkapuri, Sevasi, Gotri, and greater Vadodara.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-explore-btn"
                onClick={onScrollToPortfolio}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#18191B] hover:bg-[#2A2B2E] text-[#F9F8F6] text-sm font-semibold rounded-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4 text-[#C88A58] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-[#55565A] pt-6 border-t border-[#EAE7E1] w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C88A58] shrink-0" />
                <span>Fixed 45-Day Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C88A58] shrink-0" />
                <span>100% Vastu Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C88A58] shrink-0" />
                <span>10-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Editorial Banner with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Architectural Border */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[3/4] bg-[#EAE7E1]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Living Room Interior Design in Vadodara by Siddhivinayak Interior"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191B]/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Image Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-[#18191B]/70 backdrop-blur-md rounded-xs">
                  <p className="text-xs uppercase tracking-widest text-[#C88A58] font-semibold">Featured Handover</p>
                  <p className="font-serif text-sm sm:text-base font-medium">The Solitaire 4BHK Penthouse, Alkapuri</p>
                </div>
              </div>

              {/* Floating Badge 1: 500+ Projects in Gujarat */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xs shadow-xl border border-[#EAE7E1] max-w-[200px] z-20">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-amber-500 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-[11px] font-bold text-[#18191B]">5.0 Star</span>
                </div>
                <p className="text-xs font-bold text-[#18191B]">500+ Projects Completed</p>
                <p className="text-[10px] text-[#7A7B7E]">Across Vadodara & Gujarat</p>
              </div>

              {/* Floating Badge 2: Vastu & Quality Certified */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#18191B] text-[#F9F8F6] p-4 rounded-xs shadow-xl border border-[#333] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C88A58]/20 flex items-center justify-center text-[#C88A58]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">100% Vastu Verified</p>
                    <p className="text-[10px] text-[#C88A58]">By Vedic Architecture Experts</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Key Trust Bar Metrics */}
        <div className="mt-16 pt-10 border-t border-[#EAE7E1] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#EAE7E1] rounded-xs text-[#C88A58]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#18191B]">500+</p>
              <p className="text-xs font-semibold text-[#68696B] uppercase tracking-wider mt-0.5">Delivered Projects</p>
              <p className="text-[11px] text-[#88898C] mt-0.5">Residential & Commercial</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#EAE7E1] rounded-xs text-[#C88A58]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#18191B]">10+ Yrs</p>
              <p className="text-xs font-semibold text-[#68696B] uppercase tracking-wider mt-0.5">Vadodara Craftsmanship</p>
              <p className="text-[11px] text-[#88898C] mt-0.5">Established in 2014</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#EAE7E1] rounded-xs text-[#C88A58]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#18191B]">45 Days</p>
              <p className="text-xs font-semibold text-[#68696B] uppercase tracking-wider mt-0.5">Turnkey Handover</p>
              <p className="text-[11px] text-[#88898C] mt-0.5">Zero Delays Guarantee</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#EAE7E1] rounded-xs text-[#C88A58]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#18191B]">100%</p>
              <p className="text-xs font-semibold text-[#68696B] uppercase tracking-wider mt-0.5">Vastu Harmony</p>
              <p className="text-[11px] text-[#88898C] mt-0.5">Positive Energy Flow</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
