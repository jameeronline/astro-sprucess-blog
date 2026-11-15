import type { ImageMetadata } from "astro";

export interface PaymentOption {
  id: string;
  name: string;
  logo: ImageMetadata;
  description: string;
}

export interface ServicesCard {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: ImageMetadata;
  feedback: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  img: ImageMetadata;
  subtitle: string;
  title: string;
  description: string;
  href: string;
  btn: string;
  class: string;
}

export interface NumberCard {
  target: number;
  label: string;
  icon: any;
}
