import React from 'react';
import { useParams } from 'react-router-dom'
import './singlecoin.css'
import HTMLReactParser from 'html-react-parser'
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import TopNav from '../components/TopNav'
import ChartPage from '../components/ChartPage'

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 5em;
    margin-bottom: 400px;
`;

const SingleCoin = () => {
    const { id } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [Coin, setCoin] = React.useState(null)
    const [color, setColor] = React.useState("#1e9b67");

    React.useEffect(()=>{
      setLoading(true)
      async function getCoin(){
        try {
          const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key": process.env.REACT_APP_MY_API_KEY
            }
          }) 

          const status = await response.json()
          const  data  = status.data.coin
          if(data){
            setCoin(data)
          }else{
            setCoin(null)
          }
          
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }
      getCoin()
    },[])

    if(loading){
      return <BounceLoader color={color} loading={loading} css={override} size={300} />
    }
    if(!Coin){
      return <h1 className='error-coin'> No Coin to display</h1>
    }

  return (
    <div className='singleContainer-container'>
      <TopNav />
      <ChartPage Coin={Coin} id={id}/>
    <div className='singleContainer'>
        <div className='side-one'>
          <h2>{Coin.name} Value Statistic</h2>
          <p>An overview showing the statistics of {Coin.name}, such as the bse and quote currency, the rank and trading volume</p>

          <div className='side-one-two'>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-dollar-sign"></i> <span>USD Price</span> </div>  <div className='side-onelisting-two'><p> {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(Coin.price)}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-hashtag"></i> <span>Rank</span> </div>  <div className='side-onelisting-two'><p>{Coin.rank}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-dollar-sign"></i> <span>Market Cap</span> </div>  <div className='side-onelisting-two'><p>{new Intl.NumberFormat('en-GB', { notation: "compact"}).format(Coin.marketCap)}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-trophy"></i> <span>All-time-high(daily avg)</span> </div>  <div className='side-onelisting-two'> <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(Coin.allTimeHigh.price)} </p></div> </div>
          </div>

          <div className='side-one-three'>
            <h2>What is {Coin.name} </h2>
              {
                HTMLReactParser(Coin.description)
              }
          </div>
        </div>
        {
          console.log(Coin)
        }

        <div className='side-two'>
            <h2>Other Stats Info</h2>
            <p>An overview showing the statistics of {Coin.name}, such as the bse and quote currency, the rank and trading volume</p>

            <div className='side-one-two'>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="far fa-chart-bar"></i><span>Number Of Markets</span> </div>  <div className='side-onelisting-two'><p>{Coin.numberOfMarkets}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fab fa-stack-exchange"></i> <span>Number Of Exchanges</span> </div>  <div className='side-onelisting-two'><p>{Coin.numberOfExchanges}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-truck-loading"></i> <span> Approved Supply </span> </div>  <div className='side-onelisting-two'><p>{true && <i class="fa fa-check" aria-hidden="true"></i>}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-truck-loading"></i> <span>Total Supply</span> </div>  <div className='side-onelisting-two'><p>{Coin.supply.total}</p></div> </div>
            <div className='side-one-listing'> <div className='side-onelisting-one'><i class="fas fa-truck-loading"></i> <span>Circulating Supply</span> </div>  <div className='side-onelisting-two'><p>{Coin.supply.circulating}</p></div> </div>
          </div>

          <div>
            <h2>{Coin.name} Links</h2>

                {
                  Coin.links.map((items)=>(
                    <div className='custom-links' key={items.url}>
                        <h4>{items.type}</h4>
                        <a href={items.url} target="_blank" rel=''>{items.name}</a>
                      </div>
                  ))
                }
          </div>
        </div>
        </div>
    </div>
  )
};

export default SingleCoin;
