import React from "react";
import Marquee from "react-fast-marquee";
import './ServiceSlider.css'

function ServiceSlider() {
    return (
        <Marquee speed="20" pauseOnHover={true}>
            <div className="">
            <ul className="">
              <li><i className="fab fa-github"></i></li>
              <li><i className="fab fa-codepen"></i></li>
              <li><i className="fab fa-free-code-camp"></i></li>
              <li><i className="fab fa-dev"></i></li>
              <li><i className="fab fa-react"></i></li>
              <li><i className="fab fa-vuejs"></i></li>
              <li><i className="fab fa-angular"></i></li>
              <li><i className="fab fa-node"></i></li>
              <li><i className="fab fa-wordpress"></i></li>
              <li><i className="fab fa-aws"></i></li>
              <li><i className="fab fa-docker"></i></li>
              <li><i className="fab fa-android"></i></li>
            </ul>
          </div>
        
          </Marquee>
          )
        }

export default ServiceSlider;
