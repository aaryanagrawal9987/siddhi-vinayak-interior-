/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Portfolio } from './components/Portfolio';
import { DesignProcess } from './components/DesignProcess';
import { VastuSection } from './components/VastuSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    source?: string;
    serviceName?: string;
    spaceType?: string;
  }>({});

  const handleOpenConsultation = (serviceName?: string) => {
    setModalPrefill(serviceName ? { serviceName } : {});
    setIsConsultationOpen(true);
  };

  const handleSelectPortfolioProject = (projectName: string) => {
    setModalPrefill({
      serviceName: `Portfolio Inquire: ${projectName}`,
    });
    setIsConsultationOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#18191B] flex flex-col font-sans selection:bg-[#C88A58]/25 selection:text-[#18191B]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToPortfolio={() => scrollToSection('portfolio')}
        />

        {/* 2. Services Grid */}
        <Services onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)} />

        {/* 3. Unique Feature 1: Before & After Slider */}
        <BeforeAfterSlider />

        {/* 5. Filterable Portfolio Gallery & Lightbox */}
        <Portfolio onSelectProject={handleSelectPortfolioProject} />

        {/* 6. Step-by-Step 45-Day Design Process */}
        <DesignProcess onOpenConsultation={() => handleOpenConsultation('45-Day Turnkey Consultation')} />

        {/* 7. Vastu-Compliant Architecture Section */}
        <VastuSection onOpenConsultation={() => handleOpenConsultation('Vastu Shastra Consultation')} />

        {/* 8. Client Testimonials & Google Reviews */}
        <Testimonials />

        {/* 9. Contact, Studio Info & FAQ */}
        <ContactSection />
      </main>

      {/* 10. Dark Slate Editorial Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillData={modalPrefill}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />
    </div>
  );
}

