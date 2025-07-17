import { TPost } from "@/types";
import CategoriesList from "./CategoriesList";
import Post from "./Posts";

const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "force-cache",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function ViewBlogs() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto ">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#1D4ED8] mb-10 font-montserrat">
        All Blogs
      </h2>
      <div className="mb-8">
        <CategoriesList />
      </div>
      {/* Posts Grid */}
      {posts && posts.length > 0 ? (
        <>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.slice(0,3)?.map?.((post: TPost) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author.name}
              authorEmail={post.authorEmail}
              date={post.createdAt}
              thumbnail={post.imageUrl}
              title={post.title}
              links={post.links || []}
            />
          ))}
        </div>
        <div className="flex items-center justify-center pt-4">
        <a href="/all-blogs" className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-montserrat font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 text-base">
            View All Blogs
          </a>
        </div>
      
        </>
      ) : (
        <div className="py-6 text-center text-gray-600">No posts to display</div>
      )}
    </div>
  );
}
