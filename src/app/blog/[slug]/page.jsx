import Link from "next/link";

// ✅ 1. Safely generate static params (won’t crash build)
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://lms.skillzrevo.com/wp-json/wp/v2/posts?per_page=100&_fields=slug",
      { next: { revalidate: 3600 } }
    );

    // If the request fails or times out, skip page generation
    if (!res.ok) throw new Error("Failed to fetch slugs");

    const posts = await res.json();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("⚠️ Skipping static blog generation:", error.message);
    return []; // Avoids Vercel build failure
  }
}

// ✅ 2. Safe SEO metadata generation
export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `https://lms.skillzrevo.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("Failed to fetch metadata");

    const post = (await res.json())[0];
    if (!post) return { title: "Post not found" };

    return {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
      openGraph: {
        images: [
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
        ],
      },
    };
  } catch (error) {
    console.error("⚠️ Metadata fetch failed:", error.message);
    return { title: "Blog | SkillzRevo", description: "Read insightful articles and updates." };
  }
}

// ✅ 3. Main component with fallback UI
export default async function BlogDetail({ params }) {
  let post = null;

  try {
    const res = await fetch(
      `https://lms.skillzrevo.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Failed to fetch post");

    const data = await res.json();
    post = data[0];
  } catch (error) {
    console.error("⚠️ Post fetch failed:", error.message);
  }

  // Fallback view if API fails or post not found
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Blog temporarily unavailable
        </h1>
        <p className="text-gray-600 mb-6">
          We’re unable to load this post at the moment. Please try again later.
        </p>
        <Link
          href="/blog"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/placeholder.jpg";

  return (
    <article className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT column */}
      <div className="md:sticky md:top-24 self-start">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title.rendered}
            className="w-full rounded-2xl shadow-lg mb-6"
          />
        )}

        <h1
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-snug"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <Link
          href="/blog"
          className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* RIGHT column */}
      <div
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-xl prose-a:text-[#1d8fff]"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
