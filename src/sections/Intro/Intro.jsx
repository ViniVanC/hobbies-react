import React from "react";
import { Container } from "../../components/Container/Container";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode, FaRegHand } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import "./Intro.scss";

export const Intro = ({ handleSetActive }) => {
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
              <Link
                to="karate"
                smooth={true}
                spy={true}
                onSetActive={() => handleSetActive("karate")}
              >
                <FaUserNinja />
              </Link>
            </div>
            <div className="picture">
              <Link
                to="sooting"
                smooth={true}
                spy={true}
                onSetActive={() => handleSetActive("sooting")}
              >
                <FaGun />
              </Link>
            </div>
            <div className="picture">
              <Link
                to="dance"
                smooth={true}
                spy={true}
                onSetActive={() => handleSetActive("dance")}
              >
                <FaMusic />
              </Link>
            </div>
            <div className="picture">
              <Link
                to="cooking"
                smooth={true}
                spy={true}
                onSetActive={() => handleSetActive("cooking")}
              >
                <PiCookingPotBold />
              </Link>
            </div>
            <div className="picture">
              <Link
                to="coding"
                smooth={true}
                spy={true}
                onSetActive={() => handleSetActive("coding")}
              >
                <FaCode />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
