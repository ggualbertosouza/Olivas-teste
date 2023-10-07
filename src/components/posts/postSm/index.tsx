// Components | Types imports
import { useFetch } from "@/hooks/useFecth";
import { dataProps } from "@/types/DataProps";

export const PostSm = async () => {
  const data = await useFetch(
    "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373"
  );

  const formatter = Intl.DateTimeFormat("pt-br");

  console.log(data.length);
  return (
    <>
      {data.map((post: dataProps) => {
        return (
          <>
            <article className="flex flex-col gap-2" key={post.id}>
              <p className="bg-[#F390A8] text-white text-sm py-1 px-2 rounded-full w-fit">
                {post.slug?.replace(/-/g, " ")}
              </p>
              <h2 className="text-[#00374F] text-xl font-bold w-96">
                {post.title?.rendered}
              </h2>
              <small className="text-[#F390A8] text-sm">
                {formatter.format(new Date(post.date))}
              </small>
              <hr className="bg-zinc-900" />
            </article>
          </>
        );
      })}
    </>
  );
};
