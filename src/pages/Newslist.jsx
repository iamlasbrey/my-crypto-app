import React from 'react';
import { useGlobalContext } from '../context';
import Newsitems from '../components/Newsitems'
import TopNav from '../components/TopNav'
import './newslist.css';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 5em;
    margin-bottom: 400px;
`;

const Newslist = () => {
  const { News, loading } = useGlobalContext()
  const [color, setColor] = React.useState("#1e9b67");
  console.log(News)

  if(loading){
    return <BounceLoader color={color} loading={loading} css={override} size={300} />
  }

  return (
    <div className='newslist-container'>
      <TopNav />
    <div className='newslist'>
      <h1>Latest Crypto News </h1>
      <div className='newslist-items'>
          {
            News.map((news)=>(
              <Newsitems news={news} key={news.url}/>
            ))
          }
        </div>
      </div>
    </div>
    )
  }

export default Newslist;
