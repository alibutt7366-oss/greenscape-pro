import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trees, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Lawn Care', 'Garden Design', 'Outdoor Living'];

  // Lock body scroll and listen for Escape key when project modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveModalProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalProject]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Page Header */}
      <section className="bg-[#071a0f] text-white py-16 lg:py-24 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1800&q=80"
            alt="Estate landscaping portfolio background"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-lime-400 text-xs font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <Trees className="w-4 h-4" />
              <span>Project Showcase & Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display tracking-tight text-white mb-6">
              Curated Outdoor Transformations
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Explore our design concepts, material palettes, and architectural craftsmanship across fine turf care, perennial gardens, and custom hardscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Honest Portfolio Disclosure Banner */}
          <div className="mb-10 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 font-semibold block text-sm mb-0.5">
                  Illustrative Design Portfolio
                </strong>
                <span>
                  The items below represent conceptual architectural case studies and design specifications demonstrating our plant selection, grading techniques, and hardscape construction standards.
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="shrink-0 text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1 py-1"
            >
              <span>Discuss Your Property</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl" role="tablist" aria-label="Project Categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All' 
                  ? projectsData.length 
                  : projectsData.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all min-h-[40px] flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[11px] ${isActive ? 'text-emerald-800 font-bold' : 'text-stone-400'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-stone-500 font-medium">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer focus-visible:outline-none"
                onClick={() => setActiveModalProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-[#071a0f]/90 backdrop-blur-xs text-lime-300 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-medium px-2 py-0.5 rounded shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to inspect details
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-stone-500 mb-1">{project.locationType}</div>
                    <h2 className="text-xl font-bold text-stone-900 font-serif-display mb-2 group-hover:text-emerald-800 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-800 group-hover:underline flex items-center gap-1">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-stone-400">Concept Study</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Project Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
              <ImageWithFallback
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close modal dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs text-lime-400 text-xs font-semibold px-3 py-1 rounded-md">
                {activeModalProject.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">
                  {activeModalProject.locationType}
                </span>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display">
                  {activeModalProject.title}
                </h3>
              </div>

              <div className="text-sm text-stone-600 leading-relaxed">
                {activeModalProject.fullStory}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                  Key Craftsmanship Elements
                </h4>
                <div className="space-y-2">
                  {activeModalProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Materials & Botanical Species
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.materials.map((mat, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-md border border-stone-200"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500">
                <span className="font-semibold text-stone-700">Portfolio Context: </span>
                Curated illustrative project showcase representing GreenScape Pro’s architectural execution guidelines.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                <Link
                  to={`/contact?service=${encodeURIComponent(activeModalProject.category)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-xs min-h-[44px]"
                >
                  <span>Request Similar Project Estimate</span>
                  <ArrowRight className="w-4 h-4 text-lime-400" />
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 cursor-pointer min-h-[44px]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
