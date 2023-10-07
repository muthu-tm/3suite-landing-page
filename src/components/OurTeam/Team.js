import React from "react";
import "./team.css";
import T2 from "../../img/team2.jpg";
import T3 from "../../img/team3.jpg";
import { IconContext } from "react-icons";
import { BiLogoLinkedin } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";

function Team() {
  // https://www.linkedin.com/in/vaishnaviramashanmugam/

  const moveLinkedIn = async (link) => {
    window.open(link, "_blank");
  };
  return (
    <section id="team" class="team content-section">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h2 className="team-head">Meet the Minds</h2>
            <h3 class=" team-para ">
              We are a group of innovators, tech enthusiastics and enterprenurs
              who have come togethre to revolutionize the digital world with
              cutting-edge technologies like Blockchain, AI, IOT., With a
              diverse backgrounds and a shared love for techmolody and
              innovation, we're on a mission to transferm the future of digital
              realm
            </h3>
          </div>

          <div class="container">
            <div class="team-row">
              <ScrollAnimation
                animateIn="flipInY"
                animateOut="flipOutY"
                delay={0.6}
              >
                <div class="cont">
                  <div class="team-member">
                    <figure className="img-cont">
                      <img src={T3} alt="" className="img-responsive1" />
                    </figure>
                    <div className="team-name">Muthu Thavamani</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <p className="designation">Founder</p>
                      <IconContext.Provider
                        value={{
                          size: "1.4em",
                          color: "#fff",
                          className: "global-class-name",
                        }}
                      >
                        <div
                          style={{ marginLeft: 8, marginTop: 5 }}
                          className="li-bg"
                          onClick={() =>
                            moveLinkedIn(
                              "https://www.linkedin.com/in/muthu-thavamani/"
                            )
                          }
                        >
                          <BiLogoLinkedin />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div class=" team-desc ">
                      A Lead Blockchain Engineer and Architect with 8 years of
                      experience including Golang, Solidity, Nodejs (Javascript)
                      and EVM chains. Having more than 3 years of experience in
                      Web3 product development and 4+ years of experience in the
                      startup environment.
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="flipInY"
                animateOut="flipOutY"
                delay={0.6}
              >
                <div class="cont">
                  <div class="team-member">
                    <figure className="img-cont">
                      <img src={T2} alt="" className="img-responsive2" />
                    </figure>
                    <div className="team-name">Vaishnvai</div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <p className="designation">Frontend Developer</p>
                      <IconContext.Provider
                        value={{
                          size: "1.4em",
                          color: "#fff",
                          className: "global-class-name",
                        }}
                      >
                        <div
                          style={{ marginLeft: 8, marginTop: 5 }}
                          className="li-bg"
                          onClick={() =>
                            moveLinkedIn(
                              "https://www.linkedin.com/in/vaishnaviramashanmugam/"
                            )
                          }
                        >
                          <BiLogoLinkedin />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div class=" team-desc ">
                      A Senior Web3 Engineer with around 3 years of experience
                      in Web3 and DApps product development; Having strong
                      FrontEnd development skills like ReactJs, Nextjs, Redux
                      and Web3 integration.
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
