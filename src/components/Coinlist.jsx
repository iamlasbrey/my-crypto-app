import React from 'react';
import Coin from '../components/Coin'
import { useGlobalContext } from '../context';
import "./coinlist.css"


const Coinlist = () => {
    const { filteredResults } = useGlobalContext()

    if(filteredResults.length < 1){
        return(
            <h1 className='error-coin'>No Coin Matches Search!</h1>
        )
    }

    return (
        <section className='coinlist-container'>
            <main className='coinlist-items'>
                {   
                    filteredResults.map((items)=>(
                        <Coin 
                        items={items} 
                        key={items.rank}/>
                    ))
                }
                </main>
        </section>
    )
}

export default Coinlist;
