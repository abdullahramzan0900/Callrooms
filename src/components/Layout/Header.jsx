import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header'>
      <div className='left-sec'>
        <span><AiTwotoneHome/> / Dashboard</span>
        <h3>Dashboard</h3>
      </div>
      <div className='right-sec'>
        <span>A</span>
      </div>
    </div>
  )
}

export default Header