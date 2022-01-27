import React from "react";
import Marquee from "react-fast-marquee";
import './ServiceSlider.css'

function ServiceSlider() {
    return (
        <Marquee speed="40" pauseOnHover={true}>
          <div className="ServiceSlider__row">
      <div className="col-sm-6 zero">
              <div className="service-slide">
                <div className="service-box">
                  <div className="service-icon-3">
                    </div>
                    <h2 className="service-name">Mobile Design
                    </h2>
                    <div className="service-text">
                      More than half your traffic is mobile. We design and build custom websites that connect with your future clients on any screen.
                      </div> 
                      <a href="/" className="ServiceSlider__button">
                        Learn More
                      </a>
                      </div>
                      </div>
              <div className="service-slide">
                <div className="service-box">
                  <div className="service-icon-1">
                    </div>
                    <h2 className="service-name">In-Depth Content
                    </h2>
                    <div className="service-text">Google rewards authority. We research your topics and consult with you to write 1,500+ word articles which build your search rank to increase organic leads.
                    </div>
                     <a href="/" className="ServiceSlider__button">
                       Learn More
                       </a>
                       </div>
                       </div>
                       <div className="service-slide">
                         <div className="service-box">
                           <div className="service-icon-4">
                             </div>
                             <h2 className="service-name">Pay Per Click
                             </h2>
                             <div className="service-text">You want to maximize your advertising dollar. We ensure a lower cost of acquisition and higher conversion rate than any other agency.
                             </div> 
                             <a href="/" className="ServiceSlider__button" tabindex="0">Learn More
                             </a>
                             </div>
                             </div>
                             <div className="service-slide">
                               <div className="service-box">
                                 <div className="service-icon-4">
                                   </div>
                                   <h2 className="service-name">Pay Per Click
                                   </h2>
                                   <div className="service-text">You want to maximize your advertising dollar. We ensure a lower cost of acquisition and higher conversion rate than any other agency.
                                   </div> 
                                   <a href="/" className="ServiceSlider__button" >Learn More
                                   </a>
                                   </div>
                                   </div>
                                    </div>
          </div>           
          </Marquee>
          )
        }

export default ServiceSlider;
