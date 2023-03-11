import React from 'react';

const NavBar = () => {

    const navLinks = [
        {
            id:1,
            name:"Home",
            link:"/",
        },
        {
            id:2,
            name:"Menu",
            link:"#menu",
        },
        {
            id:7,
            name:"Chef",
            link:"#chef",
        },
        {
            id:3,
            name:"Service",
            link:"#service",
        },
        {
            id:4,
            name:"Blog",
            link:"#blog",
        },
        {
            id:5,
            name:"About",
            link:"#about",
        },
        {
            id:6,
            name:"Contact",
            link:"#contact",
        }
    ]

    const handleToggleMenu =()=>{
        const navBar = document.getElementById("nav_links_sm");
        if (navBar.style.display === "") {
            navBar.style.display = "block"
        }
        else{
            navBar.style.display = ""
        }
    }

    return (
        <div className="flex justify-between py-5 text-lg relative">
            <div className="">
                <a href='/' className="">logo</a>
            </div>
            <div className="font-semibold">
                <div className='md:hidden'>
                    <label className="btn btn-circle bg-transparent border-0 swap swap-rotate absolute right-0 top-2 hover:bg-error">
                        <input onClick={handleToggleMenu} type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                    <ul id='nav_links_sm' className="hidden mt-10 pr-5 text-right">
                        {
                            navLinks.map(l=>
                            <li className='ml-10 hover:text-error'>
                                <a href={l.link}>{l.name}</a>
                            </li>)
                        }
                    </ul>
                </div>
                <ul className="md:flex hidden nav_links_md">
                    {
                        navLinks.map(l=>
                        <li className='ml-10 hover:text-error'>
                            <a href={l.link}>{l.name}</a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;