import React, { useState } from "react";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";
import "./MenuSidebar.scss";

export const MenuSidebar = ({
  menuOpen,
  handleMenuOpen,
  activeSection,
  handleSetActive,
}) => {
  const { darkMode } = useTheme();

  return (
    <nav
      className={`menu-sidebar ${menuOpen ? "menu-open" : ""} ${
        darkMode ? "" : "light-mode"
      }`}
    >
      <header className="menu-sidebar__header">
        <MdClose className="menu-btn" onClick={handleMenuOpen} />
      </header>

      <ul className="menu-sidebar__list">
        <li className="menu-sidebar__item">
          <Link
            to="karate"
            smooth={true}
            spy={true}
            activeClass={activeSection === "karate" ? "active" : ""}
            onSetActive={() => handleSetActive("karate")}
          >
            <FaUserNinja /> <span>Карате</span>
          </Link>
        </li>
        <li className="menu-sidebar__item">
          <Link
            to="sooting"
            smooth={true}
            spy={true}
            activeClass={activeSection === "sooting" ? "active" : ""}
            onSetActive={() => handleSetActive("sooting")}
          >
            <FaGun /> <span>Стрільба</span>
          </Link>
        </li>
        <li className="menu-sidebar__item">
          <Link
            to="dance"
            smooth={true}
            spy={true}
            activeClass={activeSection === "dance" ? "active" : ""}
            onSetActive={() => handleSetActive("dance")}
          >
            <FaMusic /> <span>Танці</span>
          </Link>
        </li>
        <li className="menu-sidebar__item">
          <Link
            to="cooking"
            smooth={true}
            spy={true}
            activeClass={activeSection === "cooking" ? "active" : ""}
            onSetActive={() => handleSetActive("cooking")}
          >
            <PiCookingPotBold /> <span>Куховарство</span>
          </Link>
        </li>
        <li className="menu-sidebar__item">
          <Link
            to="coding"
            smooth={true}
            spy={true}
            activeClass={activeSection === "coding" ? "active" : ""}
            onSetActive={() => handleSetActive("coding")}
          >
            <FaCode /> <span>Програмування</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
