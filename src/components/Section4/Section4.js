import React from 'react';
import './Section4.css';
import Card from './Card';
import moreLogo from '../../static/page1-img/drop_down.svg';
function Section4() {
  const handleRotation=(e)=>{
    let logo=e.target;
    logo.classList.add("rotateLogo");
    setTimeout(()=>{
      logo.classList.remove("rotateLogo");
    },1000)
    
  }
  return (
    <div className='section4'>
        <div className='section4__1'>
          <p>Major Project's</p>
        </div>
        <div className='section4__2'>
          <Card title="React js and Firebase" desc="Instagram Clone" color="#54B0F2"/>
          <Card title="React js, Node js and MongoDb" desc="FAQ Chat Bot" color="#54B0F2"/>
          <Card title="Node js and Socket.io" desc="Active Chat 
Monitoring App." color="#54B0F2"/>
          <Card title="React js and API" desc="Covid-19 Tracker" color="#FF4BCD"/>
          <Card title="HTML, CSS and Node js" desc="Online Web Editor" color="#FF4BCD"/>
          <Card title="React js and Styled Component’s" desc="Advanced Note
App." color="#FF4BCD"/>
        </div>
        <div className='section4__3'>
          <a href="https://github.com/anshul2807?tab=repositories">
            <img onClick={handleRotation} src={moreLogo} alt="more" />
          </a>
        </div>
        
    </div>
  )
}

export default Section4