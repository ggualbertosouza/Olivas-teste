"use client";
import { Button } from "@/components/button";
import { useSendEmail } from "@/components/form/useSendEmail";
// React Icons Impots
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Form = () => {
  const { handleForm, register, handleSubmit, errors } = useSendEmail();

  return (
      <form className="flex flex-col items-center justify-center gap-2 my-4">
        <div className="flex ">
          <input
            {...register("name")}
            type="text"
            className="outline-none border border-dark-yellow hover:shadow-sm hover:shadow-black p-1 w-[50%] text-zinc-700 rounded hover:-translate-y-0.5 hover:translate-x-0.5"
            placeholder="Insira o seu Nome"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
          <input
            {...register("email")}
            type="text"
            className="outline-none border border-dark-yellow hover:shadow-sm hover:shadow-black p-1 w-[50%] text-zinc-700 rounded hover:-translate-y-0.5 hover:translate-x-0.5"
            placeholder="Insira o seu Email"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <p className="md:text-sm font-bold text-[12px] text-center">
          Ao informar meus dados, eu concordo com a política de Privacidade e
          concordo em receber comunicações.
        </p>
        <button
          onClick={handleSubmit(handleForm)}
          className="bg-light-pink hover:bg-dark-pink py-1 px-4 rounded-full text-white flex items-center gap-2"
        >
          <AiOutlinePlusCircle />
          Cadastrar
        </button>
      </form>
  );
};
