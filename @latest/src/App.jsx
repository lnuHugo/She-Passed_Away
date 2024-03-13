import "./App.css";
import "./Header.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Popup } from "./components/Popup";

function App() {
  return (
    <>
      <Header />
      <Popup data="about"></Popup>

      <Footer />
    </>
  );
}

export default App;
