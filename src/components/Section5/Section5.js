import React, { useState } from 'react'
import './Section5.css'
import pointer from '../../static/page1-img/pointer.svg';
function Section5() {
  const [toggleJob, setToggleJob] = useState(false);
  const handleToggleJob = (flag) => {
    setToggleJob(flag);
  }
  return (
    <div className='section5'>
      <div className='section5__1'>
        <p>Where I've Worked</p>
      </div>
      <div className='section5__2'>
        <div className='section5__2__left'>
          <div className='section5__2__left__content'>
            <p onClick={() => {
              handleToggleJob(true);
            }} className={toggleJob ? 'activeJob' : 'nonactiveJob'} id="job_1">Clintx</p>
            <p onClick={() => {
              handleToggleJob(false);
            }} className={!toggleJob ? 'activeJob' : 'nonactiveJob'} id="job_2">Stewards</p>
          </div>
        </div>
        {!toggleJob ?
          <>
            <div className='section5__2__right'>
              <div className='section5__2__right__first'>
                <p>Intern  <span>@Stewards</span></p>
                <span>Dec  -  Feb  2021</span>
              </div>
              <div className='section5__2__right__second'>
                <img src={pointer} alt="" />
                <p>
                  Worked as a Android Developer Intern at STEWARDS,
                  Designed Video Player using React Native.
                </p>
              </div>
              <div className='section5__2__right__third'>
                <img src={pointer} alt="" />
                <p>
                  Learned new technology like Android studio.
                </p>
              </div>

            </div>
          </>
          :
          <>
            <div className='section5__2__right'>
              <div className='section5__2__right__first'>
                <p>Intern  <span>@Clintx</span></p>
                <span>April  -  July  2021</span>
              </div>
              <div className='section5__2__right__second'>
                <img src={pointer} alt="" />
                <p>
                  Worked as a Intern at Clintx,
                  Designed Social Media Platform using React Native for Health Sector.
                </p>
              </div>
              <div className='section5__2__right__third'>
                <img src={pointer} alt="" />
                <p>
                Worked on Web Related Technology like React JS, Node JS, And Redux.
                </p>
              </div>

            </div>
          </>
        }

      </div>

    </div>
  )
}

export default Section5