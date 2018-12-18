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
                    {/* Image Block */}
                    <div className="image_box">   
                        <img src={require('../../imgs/laptop.png')} />
                    </div>
                    {/* Setup Form */}
                    <div className="form_box">

                    </div>
                    {/* Image Block */}
                    <div className="image_box">
                        <img src={require('../../imgs/coffee_clock.png')} />
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
 
export default Signup;