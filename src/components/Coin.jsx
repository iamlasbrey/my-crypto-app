import React from 'react';
import './coin.css'
import { Link } from 'react-router-dom'


const Coin = ({items}) => {
    return (
        <Link to={`/coin/${items.uuid}`}>
        <div className='coin'>
            <div className='top'>
                <div className='top-items'>
                    <p>{items.rank}.</p>
                    <h1> {items.name} </h1>
                </div>
                <div className='img-container'>
                    <img src={items.iconUrl} alt="" />
                </div>
            </div>
            <div className='divider'></div>
            <div className='bottom'>
                <div className='bottom-list'>
                    <h4 className='bottom-list-items'> <span>Price: </span>$
                        {
                            new Intl.NumberFormat('en-GB', { notation: "compact"}).format(items.price)
                        } 
                    </h4>
                    <h4 className='bottom-list-items'> <span> Market Cap: </span> 
                        {
                            new Intl.NumberFormat('en-GB', { notation: "compact"}).format(items.marketCap)
                        } 
                    </h4>
                    <h4 className='bottom-list-items'> <span> Daily Change: </span> {items.change}% </h4>
                </div>
            </div>   
        </div>
        </Link>
    )
}

export default Coin;
