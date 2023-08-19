import React from 'react'
import "./team.css"
import T1 from "../../img/team1.jpg"
import T2 from "../../img/team2.jpg"
import T3 from "../../img/team3.jpg"

function Team() {
  return (

    <section id="team" class="team content-section">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h2 className='team-head'>Meet our Tech Wizards</h2>
            <h3 class=" team-para ">Meet the people who make awesome stuffs in 3Suite</h3>
          </div>
    
          <div class="container">
            <div class="team-row">
    
              <div class="cont">
                <div class="team-member">
                  <figure className='img-cont'>
                    <img src={T3} alt="" class="img-responsive"/>
                    <figcaption>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.</p>
                      <ul>
                        <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                      </ul>
                    </figcaption>
                  </figure>
                  <div className='team-name'>Muthu Thavamani</div>

                  <p className='designation'>Founder</p>
                </div>
              </div>
    
              <div class="cont">
                <div class="team-member">
                  <figure className='img-cont'>  
                    <img src={T2} alt="" class="img-responsive"/>
                    <figcaption>
                      <p>Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.</p>
                      <ul>
                        <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                      </ul>
                    </figcaption>
                  </figure>
                  <div className='team-name'>Vaishnvai</div>

                  <p  className='designation'>Frontend Developer</p>
                </div>
              </div>
    
              <div class="cont">
                <div class="team-member">
                  <figure className='img-cont'>
                    <img src={T1} alt="" class="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      <ul>
                        <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i class="fa fa-linkedin fa-2x"></i></a></li>
                      </ul>
                    </figcaption>
                  </figure>
                  <div className='team-name'>Terry Fletcher</div>
                  <p  className='designation'>Web Developer</p>
                </div>
              </div>
    
    
            </div>
          </div>
    
        </div>
      </div>
    </section>
  )
}

export default Team
