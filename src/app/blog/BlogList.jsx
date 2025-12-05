"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // fetch posts when page changes
  useEffect(() => {
    setLoading(true);
    fetch(`https://tutor.skillzrevo.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed`)
      .then((res) => {
        // WP sends total pages in header
        setTotalPages(parseInt(res.headers.get("X-WP-TotalPages")) || 1);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [page]);
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // smooth scrolling (optional)
  });
}, [page]);

  // skeleton grid
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl md:text-5xl text-[#1d8fff] uppercase heading-oswald font-bold text-center mb-6">
          Latest Blogs
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="h-48 bg-gray-200 rounded-xl"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Grid */}
      <h1 className="text-3xl md:text-5xl text-[#1d8fff] uppercase heading-oswald font-bold text-center mb-6">
          Latest Blogs
        </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium?.source_url ||
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg";
          return (
            <div key={post.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <img
                  src={imageUrl}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link href={`/blog/${post.slug}`}>
                  <h2
                    className="text-xl font-semibold mb-2 line-clamp-2 hover:text-[#1d8fff]"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </Link>
                <p
                  className="text-gray-600 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-[#1d8fff] hover:underline"
                  target="_blank"
                >
                  Read More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg border ${
            page === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          ← Prev
        </button>

        <span className="px-3 py-2 text-gray-700">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg border ${
            page === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
