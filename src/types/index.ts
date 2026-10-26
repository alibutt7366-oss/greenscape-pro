export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: 'maintenance' | 'design' | 'installation' | 'care' | 'hardscape';
  features: string[];
  idealFor: string;
  seasonality: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Lawn Care' | 'Garden Design' | 'Outdoor Living';
  shortDesc: string;
  fullStory: string;
  locationType: string;
  image: string;
  materials: string[];
  features: string[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone?: string;
  propertyType: 'Residential' | 'Commercial' | 'HOA / Multi-Family';
  serviceCategory: string;
  propertySize?: string;
  serviceAddress?: string;
  cityStateZip?: string;
  projectTimeline: 'Immediate (within 2 weeks)' | 'Within 1-2 Months' | 'Flexible / Planning Stage';
  projectDetails: string;
}

export interface TestimonialItem {
  quote: string;
  clientType: string;
  serviceProvided: string;
  location: string;
}
