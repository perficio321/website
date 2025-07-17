"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Post from "./Posts";
import { TPost, TPdf } from "@/types";
import PdfCard from "./pdfs";

export default function DisplayContent() {
  const { data: session } = useSession();
  const isEditable = session?.user?.role === "ADMIN";

  const [activeTab, setActiveTab] = useState<"blogs" | "pdfs">("blogs");

  const [posts, setPosts] = useState<TPost[] | null>(null);
  const [pdfs, setPdfs] = useState<TPdf[] | null>(null);
  const [showAllPosts, setShowAllPosts] = useState(false);

  // Fetch Blogs
  const getPosts = async (): Promise<TPost[] | null> => {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) return res.json();
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  // Fetch PDFs
  const getPdfs = async (): Promise<TPdf[] | null> => {
    try {
      const res = await fetch("/api/pdfs");
      if (res.ok) return res.json();
    } catch (error) {
      console.error("Failed to fetch PDFs:", error);
    }
    return null;
  };

  useEffect(() => {
    getPosts().then(setPosts);
    getPdfs().then(setPdfs);
  }, []);

  const sortedPosts = posts
    ? [...posts].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  const visiblePosts = showAllPosts ? sortedPosts : sortedPosts.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {["blogs", "pdfs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "blogs" | "pdfs")}
            className={`pb-2 text-lg font-semibold capitalize relative ${
              activeTab === tab ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {tab === "blogs" ? "Blog Posts" : "PDFs"}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-blue-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "blogs" ? (
        visiblePosts.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
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
                  isEditable={isEditable}
                />
              ))}
            </div>

                {posts && posts.length > 3 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllPosts((prev) => !prev)}
                  className="px-6 py-2 bg-[#1D4ED8] text-white font-semibold rounded-md hover:bg-[#2563EB] transition"
                >
                  {showAllPosts ? "View Less" : "View All Posts"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-6 text-center text-gray-600">No posts to display</div>
        )
      ) : pdfs ? (
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
 {[...pdfs]
  ?.sort((a, b) => new Date(b.uploadedAt || "")?.getTime() - new Date(a.uploadedAt || "")?.getTime())
  ?.slice(0, 3)
  ?.map((pdf) => (
    <PdfCard
      key={pdf.id}
      id={pdf.id}
      title={pdf.title}
      pdfUrl={pdf.pdfUrl}
      publicId={pdf.publicId}
      uploadedAt={pdf.uploadedAt || ""}
      uploaderEmail={pdf.uploaderEmail}
      thumbnailUrl={pdf.thumbnailUrl || ""}
      isEditable={isEditable}
    />
  ))}
</div>

          <div className="flex items-center justify-center pt-6">
            <a
              href="/all-pdfs"
              className="inline-block bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105"
            >
              View All PDFs
            </a>
          </div>
        </>
      ) : (
        <div className="py-6 text-center text-gray-600">Loading PDFs...</div>
      )}
    </div>
  );
}
