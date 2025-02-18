/* eslint-disable no-unused-vars */
import { GiMagnifyingGlass } from "react-icons/gi";
import React from 'react'
import './Programs.css'
import Image from 'next/image'

import viewdashboard from '../../../public/assets/viewdashboard.jpg'
import exploreforms from '../../../public/assets/exploreforms.jpg'
import uploadfile from '../../../public/assets/uploadfile.jpg'

const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className='program'>
        <Image src={viewdashboard} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass size={70}  />
            <p>VIEW DASHBOARD</p>
        </div>
      </div>
      <div className='program'>
        <Image src={exploreforms} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass  size={70} />
            <p>EXPLORE FORMS</p>
        </div>
      </div>
      <div className='program'>
        <Image src={uploadfile} alt="" />
        <div className='icon'>
            <GiMagnifyingGlass  size={70} />
            <p>UPLOAD FILES </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
