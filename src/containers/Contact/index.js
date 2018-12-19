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
            <form>
              <input type="text" placeholder="To" name="To" />
              <input type="text" placeholder="Subject" name="Subject" />
              <label for="description">Description</label>
              <input id="description" type="textarea" />
            </form>
          </div>
          <div id="contactdetails">
            <h1>CONTACT</h1>
            <span>Email: tag@email.com</span>{" "}
            <span>Phone: (098)765-4321</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
