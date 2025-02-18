/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css';
import Link from "next/link";

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>AYUSH-AARAMBH: A STARTUP INITIATIVE</h1>
        <p>Register Now and take your first step towards making a Healthier Bharat</p>
        <Link href='/login' passHref>
          <button className='btns'>
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
