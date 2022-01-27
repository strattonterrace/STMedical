import React from "react";
import Marquee from "react-fast-marquee";
import './ServiceSlider.css'

function ServiceSlider() {
    return (
        <Marquee speed="50" pauseOnHover={true}>
          <div className="ServiceSlider__row">
      <div className="col-sm-6 zero">
              <div class="service-slide" 
              onclick="window.location.href='//';" 
              data-uw-styling-context="true">
                <div class="service-box" data-uw-styling-context="true">
                  <div class="service-icon-3" data-uw-styling-context="true">
                    </div>
                    <h2 class="service-name" data-uw-styling-context="true">Mobile Design
                    </h2>
                    <div class="service-text" data-uw-styling-context="true">
                      More than half your traffic is mobile. We design and build custom websites that connect with your future clients on any screen.
                      </div> 
                      <a href="/" class="button" tabindex="-1" data-uw-styling-context="true">
                        Learn More
                      </a>
                      </div>
                      </div>
              <div class="service-slide">
                <div class="service-box">
                  <div class="service-icon-1">
                    </div>
                    <h2 class="service-name">In-Depth Content
                    </h2>
                    <div class="service-text">Google rewards authority. We research your topics and consult with you to write 1,500+ word articles which build your search rank to increase organic leads.
                    </div>
                     <a href="/" class="button" tabindex="-1">
                       Learn More
                       </a>
                       </div>
                       </div>




                       </div>
          </div>        
          </Marquee>
          )
        }

export default ServiceSlider;
