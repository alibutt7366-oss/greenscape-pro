import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Phone, Mail, Clock, ArrowUpRight, Compass, Sprout, ArrowUp } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071a0f] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 12-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Purpose (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3.5 group rounded-md focus-visible:outline-none"
              aria-label="GreenScape Pro - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-500/15 flex items-center justify-center text-lime-400 group-hover:scale-105 transition-transform">
                <Trees className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white font-serif-display leading-none">
                  GreenScape <span className="text-lime-400 font-sans font-semibold text-xl">Pro</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mt-1">
                  Landscaping & Grounds Care
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
              Providing premium residential and commercial grounds care, landscape architecture, and outdoor masonry across the US. Dedicated to horticultural health, sustainable turf management, and enduring outdoor spaces.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-stone-400">
              <Sprout className="w-4 h-4 text-lime-400 shrink-0" />
              <span>Sustainable Soil-First Cultivation & Landscape Architecture</span>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4 font-sans">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-lime-400 transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-300 hover:text-lime-400 transition-colors inline-block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-stone-300 hover:text-lime-400 transition-colors inline-block py-0.5">
                  Projects Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-lime-400 transition-colors inline-block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-lime-400 transition-colors inline-block py-0.5">
                  Contact & Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Services (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4 font-sans">
              Specialized Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link 
                    to={`/services#${svc.id}`} 
                    className="text-stone-400 hover:text-white transition-colors block text-xs leading-relaxed py-0.5"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-4 font-sans">
              Get In Touch
            </h3>
            
            <a 
              href="tel:+18005550199" 
              className="flex items-start gap-2.5 text-sm hover:text-white group text-stone-300"
              aria-label="Call (800) 555-0199"
            >
              <Phone className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white tracking-wide">
                  (800) 555-0199 <span className="text-[11px] font-normal text-stone-400">(Demo)</span>
                </span>
                <span className="text-xs text-stone-400">Direct Inquiries & Estimates</span>
              </div>
            </a>

            <a 
              href="mailto:quotes@greenscapepro.example.com" 
              className="flex items-start gap-2.5 text-sm hover:text-white group text-stone-300"
              aria-label="Email quotes@greenscapepro.example.com"
            >
              <Mail className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-xs text-white block truncate">
                  quotes@greenscapepro.example.com
                </span>
                <span className="text-[11px] block text-stone-400">Demo Inquiry Inbox</span>
              </div>
            </a>

            <div className="flex items-start gap-2.5 text-xs text-stone-400 pt-1">
              <Clock className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-200">Mon – Sat: 7:00 AM – 6:00 PM EST</p>
                <p className="text-stone-400">Sunday: Closed for Maintenance</p>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:text-lime-300 hover:underline py-1"
              >
                <span>Request Custom Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Clear Configuration Notice */}
        <div className="my-8 p-5 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs text-stone-300 leading-relaxed">
          <div className="flex items-start gap-3">
            <Compass className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium">Business Configuration Notice: </strong>
              The contact details <code className="text-lime-300 font-mono">(800) 555-0199</code>, email <code className="text-lime-300 font-mono">quotes@greenscapepro.example.com</code>, and portfolio case studies are illustrative placeholders. Before public commercial launch, configure your registered business name, state licenses, operational service radius, and production email endpoint.
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 pt-2">
          <p>© {new Date().getFullYear()} GreenScape Pro. Demonstration Website Template.</p>
          
          <div className="flex items-center gap-6">
            <span>Residential & Commercial Grounds Care</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-lime-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
