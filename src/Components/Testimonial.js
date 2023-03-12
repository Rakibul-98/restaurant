import React from 'react';

const Testimonial = () => {

    const testimonials =[
        {
            id:1,
            img:"https://i.ibb.co/wg5hFtK/pexels-israel-oliveira-3370021.jpg",
            text:"I recently had the pleasure of dining at [restaurant name], and I must say it was a truly delightful experience.",
            name:"Clarence M. Beall"
        },
        {
            id:2,
            img:"https://i.ibb.co/KrtpVHs/pexels-rodrigo-souza-2531553.jpg",
            text:"The menu was extensive and offered a wide variety of dishes to choose from, and I was pleasantly surprised by the quality and presentation of each dish.",
            name:"Joseph C. Lucas"
        },
        {
            id:3,
            img:"https://i.ibb.co/WsM1qT6/pexels-spencer-selover-428328.jpg",
            text:"The flavors were exquisite, and each bite was a true culinary delight.",
            name:"Willie T. Baker"
        },
        {
            id:4,
            img:"https://i.ibb.co/z62PgrJ/pexels-bruno-salvadori-2269872.jpg",
            text:"The service was impeccable, and our server was attentive, friendly, and knowledgeable about the menu.",
            name:"Jeremy S. Lopez"
        },
        {
            id:5,
            img:"https://i.ibb.co/8XTN6T3/pexels-apunto-group-agencia-de-publicidad-7752805.jpg",
            text:" The atmosphere was lively yet relaxing, and the overall dining experience was one to remember.",
            name:"Carlton C. Snyder"
        },
    ]

    return (
        <div className='my-20 lg:w-1/2 mx-auto py-20'>
            <div className='text-center'>
            <h3 className='text-3xl'>Testimony</h3>
                <h1 className='text-5xl'>Happy Customer</h1>
            </div>
            <div className='carousel mt-10'>
                {
                    testimonials.map(t=>
                        <div id={`item${t.id}`} className="carousel-item w-full">
                            <div className='text-center w-full'>
                                <p className='sm:w-2/3 mx-auto
                                '>{t.text}</p>
                                <img src={t.img} className="h-28 mx-auto rounded-full my-5" alt=''/>
                                <p className='text-xl font-bold'>{t.name}</p>
                                <p>Customer</p>
                            </div>
                        </div> 
                    )
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
            {
                testimonials.map(ti=><a className="radio radio-error hover:bg-error" href={`#item${ti.id}`}>{}</a>)
            }
            </div>
        </div>
    );
};

export default Testimonial;