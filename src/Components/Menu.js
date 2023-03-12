import React from 'react';
import MenuCard from './MenuCard';
import { BsFillDiamondFill } from "react-icons/bs";

const Menu = () => {

    

    const menuItem =[
        {
            id:1,
            category:"BREAKFAST",
            items:
                [
                    {
                        id:11,
                        img:"https://i.ibb.co/dtDHh6j/toast.jpg" ,
                        name:"Toast",
                        ingredients:"Tea, Toast, Egg, Tomato",
                        price:"19.99"
                    },
                    {
                        id:12,
                        img:"https://i.ibb.co/m8tznmY/tea.jpg",
                        name:"Tea-biscuit",
                        ingredients:"Tea, Biscuit",
                        price:"9.99"
                    },
                    {
                        id:13,
                        img:"https://i.ibb.co/hYMb6Bf/egg.jpg",
                        name:"Bread-Egg",
                        ingredients:"Egg, Bread",
                        price:"9.99"
                    },
                ]
        },
        {
            id:2,
            category:"LUNCH",
            items:
                [
                    {
                        id:21,
                        img:"https://i.ibb.co/0G5SMx2/noodles.jpg",
                        name:"Chow Mein",
                        ingredients:"Noodles, Rice, Chicken",
                        price:"19.99"
                    },
                    {
                        id:22,
                        img:"https://i.ibb.co/FsHSyG1/vegitable.jpg",
                        name:"Vegetable Soup",
                        ingredients:"Carrots, Cabbage, Chicken",
                        price:"29.99"
                    },
                    {
                        id:23,
                        img:"https://i.ibb.co/4Wmb9yL/rice.jpg",
                        name:"Fried Rice",
                        ingredients:"Egg, Rice, Vegetables",
                        price:"9.99"
                    },
                ]
        },
        {
            id:3,
            category:"DINNER",
            items:
                [
                    {
                        id:31,
                        img:"https://i.ibb.co/CmfZChs/chicken-rice.jpg",
                        name:"Chicken-rice",
                        ingredients:"Chicken, Rice, Egg, Broccoli",
                        price:"29.99"
                    },
                    {
                        id:32,
                        img:"https://i.ibb.co/VJB5gWg/veg.jpg",
                        name:"Broccoli-Chicken",
                        ingredients:"Chicken, Broccoli",
                        price:"19.99"
                    },
                    {
                        id:33,
                        img:"https://i.ibb.co/mcf4ZqR/omlet.jpg",
                        name:"Omlet",
                        ingredients:"Egg, Herbs",
                        price:"9.99"
                    },
                ]
        },
        {
            id:6,
            category:"FAST FOOD",
            items:
                [
                    {
                        id:61,
                        img:"https://i.ibb.co/qpCxRX3/french-fry.jpg",
                        name:"French Fry",
                        ingredients:"Potato, Sauce",
                        price:"9.99"
                    },
                    {
                        id:62,
                        img:"https://i.ibb.co/HPGFRbn/fries.jpg",
                        name:"Fries",
                        ingredients:"Onion, Meat, Mayo",
                        price:"19.99"
                    },
                    {
                        id:63,
                        img:"https://i.ibb.co/jwtn1rS/eggplant.jpg",
                        name:"Egg plant",
                        ingredients:"Egg plant, Beans, Tomato",
                        price:"9.99"
                    },
                ]
        },
        {
            id:4,
            category:"DESSERT",
            items:
                [
                    {
                        id:41,
                        img:"https://i.ibb.co/FsKRBV8/donut.jpg",
                        name:"Donut",
                        ingredients:"Chocolate, Bread",
                        price:"9.99"
                    },
                    {
                        id:42,
                        img:"https://i.ibb.co/ZXzxQrz/saslik.jpg",
                        name:"Cream-Chicken",
                        ingredients:"Chicken, Cream, Sauce",
                        price:"19.99"
                    },
                    {
                        id:43,
                        img:"https://i.ibb.co/WGtnNVT/carrot.jpg",
                        name:"Carrot Ice-cream",
                        ingredients:"Carrot, Ice, Cucumber",
                        price:"9.99"
                    },
                ]
        },
        {
            id:5,
            category:"DRINKS",
            items:
                [
                    {
                        id:51,
                        img:"https://i.ibb.co/5MfkyJG/coffee.jpg",
                        name:"Chocolate Milk",
                        ingredients:"Chocolate, Milk",
                        price:"9.99"
                    },
                    {
                        id:52,
                        img:"https://i.ibb.co/m5vMsQv/cucumber-juice.jpg",
                        name:"Cucumber Juice",
                        ingredients:"Cucumber, Matcha",
                        price:"9.99"
                    },
                    {
                        id:53,
                        img:"https://i.ibb.co/Dk18dkf/matcha.jpg",
                        name:"Grape juice",
                        ingredients:"Ice, Grape",
                        price:"9.99"
                    },
                ]
        },
    ]

    return (
        <div className='my-10'>
            <div className='text-center my-10'>
                <h3 className='text-3xl'>Specialties</h3>
                <h1 className='text-5xl'>Our Menu</h1>
                <div className="divider w-1/4 mx-auto text-warning text-2xl"><BsFillDiamondFill/><span><BsFillDiamondFill/></span><BsFillDiamondFill/></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    menuItem.map(mi=>
                    <div key={mi.id} className='border border-dashed'>
                        <h1 className='text-center font-bold mt-10 mb-5'>{mi.category}</h1>
                        {
                            mi.items.map(item=><MenuCard key={item.id} item={item}></MenuCard>)
                        }
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Menu;