import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { GiHamburger} from "react-icons/gi";
const Service = () => {

    const services =[
        {
            id:1,
            icon:<IoFastFoodOutline/>,
            title:"Healthy Foods",
            text:"Healthy food is important for maintaining a healthy weight, reducing the risk of chronic diseases such as heart disease, diabetes, and certain cancers, and promoting overall physical and mental health.",
        },
        {
            id:2,
            icon:<TbTruckDelivery/>,
            title:"Super Fast Delivery",
            text:"The fastest delivery for food can depend on various factors such as the location of the restaurant, the distance to your address, the availability of delivery drivers, and the restaurant's delivery policy."
        },
        {
            id:3,
            icon:<GiHamburger/>,
            title:"Authentic Recipes",
            text:"techniques that are specific to the region or culture. This may involve using local or hard-to-find ingredients, such as specific types of spices, herbs, or vegetables, to create the distinct flavors and textures associated with the cuisine."
        }
    ]

    return (
        <div className='my-20 bg-red-300'>
            <div className='text-center'>
                <h1 className='text-5xl mb-5'>We provide</h1>
                <p className='w-2/3 mx-auto'>At The Bistro, we pride ourselves on providing exceptional service to our guests. Our knowledgeable and friendly staff are always on hand to assist with menu choices, wine pairings, and any special requests.</p>
            </div>
            <div className='grid md:grid-cols-3 mt-16 gap-10'>
                {
                    services.map(s=>
                    <div className='text-center mx-auto group' key={s.id}>
                        <span className='service-img text-7xl flex justify-center border-2 w-fit mx-auto group-hover:mask-diamond group-hover:mask group-hover:bg-slate-200 group-hover:text-error  p-8'>{s.icon}</span>
                        <h3 className='text-3xl'>{s.title}</h3>
                        <p>{s.text}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;