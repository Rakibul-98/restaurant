import React from 'react';
import About from './About';
import Banner from './Banner';
import Chef from './Chef';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
import NavBar from './NavBar';
import Service from './Service';
import Specialties from './Specialties';
import Stats from './Stats';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-10/12 mx-auto">
                <Banner/>
                <About/>
                <Service/>
                <Specialties/>
                <Menu/>
                <Stats/>
                <Testimonial/>
                <Chef/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;