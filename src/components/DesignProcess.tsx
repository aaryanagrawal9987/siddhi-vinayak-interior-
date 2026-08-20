import React, { useState } from 'react';
import { Compass, Eye, ShieldCheck, Key, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';

interface DesignProcessProps {
  onOpenConsultation: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Vastu Site Audit',
    duration: 'Days 1 – 3',
    icon: Compass,
    subtitle: 'Understanding your family’s lifestyle, spatial requirements & directional energy flow.',
    deliverables: [
      'Complimentary on-site laser measurement in Vadodara',
      'Cardinal direction mapping for Mandir, Kitchen & Master Bedroom',
      'Functional zoning plan & preliminary budget alignment'
    ]
  },
  {
    step: '02',
    title: '3D Photorealistic VR & Material Curation',
    duration: 'Days 4 – 10',
    icon: Eye,
    subtitle: 'Experience your future home before hammering a single nail on site.',
    deliverables: [
      '4K photorealistic 3D renders with true-to-life lighting',
      'Tangible tactile material moodboard (Veneers, Italian stone, Acrylics)',
      '100% itemized BoQ (Bill of Quantities) with zero hidden fees'
    ]
  },
  {
    step: '03',
    title: 'Precision Factory Woodwork & On-Site Execution',
    duration: 'Days 11 – 40',
    icon: ShieldCheck,
    subtitle: 'Factory-finished German hardware assembly with strict 45-day milestone tracking.',
    deliverables: [
      'Factory precision pressing of HDHMR & BWP Marine ply',
      'Weekly progress photo/video reports via WhatsApp',
      'Dual-tier quality inspection by Senior Civil Engineer'
    ]
  },
  {
    step: '04',
    title: 'Deep-Clean Handover & 10-Year Warranty',
    duration: 'Days 41 – 45',
    icon: Key,
    subtitle: 'Move into a spotless, turnkey sanctuary with complete peace of mind.',
    deliverables: [
      'Professional industrial deep cleaning & sanitization',
      'Official 10-Year Structural & Termite Warranty Certificate',
      'Free 6-month & 12-month post-handover maintenance visits'
    ]
  }
];

export const DesignProcess: React.FC<DesignProcessProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 bg-white border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C88A58] block mb-2">
            The Siddhivinayak Guarantee
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Our 4-Step Design & Execution Process
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            From initial sketch to handover in 45 days. We eliminate renovation stress through structured milestones and real-time site transparency.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-6 rounded-xs transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#18191B] text-[#F9F8F6] border-[#18191B] shadow-xl -translate-y-2'
                    : 'bg-[#F9F8F6] text-[#18191B] border-[#EAE7E1] hover:border-[#C88A58]'
                }`}
              >
                <div>
                  {/* Step number & Timeline pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-serif text-3xl font-bold ${isSelected ? 'text-[#C88A58]' : 'text-[#A0A1A4]'}`}>
                      {item.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-white/10 text-[#C88A58]' : 'bg-white text-[#55565A] border border-[#EAE7E1]'
                    }`}>
                      {item.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xs flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-[#C88A58] text-white' : 'bg-white text-[#C88A58] border border-[#EAE7E1]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`font-serif text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-[#18191B]'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${isSelected ? 'text-[#D5CEC5]' : 'text-[#68696B]'}`}>
                    {item.subtitle}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className={`pt-4 border-t ${isSelected ? 'border-white/10' : 'border-[#EAE7E1]'}`}>
                  <p className={`text-[10px] uppercase font-bold tracking-wider mb-2 ${isSelected ? 'text-[#C88A58]' : 'text-[#18191B]'}`}>
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-[11px]">
                    {item.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? 'text-[#C88A58]' : 'text-[#C88A58]'}`} />
                        <span className={isSelected ? 'text-[#D5CEC5]' : 'text-[#55565A]'}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to start step 1 */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs transition-all shadow-md active:scale-95"
          >
            <span>Start Step 1: Book Free Site Measurement in Vadodara</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
