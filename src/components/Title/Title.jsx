/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import React from 'react'
import './Title.css'

const Title = ({subtitle,Title}) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{Title}</h2>
      
    </div>
  )
 
}
 // Add prop-types validation
 Title.propTypes = {
    subtitle: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
 }
export default Title
