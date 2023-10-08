import { Cases } from "@/components/cases";
import { Footer } from "@/components/footer";
import { News } from "@/components/news";
import { Posts } from "@/components/posts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
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
        <section className="container">
        <Posts />
        </section>
        <section className="w-full bg-light-green">
          <div className="container">
        <News />
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
