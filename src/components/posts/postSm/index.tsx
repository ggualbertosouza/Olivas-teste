// Components | Types imports
import { postProps } from "@/types/index";

export const PostSm = ({id, slug, title, date}: postProps) => {
  
  return (
          <>
            <article className="flex flex-col gap-2" key={id}>
              <p className="slug bg-light-pink text-white">
                {slug}
              </p>
              <h2 className="text-dark-blue text-xl font-bold w-96 whitespace-normal ">
                {title}
              </h2>
              <small className="text-light-pink text-sm">
                {date}
              </small>
              <hr className="bg-zinc-900" />
            </article>
          </>
  );
};
