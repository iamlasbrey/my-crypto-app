import React from 'react';
import './newsitems.css'

const Newsitems = ({news}) => {
    return (
        <div className='newsitem'>
            <div className='top'>
                <div className='top-div'>
                    <h4>{news.title}</h4>
                    <p>{news.author}</p>
                </div>
                <img src={news.image} alt="" />
            </div>
            <div div className='bottom'>
                <p className='description'>
                    {news.desc}
                    <a href={news.url} target="_blank" rel=''> Read More...</a>
                </p>
                <p className='date'>
                    {news.date}
                </p>
            </div>
        </div>
        )
    }

export default Newsitems;
