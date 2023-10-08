import { Form } from "@/components/form";

export const Footer = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-3 my-4">
          <h3 className="titles">
            Receba <span className="text-light-blue">nossas novidades</span>
          </h3>
          <div className="bar"></div>
          <p className="text-md">
            Quer receber conteúdos exclusivos no seu e-mail?
          </p>
          <Form />
        </div>
        <div className="bg-[#022776] text-[#4B8AA4] w-full flex items-center justify-between text-[12px] md:text-sm p-4">
          <p>
            Copyright 2022 - Todos os dtireitos reservados I Política de
            privacidade I Condições Gerais
          </p>
          <p>Desenvolvido por: Olivas Digital</p>
        </div>
      </div>
    </section>
  );
};
