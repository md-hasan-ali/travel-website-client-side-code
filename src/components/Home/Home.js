// Adding Necessary File 
import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Subscribe from '../Blogs/Subscribe/Subscribe';
import Services from '../Services/Services';

// Home component 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;