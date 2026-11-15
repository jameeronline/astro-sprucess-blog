//types
import type { NavigationItem, SiteMetadata, SocialLink } from '@/types/site-types.ts';

//data
export const siteNavigation: NavigationItem[] = [
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export const siteMetadata: SiteMetadata = {
  title: "Astro SaaS",
  description: "A modern SaaS template built with Astro and Tailwind CSS.",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Twitter",
    url: "https://twitter.com/yourprofile",
    icon: "/icons/twitter.svg",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "/icons/linkedin.svg",
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "/icons/github.svg",
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/yourprofile",
    icon: "/icons/facebook.svg",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/yourprofile",
    icon: "/icons/instagram.svg",
  },
];
