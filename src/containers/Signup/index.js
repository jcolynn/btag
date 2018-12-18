import React, { Component } from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './signup.css';

class Signup extends Component {
    render() { 
        return ( 
            <div>   
                <Header />
                <div className="content">
                    {/* Setup Form */}
                    <div className="form_box">
                        <h1>ACCOUNT SETUP</h1>
                        <form>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
 
export default Signup;