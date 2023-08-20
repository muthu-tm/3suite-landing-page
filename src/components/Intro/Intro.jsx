import React, { useContext } from "react";
import "./Intro.css";
import Logo from "../../img/logo.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="bg" id="home">
      <div className="intro-sec">
        <img src={Logo} alt="" className="logo-sq" />
        <div style={{ position: "relative" }}>
          <div className="intro-head">
            Coding the Future, Tokenizing the Present
          </div>
          <div className="highlight" />
        </div>
        <div className="into-para">
          We're not just creating an NFT platform – we're building a movement
          that celebrates the convergence of art and technology. This is a place
          where Code meets Collectible Creativity. Together, let's redefine the
          digital art landscape and shape a future where creativity knows no
          bounds.
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Get In Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
