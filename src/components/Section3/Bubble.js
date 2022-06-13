import React from 'react';
import "./Bubble.css";
function Bubble({text,bgColor}) {
  return (
    <div className='bubble' style={{background:`${bgColor}`}}>
        {text}
    </div>
  )
}

export default Bubble