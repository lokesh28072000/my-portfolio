import React from 'react'
import './About.css'
import whatsapp from '../assets/1.png'
import linkedin from '../assets/2.png'
import github from '../assets/3.png'
import insta from '../assets/4.png'

const About = () => {
  return (
    <>   
    <div className="aboutSection">    
        <h1>
          About Me

        </h1>
      <p>I’m a dynamic Software Developer with 2.7 years of professional experience, including 2 years dedicated to building web-based applications. I specialize in JavaScript, ReactJS, MySQL, and MongoDB, with a strong focus on delivering scalable, high-performance solutions.

Known for being a fast learner and an efficient problem-solver, I thrive in environments that challenge me to adapt and innovate. I take pride in writing clean, efficient code and building applications that offer both functionality and seamless user experiences.

With a keen interest in emerging technologies and industry trends, I’m constantly refining my skills and staying ahead of the curve. I’m passionate about creating software that not only works — but works well, efficiently, and intuitively</p>
   </div>
   <div className='about-social-img'>
    <a href=""><img src={github} alt="insta logo" /></a>
        
    <a href=""><img src={whatsapp} alt="insta logo" /></a>

    <a href=""><img src={linkedin} alt="insta logo" /></a>

    <a href=""><img src={insta} alt="insta logo" /></a>

   </div>
    </>
  )
};

export default About