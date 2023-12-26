import React from 'react';
import './Hero.css';
import hand_icon from '../../Assets/hand_icon.png';
import arrow_icon from '../../Assets/arrow.png';
import hero_image from '../../Assets/hero_image.png';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEEW ARIVALS ONLY </h2>
          <div>
            <div className='hero-hand-icon'>
              <p>new</p>
              <img src={hand_icon} alt="" />
            </div>
            <p className='p1'>collection</p>
            <p className='p'>for everyone</p>
          </div>
          <div className='hero-latest-btn'>
            <div>LATEST COLLECTION</div>
            <img src={arrow_icon} alt="" />
          </div>
          {/* <div className="hero_title">
            <p className="text">
              new <img className="hero_img" src={hand_icon} alt="" />{' '}
            </p>
            <p>collection</p>
            <p>for everyone</p>
          </div>
          <button className="hero-latest-btn">
            Latest Collection
            <img src={arrow_icon} alt="" />
          </button> */}
        </div>


        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
