"use client";
// React icons imports
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

// Components | Pages imports
import Image from "next/image";
import Link from "next/link";

// Framer-motion Imports
import { motion, useCycle } from "framer-motion";

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
    <section className="container flex flex-col md:flex-row items-center justify-center relative gap-12 p-2">
      <button
        onClick={() => toggleMenu()}
        className="hover:text-[#9C9223] text-[#C6B92C] text-2xl md:hidden absolute left-4 top-8"
      >
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <Link  href='/' className="relative w-64 h-16">
        <Image src="/logo.png" alt="Logo da Olivas Digital" fill />
      </Link>
      <nav className="flex flex-col md:flex-row gap-4 w-full md:w-fit items-center">
        <div
          className={`flex flex-col md:flex-row items-center w-full gap-5 bg-[#9c9223] md:bg-transparent rounded-xl ${menu ? '' : 'hidden md:flex'}`}
        >
          {navItem.map((i) => (
            <Link
              key={i.name}
              href={i.page}
              className="p-1 hover:text-[#9c9223] font-bold md:font-normal"
            >
              {i.name}
            </Link>
          ))}
        </div>
        <div className={`flex gap-4 ${menu ? '' : 'hidden md:flex'}`}>
          <button className="flex items-center p-2 gap-1 text-white hover:bg-[#9C9223] bg-[#C6B92C] rounded-full ">
            <BiEnvelope />
            <p className="hidden lg:inline-block text-sm whitespace-nowrap">Fale com especialistas</p>
          </button>
          <button className="hover:text-[#9C9223] text-[#C6B92C] text-2xl">
            <AiOutlineSearch />
          </button>
        </div>
      </nav>
    </section>
  );
};
