import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";
import { ThemeProvider } from "./context/ThemeContext";
import { Hobby } from "./sections/Hobby/Hobby";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode } from "react-icons/fa6";
import { Element } from "react-scroll";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <ThemeProvider>
      <Header
        menuOpen={menuOpen}
        handleMenuOpen={handleMenuOpen}
        activeSection={activeSection}
        handleSetActive={handleSetActive}
      />
      <main>
        <Intro handleSetActive={handleSetActive} />
        <div className="hobbies">
          <Element name={"karate"}>
            <Hobby
              title={"title"}
              description={"description"}
              icon={<FaUserNinja />}
            />
          </Element>
          <Element name={"sooting"}>
            <Hobby
              reverse={true}
              title={"title"}
              description={"description"}
              icon={<FaGun />}
            />
          </Element>
          <Element name={"dance"}>
            <Hobby
              title={"title"}
              description={"description"}
              icon={<FaMusic />}
            />
          </Element>
          <Element name={"cooking"}>
            <Hobby
              reverse={true}
              title={"title"}
              description={"description"}
              icon={<PiCookingPotBold />}
            />
          </Element>
          <Element name={"coding"}>
            <Hobby
              title={"title"}
              description={"description"}
              icon={<FaCode />}
            />
          </Element>
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
