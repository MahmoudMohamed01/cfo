import React from "react";
import { useState } from "react";
import logo from "../assets/CFO_Factory.png";
import silverLogo from "../assets/silver.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const check = () => {
    return isOpen ? false : true;
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="logos">
            <div className="gold-logo">
              <img srcSet={logo} alt=".." />
            </div>
            <div className="silver-logo glow-effect">
              <img srcSet={silverLogo} alt=".." />
              <span className="lightning"></span>
            </div>
          </div>
          <div className="menu" onClick={() => setIsopen(check)}>
            <i class="fa-solid fa-bars fa-xl" style={{ color: "#e9ae33" }}></i>
          </div>
          <ul className={`nav ${isOpen && "open"}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/programs">Programs</NavLink>
            </li>

            <li>
              <NavLink to="/contact"> Contact us</NavLink>
            </li>

            <div className="silver-logo glow-effect">
              <img srcSet={silverLogo} alt=".." />
              <span className="lightning"></span>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
