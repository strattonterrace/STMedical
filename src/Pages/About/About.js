import React from 'react'
import './About.css'
import { Row, Col } from 'reactstrap';
import website from '../../Assets/Images/website.jpg'
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
            <h5 className="About__h5"> <strong>Our Values</strong>
            </h5>
              <p id="About__p__1"> 
              We believe that without trust, you have nothing.
              </p>
                </div>
              <p id="About__p__1"> 
              We believe that details matter.
              </p>
              <p id="About__p__1"> 
              We believe in the simple, not the complex.
              </p>
              <p id="About__p__1"> 
              We believe in focus.
              </p>
              <p id="About__p__1"> 
              We believe whatever we choose to do on Earth, we put our all into.
              </p>
              <p id="About__p__1"> 
              We believe in hiring people that have knowledge in many areas, which allows us to innovate in a way that others cannot.
              </p>
              <p id="About__p__1"> 
              We do not settle for anything less than excellence, and we have the self-honesty to admit when we’re wrong and the courage to change.
              </p>

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