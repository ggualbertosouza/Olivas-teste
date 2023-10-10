import { Cases } from "@/components/cases";
import { Footer } from "@/components/footer";
import { News } from "@/components/news";
import { Posts } from "@/components/posts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center w-[100%] overflow-hidden">
        <div className="relative h-[30vh] w-[100%]">
          <Image
            src="/banner.png"
            alt="Banner da tela inicial - Imagem de jovens utilizando serviços da Olivas"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 my-12">
          <p className="titles">
            Conteúdos <span className="text-light-blue">para você</span>
          </p>
          <div className="bar"></div>
        </div>
        <section className="container flex items-center justify-center">
          <Posts />
        </section>
        <section className="bg-light-green w-full">
          <div className="flex items-center">
            <News />
          </div>
        </section>
        <Cases />
        <Footer />
      </section>
    </>
  );
}
