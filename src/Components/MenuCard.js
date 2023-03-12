import React from 'react';

const MenuCard = ({item}) => {
    const {img, name, ingredients, price} = item;
    return (
        <div className='hover:bg-slate-100'>
            <div className='flex'>
                <img className='w-1/3 rounded-full p-5' src={img} alt="" />
                <div className='flex w-full justify-between my-auto pr-5'>
                    <div>
                        <p className='text-xl font-bold'>{name}</p>
                        <p className='text-slate-400 mt-3'>{ingredients}</p>
                    </div>
                    <p>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;