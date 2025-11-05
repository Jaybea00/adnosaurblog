import { Post, WordPressPost } from "@/types";

const API_BASE_URL = "https://go.azfar.in/wp-json/wp/v2";

// Helper function to strip HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

// Helper function to calculate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Transform WordPress API response to our Post type
export function transformWordPressPost(wpPost: any): Post {
  try {
    // Safely extract embedded data with fallbacks
    const author = wpPost._embedded?.author?.[0];
    const featuredMedia = wpPost._embedded?.["wp:featuredmedia"]?.[0];
    const terms = wpPost._embedded?.["wp:term"];
    const categories = terms?.[0]?.map((cat: any) => cat.name) || [];

    // Generate fallback avatar if not available
    const avatarUrl =
      author?.avatar_urls?.["96"] ||
      author?.avatar_urls?.["48"] ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        author?.name || "Unknown"
      )}&background=8fff87&color=0a0a0a`;

    return {
      id: wpPost.id || 0,
      title: wpPost.title?.rendered || "Untitled Post",
      excerpt: stripHtml(wpPost.excerpt?.rendered || ""),
      content: wpPost.content?.rendered || "",
      slug: wpPost.slug || `post-${wpPost.id}`,
      date: wpPost.date || new Date().toISOString(),
      author: {
        name: author?.name || "Anonymous",
        avatar: avatarUrl,
      },
      featuredImage:
        featuredMedia?.source_url ||
        featuredMedia?.media_details?.sizes?.large?.source_url ||
        "https://via.placeholder.com/800x400?text=No+Image",
      categories: categories.length > 0 ? categories : ["Uncategorized"],
      readTime: calculateReadTime(wpPost.content?.rendered || ""),
    };
  } catch (error) {
    console.error("Error transforming WordPress post:", error);
    // Return a minimal valid post object
    return {
      id: wpPost.id || 0,
      title: "Error Loading Post",
      excerpt: "This post could not be loaded properly.",
      content: "<p>This post could not be loaded properly.</p>",
      slug: wpPost.slug || `post-${wpPost.id}`,
      date: new Date().toISOString(),
      author: {
        name: "Unknown",
        avatar:
          "https://ui-avatars.com/api/?name=Unknown&background=8fff87&color=0a0a0a",
      },
      featuredImage: "https://via.placeholder.com/800x400?text=Error",
      categories: ["Uncategorized"],
      readTime: "1 min read",
    };
  }
}

// Fetch all posts
export async function getPosts(perPage: number = 10): Promise<Post[]> {
  try {
    const url = `${API_BASE_URL}/posts?_embed=true&per_page=${perPage}`;

    const response = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `WordPress API error: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      console.error("WordPress API returned invalid data format");
      return [];
    }

    return posts.map(transformWordPressPost);
  } catch (error) {
    console.error("Error fetching posts from WordPress:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    if (!slug || typeof slug !== "string") {
      console.error("Invalid slug provided");
      return null;
    }

    const url = `${API_BASE_URL}/posts?slug=${encodeURIComponent(
      slug
    )}&_embed=true`;

    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `WordPress API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const posts = await response.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      console.warn(`No post found with slug: ${slug}`);
      return null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// Fetch featured post (most recent)
export async function getFeaturedPost(): Promise<Post | null> {
  try {
    const url = `${API_BASE_URL}/posts?_embed=true&per_page=1&orderby=date&order=desc`;

    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `WordPress API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const posts = await response.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      console.warn("No posts found for featured post");
      return null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error("Error fetching featured post:", error);
    return null;
  }
}
