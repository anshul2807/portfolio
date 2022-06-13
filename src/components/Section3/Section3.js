import React from 'react'
import './Section3.css';
import Bubble from './Bubble';
function Section3() {
  return (
    <div className='section3'>
        <div className='section3__left'>
            <div className='section3__left__1'>
                <p>What I do</p>
            </div>
            <div className='section3__left__2'>
                <p>
                    Since Adobe Flash was a complete innovation, 
                    alongside with CSS 1.0 and HTML 4.01 as 
                    standards of the current web I've been 
                    passionate about web.                
                </p>
            </div>
            <div className='section3__left__3'>
                <a href="https://github.com/anshul2807/" className='btn'>GitHub</a>
            </div>
        </div>
        <div className='section3__right'>
            <div className='section3__right__1'>
                <Bubble bgColor="linear-gradient(180deg, rgba(243, 72, 72, 0.81) 0%, rgba(230, 155, 242, 0.81) 100%)" 
                text="Node js" />
            </div>
            <div className='section3__right__2'>
                <Bubble bgColor="linear-gradient(180deg, rgba(72, 202, 243, 0.81) 0%, rgba(230, 155, 242, 0.81) 100%)" 
                text="Socket.io" />
                <Bubble bgColor="linear-gradient(180deg, rgba(99, 54, 226, 0.81) 0%, rgba(223, 109, 238, 0.81) 99.99%, rgba(216, 22, 22, 0.81) 100%)"  
                text="SCSS" />
            </div>
            <div className='section3__right__3'>
                <Bubble bgColor="linear-gradient(180deg, rgba(77, 254, 95, 0.81) 0%, rgba(202, 217, 28, 0.81) 100%)" 
                text="React js" />
            </div>
            <div className='section3__right__4'>
                <Bubble bgColor="linear-gradient(180deg, rgba(255, 126, 6, 0.81) 0%, rgba(211, 75, 75, 0.81) 100%)" 
                text="JAVA" />
                <Bubble bgColor="linear-gradient(180deg, rgba(243, 72, 72, 0.81) 0%, rgba(242, 197, 155, 0.81) 100%)" 
                text="SQL" />
            </div>
            <div className='section3__right__5'>
                <Bubble bgColor="linear-gradient(180deg, rgba(75, 243, 72, 0.81) 0%, rgba(230, 155, 242, 0.81) 100%)" 
                text="MongoDB" />
            </div>
            
        </div>
    </div>
  )
}

export default Section3