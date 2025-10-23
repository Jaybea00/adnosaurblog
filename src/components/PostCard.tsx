import Link from "next/link";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group cursor-pointer">
      <Link href={`/posts/${post.slug}`}>
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-56 bg-dark-tertiary rounded-xl overflow-hidden mb-4">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center space-x-3 text-sm">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="font-medium text-gray-700">
                {post.author.name}
              </span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
