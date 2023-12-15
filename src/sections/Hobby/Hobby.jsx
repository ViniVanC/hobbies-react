import React from "react";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Description } from "../../components/Description/Description";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./Hobby.scss";

export const Hobby = ({ name, title, description, icon, reverse = false }) => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`hobby ${reverse ? "reverse" : ""} ${
        darkMode ? "" : "light-mode"
      }`}
    >
      <Container>
        <div className="hobby__inner">
          <div className="hobby__text-box">
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
          <div className="hobby__img-box">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              src={`/assets/images/${name}.jpg`}
              alt={`${name} image`}
            />
          </div>
          <div className="hobby__icon-box">
            <div className="big-icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 2.4 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="icon">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 2.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {icon}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
