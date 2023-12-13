import React from "react";
import { Container } from "../Container/Container";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="copyright">
            Author:{" "}
            <a href="https://t.me/rixkml_01" target="_blank">
              rixkml_01
            </a>
            <br />
            <span className="hidden">
              True developer:{" "}
              <a href="https://github.com/ViniVanC" target="_blank">
                Vincent Van
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
