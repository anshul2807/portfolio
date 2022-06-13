import React from 'react'
import './Section2.css';
import dev from "../../static/page1-img/DEV.svg";
function Section2() {
  return (
    <div className='section2'>
        <div className='section2__left'>
          <div className='section2__left__1'>
            <p>About My Self</p>
          </div>
          <div className='section2__left__2'>
            <p>
            I am from Varanasi  and  Currently living in Dehradun.
            I am doing Bachelor’s of Technology in Computer Science
            and I will graduate in the yearr 2023.
            I am Full Stack Web Developer and Currently working as
            Freelancer.
            </p>
          </div>
          <div className='section2__left__3'>
            <a className='btn' href="https://www.linkedin.com/in/anshul-singh-070836196/">Read More</a>
          </div>
          
        </div>
        <div className='section2__right'>
          <img src={dev} alt="bg-logo"/>
        </div>
        
    </div>
  )
}

export default Section2