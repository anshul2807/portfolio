import React from 'react';
import "./Navbar.css";
import burger from '../../static/page1-img/burger.svg';
import closeburger from '../../static/page1-img/closeBurger.svg';

function Navbar({burgerState,setBurgerState}) {
  const handleBurgerState=()=>{
    setBurgerState(!burgerState);
  }
  return (
    <div className='navbar'>
        <div className='navbar__left'>
          <span>By Anshul singh</span>
        </div>
        <div className='navbar__right'>
          <img onClick={handleBurgerState} src={burgerState==true?closeburger:burger} alt="burger" />
        </div>
    </div>
  )
}

export default Navbar