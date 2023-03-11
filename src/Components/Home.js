import React from 'react';
import About from './About';
import Banner from './Banner';
import NavBar from './NavBar';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-10/12 mx-auto">
                <Banner/>
                <About/>
                <Service/>
            </div>
        </div>
    );
};

export default Home;