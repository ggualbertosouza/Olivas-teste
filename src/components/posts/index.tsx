// Components imports
import { Button } from "@/components/button";
import { PostSm } from "@/components/posts/postSm";
import { PostXl } from "@/components/posts/postXl";

// Hooks | types imports
import { GetData } from "@/hooks/useFetch";
import { postProps } from "@/types/index";

// NextJS Imports
import Image from "next/image";

export const Posts = async () => {
  const { posts, formatter } = await GetData();

  const somePosts = posts.slice(1, 5);

  return (
    <section className="container flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center gap-4 p-4">
        <section className="flex flex-col gap-4 w-full lg:w-2/4">
          <div className="relative h-96">
            <Image
              src="/post-img.png"
              alt="Imagem representativa de uma mulher lendo um blog"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-auto">
          <PostXl
            title={posts[0].title}
            key={posts[0].id}
            content={posts[0].content}
            slug={posts[0].slug.replace(/-/g, " ")}
            date={formatter.format(new Date(posts[0].date))}
          />
          </div>
        </section>

        <section className="flex flex-col gap-2 ">
          <h2 className="text-light-pink text-3xl font-bold py-4">Outras postagens: </h2>
          <hr className="bg-zinc-600" />
          {somePosts.map((post: postProps) => (
            <PostSm
              key={post.id}
              title={post.title}
              slug={post.slug?.replace(/-/g, " ")}
              date={formatter.format(posts.date)}
            />
          ))}
          <Button name="Ver mais" style="btn-pink" />
        </section>
      </div>
    </section>
  );
};
