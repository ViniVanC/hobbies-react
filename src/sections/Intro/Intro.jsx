import React from "react";
import { Container } from "../../components/Container/Container";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode, FaRegHand } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import "./Intro.scss";

export const Intro = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`intro ${darkMode ? "" : "light-mode"}`}>
      <Container>
        <div className="intro__inner">
          <div className="intro__text-box">
            <div className="intro__title">
              <FaRegHand className="hi-anim" /> мене звати{" "}
              <a href="https://t.me/rixkml_01" target="_blank">
                Ріта
              </a>
            </div>
            <div className="intro__description">
              <p>Тут я розповім про свої захоплення</p>
              <p className="help-text">
                клікни по будь-якій іконці щоб дізнатись про мої хобі
              </p>
            </div>
          </div>
          <div className="intro__pictures">
            <div className="picture">
              <FaUserNinja />
            </div>
            <div className="picture">
              <FaGun />
            </div>
            <div className="picture">
              <FaMusic />
            </div>
            <div className="picture">
              <PiCookingPotBold />
            </div>
            <div className="picture">
              <FaCode />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
