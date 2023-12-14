import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";
import { ThemeProvider } from "./context/ThemeContext";
import { Hobby } from "./sections/Hobby/Hobby";
import { FaUserNinja } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { FaGun, FaMusic, FaCode } from "react-icons/fa6";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeProvider>
      <Header menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      <main>
        <Intro />
        <div className="hobbies">
          <Hobby
            id={"karate"}
            title={"title"}
            description={"description"}
            icon={<FaUserNinja />}
          />
          <Hobby
            id={"sooting"}
            reverse={true}
            title={"title"}
            description={"description"}
            icon={<FaGun />}
          />
          <Hobby
            id={"dance"}
            title={"title"}
            description={"description"}
            icon={<FaMusic />}
          />
          <Hobby
            id={"cooking"}
            reverse={true}
            title={"title"}
            description={"description"}
            icon={<PiCookingPotBold />}
          />
          <Hobby
            id={"coding"}
            title={"title"}
            description={"description"}
            icon={<FaCode />}
          />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
