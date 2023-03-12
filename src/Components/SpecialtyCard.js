import React from 'react';

const SpecialtyCard = ({item}) => {

    const {name, img, text, price} = item;
    return (
        <div className='flex bg-black text-white text-sm'>
            <div className='w-6/12'>
                <img className='h-full' src={img} alt="" />
            </div>
            <div className='w-6/12 m-auto pl-5 p-2'>
                <h3 className='text-2xl'>{name}</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-3'>
                    <p className=''><span className='font-bold'>Price: </span>$ {price}</p>
                    <button className='border mt-3 py-2 px-4 hover:bg-error hover:border-error'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyCard;