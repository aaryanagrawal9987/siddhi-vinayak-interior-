import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Info, Sparkles, Building, Layers, SlidersHorizontal } from 'lucide-react';
import { BudgetEstimateState } from '../types';

interface BudgetEstimatorProps {
  onOpenQuoteModal: (details: {
    spaceType: string;
    style: string;
    area: number;
    estimatedMin: number;
    estimatedMax: number;
    itemized: {
      woodwork: number;
      kitchen: number;
      ceilingLighting: number;
      paintingCivil: number;
    };
  }) => void;
}

const SPACE_DEFAULTS = {
  '1BHK': 650,
  '2BHK': 1150,
  '3BHK': 1650,
  '4BHK / Villa': 2800,
  'Commercial / Office': 1500,
};

const STYLE_RATES = {
  'Essential': {
    minRate: 1200,
    maxRate: 1500,
    description: 'Commercial ply, branded laminate finish, standard soft-close hardware, modular wardrobes, basic false ceiling.',
    highlight: 'Budget-Friendly & Durable'
  },
  'Premium Elegance': {
    minRate: 1750,
    maxRate: 2250,
    description: 'HDHMR / Marine ply, Acrylic & Veneer accents, Hafele soft-close systems, profile magnetic lighting, custom beds & consoles.',
    highlight: 'Most Popular for Vadodara Homes'
  },
  'Ultra-Luxury': {
    minRate: 2600,
    maxRate: 3500,
    description: 'Full BWP Marine wood, PU high-gloss polish, Italian stone inlays, fluted louvers, smart scene automation & quartz kitchen.',
    highlight: 'Architectural Magazine Finish'
  }
};

export const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({ onOpenQuoteModal }) => {
  const [estimateState, setEstimateState] = useState<BudgetEstimateState>({
    spaceType: '3BHK',
    style: 'Premium Elegance',
    areaSqFt: 1650,
    includeKitchen: true,
    includeAutomation: false,
    includeFalseCeiling: true,
    includeVastu: true,
  });

  const handleSpaceTypeChange = (space: BudgetEstimateState['spaceType']) => {
    setEstimateState(prev => ({
      ...prev,
      spaceType: space,
      areaSqFt: SPACE_DEFAULTS[space] || prev.areaSqFt
    }));
  };

  // Calculation Logic
  const calculation = useMemo(() => {
    const rateInfo = STYLE_RATES[estimateState.style];
    let baseMin = estimateState.areaSqFt * rateInfo.minRate;
    let baseMax = estimateState.areaSqFt * rateInfo.maxRate;

    // Add-on adjustments
    if (estimateState.includeAutomation) {
      baseMin += 65000;
      baseMax += 120000;
    }
    if (!estimateState.includeKitchen) {
      // subtract kitchen portion
      baseMin -= (estimateState.areaSqFt * 180);
      baseMax -= (estimateState.areaSqFt * 250);
    }
    if (!estimateState.includeFalseCeiling) {
      baseMin -= (estimateState.areaSqFt * 120);
      baseMax -= (estimateState.areaSqFt * 160);
    }

    // Itemized rough percentages
    const avgTotal = (baseMin + baseMax) / 2;
    const woodwork = Math.round(avgTotal * 0.52);
    const kitchen = estimateState.includeKitchen ? Math.round(avgTotal * 0.20) : 0;
    const ceilingLighting = estimateState.includeFalseCeiling ? Math.round(avgTotal * 0.16) : Math.round(avgTotal * 0.06);
    const paintingCivil = Math.round(avgTotal * 0.12);

    return {
      min: Math.max(100000, Math.round(baseMin)),
      max: Math.max(150000, Math.round(baseMax)),
      avgSqFtRate: Math.round((baseMin + baseMax) / (2 * estimateState.areaSqFt)),
      itemized: {
        woodwork,
        kitchen,
        ceilingLighting,
        paintingCivil
      }
    };
  }, [estimateState]);

  const formatLakhs = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleGetQuote = () => {
    onOpenQuoteModal({
      spaceType: estimateState.spaceType,
      style: estimateState.style,
      area: estimateState.areaSqFt,
      estimatedMin: calculation.min,
      estimatedMax: calculation.max,
      itemized: calculation.itemized
    });
  };

  return (
    <section id="budget-calculator" className="py-20 bg-white border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE7E1] text-[#18191B] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>Instant Estimator Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Interactive Interior Cost Estimator
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            Get a transparent, itemized preliminary estimate tailored specifically to Vadodara market material rates and turnkey execution standards.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-[#F9F8F6] p-6 sm:p-8 rounded-xs border border-[#EAE7E1] space-y-8 shadow-xs">
            
            {/* Step 1: Space Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#18191B] flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-[#C88A58]" />
                <span>1. Select Property / Space Type</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(['1BHK', '2BHK', '3BHK', '4BHK / Villa', 'Commercial / Office'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleSpaceTypeChange(type)}
                    className={`py-3 px-3 rounded-xs text-xs font-semibold transition-all text-center border ${
                      estimateState.spaceType === type
                        ? 'bg-[#18191B] text-[#F9F8F6] border-[#18191B] shadow-xs'
                        : 'bg-white text-[#4A4B4D] border-[#EAE7E1] hover:border-[#C88A58]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Interior Style Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#18191B] flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#C88A58]" />
                <span>2. Select Interior Finish & Material Tier</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['Essential', 'Premium Elegance', 'Ultra-Luxury'] as const).map((styleName) => {
                  const styleInfo = STYLE_RATES[styleName];
                  const isSelected = estimateState.style === styleName;
                  return (
                    <button
                      key={styleName}
                      type="button"
                      onClick={() => setEstimateState(prev => ({ ...prev, style: styleName }))}
                      className={`p-4 rounded-xs text-left transition-all border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#18191B] text-[#F9F8F6] border-[#18191B] shadow-md'
                          : 'bg-white text-[#18191B] border-[#EAE7E1] hover:border-[#C88A58]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold">{styleName}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C88A58]" />}
                        </div>
                        <p className={`text-[10px] font-semibold mb-2 ${isSelected ? 'text-[#C88A58]' : 'text-[#88898C]'}`}>
                          {styleInfo.highlight}
                        </p>
                        <p className={`text-[11px] leading-snug line-clamp-3 ${isSelected ? 'text-[#D5CEC5]' : 'text-[#68696B]'}`}>
                          {styleInfo.description}
                        </p>
                      </div>
                      <p className={`text-xs font-bold mt-3 pt-2 border-t ${isSelected ? 'border-white/20 text-[#C88A58]' : 'border-[#EAE7E1] text-[#18191B]'}`}>
                        ₹{styleInfo.minRate} - ₹{styleInfo.maxRate}/sq.ft
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Carpet Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#18191B] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#C88A58]" />
                  <span>3. Carpet Area (Square Feet)</span>
                </label>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-xs border border-[#EAE7E1]">
                  <input
                    type="number"
                    min="400"
                    max="6000"
                    step="50"
                    value={estimateState.areaSqFt}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val > 0) setEstimateState(prev => ({ ...prev, areaSqFt: val }));
                    }}
                    className="w-16 text-right text-xs font-bold text-[#18191B] outline-none"
                  />
                  <span className="text-xs text-[#88898C] font-medium">sq.ft</span>
                </div>
              </div>

              <input
                type="range"
                min="400"
                max="5000"
                step="50"
                value={estimateState.areaSqFt}
                onChange={(e) => setEstimateState(prev => ({ ...prev, areaSqFt: Number(e.target.value) }))}
                className="w-full h-2 bg-[#EAE7E1] rounded-lg appearance-none cursor-pointer accent-[#C88A58]"
              />

              <div className="flex justify-between text-[11px] text-[#88898C] font-medium mt-1.5">
                <span>500 sq.ft</span>
                <span>1,500 sq.ft (Typical 3BHK)</span>
                <span>3,000 sq.ft</span>
                <span>5,000 sq.ft</span>
              </div>
            </div>

            {/* Step 4: Included Modules & Scope Toggles */}
            <div className="pt-2 border-t border-[#EAE7E1]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#18191B] mb-3">
                4. Scope Customizations & Add-ons
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2.5 p-3 bg-white rounded-xs border border-[#EAE7E1] cursor-pointer hover:border-[#C88A58]">
                  <input
                    type="checkbox"
                    checked={estimateState.includeKitchen}
                    onChange={(e) => setEstimateState(prev => ({ ...prev, includeKitchen: e.target.checked }))}
                    className="rounded-xs text-[#C88A58] focus:ring-[#C88A58] h-4 w-4"
                  />
                  <span className="text-xs font-medium text-[#18191B]">Complete Modular Kitchen with Hardware</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-white rounded-xs border border-[#EAE7E1] cursor-pointer hover:border-[#C88A58]">
                  <input
                    type="checkbox"
                    checked={estimateState.includeFalseCeiling}
                    onChange={(e) => setEstimateState(prev => ({ ...prev, includeFalseCeiling: e.target.checked }))}
                    className="rounded-xs text-[#C88A58] focus:ring-[#C88A58] h-4 w-4"
                  />
                  <span className="text-xs font-medium text-[#18191B]">False Ceiling & Architectural Lighting</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-white rounded-xs border border-[#EAE7E1] cursor-pointer hover:border-[#C88A58]">
                  <input
                    type="checkbox"
                    checked={estimateState.includeAutomation}
                    onChange={(e) => setEstimateState(prev => ({ ...prev, includeAutomation: e.target.checked }))}
                    className="rounded-xs text-[#C88A58] focus:ring-[#C88A58] h-4 w-4"
                  />
                  <span className="text-xs font-medium text-[#18191B]">Smart Lighting & Scene Automation (+₹80k)</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-white rounded-xs border border-[#EAE7E1] cursor-pointer hover:border-[#C88A58]">
                  <input
                    type="checkbox"
                    checked={estimateState.includeVastu}
                    onChange={(e) => setEstimateState(prev => ({ ...prev, includeVastu: e.target.checked }))}
                    className="rounded-xs text-[#C88A58] focus:ring-[#C88A58] h-4 w-4"
                  />
                  <span className="text-xs font-medium text-[#18191B]">Vastu Shastra Alignment & Energy Map (Free)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#18191B] text-[#F9F8F6] p-6 sm:p-8 rounded-xs shadow-xl border border-[#333] sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C88A58]">
                  Estimated Budget Range
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {estimateState.spaceType} ({estimateState.areaSqFt} sq.ft)
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-xs bg-white/10 text-white text-xs font-medium">
                {estimateState.style}
              </span>
            </div>

            {/* Big Estimate Numbers */}
            <div className="py-6 border-b border-white/10 text-center sm:text-left">
              <p className="text-xs text-[#A0A1A4] mb-1">Estimated Turnkey Project Cost:</p>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9F8F6] tracking-tight">
                {formatLakhs(calculation.min)} <span className="text-2xl sm:text-3xl text-[#C88A58] font-light">–</span> {formatLakhs(calculation.max)}
              </div>
              <p className="text-xs text-[#C88A58] mt-2 font-medium">
                ~ ₹{calculation.avgSqFtRate} per sq.ft (Inclusive of Materials + Labor + 45-Day Handover)
              </p>
            </div>

            {/* Itemized Allocation Breakdown */}
            <div className="py-5 space-y-3 text-xs border-b border-white/10">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2">
                Estimated Itemized Allocation:
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#A0A1A4]">Woodwork & Custom Furniture (52%)</span>
                <span className="font-semibold text-white">{formatLakhs(calculation.itemized.woodwork)}</span>
              </div>

              {estimateState.includeKitchen && (
                <div className="flex items-center justify-between">
                  <span className="text-[#A0A1A4]">Modular Kitchen & Hardware (20%)</span>
                  <span className="font-semibold text-white">{formatLakhs(calculation.itemized.kitchen)}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-[#A0A1A4]">False Ceiling & Magnetic Lighting (16%)</span>
                <span className="font-semibold text-white">{formatLakhs(calculation.itemized.ceilingLighting)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#A0A1A4]">Civil Modifications & Painting (12%)</span>
                <span className="font-semibold text-white">{formatLakhs(calculation.itemized.paintingCivil)}</span>
              </div>
            </div>

            {/* Guaranteed Deliverables */}
            <div className="py-4 text-[11px] text-[#A0A1A4] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Zero hidden escalation fees in final agreement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Complimentary 3D VR Walkthrough with booking</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              id="get-itemized-quote-btn"
              onClick={handleGetQuote}
              className="w-full mt-2 py-4 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs transition-all shadow-md flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <span>Get Detailed Itemized Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-center text-[#7A7B7E] mt-3">
              *Actual price may vary depending on on-site civil conditions and custom Italian stone selections.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
