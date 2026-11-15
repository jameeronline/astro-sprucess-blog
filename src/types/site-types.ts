//site data types
export interface NavigationItem {
  name: string;
  link: string;
}

//site metadata types
export interface SiteMetadata {
  title: string;
  description: string;
}

//site social links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}