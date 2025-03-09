"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviço", href: "#servico" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [dotPosition, setDotPosition] = useState(0);
  const [dotVisible, setDotVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-center transition-all duration-300 z-20 ${
        isScrolled ? "bg-primary/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="Picture of the author"
        className="absolute left-10 text-white text-2xl font-bold cursor-pointer"
      />

      {/* Links */}
      <div className="relative flex gap-10">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={(e) => {
              const buttonWidth = e.currentTarget.offsetWidth;
              const buttonLeft = e.currentTarget.offsetLeft;
              setDotPosition(buttonLeft + buttonWidth / 2 - 4);
              setDotVisible(true);
            }}
            onMouseLeave={() => setDotVisible(false)}
          >
            <Link href={item.href}>
              <Button
                variant="ghost"
                className="relative cursor-pointer hover:bg-transparent text-white text-lg font-bold transition-all duration-200 ease-in-out hover:text-pink-300"
              >
                {item.name}
              </Button>
            </Link>
          </motion.div>
        ))}
        {/* Dot Indicator */}
        <motion.div
          className="absolute bottom-0 w-2 h-2 bg-pink-300 rounded-full transition-all duration-200"
          animate={{ x: dotPosition, opacity: dotVisible ? 1 : 0 }}
        />
      </div>
    </motion.nav>
  );
}
