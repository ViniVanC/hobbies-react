import React from "react";
import { Container } from "../../components/Container/Container";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode, FaRegHand } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Intro.scss";

export const Intro = ({ handleSetActive }) => {
  const { darkMode } = useTheme();

  return (
    <section className={`intro ${darkMode ? "" : "light-mode"}`}>
      <Container>
        <div className="intro__inner">
          <div className="intro__text-box">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="intro__title"
            >
              <FaRegHand className="hi-anim" /> мене звати{" "}
              <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                href="https://t.me/rixkml_01"
                target="_blank"
              >
                Ріта
              </motion.a>
            </motion.div>
            <div className="intro__description">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Тут я розповім про свої захоплення
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="help-text"
              >
                клікни по будь-якій іконці щоб дізнатись про мої хобі
              </motion.p>
            </div>
          </div>
          <div className="intro__pictures">
            <Link
              className="picture"
              to="karate"
              smooth={true}
              spy={true}
              onSetActive={() => handleSetActive("karate")}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaUserNinja />
              </motion.div>
            </Link>
            <Link
              className="picture"
              to="sooting"
              smooth={true}
              spy={true}
              onSetActive={() => handleSetActive("sooting")}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaGun />
              </motion.div>
            </Link>
            <Link
              className="picture"
              to="dance"
              smooth={true}
              spy={true}
              onSetActive={() => handleSetActive("dance")}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaMusic />
              </motion.div>
            </Link>
            <Link
              className="picture"
              to="cooking"
              smooth={true}
              spy={true}
              onSetActive={() => handleSetActive("cooking")}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <PiCookingPotBold />
              </motion.div>
            </Link>
            <Link
              className="picture"
              to="coding"
              smooth={true}
              spy={true}
              onSetActive={() => handleSetActive("coding")}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaCode />
              </motion.div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
