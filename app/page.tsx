"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import { Contact } from "lucide-react";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de 3 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="relative bg-[#EFD5D2] h-screen w-screen">
      {isLoading ? (
        <div className="absolute mt-96 inset-0 flex items-center justify-center transition-all z-50">
          <div id="global">
            <div id="top" className="mask">
              <div className="plane"></div>
            </div>
            <div id="middle" className="mask">
              <div className="plane"></div>
            </div>
            <div id="bottom" className="mask">
              <div className="plane"></div>
            </div>
            <p className="p mt-2 font-bold">Carregando...</p>
          </div>
        </div>
      ) : (
        // CONTEÚDO DA PÁGINA APÓS O LOADING
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Hero />
          <About />
          <Service />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
