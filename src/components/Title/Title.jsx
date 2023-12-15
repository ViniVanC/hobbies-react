import React from "react";
import { motion } from "framer-motion";
import "./Title.scss";

export const Title = ({ children }) => {
  return (
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="title"
    >
      {children}
    </motion.h3>
  );
};
