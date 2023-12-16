import React from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import "./Description.scss";
import remarkGfm from "remark-gfm";

export const Description = ({ children }) => {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className="description"
    >
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </motion.p>
  );
};
