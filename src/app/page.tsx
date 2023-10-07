import { Posts } from "@/components/posts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-12">
        <div className="w-full h-96 flex items-center relative">
          <Image
            src="/banner.png"
            alt="Banner da tela inicial - Imagem de jovens utilizando serviços da Olivas"
            fill
            className="object-cover"
          />
        </div>
          <p className="text-4xl text-[#00374E] font-bold">
            Conteúdos <span className="text-[#36B6C7]">para você</span>
          </p>
          <div className="w-24 h-2 rounded-full bg-[#36B6c7]"></div>
          <Posts />
      </section>
    </>
  );
}
