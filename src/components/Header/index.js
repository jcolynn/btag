import React from 'react'
import './header.css';
import logo_white from '../../imgs/people_white.png';

export default function Header() {
  return (
    <div>
      <header>  
        <img src={logo_white} alt="White Colored Logo"/>
      </header>
    </div>
  )
}
