import React from 'react'
import "./Card.css";
import more from '../../static/page1-img/drop_down.svg';
function Card({color,title,desc}) {
  const handleRotation=(e)=>{
    console.log(e.target);
    let logo=e.target;
    logo.classList.add("rotationLogo");
    setTimeout(()=>{
      logo.classList.remove("rotationLogo");
    },1000)
  }
  return (
    <div className='card' style={{borderTop:`4px solid ${color}`}}>
        <div className='card__1'>
          <p style={{color:`${color}`}}>{title}</p>
        </div>
        <div className='card__2'>
          <p>{desc}</p>
        </div>
        <div className='card__3'>
          <img onClick={handleRotation} src={more} alt="more" />
        </div>
        
    </div>
  )
}

export default Card