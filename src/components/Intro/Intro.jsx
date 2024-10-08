import React, { useContext } from "react";
import "./Intro.css";
import Logo from "../../img/short-logo.png";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

const Intro = () => {
  return (
    <div className="bg" id="home">
    
    <ScrollContainer >
      <ScrollPage >
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))} style={{width:"100%"}}>
         
            <ScrollAnimation animateIn="fadeIn" delay={0.4}>
              <div className="intro-sec">
                <img src={Logo} alt="" className="logo-sq" />
                <div style={{ position: "relative" }}>
                  <div className="intro-head">
                    Coding the Future, Reshaping the Digital Landscape
                  </div>
                  <div className="highlight" />
                </div>
                <div className="into-para">
                  Welcome to the forefront of digital innovation, where Web3
                  converges with cutting-edge technology to redefine the
                  possibilities of digital world. Join us in shaping the next
                  era of the internet, where innovation knows no bounds and
                  every click writes a new chapter in the evolution of
                  technology.
                </div>
                {/* <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Get In Touch</button>
        </Link> */}
              </div>
            </ScrollAnimation>
     
        </Animator>
      </ScrollPage>
    </ScrollContainer>
 
    </div>
  );
};

export default Intro;
