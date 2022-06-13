import React, { useEffect } from 'react'
import './Section1Left.css';
import smallLetterA from '../../static/page1-img/small_letterA.svg'
import { useTypewriter } from 'react-simple-typewriter'
function Section1Left() {
  const {text} = useTypewriter({
    words: [ " Welcome to my Portfolio.","I\'m coding Enthusiastic","Also a FreeLancer."],
    loop: 3, 
    typeSpeed: 150,
    deleteSpeed: 80,
    delaySpeed: 1000
    });
  // useEffect(()=>{
    // let ele1=document.querySelector(".section1left_1 p");
    // let ele2=document.querySelectorAll(".section1left_2 span");
    // let ele3=document.querySelector(".section1left_3 p");

    // ele1.innerHTML=ele1.textContent.replace(/\S/g,"<span>$&</span>");
    // ele2[0].innerHTML=ele2[0].textContent.replace(/\S/g,"<span>$&</span>");
    // ele2[1].innerHTML=ele2[1].textContent.replace(/\S/g,"<span>$&</span>");
    // ele3.innerHTML=ele3.textContent.replace(/\S/g,"<span>$&</span>");
    
    // let letter1=document.querySelectorAll(".section1left_1 p span");
    // let letter2=document.querySelectorAll(".section1left_2 .section1left_2__1 span");
    // let letter3=document.querySelectorAll(".section1left_2 .section1left_2__2 span");
    // let letter4=document.querySelectorAll(".section1left_3 p span");
    // let letter=[];
    // for(let i=0;i<letter1.length;i++)letter.push(letter1[i]);
    // for(let i=0;i<letter2.length;i++)letter.push(letter2[i]);
    // for(let i=0;i<letter3.length;i++)letter.push(letter3[i]);
    // for(let i=0;i<letter4.length;i++)letter.push(letter4[i]);
    
    // for(let i=0;i<letter.length;i++){
    //   letter[i].addEventListener("mouseover",function(){
    //     letter[i].classList.add("active");
    //   });
    // }
    

    // console.log(letter);
    
    
  // },[]);
  return (
    <div className='section1left'>
      <div className='section1left_1'>
        <p>HELLO,</p>
      </div>
      <div className='section1left_2'>
        <span className='section1left_2__1'>I'm </span>
        <img src={smallLetterA} alt="letter A"/>
        <span className='section1left_2__2'>nshul,</span>
      </div>
      <div className='section1left_3'>
        <p>
           {text}
           <span>_</span> 
        </p>
      </div>
      
    </div>
  )
}

export default Section1Left