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
    <article className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
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
            className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5
            prose-h4:text-lg md:prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
            prose-p:text-gray-700 prose-p:leading-[5.0] prose-p:mb-4 prose-p:text-base md:prose-p:text-lg
            prose-p:border prose-p:border-red-500
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-700 prose-em:italic
            prose-code:text-primary prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto
            prose-ul:my-8 prose-ul:text-gray-700 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-8 prose-ol:text-gray-700 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-3 prose-li:text-base md:prose-li:text-lg prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto prose-img:max-w-full
            prose-video:rounded-lg prose-video:shadow-lg prose-video:my-8 prose-video:mx-auto prose-video:max-w-full
            prose-figure:my-8 prose-figure:mx-auto
            prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-figcaption:mt-3 prose-figcaption:italic
            prose-hr:my-12 prose-hr:border-gray-300
            prose-table:my-8 prose-table:w-full
            prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border-t prose-td:border-gray-200"
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
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
}
