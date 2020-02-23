import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
