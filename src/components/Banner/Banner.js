// Import Necessary file 
import React from 'react';
import './Banner.css'

// Banner Component
const Banner = () => {
    return (
        <div className='banner-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="banner-content">
                            <span>Welcome To Our,</span><br />
                            <h1>Amazing Travel in the world's</h1>
                            <p>” Travel makes a wise man better but a fool worse.”</p>
                            <p>” Travel makes a wise man better but a fool worse.”</p>
                            <button className='btn btn-success'>Booking Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;