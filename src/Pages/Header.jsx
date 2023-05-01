import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then(result=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='banner-section w-full h-52 md:h-96 text-white'>
            <div className='max-w-7xl mx-auto p-5 flex items-center gap-5'>
                <h1 className='text-3xl font-bold'>SKB Hotel</h1>

                <div className='flex gap-2 md:gap-5 text-xl font-bold'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/Book'>Book</ActiveLink>
                    <ActiveLink to='/login'>Login</ActiveLink>
                    <ActiveLink to='/resister'>Resister</ActiveLink>
                </div>
                <div>
                    {
                        user && <div className='text-2xl'>Welcome {user.displayName}
                            <button onClick={handleSignOut} className='btn btn-info ms-5'>Sign Out</button>
                        </div>
                    }
                </div>
            </div>
            <div className='text-lg md:text-5xl text-gray-200 font-bold text-center md:mt-14'>
                <h1>SKB Hotel</h1>
                <h1 className='md:mt-3'>Always Cool & peace</h1>
            </div>
        </div>
    );
};

export default Header;