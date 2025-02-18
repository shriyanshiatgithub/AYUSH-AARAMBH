import React from 'react'
import './About.css'
import Image from 'next/image'

import about1 from '../../../public/assets/about1.jpg'
import playicon1 from '../../../public/assets/playicon1.png'  

const About = ({setPlayState}) => {
  return (
    <div className='about'id='about'>
        <div className='about-left'>
            <Image src={about1} alt="" className='about1'/>
            <Image src={playicon1} alt="" className='playicon' onClick={()=>{setPlayState(true)}}/> 
        </div>
        <div className='about-right'>
            <h3>ABOUT</h3>
            <h2>MINISTRY OF AYUSH</h2>
            <p>The Ministry of AYUSH promotes and regulates traditional medicine systems in India, including Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homoeopathy. It sets standards for education, practice, and manufacturing, ensuring quality and efficacy. The Ministry collaborates with research bodies like the Central Council for Research in Ayurvedic Sciences to advance these ancient practices and integrates them into public health programs. By fostering a balanced approach that combines modern and traditional medicine, the Ministry aims to enhance the nation’s health and wellness.</p>
        
        </div>
    </div>
  )
}

export default About
