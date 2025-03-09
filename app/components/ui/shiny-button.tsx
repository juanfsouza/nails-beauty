"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode; 
}

export function ShinyButton({ children }: ShinyButtonProps) {
  return (
    <motion.button
      className="cta"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="hover-underline-animation">{children}</span>
      <svg
        width="15px"
        height="10px"
        viewBox="0 0 13 10"
        className="arrow-icon"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </motion.button>
  );
}