import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Budget Calculator', href: '#budget-calculator' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Design Process', href: '#process' },
    { name: 'Vastu Design', href: '#vastu' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F8F6]/92 backdrop-blur-md py-3 shadow-xs border-b border-[#EAE7E1]'
            : 'bg-[#F9F8F6]/80 backdrop-blur-xs py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-[#18191B] text-[#F9F8F6] flex items-center justify-center font-serif text-xl font-bold tracking-widest group-hover:bg-[#C88A58] transition-colors shadow-xs">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#18191B] leading-tight">
                  Siddhivinayak
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C88A58]">
                    Interior
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#C88A58]/60"></span>
                  <span className="text-[10px] uppercase tracking-wider text-[#68696B]">
                    Vadodara
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-[#4A4B4D] hover:text-[#C88A58] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C88A58] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#18191B] hover:text-[#C88A58] px-3 py-2 transition-colors"
                title="Call Studio"
              >
                <Phone className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>{STUDIO_INFO.phone}</span>
              </a>

              <button
                id="navbar-cta-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C88A58] hover:bg-[#B77948] text-white text-xs sm:text-sm font-semibold rounded-xs transition-all shadow-xs hover:shadow-md active:scale-95"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="px-3 py-1.5 bg-[#C88A58] text-white text-xs font-semibold rounded-xs"
              >
                Consult
              </button>
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#18191B] hover:text-[#C88A58] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#18191B]/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#F9F8F6] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE7E1]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm bg-[#18191B] text-[#F9F8F6] flex items-center justify-center font-serif font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#18191B]">Siddhivinayak</h3>
                    <p className="text-[10px] tracking-widest text-[#C88A58] uppercase">Vadodara</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4A4B4D] hover:text-[#18191B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#18191B] hover:text-[#C88A58] py-2 border-b border-[#EAE7E1]/50 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A0A1A4]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE7E1] flex flex-col gap-4">
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-sm font-semibold text-[#18191B]"
              >
                <Phone className="w-4 h-4 text-[#C88A58]" />
                <span>{STUDIO_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#C88A58] hover:bg-[#B77948] text-white text-sm font-semibold rounded-xs shadow-xs text-center flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-[#7A7B7E] flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#C88A58]" />
                <span>Studio at Alkapuri, Vadodara</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
