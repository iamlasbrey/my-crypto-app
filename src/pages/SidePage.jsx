import React from 'react';
import './sidepage.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';

const SidePage = () => {
    const { isOpen,ToggleIsOpen } = useGlobalContext()
    return (
        isOpen && <div className='sidepage-container'>
            <div className='times'> <i class="fas fa-times" onClick={ToggleIsOpen}></i> </div>
            <div className='sidepage-contents'>
                <Link to='/news' onClick={ToggleIsOpen}> <div className='sidepage-content'>  News  </div> </Link>
                <Link to='/cryptocurrencies' onClick={ToggleIsOpen}> <div className='sidepage-content'>  Cryptocurrencies </div> </Link>
                <Link to='/exchanges' onClick={ToggleIsOpen}> <div className='sidepage-content'>  Exchanges </div> </Link>
            </div>
        </div>
    )
};

export default SidePage;
