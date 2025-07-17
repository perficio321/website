import { TPost } from "@/types";
import Post from "./Posts";

interface AllBlogsProps {
  allPosts: TPost[];
}

export default function AllBlogs({ allPosts }: AllBlogsProps) {
  const posts = allPosts;

  return (
    <div className="max-w-6xl mx-auto px-4 pb-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#1D4ED8] mb-10 font-montserrat">
        All Blogs
      </h2>

      {/* Categories */}
      {/* Posts Grid */}
      {posts && posts.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: TPost) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author.name}
                authorEmail={post.authorEmail}
                date={post.createdAt}
                thumbnail={post.imageUrl}
                // category={post.catName}
                title={post.title}
                // content={post.content || ""}
                links={post.links || []}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="py-6 text-center text-gray-600">No posts to display</div>
      )}
    </div>
  );
}
