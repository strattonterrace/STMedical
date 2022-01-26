import React from 'react'
import './Home.css'
import plastick from '../../Assets/Images/Plastick.png'
import Slider from '../../Components/Slider/Slider'


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



  </div>
  )
}
export default Home;