import React, { Component } from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './login.css';

class Signup extends Component {
    render() { 
        return ( 
            <div>   
                <Header />
                <div className="content">
                    {/* Setup Form */}
                    <div className="form_box">
                        <h1>WELCOME BACK!</h1>
                        <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                        <a href="/">Forgot your password?</a>
                        <a href="/">Create an account</a>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
 
export default Signup;