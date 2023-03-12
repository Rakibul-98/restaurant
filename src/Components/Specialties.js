import React from 'react';
import SpecialtyCard from './SpecialtyCard';

const Specialties = () => {




    const specialMenus = [
        {
            id:1,
            name:"Italian Pizza",
            img:"https://i.ibb.co/rmVtJcK/pexels-peps-silvestro-13350094.jpg",
            text:"",
            price:"2.90",
        },
        {
            id:2,
            name:"Greek Pizza",
            img:"https://i.ibb.co/tbcgFrn/pexels-yassir-abbas-11111603.jpg",
            text:"",
            price:"2.90",
        },
        {
            id:3,
            name:"Cheese Overload",
            img:"https://i.ibb.co/VgbbQYK/pexels-leonardo-luz-15126957.jpg",
            text:"",
            price:"2.90",
        },
        {
            id:4,
            name:"Regular Chicken Burger",
            img:"https://i.ibb.co/b6cjDGP/pexels-ata-ebem-10831651.jpg",
            text:"",
            price:"1.90",
        },
        {
            id:5,
            name:"Sub Burger",
            img:"https://i.ibb.co/g3RKyM1/pexels-mounir-salah-14701529.jpg",
            text:"",
            price:"1.90",
        },
        {
            id:6,
            name:"3X Jumbo Burger",
            img:"https://i.ibb.co/Kb8wHt1/pexels-mounir-salah-14678998.jpg",
            text:"",
            price:"1.90",
        }
    ]

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-5xl mb-5'>Our Specialties</h1>
                <p className='w-2/3 mx-auto'>At The Bistro, we pride ourselves on providing exceptional service to our guests. Our knowledgeable and friendly staff are always on hand to assist with menu choices, wine pairings, and any special requests.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-1'>
                {
                    specialMenus.map(sm=><SpecialtyCard key={sm.id} item={sm}></SpecialtyCard>)
                }
            </div>
        </div>
    );
};

export default Specialties;