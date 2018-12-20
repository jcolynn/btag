import React from 'react'
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import './header.css';


export default function Header() {

  return (
    <div> 
      <header>  
        <MediaQuery minWidth={960}>
          <img className="head_logo" src={require("../../imgs/logo_white.png")} alt="White Colored Logo"/>
        </MediaQuery>
        
        <MediaQuery maxWidth={960}>
          <img className="head_logo" src={require("../../imgs/logo_white.png")} alt="White Colored Logo"/>
          <Menu right width={ '100%'}>
            <a id="home" className="menu-item" href="/">Home</a>
          </Menu>
        </MediaQuery>
      </header>
    </div>
  )
}
