export type PageType = 'home' | 'services' | 'audit' | 'portfolio' | 'about' | 'contact' | 'industry' | 'case-study-deep-dive' | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  specs: {
    delivery: string;
    focus: string;
    outcome: string;
  };
  priceRange: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'web' | 'seo' | 'brand' | 'all';
  client: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  };
  technologies: string[];
  workDone: string[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  metrics: string;
  image: string;
}

export interface AuditResult {
  url: string;
  timestamp: string;
  scores: {
    seo: number;
    performance: number;
    brandConsistency: number;
    security: number;
    overall: number;
  };
  metrics: {
    loadTimeMs: number;
    pageSizeKb: number;
    h1Count: number;
    h2Count: number;
    imageCount: number;
    imagesWithoutAlt: number;
    hasMetaDescription: boolean;
    hasViewport: boolean;
    hasSsl: boolean;
    hasRobotsTxt: boolean;
  };
  findings: {
    type: 'success' | 'warning' | 'error';
    category: 'SEO' | 'Performance' | 'Brand' | 'Security';
    title: string;
    message: string;
    recommendation: string;
  }[];
  aiStrategicInsights: string;
}

export interface ProjectConfig {
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  details: string;
}
