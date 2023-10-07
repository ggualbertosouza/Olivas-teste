// Components | Types imports
import { postProps } from "@/types/index";

export const PostXl = async ({ id, slug, date, title, content }: postProps) => {
  return (
    <>
      <article key={id} className="flex flex-col gap-1">
        <p className="py-1 px-2 bg-[#F390A8] text-white text-sm w-fit rounded-full">
          {slug}
        </p>
        <small className="text-[#F390A8] text-sm">{date}</small>
        <h3 className="text-[#00374F] text-xl font-bold">{title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: content! }}
          className="line-clamp-2 md:line-clamp-3 lg:line-clamp-6 w-4/5"
        ></div>
      </article>
    </>
  );
};
