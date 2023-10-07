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
    <section className="container p-4">
      <div className="flex flex-col lg:flex-row justify-center">
        <section className="flex flex-col w-full lg:w-2/4 gap-4">
          <div className="relative h-96">
            <Image
              src="/post-img.png"
              alt="Imagem representativa de uma mulher lendo um blog"
              fill
              className="object-contain"
            />
          </div>
          <PostXl
            title={posts[0].title}
            key={posts[0].id}
            content={posts[0].content}
            slug={posts[0].slug.replace(/-/g, " ")}
            date={formatter.format(new Date(posts[0].date))}
          />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-[#F390A8] text-3xl">Outras postagens: </h2>
          <hr className="bg-zinc-600" />
          {somePosts.map((post: postProps) => (
            <PostSm
              key={post.id}
              title={post.title}
              slug={post.slug?.replace(/-/g, " ")}
              date={formatter.format(new Date(post.date))}
            />
          ))}
          <Button
            name="Ver mais"
            style="border-[#F390A8] text-[#F390A8] hover:bg-[#F390A8] hover:text-white"
          />
        </section>
      </div>
    </section>
  );
};
