import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Trees, 
  ChevronDown, 
  ChevronUp,
  Ruler,
  Sprout,
  HelpCircle,
  FileText
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive Scope Advisor state
  const [selectedPropertySize, setSelectedPropertySize] = useState<'quarter' | 'half' | 'acre' | 'estate'>('half');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Lawn Care & Maintenance', 'Mulching & Seasonal Cleanup']);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter(s => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const faqs = [
    {
      q: 'How frequently does your lawn maintenance crew visit?',
      a: 'During peak active growth (Spring through late Summer), our residential and commercial mowing schedules operate on a weekly cadence to prevent scalping and maintain ideal blade heights. In slower late-autumn or dry summer periods, bi-weekly schedules may be recommended.'
    },
    {
      q: 'How do you price landscaping projects and regular maintenance?',
      a: 'We evaluate every property based on square footage, turf grass species, slope topology, tree canopy density, and specific client desires. We do not use arbitrary flat rates; instead, we provide a transparent, itemized written proposal following an on-site property walkthrough.'
    },
    {
      q: 'Do you offer organic or pet-safe turf treatments?',
      a: 'Yes. We prioritize integrated pest management (IPM) and organic soil conditioners including aerated compost extracts and humic acids. Any pre-emergent or weed treatments are applied strictly following EPA and state Department of Agriculture safety protocols with full disclosure.'
    },
    {
      q: 'What is included in a landscape design blueprint?',
      a: 'Our landscape design deliverable includes a comprehensive site plan with scaled 2D layout drawings, complete botanical plant lists (species, mature height, bloom schedule), material specifications (pavers, stone, edging), and a phased installation timeline.'
    },
    {
      q: 'What licensing and insurance credentials should property owners verify?',
      a: 'Before commencing exterior work, property owners should always verify active commercial general liability insurance, workers’ compensation coverage, and state applicator licenses. In production deployment, GreenScape Pro’s regional policy numbers and municipal license certificates can be published directly in this section.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Page Header */}
      <section className="bg-[#071a0f] text-white py-16 lg:py-24 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1800&q=80"
            alt="Landscaped grounds background"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-lime-400 text-xs font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <Trees className="w-4 h-4" />
              <span>Professional Grounds & Landscape Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display tracking-tight text-white mb-6">
              Complete Grounds Care & Architectural Landscaping
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Tailored landscaping solutions for homeowners and commercial managers seeking pristine turf health, vibrant botanical gardens, and durable outdoor living structures.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section (Detailed breakdown of all 6 services) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-28 p-8 sm:p-10 rounded-3xl border border-stone-200 bg-stone-50/50 shadow-xs hover:border-emerald-300 transition-colors ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-96 bg-stone-100">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute top-4 left-4 bg-[#071a0f]/90 text-lime-400 text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-xs">
                        Service 0{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        {service.seasonality}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display mt-1">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-stone-600 text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div>
                      <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                        Key Deliverables & Specifications:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600">
                      <span className="font-semibold text-stone-900">Recommended For: </span>
                      {service.idealFor}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all min-h-[44px]"
                      >
                        <span>Request Quote for {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-lime-400" />
                      </Link>

                      <Link
                        to="/projects"
                        className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline py-2"
                      >
                        See Portfolio Examples
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Scope & Seasonal Planning Tool (Honest planning tool without fabricated prices) */}
      <section className="py-20 bg-stone-50/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Custom Care Advisor
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-display mb-4">
              Plan Your Property Scope
            </h2>
            <p className="text-stone-600 text-base">
              Select your property dimensions and desired services to generate a customized project plan that will pre-fill your estimate inquiry.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 shadow-xs p-6 sm:p-10 max-w-4xl mx-auto">
            {/* Step 1: Property Size */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-stone-900 mb-3">
                1. Select Approximate Property Footprint:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'quarter', label: 'Up to 1/4 Acre', desc: 'Standard suburban residential' },
                  { id: 'half', label: '1/4 to 1/2 Acre', desc: 'Mid-sized residential lawn' },
                  { id: 'acre', label: '1/2 to 1 Acre', desc: 'Spacious corner or wooded lot' },
                  { id: 'estate', label: '1+ Acre / Estate', desc: 'Multi-acre or commercial campus' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPropertySize(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all min-h-[44px] cursor-pointer ${
                      selectedPropertySize === item.id
                        ? 'border-emerald-700 bg-emerald-50/80 ring-1 ring-emerald-700'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <span className="block text-xs font-bold text-stone-900 mb-0.5">{item.label}</span>
                    <span className="block text-[11px] text-stone-500 leading-tight">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Desired Services */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-stone-900 mb-3">
                2. Select Interested Services (Multi-Select):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {servicesData.map((svc) => {
                  const isChecked = selectedServices.includes(svc.title);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.title)}
                      className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all min-h-[44px] cursor-pointer ${
                        isChecked
                          ? 'border-emerald-700 bg-emerald-50/80 text-stone-900'
                          : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-emerald-800 border-emerald-800 text-white' : 'border-stone-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium">{svc.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scope Summary Box */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Selected Scope Summary
                </span>
                <p className="text-xs text-stone-600">
                  {selectedServices.length > 0 
                    ? `${selectedServices.length} service(s) selected for ${selectedPropertySize === 'quarter' ? '1/4 Acre' : selectedPropertySize === 'half' ? '1/2 Acre' : selectedPropertySize === 'acre' ? '1 Acre' : '1+ Acre Estate'}.`
                    : 'Please select one or more services above.'}
                </p>
              </div>

              <Link
                to={`/contact?service=${encodeURIComponent(selectedServices.join(', '))}&size=${selectedPropertySize}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-xs min-h-[44px]"
              >
                <span>Continue with this Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              Common Inquiries
            </div>
            <h2 className="text-3xl font-bold text-stone-900 font-serif-display">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 bg-white hover:bg-stone-50/80 cursor-pointer min-h-[48px]"
                  >
                    <span className="font-semibold text-stone-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-800 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
