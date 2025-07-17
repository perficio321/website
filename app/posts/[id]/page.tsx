"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TPost } from "@/types";
import Image from "next/image";

const ViewPostClient = () => {
  const pathname = usePathname(); // e.g., /posts/123
  const id = pathname.split("/")[2]; // Extract post ID

  const [post, setPost] = useState<TPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch post");

        const data = await res.json();
        setPost(data);
      } catch (err: any) {
        console.error(err);
        setError("Could not load the post. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!id) return <div className="text-red-500">No post ID found in URL.</div>;
  if (loading) return <div className="text-gray-600">Loading post data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!post) return null;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="w-full min-h-screen px-4 md:px-6 lg:px-[3.25rem] py-12 bg-white">
      {/* Banner Image */}
      {post.imageUrl && (
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      )}

      {/* Post Content */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          {formattedDate} •{" "}
          <span className="text-blue-600 font-medium">
            {post.catName || "General"}
          </span>
        </p>

        <article className="prose prose-blue max-w-none prose-sm sm:prose-base md:prose-lg lg:prose-xl text-justify prose-p:text-gray-800 prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:underline">
          {post.content}
        </article>

        {post?.links?.length || 0 > 0 && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Related Links
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-600 text-sm sm:text-base">
              {post?.links?.map((link: string, i: number) => (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-words"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
};

export default ViewPostClient;
