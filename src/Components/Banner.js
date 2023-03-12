import React from 'react';
import Carousel from './Carousel';


const Banner = () => {
    const carouselItem = [
        {
            id:1,
            pre:5,
            next:2,
            img:"https://i.ibb.co/tzP2Pqy/pexels-senuscape-2313686.jpg",
            heading:"Cooking Science",
            title:"1995"
        },
        {
            id:2,
            pre:1,
            next:3,
            img:"https://i.ibb.co/pwZn201/pexels-melanie-dompierre-1707917.jpg",
            heading:"Best Quality",
            title:"FOOD"
        },
        {
            id:3,
            pre:2,
            next:4,
            img:"https://i.ibb.co/V3MXbVP/pexels-leonardo-luz-14391214.jpg",
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
            img:"https://i.ibb.co/j8RxzHh/pexels-rajesh-tp-1600727.jpg",
            heading:"Juicy",
            title:"Burgers"
        },
    ]

    return (
        <div className='carousel'>
            {
                carouselItem.map(ci=><Carousel key={ci.id} ci={ci}></Carousel>)
            }
        </div>
    );
};

export default Banner;