import React from "react";
import "./Footer.css";
import Logo from "../../img/logoSuite2.png";
import { IconContext } from "react-icons";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { PiTelegramLogoBold } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="b-top" />
      <div className="footer">
        <div className="footer-left">
          <img src={Logo} alt="" className="footer-img" />
          <div className="footer-detail">
            Join us in shaping the next era of the internet,
            where innovation knows no bounds and every click writes a new
            chapter in the evolution of technology.
          </div>
        </div>
        <div className="footer-right">
          <div className="links-f">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <div className="s-route">Home</div>
            </Link>

            <Link to="product" spy={true} smooth={true}>
              <div className="s-route">Product</div>
            </Link>
            <Link to="about" spy={true} smooth={true}>
              <div className="s-route">About</div>
            </Link>
            <Link to="team" spy={true} smooth={true}>
              <div className="s-route">Team</div>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <div className="s-route">Get in Touch</div>
            </Link>
          </div>
          <div className="footer-sm">
            <IconContext.Provider
              value={{
                size: "1.4em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div className="footer-icon">
                <BiLogoLinkedin />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "1.4em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div className="footer-icon">
                <BsInstagram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "1.4em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div className="footer-icon">
                <BsTwitter />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                size: "1.4em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div className="footer-icon">
                <PiTelegramLogoBold />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="b-top" />
      <div
        className="footer-detail"
        style={{ fontSize: 12, margin: "10px auto 20px", textAlign: "center" }}
      >
        All Rights Reserved 2023 @ 3Suite
      </div>
    </>
  );
};

export default Footer;
