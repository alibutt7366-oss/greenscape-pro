import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { Trees, ArrowLeft } from 'lucide-react';

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const routeMetadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'GreenScape Pro | Premium Landscaping & Outdoor Living Design',
        description: 'GreenScape Pro delivers premium residential and commercial landscaping, precision lawn care, architectural hardscapes, and curated botanical gardens across the US.'
      },
      '/about': {
        title: 'About Us | GreenScape Pro - Horticultural Stewardship & Architectural Craft',
        description: 'Learn about GreenScape Pro’s mission, core values, 4-stage landscaping process, and dedicated specialists in lawn science and outdoor masonry.'
      },
      '/services': {
        title: 'Services | GreenScape Pro - Lawn Care, Landscape Design & Hardscaping',
        description: 'Explore our 6 core landscaping services: precision lawn care, master landscape planning, perennial gardens, seasonal cleanups, tree care, and custom stone patios.'
      },
      '/projects': {
        title: 'Projects & Portfolio | GreenScape Pro Landscaping Showcase',
        description: 'Browse conceptual project blueprints and case studies demonstrating our plant palettes, stone materials, and craftsmanship standards.'
      },
      '/contact': {
        title: 'Contact & Free Quote | GreenScape Pro Landscaping',
        description: 'Request a customized landscaping estimate for your residential or commercial property. Complimentary site evaluations and itemized proposals.'
      }
    };

    const currentMeta = routeMetadata[location.pathname] || {
      title: 'GreenScape Pro | Landscaping & Grounds Care',
      description: 'Professional landscaping and lawn maintenance services.'
    };

    document.title = currentMeta.title;

    // Update meta description tag dynamically for SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', currentMeta.description);
      document.head.appendChild(metaDescription);
    }
  }, [location.pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-4">
          <Trees className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold font-serif-display text-stone-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600 mb-6">
          The requested page could not be located. Please return to the homepage or explore our services.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-lime-400" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#fafaf7] text-stone-900 selection:bg-emerald-800 selection:text-white">
        <ScrollToTop />
        <PageTitleUpdater />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
