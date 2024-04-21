import React, { useState } from "react";
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/hero/Hero";
import Programs from "./componants/programs/Programs";
import Title from "./componants/title/Title";
import About from "./componants/about/About";
import Campus from "./componants/campus/Campus";
import Testimonial from "./componants/testimonial/Testimonial";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/footer/Footer";
import Videoplayer from "./componants/videoPlayer/Videoplayer";
const App = () => {
  const [playstate , setPlaystate] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title = "What We offer"/>
        <Programs  />
        <About setPlaystate ={setPlaystate}/>
        <Title subTitle="Gallary" title = "campus photo"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title = "whats Student Say"/>
        <Testimonial/>
        <Title subTitle="Contact Us" title = "Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>     
      <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  );
};

export default App;
