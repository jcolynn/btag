import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './login.css';

class Login extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                <div className="login-content">
                    <div className="form_box">
                        <h1>WELCOME BACK!</h1>
                        <form>
                            <input className="white-text" type="email" placeholder="Email" />
                            <input className="white-text" type="password" placeholder="Password" />
                            <button className="login-btn">Login</button>
                        </form>
                        <div className="act-links">
                            <a href="/contactus">Forgot your password?</a>
                            <a href="/signup">Create an account</a>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <MediaQuery minWidth={960}>
                    <Footer />
                </MediaQuery>
            </div>
        );
    }
}
 
export default Login;