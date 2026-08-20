import React from 'react';
import { Home, ChefHat, Building2, Compass, Sofa, Hammer, ArrowUpRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return <Home className="w-5 h-5" />;
    case 'ChefHat':
      return <ChefHat className="w-5 h-5" />;
    case 'Building2':
      return <Building2 className="w-5 h-5" />;
    case 'Compass':
      return <Compass className="w-5 h-5" />;
    case 'Sofa':
      return <Sofa className="w-5 h-5" />;
    case 'Hammer':
      return <Hammer className="w-5 h-5" />;
    default:
      return <Home className="w-5 h-5" />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-white border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE7E1]">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C88A58] block mb-2">
              Our Expertise & Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B]">
              Comprehensive Interior Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68696B] max-w-md mt-4 md:mt-0 font-normal">
            From single-room luxury makeovers to grand multi-storey villas in Vadodara, every project is crafted with factory precision, quality materials, and transparent pricing.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-[#F9F8F6] rounded-xs border border-[#EAE7E1] hover:border-[#C88A58]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden bg-[#EAE7E1]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191B]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xs bg-[#18191B] text-[#C88A58] flex items-center justify-center shadow-md">
                  {getIcon(service.iconName)}
                </div>

                {/* Starting Price Tag */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#18191B] text-xs font-semibold rounded-xs border border-[#EAE7E1]">
                  {service.startingPrice}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18191B] group-hover:text-[#C88A58] transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#C88A58] mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#55565A] font-normal leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Features list */}
                  <ul className="space-y-2 mb-6 text-xs text-[#4A4B4D]">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C88A58] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#EAE7E1] flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-bold text-[#18191B] group-hover:text-[#C88A58] transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Estimate & Consultation</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C88A58]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Turnkey Guarantee */}
        <div className="mt-16 p-8 rounded-xs bg-[#18191B] text-[#F9F8F6] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#C88A58] font-bold block mb-1">
              Vadodara Turnkey Assurance
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
              Have a floor plan or blueprint ready for your property?
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A1A4] mt-2 font-normal">
              Send us your architectural CAD or PDF drawing to receive a complimentary 2D zoning layout and preliminary itemized cost estimate within 24 hours.
            </p>
          </div>

          <button
            onClick={() => onSelectService('Turnkey Blueprint Review')}
            className="px-6 py-3.5 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs shrink-0 transition-colors shadow-xs"
          >
            Upload Plan for Free Estimate
          </button>
        </div>

      </div>
    </section>
  );
};
