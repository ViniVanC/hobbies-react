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

const data = [
  {
    id: 1,
    name: "karate",
    title: "title",
    description: "description",
    icon: <FaUserNinja />,
  },
  {
    id: 2,
    name: "sooting",
    title: "title",
    description: "description",
    icon: <FaGun />,
  },
  {
    id: 3,
    name: "dance",
    title: "title",
    description: "description",
    icon: <FaMusic />,
  },
  {
    id: 4,
    name: "cooking",
    title: "title",
    description: "description",
    icon: <PiCookingPotBold />,
  },
  {
    id: 5,
    name: "coding",
    title: "title",
    description: "description",
    icon: <FaCode />,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    setMenuOpen(false);
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
          {data.map(({ id, name, title, description, icon }) => (
            <Element key={id} name={name}>
              <Hobby
                title={title}
                description={description}
                icon={icon}
                reverse={id % 2 === 0 ? true : false}
              />
            </Element>
          ))}
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
