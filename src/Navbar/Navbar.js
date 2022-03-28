import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id:1, name: 'Home',link:'/home'},
        {id:2, name: 'Shop',link:'/shop'},
        {id:3, name: 'Deals',link:'/deals'},
        {id:4, name: 'Coupons',link:'/coupons'},
        {id:5, name: 'Contact',link:'/contact'}
    ];
    return (
        <nav className='bg-green-200'>
            <div className='w-12 h-12 lg:hidden' onClick={() => setOpen(!open)}>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`lg:flex lg:static justify-center  absolute w-full bg-green-200 duration-300 ${open?'top-10':'top-[-180px]'}`}>
                {
                routes.map(route => <Link route={route} key={route.id}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;