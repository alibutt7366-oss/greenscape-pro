import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Trees, 
  Ruler, 
  Calendar, 
  Sprout, 
  PhoneCall,
  Compass,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.slice(0, 3);

  const valuePillars = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-800" />,
      title: 'Horticultural Expertise',
      description: 'Our team understands regional soil conditions, turf grass biology, microclimate sun exposure, and native flora to create resilient, long-lasting landscapes.'
    },
    {
      icon: <Ruler className="w-6 h-6 text-emerald-800" />,
      title: 'Precision Craftsmanship',
      description: 'From laser-leveled paver foundations to surgical mower striping and crisp edge trenches, every line is executed with professional discipline.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-800" />,
      title: 'Dependable Scheduling',
      description: 'Clear communications, dedicated crew arrival windows, and transparent seasonal maintenance programs with zero guesswork.'
    },
    {
      icon: <Trees className="w-6 h-6 text-emerald-800" />,
      title: 'Safety & Professional Standards',
      description: 'Structured field protocols, commercial equipment safety routines, and meticulous property care on every residential or commercial project.'
    }
  ];

  // Authentic service standards and illustrative sample client perspectives
  const clientServicePriorities = [
    {
      headline: 'Property Preservation & Clear Communication',
      quote: 'What impressed me most was their respect for our property. The crew always left the driveways blown clean, gates latched, and kept our lawn looking immaculate all through the summer heat.',
      type: 'Sample Residential Client Perspective',
      service: 'Weekly Lawn Care & Seasonal Mulching'
    },
    {
      headline: 'Seamless Landscape Redesign',
      quote: 'The team worked with our existing slope rather than against it. They designed a retaining wall and natural stone steps that look like they were always part of the estate.',
      type: 'Sample Property Owner Perspective',
      service: 'Hardscaping & Perennial Garden Installation'
    },
    {
      headline: 'Punctual & Thorough Commercial Grounds Care',
      quote: 'For our office campus, curb appeal is our first impression. GreenScape Pro’s proactive seasonal planning keeps our entrances vibrant without disruptive equipment noise during business hours.',
      type: 'Sample Commercial Facility Perspective',
      service: 'Commercial Turf & Shrub Stewardship'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Hero Section */}
      <section className="relative bg-[#071a0f] text-white overflow-hidden border-b border-stone-800">
        {/* Subtle background image overlay with high-contrast gradient */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=85"
            alt="Pristine landscaped estate lawn and garden grounds"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
            containerClassName="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a0f] via-[#071a0f]/90 to-[#071a0f]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Meta Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-700/60 text-lime-400 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-xs">
              <Trees className="w-3.5 h-3.5" />
              <span>Full-Service American Landscaping & Grounds Care</span>
            </div>

            {/* Exact Required Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-display leading-tight sm:leading-none mb-6">
              Transform Your Outdoor Space.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-stone-200 leading-relaxed font-normal mb-8 max-w-2xl">
              Elevate your property with professional landscaping, precision lawn care, architectural hardscapes, and curated botanical gardens. Designed with horticultural mastery and built to endure through every season.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-lime-500 hover:bg-lime-400 text-[#071a0f] px-7 py-4 rounded-xl text-base font-bold shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 min-h-[48px]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#071a0f]" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-stone-400/40 hover:border-white hover:bg-white/10 text-white px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 min-h-[48px]"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Key Quality Standards */}
            <div className="mt-12 pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Commercial-Grade Precision Mowing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Native Flora & Turf Science</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Tailored Seasonal Packages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick-Jump Strip */}
      <section className="bg-white border-b border-stone-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <span className="text-stone-500 font-bold uppercase tracking-wider shrink-0 text-[11px]">
              Direct Services:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {servicesData.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services#${svc.id}`}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 font-medium transition-colors whitespace-nowrap"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-stone-50/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <span>Core Capabilities · Residential & Commercial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display">
                Comprehensive Grounds & Landscape Solutions
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 group py-1"
            >
              <span>View All 6 Specialized Services</span>
              <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white tracking-wide">
                    {service.seasonality}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif-display group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/services#${service.id}`}
                      className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group-hover:underline"
                    >
                      <span>Explore details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-700" />
                    </Link>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 px-3.5 py-2 rounded-lg transition-colors"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              The GreenScape Pro Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              Why Discerning Property Owners Choose Us
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              We replace unreliable contractors and patchy lawn treatments with a deliberate, science-backed approach to outdoor living and landscape stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-emerald-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif-display">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-stone-50/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                Craftsmanship In Action · Illustrative Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display">
                Featured Landscape Transformations
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 group py-1"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-stone-500 mb-1">{project.locationType}</div>
                    <h3 className="text-lg font-bold text-stone-900 font-serif-display mb-2 group-hover:text-emerald-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1.5 pt-2"
                  >
                    <span>View Specifications & Materials</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Disclosure Banner */}
          <div className="mt-10 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-500 flex items-center gap-3">
            <Compass className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>
              <strong>Portfolio Note:</strong> Visuals represent conceptual design studies and illustrative case studies demonstrating materials, plant palettes, and construction craftsmanship.
            </span>
          </div>
        </div>
      </section>

      {/* Client Priorities & Testimonial Representations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Client Focus & Priorities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              What Property Owners Value
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Illustrative customer priorities reflecting our dedication to property health, clear communication, and immaculate site cleanup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientServicePriorities.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-stone-900 text-base mb-3 font-serif-display">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 text-xs">
                  <p className="font-semibold text-emerald-900">{item.type}</p>
                  <p className="text-stone-500">{item.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-stone-400">
            * Testimonials shown are representative illustrative examples of customer feedback standards and service priorities.
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#071a0f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900/80 p-8 sm:p-12 rounded-3xl border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-display mb-3">
                Ready to elevate your curb appeal?
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Schedule an on-site landscape evaluation or submit a demo quote request. Our team will review your property scope.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-[#071a0f] px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all min-h-[48px]"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#071a0f]" />
              </Link>
              
              <a
                href="tel:+18005550199"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-stone-700 hover:bg-white/10 text-white px-6 py-4 rounded-xl font-semibold transition-colors min-h-[48px]"
              >
                <PhoneCall className="w-4 h-4 text-lime-400" />
                <span>(800) 555-0199 (Demo)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
