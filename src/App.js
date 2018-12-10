import React, { Component } from 'react';
import { Router } from "@reach/router";

import Launch from './containers/Launch';
import NotFound from './containers/NotFound';
import Contact from './containers/Contact';
import Login from './containers/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Launch path="/" />
          <NotFound default />
          <Contact path="/contactus" />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
