import React, { useState } from 'react';
import { Compass, Sun, Droplets, Flame, Wind, Mountain, CheckCircle2, ArrowRight } from 'lucide-react';
import { VASTU_PRINCIPLES } from '../data/mockData';

interface VastuSectionProps {
  onOpenConsultation: () => void;
}

export const VastuSection: React.FC<VastuSectionProps> = ({ onOpenConsultation }) => {
  const [activeZoneIdx, setActiveZoneIdx] = useState(0);
  const activePrinciple = VASTU_PRINCIPLES[activeZoneIdx];

  const getElementIcon = (elem: string) => {
    if (elem.includes('Fire')) return <Flame className="w-4 h-4 text-amber-600" />;
    if (elem.includes('Water')) return <Droplets className="w-4 h-4 text-sky-600" />;
    if (elem.includes('Air')) return <Wind className="w-4 h-4 text-teal-600" />;
    if (elem.includes('Earth')) return <Mountain className="w-4 h-4 text-emerald-700" />;
    return <Sun className="w-4 h-4 text-amber-500" />;
  };

  return (
    <section id="vastu" className="py-20 bg-[#F9F8F6] border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE7E1] text-[#18191B] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>Vedic Spatial Wisdom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Vastu-Compliant Luxury Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            We harmonize ancient Vedic energy flow with modern European aesthetics so you never have to choose between spiritual positivity and contemporary sophistication.
          </p>
        </div>

        {/* Interactive Vastu Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Zone Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            {VASTU_PRINCIPLES.map((item, idx) => {
              const isSelected = activeZoneIdx === idx;
              return (
                <button
                  key={item.zone}
                  onClick={() => setActiveZoneIdx(idx)}
                  className={`w-full p-4 text-left rounded-xs transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#18191B] text-[#F9F8F6] border-[#18191B] shadow-md'
                      : 'bg-white text-[#18191B] border-[#EAE7E1] hover:border-[#C88A58]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xs ${isSelected ? 'bg-white/10 text-[#C88A58]' : 'bg-[#F9F8F6] text-[#C88A58]'}`}>
                      {getElementIcon(item.element)}
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm sm:text-base">{item.zone}</p>
                      <p className={`text-xs ${isSelected ? 'text-[#C88A58]' : 'text-[#7A7B7E]'}`}>
                        {item.recommendedRoom}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-semibold px-2 py-1 rounded-xs ${
                    isSelected ? 'bg-[#C88A58] text-white' : 'bg-[#EAE7E1] text-[#55565A]'
                  }`}>
                    {item.direction}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Analysis Card (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-[#EAE7E1] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EAE7E1] mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C88A58]">
                    Selected Cardinal Zone
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18191B]">
                    {activePrinciple.zone}
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-[#F9F8F6] px-3 py-1.5 rounded-xs border border-[#EAE7E1] text-xs font-semibold text-[#18191B]">
                  {getElementIcon(activePrinciple.element)}
                  <span>Governing Element: {activePrinciple.element}</span>
                </div>
              </div>

              {/* Recommended Room Usage */}
              <div className="mb-6 p-4 rounded-xs bg-[#F9F8F6] border border-[#EAE7E1]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C88A58] mb-1">
                  Ideal Room Allocation in Vadodara Properties:
                </p>
                <p className="font-serif text-lg font-bold text-[#18191B]">
                  {activePrinciple.recommendedRoom}
                </p>
              </div>

              {/* Spatial Advice */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191B] mb-2">
                  Architectural Guideline & Energy Flow:
                </h4>
                <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed">
                  {activePrinciple.advice}
                </p>
              </div>

              {/* Color Palette & Material Suggestions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191B] mb-2">
                  Recommended Color Harmonies:
                </h4>
                <p className="text-xs font-semibold text-[#18191B] bg-[#EAE7E1]/50 p-3 rounded-xs border border-[#EAE7E1]">
                  {activePrinciple.colorSuggestion}
                </p>
              </div>
            </div>

            {/* Vastu Consultation Link */}
            <div className="pt-6 mt-6 border-t border-[#EAE7E1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#68696B]">
                Need a non-demolition Vastu audit for your existing Vadodara flat?
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#18191B] hover:bg-[#C88A58] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
              >
                Request Vastu Floor Plan Audit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
