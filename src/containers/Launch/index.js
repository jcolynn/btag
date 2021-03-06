import React, { Component } from 'react'
import { navigate } from '@reach/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './launch.css';


export default class Launch extends Component {
  render() {
    return (
      <div>
        <Header type="hire" />

        {/* Hero Card */}
        <div id="hero"> 
          <div>
            <img src={require('../../imgs/logo_blue.png')} alt="Main Color Logo" />
            <h1><strong>TEMPORARY ASSISTANCE GURU</strong></h1>
            <p>Connecting temp agencies to hiring businesses.</p>
          </div>
          <div className="btn_container"> 
            <button onClick={() => navigate('/signup')}>I'M A TEMP AGENCY</button>
            <button onClick={() => navigate('/signup')}>I WANT TO HIRE</button>
          </div>
        </div>

        {/* App Card */}
        <div id="app_card">  
          <p><strong>DOWNLOAD THE APP</strong></p> 
          <div id="copy_txt"><strong>TAG</strong> makes it easy to find temps from multiple agencies in one place. Download the app and get to work!</div>
          <div id="store_buttons">
            <img src={require('../../imgs/apple.png')} alt="Apple Store Link" />
            <img src={require('../../imgs/google.png')} alt="Google Play Store Link" />
          </div>
        </div>

        {/* Review Cards */}
        <div id="review_card">
          <img src={require('../../imgs/guy_review.jpg')} alt="Guy Review" className="round_img blue"/>
          <div className="review_contents bluetext"> 
            <div className="info"> 
              <h5>Jack, 27</h5>
              <h6><em>Company Name</em></h6>
            </div>
            <blockquote>
            <span>&#10077;</span>Before I found TAG, I was managing as many as seven different agencies to fill my needs. 
              Now, I can still work with multiple agencies, but managing is easy because they’re all in one place.<span>&#10078;</span>
            </blockquote>
          </div>
        </div>

        <div id="review_card" className="review-bg">
          <div className="review_contents"> 
            <div className="info"> 
              <h5>Emily, 21</h5>
              <h6><em>Company Name</em></h6>
            </div>
            <blockquote>
              <span>&#10077;</span>With TAG, I can find more jobs for my business and my customers like the interface and how easy is is to use.<span>&#10078;</span>
            </blockquote>
          </div>
          <img src={require('../../imgs/girl_review.png')} alt="Girl Review" className="round_img white mob-border"/>
        </div>


        <div id="whatis" className="expo_card">
          <h3>TEMPORARY STAFFING</h3>
          <div id="container">
            <div id="frame"> 
              <img src={require('../../imgs/phone_notify.png')} alt="Phone Icon" />
              <p>Cut down on sales cost by having orders sent directly to your phone.</p>
            </div>
            <div id="frame"> 
              <img src={require('../../imgs/building_loc.png')} alt="Building Icon" />
              <p>Get multiple orders daily by companies in need in your immediate area.</p>
              
            </div>  
            <div id="frame"> 
              <img src={require('../../imgs/clipboard_gear.png')} alt="Clipboard Icon" />
              <p>Manage and accept complete or partial orders and see credit reports and billing information.</p>
            </div>  
            <div id="frame"> 
              <img src={require('../../imgs/message_icon.png')} alt="Chat Icon" />
              <p>Chat feature allows questions to be asked and answered daily.</p>
            </div>
          </div>
        </div>

        {/*Seperator */}
        <div className="join_card">
          <p>See the difference <strong>TAG</strong> can make in your office.</p>
          <button onClick={() => navigate('/signup')}>Let's Get Started</button>
        </div>


        <div className="expo_card">
          <h3>HIRING EMPLOYERS</h3>
          <div id="container">
            <div id="frame"> 
              <img src={require('../../imgs/building_loc.png')} alt="Building Icon" />
              <p>Easily access a city's worth of temporary workers with the click of a button. Bill rate is set by city, no more negotiating bill rates.</p>
            </div>
            <div id="frame"> 
              <img src={require('../../imgs/clipboard_check.png')} alt="Clipboard Icon" />
              <p>Place one order and multiple companies can accept in real time.</p> 
            </div>  
            <div id="frame"> 
              <img src={require('../../imgs/stars.png')} alt="Stars Icon" />
              <p>Agencies are rated to ensure quality, quantity, and timeliness.</p>
            </div>  
            <div id="frame"> 
              <img src={require('../../imgs/message_icon.png')} alt="Chat Icon" />
              <p>Chat feature allows questions to be asked and answered in the app, without phone numbers being distributed.</p>
            </div> 
          </div> 
        </div>

        {/*Seperator */}
        <div className="join_card">
          <p><strong>TAG</strong> makes finding staff simple.</p>
          <button onClick={() => navigate('/signup')}>Let's Get Started</button>
        </div>

        <Footer />
      </div>
    )
  }
}
