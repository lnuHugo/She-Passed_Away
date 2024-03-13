import React from "react";
import { useState, useEffect } from "react";
import "../Popup.css";
import TextComponent from "./TextComponent";

export const Popup = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  let popupContent;

  switch (data) {
    case "about":
      popupContent = <TextComponent />;
      break;
    case "shop":
      popupContent = <div>Shop Content</div>;
      break;
    default:
      popupContent = <div>Ingen matchande data hittades</div>;
  }

  return (
    <div className="popup-div">
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            {popupContent}
            <button onClick={closePopup}>Stäng popup</button>
          </div>
        </div>
      )}
    </div>
  );
};
