import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import './Slider.css'


function Slider() {
  return (
<Marquee>
    <div className="Slider">
    <ul className="Slider-content">
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

export default Slider;
