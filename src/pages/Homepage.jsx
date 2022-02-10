import React from 'react';
import Coinlist from '../components/Coinlist';
import SearchField from '../components/SearchField';
import TopNav from '../components/TopNav';
import './Homepage.css'
import { useGlobalContext } from '../context';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 3em;
    margin-bottom: 3em;
`;

const Homepage = () => {
    const {loading } = useGlobalContext()
    let [color, setColor] = React.useState("#1e9b67");

    return (
        <section className='homepage'>
            <TopNav />
            <section className="section-2">
                <SearchField />
                {
                    loading ? <BounceLoader color={color} loading={loading} css={override} size={300} /> : <Coinlist />
                }
            </section>
        </section>
    )
}

export default Homepage;
