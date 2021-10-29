// Import necessary file 
import React from 'react';
import './Blogs.css'
import blogImg1 from '../../Images/blog1.png'
import blogImg2 from '../../Images/blog2.png'
import blogImg3 from '../../Images/blog3.png'

// Lattest Blogs Component 
const Blogs = () => {
    return (
        <div className="blogs-area py-5">
            <div className="container">
                <div className="section-title">
                    <h2>Our Lattest Blog's</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blogImg1} alt="" />
                                <div className="img-date">
                                    <p>29 Octbar,2021</p>
                                </div>
                            </div>

                            <div className="blog-info">
                                <p>User</p>
                                <p>(5) Comment</p>
                            </div>
                            <div className="blog-title">
                                <h4>Praesent Ut Mattis Ante The Nullam Lobortis.</h4>
                            </div>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blogImg2} alt="" />
                                <div className="img-date">
                                    <p>29 Octbar,2021</p>
                                </div>
                            </div>
                            <div className="blog-info">
                                <p>User</p>
                                <p>(5) Comment</p>
                            </div>
                            <div className="blog-title">
                                <h4>Praesent Ut Mattis Ante The Nullam Lobortis.</h4>
                            </div>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single-blog">
                            <div className="blog-img">
                                <img src={blogImg3} alt="" />
                                <div className="img-date">
                                    <p>29 Octbar,2021</p>
                                </div>
                            </div>
                            <div className="blog-info">
                                <p>User</p>
                                <p>(5) Comment</p>
                            </div>
                            <div className="blog-title">
                                <h4>Praesent Ut Mattis Ante The Nullam Lobortis.</h4>
                            </div>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;