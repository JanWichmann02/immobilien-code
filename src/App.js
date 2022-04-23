import React, { useState, useEffect, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import Über from "./pages/Über";
import Aktuell from "./pages/Aktuell";
import Immobilien from "./pages/Immobilien";
import Kontakt from "./pages/Kontakt";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aktuell" element={<Aktuell />} />
        <Route path="/immobilien" element={<Immobilien />} />
        <Route path="/über" element={<Über />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
