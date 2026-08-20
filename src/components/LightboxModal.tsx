import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Clock, Maximize2, Sparkles, CheckCircle } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const allImages = [project.imageUrl, ...(project.additionalImages || [])];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#18191B]/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-[#F9F8F6] rounded-xs shadow-2xl overflow-hidden border border-[#EAE7E1] my-auto">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#EAE7E1] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-[#18191B] text-white text-[10px] uppercase font-bold tracking-widest rounded-xs">
                {project.category}
              </span>
              <span className="text-xs text-[#C88A58] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18191B]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4A4B4D] hover:text-[#18191B] hover:bg-[#EAE7E1] rounded-xs transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left: Image Carousel Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[#18191B] relative flex items-center justify-center min-h-[320px] sm:min-h-[440px]">
            <img
              src={allImages[activeImageIdx]}
              alt={project.title}
              className="max-h-[460px] w-full object-cover sm:object-contain"
              referrerPolicy="no-referrer"
            />

            {/* Navigation arrows if multiple images */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Thumbnails row */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/50 p-1.5 rounded-full">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeImageIdx === idx ? 'bg-[#C88A58] scale-125' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right: Project Details & Specs (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F9F8F6]">
            <div className="space-y-6">
              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pb-4 border-b border-[#EAE7E1] text-xs">
                <div>
                  <span className="text-[#88898C] block">Carpet Area:</span>
                  <span className="font-semibold text-[#18191B]">{project.carpetArea}</span>
                </div>
                <div>
                  <span className="text-[#88898C] block">Design Style:</span>
                  <span className="font-semibold text-[#18191B]">{project.style}</span>
                </div>
                <div>
                  <span className="text-[#88898C] block">Execution Time:</span>
                  <span className="font-semibold text-[#18191B]">{project.completionTime}</span>
                </div>
                <div>
                  <span className="text-[#88898C] block">Vadodara Area:</span>
                  <span className="font-semibold text-[#C88A58]">{project.location}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191B] mb-2">
                  Architectural Narrative
                </h4>
                <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18191B] mb-2">
                  Signature Elements
                </h4>
                <ul className="space-y-1.5 text-xs text-[#4A4B4D]">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C88A58] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquire Action CTA */}
            <div className="pt-6 mt-6 border-t border-[#EAE7E1]">
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full py-3.5 bg-[#18191B] hover:bg-[#C88A58] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#C88A58]" />
                <span>Inquire About Similar Design for Your Home</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
