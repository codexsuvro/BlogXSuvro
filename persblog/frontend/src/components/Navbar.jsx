import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"; 

const Navbar = () => {
    const user = false;
    return (
        <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
            <h1 className=' text-lg md:text-xl font-extrabold'><Link to="/">BlogxSuvro</Link></h1>
            <div className='flex items-center justify-center space-x-0'>
                <BsSearch />
                <input className='outline-none px-3 py-1' placeholder='Search...' type='text' />
            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
                {user ? <h3><Link to="/write">Write</Link></h3> : <h3 className='text-sm font-semibold'><Link to="/login">Login</Link></h3>}
                {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3 className='text-sm font-semibold'><Link to="/register">Register</Link></h3>}
            </div>
        </div>
    );
};

export default Navbar;