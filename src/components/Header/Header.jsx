import React from "react";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { MenuButton } from "../Menu/MenuButton";
import { MenuSidebar } from "../Menu/MenuSidebar";
import "./Header.scss";

export const Header = ({
  menuOpen,
  handleMenuOpen,
  activeSection,
  handleSetActive,
}) => {
  const { darkMode } = useTheme();

  return (
    <header className={`header ${darkMode ? "" : "light-mode"}`}>
      <Container>
        <div className="header__inner">
          <MenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
          <MenuSidebar
            menuOpen={menuOpen}
            handleMenuOpen={handleMenuOpen}
            activeSection={activeSection}
            handleSetActive={handleSetActive}
          />
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
