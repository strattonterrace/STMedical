import React from 'react'
import './Home.css'
import { Row, Col } from 'reactstrap';
import Slider from '../../Components/Slider/Slider'
import plastick from '../../Assets/Images/Plastick.png'
import orm from '../../Assets/Images/ORM1.png'




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
<Row className="Home_row1" >

  <h1></h1>
            <Col>
          <h4 className="Home_h4">
            <br/>
          What is digital advertising?
          </h4>
          <p className="Home_p">
       
          <br></br>
          <br></br>
          Call us today and take advantage of our team's knowledge! 
          </p>
        </Col>
        <Col id="Home_R1__col1" xl="4">
         <img id = "Home_img__body" src={orm} alt="Digital Advertising"/>
          </Col>
        </Row>


</div>
  )
}
export default Home;