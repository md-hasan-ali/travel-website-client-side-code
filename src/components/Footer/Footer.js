// Adding necessary file 
import React from 'react';
import './footer.css'

// Footer Component 
const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <h3>Address</h3>
                        <p>Alaul center 570 Dhaka</p>

                    </div>
                    <div className="col-md-4 my-2">
                        <h3>Social Icon</h3>
                        <div className="social-icon">
                            <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <h3>Footer Menu</h3>
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;