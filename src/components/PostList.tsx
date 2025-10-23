import PostCard from "./PostCard";
import { getPosts } from "@/lib/wordpress";

export default async function PostList() {
  const posts = await getPosts(10);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">
          No posts found. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
