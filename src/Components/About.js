import React from 'react';

const About = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <img className='' src="https://i.ibb.co/DKhLBTJ/pexels-waldemar-2290070.jpg" alt="" />

            <div className='my-auto'>
                <h1 className='text-5xl mb-10'><span className='text-error font-bold block'>Welcome</span> to our restaurant</h1>
                <p className='mb-5'>Welcome to " ", a cozy and intimate restaurant nestled in the heart of downtown. Our restaurant offers a warm and inviting atmosphere, perfect for a romantic dinner for two or a gathering with friends and family. </p>
                <p>Our menu features a carefully curated selection of dishes, made with only the freshest ingredients sourced from local farmers and suppliers. Whether you're in the mood for a classic French dish, a hearty steak, or a vegetarian option, we have something to satisfy every palate.</p>
            </div>
        </div>
    );
};

export default About;