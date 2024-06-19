"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops, ocorreu um erro ao exibir esse país!
      </h1>
      <Link className="flex items-center p-20" href="/">
     
        Voltar
      </Link>
    </section>
  );
}