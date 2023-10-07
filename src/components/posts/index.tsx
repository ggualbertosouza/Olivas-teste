// Components imports
import { Button } from "@/components/button";
import { PostSm } from "@/components/posts/postSm";
import { PostXl } from "@/components/posts/postXl";

// NextJS Imports
import Image from "next/image";

export const Posts = () => {
  return (
    <section className="container">
      <div className="flex justify-center">
        <section className="flex flex-col">
          <div className="relative w-[815px] h-[621px]">
          <Image
            src="/post-img.png"
            alt="Imagem representativa de uma mulher lendo um blog"
            fill
            className="object-cover"
          />
          </div>
          <PostXl />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-[#F390A8] text-3xl">Outras postagens: </h2>
          <hr className="bg-zinc-600" />
          <PostSm />
        <Button name="Ver mais" style='border-[#F390A8] text-[#F390A8]'/>
        </section>
      </div>
    </section>
  );
};
