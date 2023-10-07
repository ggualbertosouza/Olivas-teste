// Components | Types imports
import { postProps } from "@/types/index";

export const PostSm = ({id, slug, title, date}: postProps) => {
  
  return (
          <>
            <article className="flex flex-col gap-2" key={id}>
              <p className="bg-[#F390A8] text-white text-sm py-1 px-2 rounded-full w-fit">
                {slug}
              </p>
              <h2 className="text-[#00374F] text-xl font-bold w-96 whitespace-nowrap md:whitespace-normal">
                {title}
              </h2>
              <small className="text-[#F390A8] text-sm">
                {date}
              </small>
              <hr className="bg-zinc-900" />
            </article>
          </>
  );
};
