import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonial = () => {
    const slide = useRef()
    let tx = 0
    const nextSlider = ()=>{
     if(tx > -50){
        tx = -25
     }
     slide.current.style.transform = `translateX(${tx}%)`
    }
    const backSlider = ()=>{
        if(tx < 0){
            tx = + 25
         }
         slide.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={nextSlider} />
      <img src={back_icon} alt="" className="back-btn" onClick={backSlider} />
      <div className="slider">
        <ul ref={slide}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willam Jaskson</h3>
                  <span>Edisity ,USA</span>
                </div>
              </div>
              <p> Chossing to pursue my degree at Edusity was one of the best decision I've ever made the supporting community ,state-of-the-art facillity,and community to academic excellece have truly exceeded my expecttation</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Willam Jaskson</h3>
                  <span>Edisity ,USA</span>
                </div>
              </div>
              <p> Chossing to pursue my degree at Edusity was one of the best decision I've ever made the supporting community ,state-of-the-art facillity,and community to academic excellece have truly exceeded my expecttation</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Willam Jaskson</h3>
                  <span>Edisity ,USA</span>
                </div>
              </div>
              <p> Chossing to pursue my degree at Edusity was one of the best decision I've ever made the supporting community ,state-of-the-art facillity,and community to academic excellece have truly exceeded my expecttation</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Willam Jaskson</h3>
                  <span>Edisity ,USA</span>
                </div>
              </div>
              <p> Chossing to pursue my degree at Edusity was one of the best decision I've ever made the supporting community ,state-of-the-art facillity,and community to academic excellece have truly exceeded my expecttation</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonial;
