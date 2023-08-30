import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../img/vectorLogo.png";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className="nav-sticky-cont">
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
            <img
              src={Logo}
              alt=""
              className="logo-img"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="n-right">
          <div className="n-list" onClick={(e) => e.stopPropagation()}>
            <ul
              style={{ listStyleType: "none" }}
              className={click ? "nav-menu active" : "nav-menu"}
            >
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
            <button
              className="button n-button"
              style={{ padding: 10, fontSize: 12 }}
            >
              Get In Touch
            </button>
          </Link>
          {click && (
            <div className="scroll-nav">
              <ul
                style={{ listStyleType: "none" }}
                className="mob-nav"
              >
                <li >
                  <Link activeClass="active" to="home" spy={true} smooth={true} onClick={Close}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="product" spy={true} smooth={true} onClick={Close}>
                    Products
                  </Link>
                </li>
                <li >
                  <Link to="about" spy={true} smooth={true} onClick={Close}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="team" spy={true} smooth={true} onClick={Close}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="mob-view-cta">
            <div className="nav-icon" onClick={handleClick}>
              {click ? (
                <IconContext.Provider
                  value={{
                    size: "1.7em",
                    color: "#fff",
                    style: { marginLeft: "15px", marginTop: 5 },
                    className: "global-class-name",
                  }}
                >
                  <div>
                    {" "}
                    <RiCloseFill />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: "1.3em",
                    color: "#fff",
                    style: { marginLeft: "15px", marginTop: 5 },
                    className: "global-class-name",
                  }}
                >
                  <div>
                    {" "}
                    <GiHamburgerMenu />
                  </div>
                </IconContext.Provider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
