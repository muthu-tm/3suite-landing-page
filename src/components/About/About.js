import React from "react";
import "./about.css";
import Mission from "../../img/IdioticAlienatedEnglishpointer-unscreen.gif";
import Vision from "../../img/vission.png";
import QuotesOpen from "../../img/darkQuote.png";
import QuotesClose from "../../img/openQuotes.png";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IconContext } from "react-icons";

function About() {
  return (
    <div className="abt-sec" id="about">
      <div className="mission">
        <div className="mv-cont">
          <div className="quote">
            <img src={QuotesOpen} alt="" className="mv-quote" />

            <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>
              Vision
            </div>
          </div>
          <div className="mv-para" style={{ width: "100%" }}>
            We are committed to providing artists with a platform that not only
            showcases your creations but also empowers them to monetize their
            talents in unprecedented ways. We believe that by tokenizing digital
            art and creating a bridge between artists and collectors, we can
            revolutionize the way creativity is valued in the digital age.
          </div>
        </div>
        <IconContext.Provider
          value={{
            size: "10em",
            color: "#3fa45a",
            className: "global-class-name",
          }}
        >
          <div className="mv-img">
            <TbTargetArrow />
          </div>
        </IconContext.Provider>
        {/* <img src={Mission} alt="" className="mv-img" /> */}
      </div>
      <div style={{ marginTop: 55 }} />
      <div className="vision">
        {/* <img src={Vision} alt="" className="mv-img" /> */}
        <IconContext.Provider
          value={{
            size: "10em",
            color: "#3fa45a",
            className: "global-class-name",
          }}
        >
          <div className="mv-img">
            <HiOutlineLightBulb />
          </div>
        </IconContext.Provider>
        <div className="mv-cont">
          <div className="quote">
            <img src={QuotesOpen} alt="" className="mv-quote" />
            <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>
              Mission
            </div>
          </div>
          <div className="mv-para" style={{ width: "100%" }}>
            Our mission is to redefine the digital art landscape through the
            seamless integration of technology, creativity, and community. We
            are driven by the belief that every piece of digital art is a
            masterpiece waiting to be discovered, cherished, and shared.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
