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
      <section className="w-full bg-light-green py-6">
        <div className="flex flex-col lg:flex-row justify-center gap-12 p-4">
          <section className="text-white">
            <h2 className="text-3xl font-bold py-4">Principais notícias</h2>
            {somePosts.map((post: postProps) => (
              <article className="flex flex-col gap-1" key={post.id}>
                <hr />
              <p className="bg-light-blue text-white text-sm py-1 px-2 rounded-full w-fit my-2">
              {post.slug?.replace(/-/g, " ")}
              </p>
              <small className="text-sm">
              {formatter.format(posts.date)}
              </small>
              <h2 className="text-xl font-bold w-96 whitespace-normal">
                {post.title}
              </h2>
            </article>
            ))}
            <Button
              name="Ver mais"
              style="btn-green my-4"
            />
          </section>
          <section className="bg-white rounded-tl-[10rem] flex flex-col p-2 gap-1 text-dark-blue w-[100%] lg:w-[50%]">
            <div className="relative h-96">
              <Image
                src="/news.png"
                alt="Imagem de garota lendo a NewsLetter da Olivas Digital"
                fill
                className="object-contain"
              />
            </div>
            <article className="flex flex-col gap-1">
              <div className="flex items-end gap-2">
                <p className="slug bg-light-pink text-white">
                  {posts[1].slug.replace(/-/g, " ")}
                </p>
                <small className="text-sm">
                  {formatter.format(new Date(posts[1].date))}
                </small>
              </div>
              <h3 className="text-xl font-bold">{posts[1].title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: posts[1].content! }}
                className="text-sm overflow-hidden italic text-ellipsis h-20"
              ></div>
            </article>
          </section>
        </div>
      </section>
    </>
  );
};
