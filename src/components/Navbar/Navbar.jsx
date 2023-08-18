import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../img/logoSuite.png";
const navbar = () => {
  return (
    <div>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
            <img
              src={Logo}
              alt=""
              className="logo-img"
              width={120}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="product" spy={true} smooth={true}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="team" spy={true} smooth={true}>
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
