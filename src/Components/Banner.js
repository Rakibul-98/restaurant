import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    const carouselItem = [
        {
            id:1,
            pre:5,
            next:2,
            img:"https://i.ibb.co/h8BRfHF/pexels-andy-kuzma-2909822.jpg",
            heading:"Cooking Science",
            title:"1995"
        },
        {
            id:2,
            pre:1,
            next:3,
            img:"https://i.ibb.co/WxtV8xv/pexels-ella-olsson-1640774.jpg",
            heading:"Best Quality",
            title:"FOOD"
        },
        {
            id:3,
            pre:2,
            next:4,
            img:"https://i.ibb.co/tzP2Pqy/pexels-senuscape-2313686.jpg",
            heading:"Crunchy",
            title:"Italian Pizza"
        },
        {
            id:4,
            pre:3,
            next:5,
            img:"https://i.ibb.co/RDmbvnF/pexels-engin-akyurt-2673353.jpg",
            heading:"Delicious",
            title:"Cuisine"
        },
        {
            id:5,
            pre:4,
            next:1,
            img:"https://i.ibb.co/CPHn5M2/pexels-valeria-boltneva-14457194.jpg",
            heading:"Juicy",
            title:"Burgers"
        },
    ]

    return (
        <div className='h-screen'>
            <div className='carousel h-2/6 md:h-4/6 lg:h-5/6'>
                {
                    carouselItem.map(ci=><Carousel key={ci.id} ci={ci}></Carousel>)
                }
            </div>
        </div>
    );
};

export default Banner;