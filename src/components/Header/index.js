import React from 'react'
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import './header.css';


export default function Header() {

  return (
    <div> 
      <header>  
        <MediaQuery minWidth={960}>
          <div className="menu-box"> 
            <a id="home" className="menu-item-full" href="/">HOME</a>
            <a id="contactus" className="menu-item-full" href="/contactus">CONTACT US</a>
          </div>
          <div className="logo-box">
            <img className="head_logo" src={require("../../imgs/logo_white.png")} alt="White Colored Logo"/>
          </div>
          <div className="menu-box right">
            <a id="login" className="menu-item-full" href="/login">LOGIN</a>
          </div>
        </MediaQuery>
        
        <MediaQuery maxWidth={960}>
          <img className="head_logo" src={require("../../imgs/logo_white.png")} alt="White Colored Logo"/>
          <Menu right width={ '100%'}>
            <a id="home" className="menu-item" href="/">HOME</a>
            <a id="contactus" className="menu-item" href="/contactus">CONTACT US</a>
            <a id="login" className="menu-item" href="/login">LOG IN</a>
            <hr/>
            <a id="signup" className="menu-itSem" href="/signup">CREATE AN ACCOUNT</a>
            <a id="whatistag" className="menu-item" href="/#whatis">HOW TAG WORKS</a>
          </Menu>
        </MediaQuery>
      </header>
    </div>
  )
}
