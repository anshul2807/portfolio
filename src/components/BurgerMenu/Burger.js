import React from 'react'
import './Burger.css';
import smallletterA from '../../static/page1-img/small_letterA.svg';
function Burger() {
  return (
    <div className='burger'>
        <div className='burger__section1'>
            <div className='burger__sectio1__top'>
                <img src={smallletterA} alt="letter A"/>
                <p>nshul</p>
            </div>
            <div className='burger__sectio1__down'>
                <p>Full Stack Web Developer</p>
            </div>
        </div>
        <div className='burger__section2'>
            <ul>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>My Experience</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Burger