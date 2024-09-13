import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <Link to="https://www.linkedin.com/in/inigo-esteban-gomez/">
          <img
            src="https://img.icons8.com/?size=100&id=44914&format=png&color=000000"
            alt="linkedin"
            className="media"
          />
        </Link>
        <Link to="https://github.com/inigoestebangomez">
          <img
            src="https://img.icons8.com/?size=100&id=zehXPLJSAbBB&format=png&color=000000"
            alt="github"
            className="media"
          />
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/contact-us" className="header-link">
          <span>CONTACT US</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
