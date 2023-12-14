import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";
import { ThemeProvider } from "./context/ThemeContext";

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
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
