import React from "react";
import './Slider.css'

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


function Slider() {
  return (

    <div className="marquee">
    <ul className="marquee-content">
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
  )





}

export default Slider;
