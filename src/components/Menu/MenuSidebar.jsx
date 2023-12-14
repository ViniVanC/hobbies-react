import React from "react";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import "./MenuSidebar.scss";

export const MenuSidebar = ({ menuOpen, handleMenuOpen }) => {
  return (
    <nav className={`menu-sidebar ${menuOpen ? "menu-open" : ""}`}>
      <header className="menu-sidebar__header">
        <MdClose className="menu-btn" onClick={handleMenuOpen} />
      </header>

      <ul className="menu-sidebar__list">
        <li className="menu-sidebar__item">
          <FaUserNinja /> <span>Карате</span>
        </li>
        <li className="menu-sidebar__item">
          <FaGun /> <span>Стрільба</span>
        </li>
        <li className="menu-sidebar__item">
          <FaMusic /> <span>Танці</span>
        </li>
        <li className="menu-sidebar__item">
          <PiCookingPotBold /> <span>Куховарство</span>
        </li>
        <li className="menu-sidebar__item">
          <FaCode /> <span>Програмування</span>
        </li>
      </ul>
    </nav>
  );
};
