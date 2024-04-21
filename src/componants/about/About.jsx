import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import about_icon from "../../assets/play-icon.png"
const About = ({setPlaystate }) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={about_icon} alt="" className='play-icon'  onClick={()=>{setPlaystate(true)}}/>
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERCITY</h3>
            <h2>Nurturing Tomarrow Leaders Today</h2>
            <p>Embark on a transformative education journey with our university's comprehensive education program.Our cuttting-edge currculum is designed to empower students eith the knowledge , skill ,and experience needed to exel in the dynamic field of education </p>
            <p>with a focus on innovation ,hand-on lerning and personality mantorship ,our programs aspiring aducation to make a meaningfull impact in classrooms ,school and communities</p>
            <p>Wether you aspire to become a teacher ,asministrator, counselor, or education leader ,Our diverse range og programs offer the perfact pathway to achive your goals unlock your full potential in the shaing the future of education</p>
        </div>
    </div>
  )
}

export default About