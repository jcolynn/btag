import React from 'react';
import MediaQuery from 'react-responsive';

import "./footer.css";

export default function Footer() {
  return (
    <div>
      <MediaQuery minWidth={960} >
        <footer>  
          <div className="top">
            {/* Navigation */}
            <div className="link_box">
              <a href="/signup">Create an Account</a>
              <a href="/#whatis">How TAG Works</a>
              <a href="/contactus">Contact Us</a>
            </div>
            
            {/* Footer Logo */}
            <div className="logo_box">
              <img className="logo" src={require('../../imgs/footer_logo.png')} alt="logo" />
            </div>

            {/* Social Icon Box */}
            <div className="social_box">
              <span id="social_icon">  
              <a href="https://www.facebook.com/tagurus/"><i className="fab fa-facebook"></i></a>
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
      </MediaQuery>
    </div>
  )
}
