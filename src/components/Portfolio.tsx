import React, { useState, useMemo } from 'react';
import { Sparkles, MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioProps {
  onSelectProject: (projectName: string) => void;
}

type CategoryFilter = 'All' | 'Living Room' | 'Modular Kitchen' | 'Bedroom' | 'Commercial' | 'Vastu-Designed';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Living Room',
    'Modular Kitchen',
    'Bedroom',
    'Commercial',
    'Vastu-Designed'
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 bg-[#F9F8F6] border-t border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EAE7E1]">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C88A58] block mb-2">
              Our Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18191B]">
              Handcrafted Projects in Vadodara
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68696B] max-w-md mt-4 md:mt-0 font-normal">
            Explore our recently completed residential sanctuaries, luxury modular kitchens, and corporate offices across Gujarat.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xs text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-[#18191B] text-[#F9F8F6] shadow-sm'
                  : 'bg-white text-[#55565A] border border-[#EAE7E1] hover:border-[#C88A58] hover:text-[#18191B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-xs overflow-hidden border border-[#EAE7E1] hover:border-[#C88A58]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom and Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE7E1]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#18191B]/85 backdrop-blur-xs text-[#F9F8F6] text-[10px] uppercase tracking-wider font-bold rounded-xs border border-white/10">
                  {project.category}
                </div>

                {/* Quick Expand Icon button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#18191B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] text-[#C88A58] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#18191B] group-hover:text-[#C88A58] transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-[#68696B] mb-3 pb-3 border-b border-[#EAE7E1]">
                    <span>{project.carpetArea}</span>
                    <span className="text-[#C88A58] font-medium">{project.completionTime}</span>
                  </div>

                  <p className="text-xs text-[#55565A] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="flex items-center justify-between text-xs font-bold text-[#18191B] group-hover:text-[#C88A58]">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C88A58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={onSelectProject}
        />
      )}
    </section>
  );
};
