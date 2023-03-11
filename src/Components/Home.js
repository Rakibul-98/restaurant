import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-10/12 mx-auto bg-slate-400">
                <Banner/>
            </div>
            
        </div>
    );
};

export default Home;