import PostList from "@/components/PostList";
import FeaturedPost from "@/components/FeaturedPost";
import { getFeaturedPost } from "@/lib/wordpress";
import { Suspense } from "react";

export default async function BlogPage() {
  const featuredPost = await getFeaturedPost();

  return (
    <div className="min-h-screen">
      {/* Featured Post Section */}
      {featuredPost ? (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <Suspense
              fallback={
                <div className="h-96 bg-gray-200 animate-pulse rounded-2xl" />
              }
            >
              <FeaturedPost post={featuredPost} />
            </Suspense>
          </div>
        </section>
      ) : (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-12 bg-gray-100 rounded-2xl">
              <p className="text-gray-600">No featured post available</p>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Recent blog posts
          </h2>
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-80 bg-gray-200 animate-pulse rounded-lg"
                  />
                ))}
              </div>
            }
          >
            <PostList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
