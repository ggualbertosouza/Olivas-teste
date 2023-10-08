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
          className="text-sm overflow-hidden italic text-ellipsis h-30 line-clamp-6"
        ></div>
      </article>
    </section>
  );
};
