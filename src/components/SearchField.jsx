import React from 'react';
import './searchfield.css'
import { useGlobalContext } from '../context';

const SearchField = () => {
    const {searchCoins } = useGlobalContext()

    return (
        <div className='searchfield'>
            <h1>Top Coins</h1>
            <input 
                type="text" 
                className='input-style' 
                placeholder='Search Coin'
                onChange={(e)=>searchCoins(e.target.value)}
            />
        </div>
    )
};

export default SearchField;
