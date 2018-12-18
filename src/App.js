import React, { Component } from 'react';
import { Router } from "@reach/router";

import Launch from './containers/Launch';
import NotFound from './containers/NotFound';
import Contact from './containers/Contact';
import Login from './containers/Login';
import Signup from './containers/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Launch path="/" />
          <NotFound default />
          <Contact path="/contactus" />
          <Login path="/login" />
          <Signup path="/signup" />
        </Router>
      </div>
    );
  }
}

export default App;
