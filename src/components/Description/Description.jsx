import React from "react";
import { motion } from "framer-motion";
import "./Description.scss";

export const Description = ({ children }) => {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 1 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="description"
    >
      {children}
    </motion.p>
  );
};
