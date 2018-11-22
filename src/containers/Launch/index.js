import React, { Component } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './launch.css';

export default class Launch extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="block1">   
        </div>
        <div id="block2">   
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
