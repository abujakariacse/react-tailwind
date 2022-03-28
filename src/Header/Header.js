import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-4xl font-mono mt-3'>Welcome to my official website</h1>
        </div>
    );
};

export default Header;