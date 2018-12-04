import React from 'react'
import './header.css';


export default function Header() {
  return (
    <div> 
      <header>  
        <div id="left_links">
          <a href="http://localhost:3000" class="header_link">HOME</a>
          <a href="http://localhost:3000" class="header_link">CONTACT US</a>
        </div>
        <img class="head_logo" src={require("../../imgs/logo_white.png")} alt="White Colored Logo"/>
        <div id="right_links">
          <a href="http://localhost:3000" class="header_link">LOGIN</a>
        </div>
      </header>
    </div>
  )
}
