import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better aducation for a better word</h1>
            <p>Our cutting-edge currculm is designed to empower students with the knoledge, skills,ans experiences needed to exel in the dynimic field fo edcation</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero