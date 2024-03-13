import Header from './components/Header';
import Footer from './components/Footer';
import { Popup } from "./components/Popup";
import ImageSlider from "./components/ImageSlider";
import './App.css';
import './Header.css';
import { useState, useEffect } from "react";

function App() {
  const images = [
    "/assets/10214.jpg",
    "/assets/she_past_away.jpg",
    "/assets/she-past-away-1492561173.37.2560x1440.jpg",
    "/assets/shepastaway.jpg",
  ];
  
  return (
    <>

      <Header />
    <Popup data="about"></Popup>
        <div className="">
      <h1>She past away</h1>
      <ImageSlider images={images} />
    </div>

      <Footer />

    </>
  );
}

export default App;
