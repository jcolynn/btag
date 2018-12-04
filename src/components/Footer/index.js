import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>  
        <div class="top">
          {/* Left Links */}
          <div class="link_box">
            <p id="links">Create an Account</p>
            <p id="links">How TAG Works</p>
            <p id="links">Contact Us</p>
          </div>
          
          {/* Footer Logo */}
          <div class="logo_box">
            <img class="logo" src={require('../../imgs/logo_white.png')} alt="logo" />
          </div>
          {/* Social Icon Box */}
          <div class="social_box">
            <span id="social_icon">  
              <i class="fab fa-facebook"></i>
            </span>
            <span id="social_icon">  
              <i class="fab fa-twitter-square"></i>
            </span>
            <span id="social_icon">  
              <i class="fab fa-linkedin"></i>
            </span>
          </div>
        </div>

        {/* Copyright Info Footer */}
        <div class="bottom">
          <span class="copyright"><i class="far fa-copyright"></i></span>
          <span class="foot_font"> 2018, Temporary Assistance Guru. All Rights Reserved. | Terms of Use | Privacy Policy</span>
        </div>
      </footer>
    </div>
  )
}
