import Link from "next/link";
import { Post } from "@/types";

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Featured Badge */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Featured
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-300 text-base mb-6 line-clamp-2 max-w-3xl">
            {post.excerpt}
          </p>

          {/* Arrow Icon */}
          <div className="absolute top-8 right-8">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-6 h-6 text-white group-hover:text-dark transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
