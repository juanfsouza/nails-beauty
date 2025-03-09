"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { fadeIn, slideUp } from "@/variants";
import { NumberTicker } from "./ui/number-ticker";

const images = [
  {
    src: "/about-1.jpg",
    alt: "Imagem 1",
    price: "R$100",
    text: "Manicure + Gel polonês + remoção",
  },
  {
    src: "/about-2.jpg",
    alt: "Imagem 2",
    price: "R$250",
    text: "Pedicure + Gel vermiz + remoção",
  },
  {
    src: "/about-3.jpg",
    alt: "Imagem 3",
    price: "R$350",
    text: "Manicure + Pedicure em 4 mãos",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-primary bg-white px-6 relative overflow-hidden gap-16"
    >
      {/* Texto no canto esquerdo */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute left-6 top-6 text-3xl font-semibold"
      >
        Serviços Popular
        <span className="border-b-2 border-primary mb-2 w-60 block"></span>
      </motion.div>

      {/* Imagens no Centro com Botão e Texto */}
      <div className="flex gap-8 justify-center mt-20">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.4)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            custom={index}
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-80 h-96 bg-white rounded-lg p-4"
          >
            {/* Imagem */}
            <div className="relative w-full h-72">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-tl-[50px] rounded-lg"
              />
              {/* Preço */}
              <NumberTicker
                className="absolute top-0 right-0 bg-white px-3 py-1 rounded-bl-md font-bold shadow"
                value={parseInt(image.price.replace(/\D/g, ""), 10)}
              >
              </NumberTicker>

              {/* Ícone de Coração */}
              <Heart className="absolute bottom-3 left-3 hover:text-red-500 cursor-pointer" size={24} />
            </div>

            {/* Texto */}
            <p className="text-center mt-4 font-medium">{image.text}</p>

            {/* Botão */}
            <button className="mt-4 w-full border border-primary py-2 rounded-full hover:bg-primary hover:text-white transition">
              Entre em contato
            </button>
          </motion.div>
        ))}
      </div>

      {/* Imagem Direita */}
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="relative w-300 h-145 self-end mt-10"
      >
        <Image
          src="/about-right.png"
          alt="Imagem direita"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* Imagem Esquerda */}
      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="relative w-300 h-145 self-start"
      >
        <Image
          src="/about-left.png"
          alt="Imagem esquerda"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </section>
  );
}
