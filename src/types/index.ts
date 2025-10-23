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
  };
  date: string;
  categories: string[];
  readTime: string;
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
