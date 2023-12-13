import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./sections/Intro/Intro";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </>
  );
}

export default App;
