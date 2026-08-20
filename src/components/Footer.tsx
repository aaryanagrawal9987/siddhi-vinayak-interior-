import React from 'react';
import { ArrowUpRight, Compass, Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { STUDIO_INFO, VADODARA_LOCALITIES } from '../data/mockData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#18191B] text-[#F9F8F6] pt-16 pb-12 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#C88A58] text-white flex items-center justify-center font-serif text-xl font-bold">
                S
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide text-white">
                  Siddhivinayak Interior
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#C88A58]">
                  Vadodara Studio • Est. 2014
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A0A1A4] leading-relaxed max-w-sm">
              Premier turnkey interior design & Vastu architectural firm delivering timeless residential bungalows, penthouses, modular kitchens, and high-performance commercial workspaces across Gujarat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs bg-white/5 hover:bg-[#C88A58] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs bg-white/5 hover:bg-[#C88A58] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xs bg-white/5 hover:bg-[#C88A58] text-white flex items-center justify-center transition-colors"
                aria-label="Pinterest"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C88A58]">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs text-[#D5CEC5]">
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Design Services</a></li>
              <li><a href="#before-after" className="hover:text-[#C88A58] transition-colors">Before & After</a></li>
              <li><a href="#portfolio" className="hover:text-[#C88A58] transition-colors">Vadodara Projects</a></li>
              <li><a href="#process" className="hover:text-[#C88A58] transition-colors">45-Day Process</a></li>
              <li><a href="#vastu" className="hover:text-[#C88A58] transition-colors">Vastu Guidelines</a></li>
              <li><a href="#testimonials" className="hover:text-[#C88A58] transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Service Specializations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C88A58]">
              Specializations
            </p>
            <ul className="space-y-2 text-xs text-[#D5CEC5]">
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Turnkey 3BHK & 4BHK Interiors</a></li>
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Luxury Modular Kitchens (Hafele)</a></li>
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Corporate Office Workspaces</a></li>
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Bespoke Italian Marble & Fluted Paneling</a></li>
              <li><a href="#services" className="hover:text-[#C88A58] transition-colors">Old Property Complete Civil Makeover</a></li>
              <li><a href="#vastu" className="hover:text-[#C88A58] transition-colors">North-East Mandir & Vastu Harmony</a></li>
            </ul>
          </div>

          {/* Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C88A58]">
              Vadodara Office
            </p>
            <div className="space-y-2.5 text-xs text-[#D5CEC5]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C88A58] shrink-0 mt-0.5" />
                <span>304, Signature Heights, Race Course Circle, Alkapuri, Vadodara - 390007</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C88A58] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#C88A58]">
                  {STUDIO_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C88A58] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#C88A58]">
                  {STUDIO_INFO.email}
                </a>
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 bg-[#C88A58] hover:bg-[#B77948] text-white text-xs font-semibold rounded-xs transition-colors"
                >
                  Book Studio Visit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7B7E] gap-4">
          <p>
            © {new Date().getFullYear()} Siddhivinayak Interior Vadodara. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#vastu" className="hover:text-white transition-colors">Vastu Guidelines</a>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
