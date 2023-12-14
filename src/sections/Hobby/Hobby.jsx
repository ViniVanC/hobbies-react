import React from "react";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Description } from "../../components/Description/Description";
import { useTheme } from "../../context/ThemeContext";
import "./Hobby.scss";

export const Hobby = ({ id, title, description, icon, reverse = false }) => {
  const { darkMode } = useTheme();

  return (
    <section
      id={id}
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
          <div className="hobby__icon-box">
            <div className="big-icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
            <div className="icon">{icon}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
