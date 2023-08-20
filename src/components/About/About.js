import React from "react";
import "./about.css";
import Mission from "../../img/IdioticAlienatedEnglishpointer-unscreen.gif";
import Vision from "../../img/vission.png";
import QuotesOpen from "../../img/openQuotes.png";
import QuotesClose from "../../img/openQuotes.png";

function About() {
  return (
    <div className="abt-sec" id="about">
      <div className="mission">
        <div  className="mv-cont">
          <div className="quote">
            <img src={QuotesOpen} alt="" className="mv-quote" />

            <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>
              Vision
            </div>
          </div>
          <div className="mv-para" style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </div>
        </div>
        <img src={Mission} alt="" className="mv-img" />
      </div>
      <div style={{ marginTop: 55 }} />
      <div className="vision">
        <img src={Vision} alt="" className="mv-img" />
        <div className="mv-cont">
        <div className="quote">
            <img src={QuotesClose} alt="" className="mv-quote" />
          <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>Mission</div></div>
          <div className="mv-para" style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
