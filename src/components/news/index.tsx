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
          <section className="bg-white p-4 rounded-tl-[5rem] overflow-hidden w-full lg:w-2/4">
            <div className="flex flex-col items-start gap-2 ">
              <div className="relative h-[30vh] w-[100%]">
              <Image
                src="/news.png"
                alt="Imagem de garota lendo a NewsLetter da Olivas Digital"
                fill
                className="object-cover"
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
                className="text-sm overflow-hidden italic text-ellipsis h-24 line-clamp-5"
              ></div>
            </article>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
