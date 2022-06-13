import React, { useEffect,useRef} from 'react'
import './Section1Right.css';
import letterA from '../../static/page1-img/letterA.svg'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function Section1Right() {
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);

  useEffect(() => {
    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "rotation",
      onDragEnd() {
        
      }
    });
  }, []);
  return (
    <div className='section1right'>
        <img ref={dragTarget} src={letterA} alt="letter A"/>
    </div>
  )
}

export default Section1Right