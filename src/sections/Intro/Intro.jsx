import React from "react";
import { Container } from "../../components/Container/Container";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode, FaRegHand } from "react-icons/fa6";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <div className="intro__inner">
          <div className="intro__text-box">
            <div className="intro__title">
              <FaRegHand className="hi-anim" /> мене звати{" "}
              <a href="#" target="_blank">
                Віні
              </a>
            </div>
            <div className="intro__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              necessitatibus.
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