import React from 'react'
import './Home.css'
import { Row, Col } from 'reactstrap';
import Slider from '../../Components/Slider/Slider'
import ServiceSlider from '../../Components/ServiceSlider/ServiceSlider'
import { InlineWidget } from "react-calendly";
import plastick from '../../Assets/Images/Plastick.png'
import orm from '../../Assets/Images/ORM1.png'
import seo from '../../Assets/Images/Seo.png'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'


const Home = () => {
  return (
    <div className="Home">
          <div className="Home__Banner">
          <h1 className = "Home__h1">Medical Marketing <br/> & Website Design <br/>
            <span className="emphasis-1">Technology-lead marketing that delivers unparalleled results.</span> 
          </h1>
          <a href = "#more">
      <img id = "Home__img" src={plastick} alt="Home art"/> </a>
    </div>
<Slider />
<Row className="Home__row" >
            <Col>
          <h4 id = "more" className="Home__h4">
            Grow Your Practice Now!
          </h4>
          <p className="Home__p">
          With a focus on continuous innovation, ST Medical offers the healthcare industry's premier all-in-one growth platform specifically designed for healthcare providers.
          <br/>
          <br/>
          Call us today and take advantage of our team's knowledge! 
          </p>
          <button id='Home__row1__button' href='/'>
              Read More</button>
        </Col>
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={orm} alt="Digital Advertising"/>
          </Col>
        </Row>
        <div className="Home__Section__2">
        <Row className="Home__row__2" >
        <h2 className="Home__h2">
         SEARCH ENGINE OPTIMIZATION
          </h2>
        </Row>
        <Row className="Home__row" >
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={seo} alt="Digital Advertising"/>
          </Col>
            <Col>
          <h4 className="Home__h4_Section2">
          MEDICAL SEO
          </h4>
          <p className="Home__p">
          Local Search Engine Optimization (SEO), is the process of affecting the visibility of a website or a web page in a search engine’s “natural” or un-paid (“organic”) search results in a given geography.
          </p>
          <button id='Home__row1__button' href='/'>
              Read More</button>
          </Col>
          </Row>
          </div>
          <Row className="Home__row__2" >
        <h2 className="Home__h2">
        Full-Service Modernization
          </h2>
        </Row>
        <Row className="Home__row__3" >
        <Col id="Home__R2__col2" xl="4">
        <InlineWidget url="https://calendly.com/strattonterrace/30min" />
          </Col>
            <Col>
          < ServiceSlider />
          </Col>
          </Row>
          <GetInTouch />
</div>

  )
}




export default Home;