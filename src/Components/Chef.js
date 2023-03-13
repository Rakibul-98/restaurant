import React from 'react';

const Chef = () => {

    const chef =[
        {
            id:3,
            name:"Gerard D. Sanders",
            img:"https://i.ibb.co/pzWcrnd/pexels-ivan-samkov-8951246.jpg",
            title:"CEO, Head Chef",
            text:"Hello, my name is Gerard D. Sanders and I am the head chef at this Restaurant. I have over 15 years of experience in the culinary industry, specializing in farm-to-table cuisine."
        },
        {
            id:1,
            name:"Scott B. Coleman",
            img:"https://i.ibb.co/YpkHgZT/pexels-kampus-production-6605422.jpg",
            title:"Chef de cuisine",
            text:" I'm Scott and I am the chef de cuisine at this restaurant. I have worked in some of the most prestigious restaurants in Europe and have a deep love for Italian cuisine. "
        },
        {
            id:2,
            name:"Kimberly J. Galarza",
            img:"https://i.ibb.co/kSZP54h/pexels-gustavo-fring-3983670.jpg",
            title:"Head pastry Chef",
            text:"Hi there, I'm Kimberly and I am the head pastry chef at Sweet Delights Bakery. I have a background in French pastry and have trained under some of the best pastry chefs in Paris."
        },
        {
            id:4,
            name:"Reginald S. Hayes",
            img:"https://i.ibb.co/nz3YJNZ/pexels-tirachard-kumtanom-887827.jpg",
            title:"Executive Chef",
            text:"My name is Reginald and I am the executive chef at The Grand Hotel. I have been in the culinary industry for over 20 years and have experience in a variety of cuisines, including Asian, French, and American. "
        },
    ]

    return (
        <div className='mb-20'>
            <div className='text-center mb-20'>
                <h3 className='text-3xl'>Chef</h3>
                <h1 className='text-5xl'>Our Master Chef</h1>
            </div>
            <div className='grid md:grid-cols-2 gap-10 lg:grid-cols-4'>
                {
                    chef.map(c=>
                    <div key={c.id}>
                        <img className='h-74' src={c.img} alt="" />
                        <p className='text-xl font-bold my-2'>{c.name}</p>
                        <p className='text-slate-400'>{c.title}</p>
                        <p className='mt-3'>{c.text}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chef;