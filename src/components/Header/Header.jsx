import React from "react";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

import "./Header.scss";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  const { darkMode } = useTheme();

  return (
    <header className={`header ${darkMode ? "" : "light-mode"}`}>
      <Container>
        <div className="header__inner">
          <div className="burger__menu">m</div>
          <div
            className="header__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo />
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
