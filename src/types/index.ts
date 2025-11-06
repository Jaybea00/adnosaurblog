export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    slug?: string;
  };
  date: string;
  categories: string[];
  readTime: string;
}

export interface PageEntry {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  date: string;
  modified?: string;
}

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  categories: number[];
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls?: {
        96: string;
      };
      description?: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  date: string;
  modified?: string;
}
