"use client";
import { TPost } from "@/types";
import Post from "./Posts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const POSTS_PER_PAGE = 6;

interface AllBlogsProps {
  allPosts: TPost[];
}

export default function AllBlogs({ allPosts }: AllBlogsProps) {
  const posts = allPosts;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePostClick = (postId: string) => {
    router?.push(`/posts/${postId}`);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build page number list with ellipsis
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 bg-orange-50">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#1D4ED8] mb-2 font-montserrat">
        All Blogs
      </h2>

      {/* Post count info */}
      {posts.length > 0 && (
        <p className="text-center text-sm text-gray-500 mb-8">
          Showing{" "}
          <span className="font-semibold text-blue-700">
            {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, posts.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-blue-700">{posts.length}</span>{" "}
          articles
        </p>
      )}

      {/* Posts Grid */}
      {paginatedPosts && paginatedPosts.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post: TPost) => (
              <div
                key={post?.id}
                onClick={() => handlePostClick(post?.id)}
                className="cursor-pointer"
              >
                <Post
                  key={post?.id}
                  id={post?.id}
                  author={post?.author.name}
                  authorEmail={post?.authorEmail}
                  date={post?.createdAt}
                  thumbnail={post?.imageUrl}
                  title={post?.title}
                  links={post?.links || []}
                />
              </div>
            ))}
          </div>

          {/* ── Pagination Controls ── */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              {/* Page buttons row */}
              <div className="flex items-center gap-1 flex-wrap justify-center">
                {/* Prev button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border border-orange-200 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 shadow-sm"
                  }`}
                >
                  <HiChevronLeft size={16} />
                  Prev
                </button>

                {/* Page numbers */}
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-3 py-2 text-gray-400 text-sm select-none"
                    >
                      …
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => goToPage(page as number)}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                      className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                        currentPage === page
                          ? "text-white shadow-md"
                          : "bg-white border border-orange-200 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 shadow-sm"
                      }`}
                      style={
                        currentPage === page
                          ? {
                              background:
                                "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #b91c1c 100%)",
                            }
                          : {}
                      }
                    >
                      {page}
                    </button>
                  )
                )}

                {/* Next button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border border-orange-200 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 shadow-sm"
                  }`}
                >
                  Next
                  <HiChevronRight size={16} />
                </button>
              </div>

              {/* Page X of Y */}
              <p className="text-xs text-gray-500">
                Page{" "}
                <span className="font-semibold text-blue-700">{currentPage}</span>{" "}
                of{" "}
                <span className="font-semibold text-blue-700">{totalPages}</span>
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="py-6 text-center text-gray-600">No posts to display</div>
      )}
    </div>
  );
}
