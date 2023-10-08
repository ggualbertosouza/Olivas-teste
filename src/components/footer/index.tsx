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
        <div className="bg-[#022776] text-[#4B8AA4] w-full flex items-center justify-between text-sm h-12">
        <div className="container flex items-center justify-between">
          <p>
            Copyright 2022 - Todos os dtireitos reservados I Política de
            privacidade I Condições Gerais
          </p>
          <p>Desenvolvido por: Olivas Digital</p>
        </div>
      </div>
      </div>
    </section>
    // <section className="flex flex-col justify-center bg-[#F0F1F5] w-full">
    //   <section className="flex  items-center justify-center">
    //     <div className="flex flex-col gap-1 items-center">
    //       <div className="flex flex-col items-center my-4 gap-3">
    //     <p className="titles ">Receba <span className="text-light-blue">nossas novidades</span></p>
    //     <div className="bar"></div>
    //       </div>
    //     <p className="">Quer receber conteúdos exclusivos no seu e-mail?</p>
    //     <Form />
    //     </div>
    //   </section>
    //   <section className="bg-[#022776] flex items-center justify-center h-16">
    //     <div className="flex items-center justify-between container text-[#4B8AA4]">
    //         <p>Copyright 2022 - Todos os dtireitos reservados I Política de privacidade I Condições Gerais</p>
    //         <p>Desenvolvido por: Olivas Digital</p>
    //     </div>
    //   </section>
    
    // </section>
  );
};
