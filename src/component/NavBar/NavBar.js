import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] =  useState(false);
    const routes = [
        {id: 1, name: "Home", Path: "/home"},
        { id: 2, name: "Products", Path: "/products"},
        { id: 3, name: "Orders", Path: "/orders"},
        { id: 4, name: "Contact", Path: "/contact"},
        { id: 5, name: "About", Path: "/about"},
    ]
    return (
        <div className=' bg-purple-600 w-full p-4 md:flex justify-center'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>
            <ul className={`bg-purple-600 md:flex w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-14' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;