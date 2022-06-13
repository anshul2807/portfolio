import React from 'react';
import "./Section1.css";
import Section1Left from './Section1Left';
import Section1Right from './Section1Right';

function Section1() {

  return (
    <div className='section1'>
      
        <div className='section1__left'>
            <Section1Left />
        </div>
        <div className='section1__right'>
           
            <Section1Right />
        </div>
    </div>
  )
}

export default Section1