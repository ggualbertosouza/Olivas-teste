// Components | types | hooks
import { Button } from "@/components/button";
import { PostSm } from "@/components/posts/postSm";
import { GetData, useFetch } from "@/hooks/useFetch";
import { postProps } from "@/types";

// NestJS imports
import Image from "next/image";

export const News = async () => {
  const { posts, formatter } = await GetData();

  const somePosts = posts.slice(1, 4);

  return (
    <>
      <section className="w-full bg-[#8ECB53]">
        <div className="flex flex-col lg:flex-row justify-center gap-12 p-4">
          <section className="text-white space-y-4">
            <h2 className="text-2xl font-bold">Principais notícias</h2>
            <div className="w-24 bg-white rounded-full"></div>
            {somePosts.map((post: postProps) => (
              <article className="flex flex-col gap-1" key={post.id}>
                <hr />
                <small className="text-sm">
                  {formatter.format(new Date(post.date))}
                </small>
                <p className="bg-[#36B6C7] py-1 px-2 text-md w-fit rounded-full">
                  {post.slug?.replace(/-/g, " ")}
                </p>
                <h3 className="text-lg font-bold">{post.title}</h3>
              </article>
            ))}
            <Button
              name="Ver mais"
              style="border-white text-white hover:bg-white hover:text-[#8ECB53]"
            />
          </section>
          <section className="bg-white rounded-tl-xl flex flex-col p-2 gap-1 text-[#00374F] lg:w-2/4">
            <div className="relative h-96 w-full">
              <Image
                src="/news.png"
                alt="Imagem de garota lendo a NewsLetter da Olivas Digital"
                fill
                className="object-contain"
              />
            </div>
            <article className="flex flex-col gap-1">
              <div className="flex items-end gap-2">
                <p className="py-1 px-2 bg-[#EC7E99] text-white text-md w-fit rounded-full">
                  {posts[1].slug.replace(/-/g, " ")}
                </p>
                <small className="text-sm">
                  {formatter.format(new Date(posts[1].date))}
                </small>
              </div>
              <h3 className="text-lg font-bold">{posts[1].title}</h3>
              <div
                className="text-sm italic line-clamp-2 md:line-clamp-3 lg:line-clamp-5"
                dangerouslySetInnerHTML={{ __html: posts[1].content }}
              ></div>
            </article>
          </section>
        </div>
      </section>
    </>
  );
};
