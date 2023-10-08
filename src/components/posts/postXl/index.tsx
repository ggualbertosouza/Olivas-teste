// Components | Types imports
import { postProps } from "@/types/index";

export const PostXl = async ({ id, slug, date, title, content }: postProps) => {
  return (
    <section className="container flex items-center justify-center">
      <article key={id} className="flex flex-col gap-1">
        <p className="slug bg-light-pink text-white ">
          {slug}
        </p>
        <small className="text-light-pink text-sm">{date}</small>
        <h3 className="text-dark-blue text-xl font-bold">{title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: content! }}
          className="line-clamp-2 md:line-clamp-3 lg:line-clamp-6 overflow-hidden italic"
        ></div>
      </article>
    </section>
  );
};
