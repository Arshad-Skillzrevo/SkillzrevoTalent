"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import autoplay module
import "swiper/css";
import Image from "next/image";

export default function BlogSlider() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://tutor.skillzrevo.com/wp-json/wp/v2/posts?per_page=8&_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="bg-orange-500">
      <section className="py-12 md:py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl  text-[#fff]  heading-oswald font-bold text-center mb-6">
          Latest Blogs
        </h2>
        <Swiper
          modules={[Autoplay]} // ✅ register module
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: true, // keeps autoplay after user interaction
          }}
          loop={true} // ✅ continuous loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-white shadow-md border border-gray-200 rounded-md m-2">
                {/* Image hidden for now */}

                <img
                  src={
                    post?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                      ?.medium?.file ||
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                  }
                  alt={post.title.rendered}
                  className="w-full h-56  rounded-md object-cover"
                />
                <div className="p-4">
                  <h3
                    className="text-lg text-black font-semibold mb-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered.substring(0, 100) + "...",
                    }}
                  />
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-[#1d8fff] font-medium mt-2 inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="/blog"
          target="_blank"
          className="text-orange-600 font-bold py-4 px-2 bg-white rounded-md mx-auto mt-2 w-fit block"
        >
          View All Blogs →
        </a>
      </section>
    </section>
  );
}
