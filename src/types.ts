export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  iconName: string;
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Modular Kitchen' | 'Bedroom' | 'Commercial' | 'Vastu-Designed';
  location: string;
  carpetArea: string;
  style: string;
  completionTime: string;
  imageUrl: string;
  additionalImages?: string[];
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
  avatarUrl: string;
}

export interface VastuPrinciple {
  zone: string;
  direction: string;
  element: string;
  recommendedRoom: string;
  advice: string;
  colorSuggestion: string;
}

export interface BudgetEstimateState {
  spaceType: '1BHK' | '2BHK' | '3BHK' | '4BHK / Villa' | 'Commercial / Office';
  style: 'Essential' | 'Premium Elegance' | 'Ultra-Luxury';
  areaSqFt: number;
  includeKitchen: boolean;
  includeAutomation: boolean;
  includeFalseCeiling: boolean;
  includeVastu: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  carpetArea: string;
  locality: string;
  preferredTime: string;
  serviceInterest: string;
  estimatedBudget: string;
  message: string;
}
