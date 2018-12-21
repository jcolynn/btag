import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './contact.css';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="page">
          <div id="inputform">
            <h1 className="label">CONTACT</h1>
            <form className="contact-form">
              <input className="blue-text" type="text" placeholder="To" name="To" />
              <input className="blue-text" type="text" placeholder="Subject" name="Subject" />
              <div className="ta-container">
                <p for="description">Description:</p>
                <textarea className="description" id="description"  />
              </div>
              <button className="send-btn">Send</button>
            </form>
          </div>
          <div className="contactdetails">
            <h1>CONTACT</h1>
            <img className="contact-logo" src={require('../../imgs/contact_logo.png')} alt="Company Logo" />
            <div className="details"> 
              <p>Email: <strong>tag@email.com</strong></p>
              <p>Phone: <strong>(098)765-4321</strong></p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
