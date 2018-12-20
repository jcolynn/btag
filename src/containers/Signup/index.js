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
                            <input className="white-text" type="email" placeholder="Email" />
                            <input className="white-text" type="password" placeholder="Password" />
                            <input className="white-text" type="password" placeholder="Confirm Password" />
                            <div>
                                <input id="hire" className="white-text clear-btn" type="radio" name="company-type" value="hiring"/>
                                <label for="hire" className="signup-text">Hiring Company</label>
                                <div className="radio-btn"></div>
                                <input id="staff" className="white-text clear-btn" type="radio" name="company-type" value="staffing"/>
                                <label for="staff" className="signup-text">Staffing Company</label>
                                <div className="radio-btn"></div>
                            </div>
                            <button id="submit">Submit</button>
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