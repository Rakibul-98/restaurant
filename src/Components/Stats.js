import React from 'react';
import CountUp from 'react-countup';
import { TbChefHat } from "react-icons/tb";
import { FaAward, FaRegSmileBeam } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";

const Stats = () => {

    const stats =[
        {
            id:1,
            end:"50",
            icon:<AiOutlineShop/>,
            title:"Branches"
        },
        {
            id:2,
            end:"15",
            icon:<FaAward/>,
            title:"Awards"
        },
        {
            id:3,
            end:"20653",
            icon:<FaRegSmileBeam/>,
            title:"Happy Customers"
        },
        {
            id:4,
            end:"200",
            icon:<TbChefHat/>,
            title:"Staffs"
        },
    ]

    return (
        <div className='grid md:grid-cols-4 mb-20'>
            {
                stats.map(s=>
                <div className='text-center group mt-20'>
                    <span className='text-6xl flex justify-center border border-amber-500 text-amber-500 w-fit mx-auto group-hover:mask-diamond group-hover:mask group-hover:bg-amber-400 group-hover:text-white p-8'>{s.icon}</span>
                    <div  className='text-4xl my-5 font-bold'>
                        <CountUp
                            delay={1}
                            end={s.end}
                            duration={5}
                            enableScrollSpy
                        />
                    </div>
                    <h3 className='text-xl'>{s.title}</h3>
                </div>)
            }
        </div>
    );
};

export default Stats;