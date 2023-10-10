import { postProps } from "@/types";

export const Card = ({ description, title, link }: postProps) => {
  return (
    <section className="flex flex-col w-[15rem] h-auto justify-between shadow-sm shadow-black p-4 hover:-translate-y-1 hover:translate-x-1 cursor-pointer">
      <div className="flex flex-col gap-2">
        <img
          src="https://www.olivas.digital/wp-content/uploads/2023/03/OD_Vantagens-de-uma-agencia-de-desenvolvimento-e-marketing-integrado-WEB-blogpost-banner-1224x512-1.png?_t=1682598414"
          alt="Imagem ilustrativa sobre o post"
          className="object-cover"
        />
        <h3 className="text-[clamp(1em, 1em + 1vw, 1.5em)] text-dark-blue font-bold">
          {title}
        </h3>
        <div
          className="italic text-[clamp(1em, 1em + 1vw, 1.5em)]"
          dangerouslySetInnerHTML={{ __html: description! }}
        ></div>
      </div>
      <a
        href={link}
        className="py-1 px-2 bg-light-pink hover:bg-dark-pink text-white rounded-full w-fit cursor-pointer hover:shadow-sm hover:shadow-black hover:-translate-y-1 hover:translate-x-1 my-1"
      >
        Saiba mais
      </a>
    </section>
  );
};
