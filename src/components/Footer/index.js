import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>  
        <div>
          {/* Left Links */}

          {/* Footer Logo */}

          {/* Social Icon Box */}
          <div>
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
        <div>
          <span class="copyright"><i class="far fa-copyright"></i></span>
          <span class="foot_font"> 2018, Temporary Assistance Guru. All Rights Reserved. | Terms of Use | Privacy Policy</span>
        </div>
      </footer>
    </div>
  )
}
