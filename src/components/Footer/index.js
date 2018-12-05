import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>  
        <div className="top">
          {/* Left Links */}
          <div className="link_box">
            <p id="links">Create an Account</p>
            <p id="links">How TAG Works</p>
            <p id="links">Contact Us</p>
          </div>
          
          {/* Footer Logo */}
          <div className="logo_box">
            <img className="logo" src={require('../../imgs/logo_white.png')} alt="logo" />
          </div>
          {/* Social Icon Box */}
          <div className="social_box">
            <span id="social_icon">  
              <i className="fab fa-facebook"></i>
            </span>
            <span id="social_icon">  
              <i className="fab fa-twitter-square"></i>
            </span>
            <span id="social_icon">  
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>

        {/* Copyright Info Footer */}
        <div className="bottom">
          <span className="copyright"><i className="far fa-copyright"></i></span>
          <span className="foot_font"> 2018, Temporary Assistance Guru. All Rights Reserved. | Terms of Use | Privacy Policy</span>
        </div>
      </footer>
    </div>
  )
}
