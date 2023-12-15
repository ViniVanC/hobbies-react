import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.scss";

const variants = {
  rotate: {
    rotate: [0, 360],
    transition: { duration: 0.5 },
  },
  stop: {
    rotate: [0, 360],
    transition: { duration: 0.5 },
  },
};

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      className="theme__btn"
      onClick={toggleTheme}
      variants={variants}
      animate={darkMode ? "rotate" : "stop"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </motion.div>
  );
};
