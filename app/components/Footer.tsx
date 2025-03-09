"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Footer() {
  return (
    <footer className="py-12 text-primary">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-6"
      >
        {/* Logo e Informações de Contato no Canto Esquerdo */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Logo com rounded-full */}
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src="/logo-ma.png" // Substitua pelo caminho da sua logo
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Informações de Contato */}
          <div className="text-left">
            <p className="text-xl font-bold text-zinc-800 mb-4">Entre em Contato</p>
            <span className="border-b-2 border-primary mb-2 w-50 block"></span>
            <p className="text-sm">Telefone: +55 12997812859</p>
            <p className="text-sm">Email: juanfsouza@gmail.com</p>
          </div>
        </div>

        {/* Redes Sociais ou Links Úteis no Canto Direito */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-zinc-800 mb-4">Siga-nos</p>
          <span className="border-b-2 border-primary mb-2 w-60 block"></span>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-zinc-800 hover:text-primary transition">
              Instagram
            </a>
            <a href="#" className="text-zinc-800 hover:text-primary transition">
              Facebook
            </a>
            <a href="#" className="text-zinc-800 hover:text-primary transition">
              Twitter
            </a>
          </div>
        </div>
      </motion.div>

      {/* Direitos Autorais Centralizados */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-zinc-800">
          © {new Date().getFullYear()} Creative Makes Agents - Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}