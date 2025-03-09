"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function Hero() {
  const [title, setTitle] = useState("Realce sua beleza com unhas impecáveis!");
  const [description, setDescription] = useState(
    "Transforme suas unhas com um toque de elegância e sofisticação. Agende seu horário e tenha uma experiência única de manicure profissional!"
  );
  const [buttonText, setButtonText] = useState("Agende seu horário");

  // Estados para mostrar a borda e o ícone ao passar o mouse
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  // Pegando a rolagem da página para o efeito Parallax
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Carrega os valores salvos no LocalStorage ao carregar a página
  useEffect(() => {
    setTitle(localStorage.getItem("heroTitle") || title);
    setDescription(localStorage.getItem("heroDescription") || description);
    setButtonText(localStorage.getItem("heroButtonText") || buttonText);
  }, []);

  // Salva os valores no LocalStorage ao editar
  const handleBlur = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-start text-white px-6 relative overflow-hidden bg-[#FAF3F2]"
    >
      {/* Imagem de fundo com efeito Parallax */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero.png')] bg-center bg-cover"
        style={{ y: parallaxY }}
      />

      <Navbar />

      <div className="mb-50 max-w-2xl text-left ml-15 relative z-10">
        {/* Título editável */}
        <motion.h1
          className={`text-5xl font-bold text-white leading-tight outline-none cursor-text relative transition-all ${
            hoveredField === "title" ? "border border-pink-300 p-2 rounded-md" : ""
          }`}
          contentEditable
          onBlur={(e) => handleBlur("heroTitle", e.currentTarget.textContent || "")}
          suppressContentEditableWarning
          onMouseEnter={() => setHoveredField("title")}
          onMouseLeave={() => setHoveredField(null)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
          {hoveredField === "title" && (
            <span className="absolute top-[-25px] right-[-30px] text-sm bg-pink-300 text-white px-2 py-1 rounded-md">
              📝 Editar
            </span>
          )}
        </motion.h1>

        {/* Descrição editável */}
        <motion.p
          className={`mt-4 text-lg text-white font-bold outline-none cursor-text relative transition-all ${
            hoveredField === "description" ? "border border-pink-300 p-2 rounded-md" : ""
          }`}
          contentEditable
          onBlur={(e) => handleBlur("heroDescription", e.currentTarget.textContent || "")}
          suppressContentEditableWarning
          onMouseEnter={() => setHoveredField("description")}
          onMouseLeave={() => setHoveredField(null)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {description}
        </motion.p>

        {/* Botão */}
        <InteractiveHoverButton className="mt-6">{buttonText}</InteractiveHoverButton>
      </div>
    </section>
  );
}
