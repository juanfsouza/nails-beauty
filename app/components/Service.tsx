"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "@/variants";
import { ShinyButton } from "./ui/shiny-button";

export default function Service() {
  // Pegando a rolagem da página para o efeito Parallax
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      id="service"
      className="min-h-screen flex flex-col items-center justify-center text-primary px-6 relative overflow-hidden gap-16"
    >
      {/* Imagem de fundo com efeito Parallax */}
      <motion.div
        className="absolute inset-0 bg-[url('/service-bg.png')]"
        style={{ y: parallaxY }}
      />

      {/* Desconto e Informações de Contato */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mt-10 z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-4">Promoção</h2>
        <p className="text-xl mb-4">10% DE DESCONTO NA PRIMEIRA VISITA!</p>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Seu nome" className="p-2 border border-primary rounded" />
          <input type="text" placeholder="Telefone" className="p-2 border border-primary rounded" />
          <div className="flex justify-center">
            <a href="https://wa.me/5512997812859?text=Ol%C3%A1%2C%20quero%20seu%20servi%C3%A7o!%20%F0%9F%98%80" target="_blank" rel="noopener noreferrer">
              <ShinyButton>
                Quero Saber Mais!
              </ShinyButton>
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm">Antes, se por algum motivo você não puder coparecer á sessão, ligue-nos com antecedêcia para cancelar sua reserva. Obrigado PELA compreesão!</p>
      </motion.div>
    </section>
  );
}