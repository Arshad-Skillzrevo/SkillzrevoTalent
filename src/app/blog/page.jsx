// app/blogs/page.jsx  <-- server component with metadata
export const metadata = {
  title: "SkillzRevo Blogs - Latest Articles & Updates",
  description:
    "Explore the latest articles, insights, and updates from SkillzRevo on technology, training, recruitment and business solutions.",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://skillzrevo.com/blogs/",
  },
  openGraph: {
    title: "SkillzRevo Blogs - Latest Articles & Updates",
    description:
      "Explore the latest articles, insights, and updates from SkillzRevo on technology, training, recruitment and business solutions.",
    url: "https://skillzrevo.com/blogs/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillzRevo Blogs - Latest Articles & Updates",
    description:
      "Explore the latest articles, insights, and updates from SkillzRevo on technology, training, recruitment and business solutions.",
  },
};

import BlogList from "./BlogList"; // client component

export default function BlogsPage() {
  // just render client component
  return <BlogList />;
}
