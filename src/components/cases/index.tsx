"use client";
// Components | Types | Hooks imports
import { GetData } from "@/hooks/useFetch";
import { postProps } from "@/types";
import { Card } from "@/components/Card";

// Swiper Imposts
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export const Cases = async () => {
  const { posts } = await GetData();
  const data = posts.slice(1, 4);

  return (
    <section className="flex item-center justify-center container">
      <section className="container flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-3xl text-[#00374E] font-bold">Cases</h3>
          <div className="w-10 h-1 bg-[#36B6C7] rounded-full"></div>
        </div>
        <div className="flex gap-12 w-fit">
          {data.map((post: postProps) => (
            <Card
              key={post.id}
              description={post.description}
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
      </section>
    </section>
  );
};
