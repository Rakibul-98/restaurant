import React from 'react';
import Map from './Map';

const Contact = () => {
    return (
        <div className='grid md:grid-cols-2 my-20'>
            <div className=''>
                <Map/>
            </div>
            <div className='md:px-10 my-auto'>
                <h2 className='text-3xl md:mt-0 mt-10 mb-5'>Contact Us</h2>
                <form >
                    <input className='w-full border-b h-16 placeholder-black mb-2' type="text" name="name" placeholder='Enter your name'/>
                    <br />
                    <input className='w-full border-b h-16 placeholder-black' type="email" name="email" placeholder='Enter your email' />
                    <br />
                    <textarea className="h-32 w-full border-b placeholder-black mt-5" placeholder='Write your message here' />
                    <input className='btn w-1/4 rounded-none my-5 hover:bg-transparent hover:text-black' type="submit" value="SEND" />
                </form>
            </div>
        </div>
    );
};

export default Contact;