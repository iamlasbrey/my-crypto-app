import React from 'react';
import './topnav.css'
import { useGlobalContext } from '../context'
import BeatLoader from "react-spinners/BeatLoader";



const TopNav = () => {
    const {MyStats, loading} = useGlobalContext()

return (
    <main className='topnav-content'>
        <section className='topnav'>
        <h1>Global Crypto Stats</h1>
            <div className='homepagefeatures'>
            <div className='homepagefeature'>
                <p>Total Cryptocurrencies</p>
                <h3> {loading ? <BeatLoader  loading={loading}  size={10}  /> : MyStats.total} </h3>
            </div>
            <div className='homepagefeature'>
                <p>Total Markets</p>
                <h3> { loading ? <BeatLoader  loading={loading} size={10}  /> : MyStats.totalMarkets} </h3>
            </div>
            <div className='homepagefeature'>
                <p>Total Exchanges</p>
                <h3> { loading ? <BeatLoader  loading={loading} size={10}  /> : MyStats.totalExchanges} </h3>
            </div>
            <div className='homepagefeature'>
                <p>Total Market Capitalisation</p>
                <h3> 
                    {
                        loading ? <BeatLoader  loading={loading} size={10}  /> : new Intl.NumberFormat('en-GB', { notation: "compact"}).format(MyStats.totalMarketCap)
                    } 
                    </h3>
            </div>
            <div className='homepagefeature'>
                <p>Total 24hr Volume</p>
                <h3> 
                    { 
                            loading ? <BeatLoader  loading={loading} size={10}  /> : new Intl.NumberFormat('en-GB', { notation: "compact"}).format(MyStats.total24hVolume)
                    } 
                    </h3>
            </div>            
        </div>
    </section>
    </main>
    )
};

export default TopNav;
