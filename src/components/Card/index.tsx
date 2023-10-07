import {  postProps } from "@/types";
import Image from "next/image";

export const Card = ({description, title, link}: postProps) => {
  return (
    <section className="flex flex-col w-[15rem] h-[20rem] justify-between" >
      <div className="flex flex-col gap-2">
        <img
          src='https://www.olivas.digital/wp-content/uploads/2023/03/OD_Vantagens-de-uma-agencia-de-desenvolvimento-e-marketing-integrado-WEB-blogpost-banner-1224x512-1.png?_t=1682598414'
          alt="Imagem ilustrativa sobre o post"
          className="object-cover"
        />
        <h3 className="text-xl text-[#00374F] font-bold">{title}</h3>
        <p className="text-md italic" dangerouslySetInnerHTML={{__html: description!}}></p>
      </div>
      <a href={link} className="py-1 px-2 bg-[#F390A8] text-white rounded-full w-fit" >Saiba mais</a>
    </section>
  );
};
