import React from 'react';
import './Carousel.css';

const Carousel = ({ci}) => {
    const {id, img, heading,title, pre, next} = ci;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full text-white">
            <img src={img} className="w-full"alt='' />
            <div className='w-full absolute text-center top-1/4 md:top-1/3'>
                <h3 style={{fontFamily:"Dancing Script"}} className='text-5xl md:text-8xl mb-2'>{heading}</h3>
                <p className='font-semibold text-error md:text-2xl'>{title}</p>
            </div>
            <div className="absolute flex justify-between right-10 bottom-3">
                <a href={`#slide${pre}`} className="btn btn-circle mr-5 hover:bg-transparent hover:bg-slate-400">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-slate-400">❯</a>
            </div>
        </div>
    );
};

export default Carousel;