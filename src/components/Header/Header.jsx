import React from "react";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__logo" onClick={() => console.log("hi")}>
            <Logo />
          </div>
        </div>
      </Container>
    </header>
  );
};
