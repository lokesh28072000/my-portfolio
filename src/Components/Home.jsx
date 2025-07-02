import React from 'react'
import "../App.css"
import "./Home.css"
import Homeimg from '../assets/hi friends from lokesh.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-main-div'>
      <div className='home-div-c1'>
        <h1>Hello👋,<br/>This is Lokesh, <br/>I'm a Professional <br></br>Frontend Developer</h1>
        <Link to="/Contact"><button>Contact Me!</button></Link> 
        <button>Download Resume</button>
      </div>
      <div className='home-img'><img src={Homeimg} alt="hi friends from lokesh"  /></div>
      <div>
       
      </div>
    </div>
  )
}

export default Home