import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, Trees } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Content Link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0d2818] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main White Navigation Header (Top contact bar completely removed) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3.5 group rounded-lg py-1 no-underline border-0 outline-none"
              aria-label="GreenScape Pro - Home"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0d2818] flex items-center justify-center text-lime-400 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Trees className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#0d2818] font-serif-display leading-none">
                  GreenScape Pro
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold mt-1">
                  Landscaping & Grounds Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm transition-colors py-2 px-1 no-underline border-0 outline-none shadow-none ${
                      isActive
                        ? 'text-[#0d2818] font-bold'
                        : 'text-stone-600 hover:text-[#0d2818] font-medium'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-3.5">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md no-underline"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-lime-400" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg text-stone-700 hover:text-[#0d2818] hover:bg-stone-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer border-0"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-black/40 backdrop-blur-xs z-50 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div 
              className="bg-white border-b border-stone-200 p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation Drawer">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base transition-colors min-h-[44px] flex items-center no-underline border-0 ${
                        isActive
                          ? 'bg-stone-100 text-[#0d2818] font-bold'
                          : 'text-stone-700 hover:bg-stone-50 font-medium'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="pt-6 mt-4 border-t border-stone-200 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[#0d2818] text-white px-5 py-3.5 rounded-xl text-sm font-semibold text-center shadow-sm min-h-[44px] no-underline"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-lime-400" />
                </Link>
                
                <a
                  href="tel:+18005550199"
                  className="flex items-center justify-center gap-2 w-full border border-stone-300 text-stone-800 px-5 py-3 rounded-xl text-sm font-medium text-center hover:bg-stone-50 min-h-[44px] no-underline"
                >
                  <Phone className="w-4 h-4 text-emerald-800" />
                  <span>Call (800) 555-0199</span>
                </a>

                <div className="pt-2 text-center text-xs text-stone-500">
                  Mon – Sat: 7:00 AM – 6:00 PM EST
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
