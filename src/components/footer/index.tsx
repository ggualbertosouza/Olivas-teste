import { Form } from "@/components/form";

export const Footer = () => {
  return (
    <section className="flex flex-col justify-center bg-[#F0F1F5] w-full">
      <section className=" flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-1 items-center">
        <p className="font-bold text-3xl text-[#00374E]">Receba <span className="text-[#36B6C7]">nossas novidades</span></p>
        <div className="w-16 h-1 bg-[#36B6C7] rounded-full"></div>
        </div>
        <p className="">Quer receber conteúdos exclusivos no seu e-mail?</p>
        <Form />
      </section>
      <section className="bg-[#022776] flex items-center justify-center h-16">
        <div className="flex items-center justify-between container text-[#4B8AA4]">
            <p>Copyright 2022 - Todos os dtireitos reservados I Política de privacidade I Condições Gerais</p>
            <p>Desenvolvido por: Olivas Digital</p>
        </div>
      </section>
    </section>
  );
};
