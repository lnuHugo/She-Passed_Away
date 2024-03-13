import { useState, useEffect } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";


function App() {
  const images = [
    "/assets/10214.jpg",
    "/assets/she_past_away.jpg",
    "/assets/she-past-away-1492561173.37.2560x1440.jpg",
    "/assets/shepastaway.jpg",
  ];

  return <>
    <div className="">
      <h1>She past away</h1>
      <ImageSlider images={images} />
    </div>
  </>;
};

export default App;
