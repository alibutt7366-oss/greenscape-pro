import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trees, 
  Sprout, 
  Ruler, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  FileCheck2,
  PhoneCall
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function AboutPage() {
  const companyValues = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-800" />,
      title: 'Horticultural Stewardship',
      description: 'We prioritize long-term root health, indigenous and climate-appropriate plants, and soil microbiome vitality over temporary cosmetic fixes.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-emerald-800" />,
      title: 'Architectural Cohesion',
      description: 'Every walkway, stone wall, and hedge line is designed to respect and enhance your home’s architectural scale, sightlines, and natural topography.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-800" />,
      title: 'Transparent Partnership',
      description: 'We believe in clear scopes of work, punctual crew schedules, and upfront project communication without hidden surcharges or vague proposals.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-800" />,
      title: 'Water & Resource Conservation',
      description: 'Implementing efficient micro-drip irrigation, natural bark mulches, and drought-resilient plantings that minimize unnecessary water consumption.'
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Consultation & Site Assessment',
      description: 'We evaluate sun angles, soil compaction, natural grading, water drainage paths, and your functional goals for the outdoor property.'
    },
    {
      step: '02',
      title: 'Custom Architectural Blueprint',
      description: 'Our team crafts a comprehensive plan with curated plant palettes, durable stone materials, lighting placements, and itemized scopes.'
    },
    {
      step: '03',
      title: 'Craftsmanship Execution',
      description: 'Our dedicated crew executes site prep, soil amendment, hardscape masonry, and planting with commercial-grade precision and daily cleanup.'
    },
    {
      step: '04',
      title: 'Ongoing Stewardship & Care',
      description: 'We provide structured seasonal maintenance programs to protect your investment as trees mature and perennial gardens bloom year after year.'
    }
  ];

  const teamRoles = [
    {
      name: 'Elena Rostova',
      role: 'Principal Landscape Architect',
      specialty: 'Site topology, custom outdoor living environments, and architectural stone integration.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Turf & Horticultural Care',
      specialty: 'Turf grass physiology, organic soil conditioning, and integrated seasonal pest defense.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'David Keller',
      role: 'Senior Hardscape & Construction Lead',
      specialty: 'Precision paver alignment, structural retaining walls, grading, and outdoor masonry.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Page Header */}
      <section className="bg-[#071a0f] text-white py-16 lg:py-24 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1800&q=80"
            alt="Garden architecture backdrop"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-lime-400 text-xs font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <Trees className="w-4 h-4" />
              <span>About GreenScape Pro</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display tracking-tight text-white mb-6">
              Cultivating Enduring Landscapes with Purpose & Craftsmanship
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              We bridge the gap between creative landscape architecture and dependable grounds maintenance. Our mission is to create outdoor sanctuaries that increase home value, support ecological health, and bring everyday joy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                Our Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-6">
                A Disciplined Approach to American Outdoor Living
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-base">
                <p>
                  GreenScape Pro was conceptualized with a singular commitment: to deliver landscaping services that honor the unique microclimates of American properties while maintaining meticulous construction standards.
                </p>
                <p>
                  Too often, landscaping projects suffer from quick fixes—plants placed in inappropriate soil, turf scalped too low, or paver patios constructed without proper aggregate drainage bases that settle unevenly after the first winter freeze.
                </p>
                <p>
                  We do things right from the ground up. By starting with deep soil testing, proper grading, and nursery-hardened plants, we build outdoor environments designed to flourish for decades.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 gap-4 text-sm font-medium text-stone-800">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Standardized Crew Safety</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Transparent Proposals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Eco-Conscious Practices</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Dedicated Project Leads</span>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional landscaping team craftsmanship and stone patio integration"
                  className="w-full h-[420px] object-cover"
                  containerClassName="w-full h-[420px]"
                />
              </div>
              <div className="mt-3 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                <span>Field Craftsmanship: Combining structural masonry with layered perennial textures for balanced outdoor living.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-stone-50/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              The Standards That Drive Our Work
            </h2>
            <p className="text-stone-600 text-base">
              Every property we tend and every garden we install is grounded in our four core organizational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif-display mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 4-Stage Work Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Disciplined Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-stone-600 text-base">
              From our first walk-through to long-term property maintenance, our structured process ensures clear expectations and spotless outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col"
              >
                <div className="text-3xl font-black text-emerald-900/25 font-serif-display mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif-display mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Discipline Roles */}
      <section className="py-20 bg-stone-50/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Specialized Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              Led by Dedicated Landscape Specialists
            </h2>
            <p className="text-stone-600 text-base">
              Our multidisciplinary leadership blends botanical science, civil grading, and architectural craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamRoles.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-72 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 font-serif-display">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Credential Disclosure */}
          <div className="mt-12 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-500 flex items-start gap-3">
            <FileCheck2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800">Template Disclosure:</strong> Business entity registration numbers, state contractor license codes, and regional certifications are demonstration placeholders to be updated with your local jurisdiction credentials before production launch.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#071a0f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-display mb-4">
            Partner with GreenScape Pro on Your Next Project
          </h2>
          <p className="text-stone-300 text-base max-w-2xl mx-auto mb-8">
            Whether you need a master design blueprint, a custom paver patio, or dependable seasonal lawn care, our team is ready to evaluate your grounds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-[#071a0f] px-8 py-4 rounded-xl font-bold transition-colors shadow-md min-h-[48px]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-stone-700 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold transition-colors min-h-[48px]"
            >
              <span>View Service Offerings</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
