import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hat from "../images/hat.png";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 785) {
      // Valor en px del eje Y, desde donde aparecerá el header
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${isFixed ? "fixed" : ""}`}>
      <span className="title-red">
        COOL
        <img src={hat} alt="logo" className="logo" />
        <span className="title-green">MEX</span>
      </span>
      <div className="header-links">
        <Link to="/menu" className="header-link">
          <span>MENU</span>
        </Link>
        <Link to="/location" className="header-link">
          <span>HOURS & LOCATION</span>
        </Link>
        <Link to="/our-story" className="header-link">
          <span>OUR STORY</span>
        </Link>
        <Link to="/reservations" className="header-reservations">
          <span>RESERVATIONS</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
