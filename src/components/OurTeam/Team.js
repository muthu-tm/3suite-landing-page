import React from "react";
import "./team.css";
import T1 from "../../img/team1.jpg";
import T2 from "../../img/team2.jpg";
import T3 from "../../img/team3.jpg";
import { IconContext } from "react-icons";
import { BiLogoLinkedin } from "react-icons/bi";

function Team() {
  return (
    <section id="team" class="team content-section">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h2 className="team-head">Meet the Minds</h2>
            <h3 class=" team-para ">
            At 3Suite, we're a passionate team of creators, innovators, and tech enthusiasts who have come together to revolutionize the world of NFTs and digital art. With diverse backgrounds and a shared love for technology and creativity, we're on a mission to transform the way artists, developers, and collectors interact in the digital realm.
            </h3>
          </div>

          <div class="container">
            <div class="team-row">
              <div class="cont">
                <div class="team-member">
                  <figure className="img-cont">
                    <img src={T3} alt="" class="img-responsive" />
                  </figure>
                  <div className="team-name">Muthu Thavamani</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="designation">Founder</p>
                    <IconContext.Provider
                      value={{
                        size: "1.4em",
                        color: "#fff",
                        className: "global-class-name",
                      }}
                    >
                      <div style={{marginLeft:8,marginTop:5}} className="li-bg">
                        <BiLogoLinkedin />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>

              <div class="cont">
                <div class="team-member">
                  <figure className="img-cont">
                    <img src={T2} alt="" class="img-responsive" />
                  </figure>
                  <div className="team-name">Vaishnvai</div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="designation">Frontend Developer</p>
                    <IconContext.Provider
                      value={{
                        size: "1.4em",
                        color: "#fff",
                        className: "global-class-name",
                      }}
                    >
                      <div style={{marginLeft:8,marginTop:5}} className="li-bg">
                        <BiLogoLinkedin />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>

              <div class="cont">
                <div class="team-member">
                  <figure className="img-cont">
                    <img src={T1} alt="" class="img-responsive" />
                  </figure>
                  <div className="team-name">Terry Fletcher</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="designation">Web Developer</p>
                    <IconContext.Provider
                      value={{
                        size: "1.4em",
                        color: "#fff",
                        className: "global-class-name",
                      }}
                    >
                      <div style={{marginLeft:8,marginTop:5}} className="li-bg">
                        <BiLogoLinkedin />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
