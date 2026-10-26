import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  ArrowRight,
  RefreshCw,
  Copy,
  Trees,
  Server
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { QuoteFormData } from '../types';

export default function ContactPage() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential',
    serviceCategory: servicesData[0].title,
    propertySize: '1/4 to 1/2 Acre',
    serviceAddress: '',
    cityStateZip: '',
    projectTimeline: 'Within 1-2 Months',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    data: QuoteFormData;
    referenceId: string;
    submittedAt: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Pre-populate service from search params if passed
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const matched = servicesData.find(
        (s) => s.title.toLowerCase().includes(serviceParam.toLowerCase()) || 
               serviceParam.toLowerCase().includes(s.title.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, serviceCategory: matched.title }));
      } else {
        setFormData((prev) => ({ ...prev, serviceCategory: serviceParam }));
      }
    }

    const sizeParam = searchParams.get('size');
    if (sizeParam) {
      const sizeLabels: Record<string, string> = {
        quarter: 'Up to 1/4 Acre',
        half: '1/4 to 1/2 Acre',
        acre: '1/2 to 1 Acre',
        estate: '1+ Acre / Estate'
      };
      if (sizeLabels[sizeParam]) {
        setFormData((prev) => ({ ...prev, propertySize: sizeLabels[sizeParam] }));
      }
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (formData.phone && !/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (digits and standard formatting).';
    }

    if (!formData.serviceCategory) {
      newErrors.serviceCategory = 'Please select a primary service.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief description of your project or yard requirements.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please share at least a short sentence (10+ characters) describing your needs.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic client-side submission simulation
    setTimeout(() => {
      const refNumber = 'GSP-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        data: { ...formData },
        referenceId: refNumber,
        submittedAt: new Date().toLocaleString()
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      propertyType: 'Residential',
      serviceCategory: servicesData[0].title,
      propertySize: '1/4 to 1/2 Acre',
      serviceAddress: '',
      cityStateZip: '',
      projectTimeline: 'Within 1-2 Months',
      projectDetails: ''
    });
    setErrors({});
  };

  const handleCopyReceipt = () => {
    if (!submittedData) return;
    const summary = `GreenScape Pro Demo Quote Request (${submittedData.referenceId})
Date: ${submittedData.submittedAt}
Client: ${submittedData.data.fullName}
Email: ${submittedData.data.email}
Phone: ${submittedData.data.phone || 'N/A'}
Property: ${submittedData.data.propertyType} (${submittedData.data.propertySize})
Service: ${submittedData.data.serviceCategory}
Timeline: ${submittedData.data.projectTimeline}
Details: ${submittedData.data.projectDetails}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Page Header */}
      <section className="bg-[#071a0f] text-white py-16 lg:py-20 relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-lime-400 text-xs font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <Trees className="w-4 h-4" />
              <span>Contact & Quotes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display tracking-tight text-white mb-4">
              Request Your Custom Landscape Estimate
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Tell us about your grounds, outdoor living goals, or maintenance schedule. We provide itemized, honest assessments tailored to your property.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Business Info & Configuration Notice */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Mandatory Configuration Notice */}
              <div className="p-6 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Compass className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Business Configuration Required Before Launch</span>
                </div>
                <p>
                  The telephone <span className="font-mono font-medium">(800) 555-0199</span>, email <span className="font-mono font-medium">quotes@greenscapepro.example.com</span>, and service geography shown here are illustrative template defaults. Update with your registered LLC business entity, actual phone lines, and regional operational territory prior to marketing to live clients.
                </p>
              </div>

              {/* Direct Inquiries Card */}
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-stone-900 font-serif-display">
                  Direct Inquiries & Office Hours
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider">
                        Telephone (Direct Call)
                      </span>
                      <a 
                        href="tel:+18005550199" 
                        className="text-base font-bold text-stone-900 hover:text-emerald-800 transition-colors py-0.5 inline-block"
                        aria-label="Call (800) 555-0199"
                      >
                        (800) 555-0199 <span className="text-xs font-normal text-stone-400">(Demo Placeholder)</span>
                      </a>
                      <span className="block text-xs text-stone-500 mt-0.5">Template placeholder – ready for your business number</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider">
                        Email Inquiries
                      </span>
                      <a 
                        href="mailto:quotes@greenscapepro.example.com" 
                        className="text-sm font-semibold text-stone-900 hover:text-emerald-800 transition-colors break-all py-0.5 inline-block"
                        aria-label="Email quotes@greenscapepro.example.com"
                      >
                        quotes@greenscapepro.example.com
                      </a>
                      <span className="block text-xs text-stone-500 mt-0.5">Demo placeholder – connect your customer support inbox</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider">
                        Field Operating Hours
                      </span>
                      <p className="text-sm font-medium text-stone-800">
                        Monday – Saturday: 7:00 AM – 6:00 PM EST
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Emergency storm & fallen limb response available on call.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Assurance Card */}
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-4 text-xs text-stone-600">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Our Service Commitment
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>Written itemized proposals delivered within 24–48 hours of site review.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>No unannounced crew arrivals or surprise fuel surcharges.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>Zero obligation consultation and complimentary property walk-through.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Quote Request Form / Submission Receipt */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
                
                {submittedData ? (
                  /* Form Submission Receipt & Simulation Notice */
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <h2 className="text-lg font-bold text-emerald-950">
                          Demo Submission Validated Successfully
                        </h2>
                        <p className="text-xs text-emerald-800 mt-1">
                          Reference ID: <span className="font-mono font-bold">{submittedData.referenceId}</span> · Recorded {submittedData.submittedAt}
                        </p>
                      </div>
                    </div>

                    {/* Explicit backend notice as requested */}
                    <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed space-y-2">
                      <div className="flex items-center gap-2 font-bold text-stone-900">
                        <Server className="w-4 h-4 text-emerald-800" />
                        <span>Client-Side Demo Notice (No Live Backend Connected)</span>
                      </div>
                      <p>
                        This submission was processed and validated entirely within the browser. <strong>Because no external email relay or backend service (such as Resend, SendGrid, or AWS SES) is configured in this prototype, no email was dispatched.</strong>
                      </p>
                      <p className="text-stone-500">
                        To connect this to your production environment, simply post the validated payload to your server route or webhook.
                      </p>
                    </div>

                    {/* Form Summary Review */}
                    <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-white text-xs">
                      <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                        <span className="font-bold text-stone-900 text-sm">Submitted Details Summary</span>
                        <button
                          type="button"
                          onClick={handleCopyReceipt}
                          className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold cursor-pointer py-1"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                        <div>
                          <span className="text-stone-400 block text-[11px]">Client Name:</span>
                          <span className="font-semibold text-stone-900">{submittedData.data.fullName}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[11px]">Email Address:</span>
                          <span className="font-semibold text-stone-900">{submittedData.data.email}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[11px]">Phone:</span>
                          <span>{submittedData.data.phone || 'Not provided'}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[11px]">Property Type & Scope:</span>
                          <span>{submittedData.data.propertyType} ({submittedData.data.propertySize})</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[11px]">Primary Service:</span>
                          <span className="font-semibold text-emerald-800">{submittedData.data.serviceCategory}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[11px]">Project Timeline:</span>
                          <span>{submittedData.data.projectTimeline}</span>
                        </div>
                        {submittedData.data.serviceAddress && (
                          <div className="sm:col-span-2">
                            <span className="text-stone-400 block text-[11px]">Address / City / Zip:</span>
                            <span>{submittedData.data.serviceAddress} {submittedData.data.cityStateZip}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-stone-100">
                        <span className="text-stone-400 block text-[11px] mb-1">Project Details:</span>
                        <p className="bg-stone-50 p-3 rounded-lg text-stone-800 italic">
                          "{submittedData.data.projectDetails}"
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d2818] hover:bg-[#143d26] text-white px-6 py-3.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer min-h-[44px]"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Submit Another Demo Request</span>
                      </button>

                      <Link
                        to="/services"
                        className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 min-h-[44px] flex items-center justify-center"
                      >
                        Return to Services
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* The Quote Request Form */
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <h2 className="text-2xl font-bold text-stone-900 font-serif-display">
                        Property & Project Details
                      </h2>
                      <p className="text-xs text-stone-500 mt-1">
                        Please complete the form below. Required fields are marked with an asterisk (*).
                      </p>
                    </div>

                    {/* Contact Info Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="fullName">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 bg-white transition-colors focus-visible:outline-none min-h-[44px] ${
                            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 bg-white transition-colors focus-visible:outline-none min-h-[44px] ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone (optional) and Property Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="phone">
                          Phone Number <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 bg-white transition-colors focus-visible:outline-none min-h-[44px] ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="propertyType">
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus-visible:outline-none min-h-[44px]"
                        >
                          <option value="Residential">Residential Single-Family</option>
                          <option value="Commercial">Commercial / Office Campus</option>
                          <option value="HOA / Multi-Family">HOA / Multi-Family Community</option>
                        </select>
                      </div>
                    </div>

                    {/* Primary Service Selection & Property Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="serviceCategory">
                          Primary Service Needed *
                        </label>
                        <select
                          id="serviceCategory"
                          value={formData.serviceCategory}
                          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 bg-white focus-visible:outline-none min-h-[44px] ${
                            errors.serviceCategory ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                          }`}
                        >
                          {servicesData.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                          <option value="Comprehensive Seasonal Package">Comprehensive Seasonal Package (All-Inclusive)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="propertySize">
                          Estimated Property Size <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="propertySize"
                          value={formData.propertySize}
                          onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus-visible:outline-none min-h-[44px]"
                        >
                          <option value="Up to 1/4 Acre">Up to 1/4 Acre</option>
                          <option value="1/4 to 1/2 Acre">1/4 to 1/2 Acre</option>
                          <option value="1/2 to 1 Acre">1/2 to 1 Acre</option>
                          <option value="1+ Acre / Estate">1+ Acre / Estate</option>
                          <option value="Commercial Campus">Commercial Facility / Multi-Acre</option>
                        </select>
                      </div>
                    </div>

                    {/* Address or Service Area (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="serviceAddress">
                          Street Address <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="serviceAddress"
                          type="text"
                          value={formData.serviceAddress}
                          onChange={(e) => setFormData({ ...formData, serviceAddress: e.target.value })}
                          placeholder="e.g. 742 Evergreen Terrace"
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus-visible:outline-none min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="cityStateZip">
                          City, State & Zip <span className="text-stone-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="cityStateZip"
                          type="text"
                          value={formData.cityStateZip}
                          onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })}
                          placeholder="e.g. Springfield, OR 97477"
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus-visible:outline-none min-h-[44px]"
                        />
                      </div>
                    </div>

                    {/* Project Timeline */}
                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1.5">
                        Target Project Start Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          'Immediate (within 2 weeks)',
                          'Within 1-2 Months',
                          'Flexible / Planning Stage'
                        ].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectTimeline: time as any })}
                            className={`p-3.5 rounded-xl border text-xs text-left transition-all min-h-[44px] cursor-pointer ${
                              formData.projectTimeline === time
                                ? 'border-emerald-700 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-700'
                                : 'border-stone-200 text-stone-600 bg-white hover:border-stone-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1.5" htmlFor="projectDetails">
                        Project Scope & Goals *
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Please share specific requirements (e.g. weekly mowing, lawn aeration, backyard paver patio dimensions, sloped grading challenges, or plant preferences)..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 bg-white focus-visible:outline-none ${
                          errors.projectDetails ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                        }`}
                      />
                      {errors.projectDetails && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.projectDetails}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 bg-[#0d2818] hover:bg-[#143d26] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md disabled:opacity-70 cursor-pointer min-h-[48px]"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-lime-400" />
                            <span>Validating & Formatting Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-lime-400" />
                            <span>Submit Estimate Request (Demo)</span>
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-stone-500 mt-3">
                        Submissions are validated in client-side preview mode. No commercial email is sent without backend endpoint connection.
                      </p>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
