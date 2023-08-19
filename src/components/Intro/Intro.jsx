import React, { useContext } from "react";
import "./Intro.css";
import Logo from "../../img/Logo.jpg";
import { Link } from "react-scroll";


const Intro = () => {
  return (
    <div className="bg" id="home">
    <div className="intro-sec">
      <img src={Logo} alt="" className="logo-sq" />
      <div style={{position:'relative'}}>
      <div className="intro-head">Welcome to this fuckin boring shit</div>
      <div className="highlight" />
      </div>
      <div className="into-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum numquam blanditii! Provident similique
        accusantium nemo autem.
      </div>
      <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Get In Touch</button>
        </Link>
    </div>
    </div>
  );
};

export default Intro;
