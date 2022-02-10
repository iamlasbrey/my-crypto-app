import React from 'react';
import logo from '../images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';

const Navbar = () => {
    const {ToggleIsOpen } = useGlobalContext()
    return(
        <nav className='nav'>
            <div className='nav-img'>
                <Link Link to= '/'> <img src={logo} alt="logo" srcset="" /> </Link>
            </div>
            <div className='nav-links'>
                <div className='nav-links-item'>
                    <div className='nav-links-items'> <Link to= '/news'> Latest Crypto News </Link> </div> 
                </div>
            </div>
            <div className='hamburger-menu' onClick={ToggleIsOpen}>
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
};

export default Navbar;
