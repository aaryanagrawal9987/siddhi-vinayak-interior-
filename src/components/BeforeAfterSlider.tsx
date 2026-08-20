import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, Sliders, Eye, ArrowLeftRight, Check, MapPin } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/mockData';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'split'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="before-after" className="py-20 bg-[#F9F8F6] border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE7E1] text-[#18191B] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>Real Site Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B] mb-4">
            Before & After Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#68696B]">
            {BEFORE_AFTER_DATA.subtitle}
          </p>
        </div>

        {/* Interactive Controls & Location Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#55565A] font-medium bg-white px-3 py-1.5 rounded-xs border border-[#EAE7E1]">
            <MapPin className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>{BEFORE_AFTER_DATA.location}</span>
            <span className="text-[#A0A1A4]">|</span>
            <span className="text-[#C88A58] font-semibold">40-Day Turnaround</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
                viewMode === 'slider'
                  ? 'bg-[#18191B] text-[#F9F8F6]'
                  : 'bg-white text-[#55565A] border border-[#EAE7E1] hover:bg-[#EAE7E1]'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Interactive Slider</span>
            </button>

            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
                viewMode === 'split'
                  ? 'bg-[#18191B] text-[#F9F8F6]'
                  : 'bg-white text-[#55565A] border border-[#EAE7E1] hover:bg-[#EAE7E1]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Side-by-Side View</span>
            </button>
          </div>
        </div>

        {/* Main Display Container */}
        {viewMode === 'slider' ? (
          <div
            ref={containerRef}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] rounded-xs overflow-hidden select-none cursor-ew-resize border-2 border-white shadow-2xl bg-[#18191B]"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Full background) */}
            <img
              src={BEFORE_AFTER_DATA.afterImage}
              alt="Finished luxury living room in Vadodara by Siddhivinayak Interior"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* After Label */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#18191B]/80 backdrop-blur-md text-white text-xs font-bold rounded-xs border border-white/20 tracking-wider">
              AFTER (COMPLETED LUXURY)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={BEFORE_AFTER_DATA.beforeImage}
                alt="Bare shell structural site before interior work"
                className="absolute top-0 left-0 h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#18191B]/20" />
            </div>

            {/* Before Label */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-xs border border-white/20 tracking-wider">
              BEFORE (RAW STRUCTURAL SITE)
            </div>

            {/* Slider Dividing Bar & Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#18191B] border-2 border-white text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-[#C88A58]" />
              </div>
            </div>

            {/* Helper Prompt at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 bg-[#18191B]/75 backdrop-blur-md text-white text-[11px] font-medium rounded-full pointer-events-none">
              ← Drag slider horizontally to compare →
            </div>
          </div>
        ) : (
          /* Side by Side Split View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[360px] sm:h-[440px] rounded-xs overflow-hidden shadow-xl border border-[#EAE7E1]">
              <img
                src={BEFORE_AFTER_DATA.beforeImage}
                alt="Bare shell site before interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/85 text-white text-xs font-bold rounded-xs">
                BEFORE: Raw Brick & Concrete Shell
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/75 backdrop-blur-xs text-white text-xs rounded-xs">
                Site handover condition with rough plaster and basic conduit outlets.
              </div>
            </div>

            <div className="relative h-[360px] sm:h-[440px] rounded-xs overflow-hidden shadow-xl border-2 border-[#C88A58]/50">
              <img
                src={BEFORE_AFTER_DATA.afterImage}
                alt="Completed luxury living lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#C88A58] text-white text-xs font-bold rounded-xs">
                AFTER: Turnkey Handover
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#18191B]/85 backdrop-blur-xs text-white text-xs rounded-xs">
                Italian Botticino marble, custom fluted oak woodwork, and magnetic warm lighting.
              </div>
            </div>
          </div>
        )}

        {/* Transformation Specifications & Execution Notes */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BEFORE_AFTER_DATA.details.map((item, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xs border border-[#EAE7E1] shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C88A58] mb-1">
                {item.label}
              </p>
              <p className="text-xs text-[#55565A] leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
