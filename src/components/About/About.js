import React from "react";
import "./about.css";
import Mission from "../../img/target_3064635.png";
import Vision from "../../img/vision_2421425.png";
import QuotesOpen from "../../img/darkQuote.png";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <div className="abt-sec" id="about">
      <ScrollAnimation
        animateIn="bounceInLeft"
        animateOut="bounceOutRight"
        delay={0.5}
      >
        <div className="mission">
          <div className="mv-cont">
            <div className="quote">
              <img src={QuotesOpen} alt="" className="mv-quote" />

              <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>
                Vision
              </div>
            </div>
            <div className="mv-para" style={{ width: "100%" }}>
              In building Web3 products that prioritize consistency and
              problem-solving, we are not only creating platforms – we are
              building bridges between users and the transformative potential of
              blockchain technology. Our vision is to establish an ecosystem
              where users feel supported, informed, and empowered to navigate
              the complexities of blockchain. By merging design excellence with
              practical utility, we are shaping the future of blockchain
              interaction, one user-friendly website at a time.
            </div>
          </div>

          <img src={Mission} alt="" className="mv-img" />
        </div>
      </ScrollAnimation>

      <div style={{ marginTop: 55 }} />
      <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutLeft"
        delay={0.5}
      >
        <div className="vision">
          <img src={Vision} alt="" className="mv-img" />

          <div className="mv-cont">
            <div className="quote">
              <img src={QuotesOpen} alt="" className="mv-quote" />
              <div className="mv-head" style={{ marginLeft: 8, marginTop: 8 }}>
                Mission
              </div>
            </div>
            <div className="mv-para" style={{ width: "100%" }}>
              Our core objective is to serve as a beacon for innovative problem
              solving and insightful brainstorming within the realm of
              blockchain technology. By offering a hub for sharing ideas,
              troubleshooting challenges, and exploring new avenues, we aspire
              to propel the evolution of blockchain technology and its
              applications. Our mission is to inspire individuals to think
              critically, creatively brainstorm solutions, and collectively
              contribute to the advancement of this digital world.
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
