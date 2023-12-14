import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
