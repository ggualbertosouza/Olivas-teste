// Components | Types | Hooks imports
import { GetData } from "@/hooks/useFetch";
import { postProps } from "@/types";
import { Card } from "@/components/Card";

export const Cases = async () => {
  const { posts } = await GetData();
  const data = posts.slice(3, 8);

  return (
    <section className="container flex item-center justify-center ">
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center my-4 gap-3">
          <h3 className="titles">Cases</h3>
          <div className="bar w-12"></div>
        </div>
        <section className="w-[100vw]">
        <div className="flex gap-12 my-12 overflow-hidden">
          {data.map((post: postProps) => (
            <Card
              key={post.id}
              description={post.description}
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
        </section>
      </section>
    </section>
  );
};
