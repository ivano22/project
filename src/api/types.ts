// Team Player interface
export interface Player {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  stats?: {
    appearances?: number;
    goals?: number;
    assists?: number;
    yellowCards?: number;
    redCards?: number;
  };
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

// News Article interface
export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

// Project interface
export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  startDate: string;
  endDate?: string;
  impact?: string;
}

// Product interface
export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  image: string;
  gallery?: string[];
  description: string;
  category: string;
  inStock: boolean;
}

// Volunteer Opportunity interface
export interface VolunteerOpportunity {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  commitment: string;
}

// Contact Form interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}