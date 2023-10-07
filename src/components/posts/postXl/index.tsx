import { useFetch } from "@/hooks/useFecth";
import { dataProps } from "@/types/DataProps";

export const PostXl = async () => {
  const data = await useFetch(
    "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373"
  );

  const post = data.find((item: dataProps) => {
    return {
      slug: item.slug,
      title: item.title?.rendered,
      id: item.id,
      date: item.date,
      text: item.content.rendered,
    };
  });

  const formatter = Intl.DateTimeFormat("pt-br");

  const texto = data[0].content.rendered
  

  return (
    <>
      <article key={post.id} className="flex flex-col gap-1">
        <p className="py-1 px-2 bg-[#F390A8] text-white text-sm w-fit rounded-full">{post.slug.replace(/-/g, ' ')}</p>
        <small className="text-[#F390A8] text-sm">{formatter.format(new Date(post.date))}</small>
        <h3 className="text-[#00374F] text-xl font-bold">{post.title?.rendered}</h3>
        <div dangerouslySetInnerHTML={{__html: texto}} className="h-32 overflow-hidden"></div>
      </article>
    </>
  );
};
