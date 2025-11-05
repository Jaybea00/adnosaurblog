import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/wordpress";
import ShareButtons from "@/components/ShareButtons";
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params (required in Next.js 15)
  const { slug } = await params;

  // Validate slug parameter
  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-[7rem] md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-64 md:h-96 lg:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category, index) => (
              <span
                key={`${category}-${index}`}
                className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-gray-200"
              />
            )}
            <span className="font-semibold text-gray-900">
              {post.author.name}
            </span>
          </div>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {post.readTime && (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {post.readTime}
            </span>
          )}
        </div>

        {/* Content */}
        {post.content ? (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <div className="text-center py-8 text-gray-600">
            <p>Content not available for this post.</p>
          </div>
        )}

        {/* Share Section */}
        <ShareButtons title={post.title} />

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-primary hover:bg-primary/90 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
}
