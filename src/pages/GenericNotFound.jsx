import React from 'react';
import './Generic.css'
import { Link } from 'react-router-dom'

const GenericNotFound = () => {
    return (
        <div className='generic'>
            <h1>404</h1>
                <h2>Page Not Found</h2>
            <button> <Link to='/'> Go Back Home </Link></button>
    </div>
    )
}

export default GenericNotFound;
