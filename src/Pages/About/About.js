import React from 'react'
import './About.css'
import { Row, Col } from 'reactstrap';
import website from '../../Assets/Images/website.png'
import about from '../../Assets/Images/about.png'



const About = () => {
  return (
    <div className="About">

        <Row className="About__row" >
        <Col id="About__R1__col1" xl="4">
         <img id = "About_img__body" src={website} alt="Lake Elsinore PMU"/>
          </Col>
            <Col>
          <h1 className="About__h1">
          MISSION & VALUES
          </h1>
          <p className="About__p">
          Our mission is to make a significant contribution to the world by creating services and products that help nice doctors finish first.
          </p>
          <br></br>
          <h2 className="About__h2__2">
          QUALITY & INNOVATION
          </h2>
          <p className="About__p">
          ST Medical will continue to be synonymous with both quality and thought leadership. Our services and products, and the cultural values they embody, blend elegance and innovation. ST Medical prides itself on combining the the most bleeding edge technology and strategies to constantly innovate for our customer’s advancement.
          All ST Medical team members are entrepreneurs at heart and our business of choice is yours. We strive to find a way through barriers in our path. We are tenacious when it comes to ensuring your long-term success.          </p>
          <Col id="About__R2__col1" xl="6">
          <img id = "About_img__body" src={about} alt="Lake Elsinore PMU"/>
          </Col>
          <Col id="About__R2__col2" xl="6">
          <div>
            <h5 className="About__h5"> <strong>Education</strong>
            </h5>
            <h3 className="About__h3">
            Microblading 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              11.09.2020</p>
                </div>
                <h3 className="About__h3">
                Powder Brows 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              03.15.2021</p>
                <h3 className="About__h3">
                Lip Blush Online Training With Shay Danielle Academy</h3>
              <p id="About__p__1"> 
              08.20.2021</p>
                <h3 className="About__h3">
                Lip Blush 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              10.27.2021</p>
              <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
              <button id='About__row1__button' href='/'>
              Book Now</button>
              </a>
          </Col>

          </Col>
          </Row>
      
    </div>
  )
}
export default About;