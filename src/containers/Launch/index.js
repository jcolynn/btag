import React, { Component } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './launch.css';
import logo from '../../imgs/logo_blue.png';

export default class Launch extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="block1"> 
          {/*<img src={logo} alt="Main Color Logo" />*/}
        </div>
        <div id="block2">  
          <p><strong>DOWNLOAD THE APP</strong></p> 
          <div id="copy_txt"><strong>TAG</strong> makes it easy to find temps from multiple agencies in one place. Download the app and get to work!</div>
        </div>
        <div id="block3">
        </div>
        <div id="block4">
        </div>
        <div id="block5">
          <p><strong>TEMPORARY STAFFING</strong></p>   
        </div>
        <div id="btn_block">
          <p>See the difference <strong>TAG</strong> can make in your office.</p>
          <button>Let's Get Started</button>
        </div>
        <div id="block7">
          <p><strong>HIRING EMPLOYERS</strong></p>
        </div>
        <div id="btn_block">
          <p><strong>TAG</strong> makes finding staff simple.</p>
          <button>Let's Get Started</button>
        </div>
        <Footer />
      </div>
    )
  }
}
