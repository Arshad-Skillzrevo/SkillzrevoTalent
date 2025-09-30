import Link from "next/link";

// Called at build time to prebuild all slugs
export async function generateStaticParams() {
  const res = await fetch(
    "https://lms.skillzrevo.com/wp-json/wp/v2/posts?per_page=100&_fields=slug",
    { next: { revalidate: 3600 } }
  );
  const posts = await res.json();
  return posts.map((post) => ({ slug: post.slug }));
}

// Optional SEO metadata per post
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://lms.skillzrevo.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
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
}

export default async function BlogDetail({ params }) {
  const res = await fetch(
    `https://lms.skillzrevo.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
    { next: { revalidate: 60 } }
  );
  const post = (await res.json())[0];

  if (!post) return <p className="p-10 text-center">No post found.</p>;

  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT sticky */}
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

      {/* RIGHT content */}
      <div
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-xl prose-a:text-[#1d8fff]"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
