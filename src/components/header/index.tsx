"use client";
// React icons imports
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

// Components | Pages imports
import Image from "next/image";
import Link from "next/link";

// Framer-motion Imports
import { motion, useCycle } from "framer-motion";
import { Button } from "@/components/button";

const navItem = [
  { page: "/pages/about", name: "Quem somos" },
  { page: "/pages/method", name: "Metodologia" },
  { page: "/pages/solutions", name: "Nossas soluções" },
  { page: "/pages/contents", name: "Conteúdos para você" },
  { page: "/pages/comunication", name: "Canais de comunicação" },
];

export const Header = () => {
  const [menu, toggleMenu] = useCycle(false, true);

  return (
    <section 
    className="container flex items-center justify-center">
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-2 w-full">
        <button
          onClick={() => toggleMenu()}
          className="text-dark-yellow text-3xl lg:hidden absolute left-4 top-8"
        >
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <Link href="/" className="relative w-64 h-16">
          <Image
            src="/logo.png"
            alt="Logo da Olivas Digital"
            fill
            className="object-contain"
          />
        </Link>
        <nav className="flex flex-col lg:flex-row items-center w-full lg:w-fit my-4">
          <div
            className={`flex flex-col lg:flex-row items-center w-full gap-3 lg:bg-white rounded-xl ${
              menu ? "" : "hidden lg:flex"
            }`}
          >
            {navItem.map((i) => (
              <Link
                key={i.name}
                href={i.page}
                className="p-2 font-bold lg:font-normal text-sm whitespace-nowrap hover:text-dark-yellow"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </nav>
        <div
          className={`flex items-center gap-4 ${menu ? "" : "hidden lg:flex"}`}
        >
          <Button
            style="btn-yellow flex items-center gap-1 text-sm hover:-translate-y-0.5 hover:translate-x-0.5"
            name="fale com especialistas"
            icon={<BiEnvelope />}
          />
          <button className="text-light-yellow hover:text-dark-yellow text-2xl border border-white hover:border-dark-yellow rounded-full p-1 hover:scale-105">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </section>
  );
};
