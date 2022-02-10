import React,{useState, useEffect} from 'react';
import './chartpage.css'
import { useGlobalContext } from '../context';
import Chart from './Chart';
    

const ChartPage = ({Coin, id}) => {
    const {SelectChange, optionValue} = useGlobalContext()
    const [ loading, isLoading ] = useState(false)
    const [ PriceHistoryData, SetPriceHistoryData ] = useState([])
    const [ PriceHistoryDataChange, SetPriceHistoryDataChange ] = useState('')
    

    const GetPriceHostory = async ()=>{
        isLoading(true)
        try {
            const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${optionValue}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_MY_API_KEY
                }
            })

        const data = await response.json()
        const { history, change } = data.data
            if(data){
                SetPriceHistoryData(history)
                SetPriceHistoryDataChange(change)
            }else{
                SetPriceHistoryData([])
                SetPriceHistoryDataChange('')
            }
            isLoading(false)
        
        } catch (error) {
            console.log(error)
            isLoading(false)
        }
        
    }

    useEffect(()=>{
        GetPriceHostory()
    },[optionValue])

    return (
        <div className='chartpage'>
            <h3 className='header'> {Coin.name} Price ({Coin.symbol}) </h3>
            <p className='live-price'> {Coin.name} Live Price In Us Dollars (USD) </p>

            <div className='selectandprice'>
                <select className='selectandpriceoptions' value={optionValue} onChange={(e)=>SelectChange(e.target.value)}>
                    <option value='3h'>3h</option>
                    <option value='24h'>24h</option>
                    <option value='7d'>7d</option>
                    <option value='30d'>30d</option>
                    <option value='3m'>3m</option>
                    <option value='1y'>1y</option>
                    <option value='3y'>3y</option>
                    <option value='5y'>5y</option>
                </select>
            
            <div className='selectandpriceoptionsandchange'>
                <h3 className='pricechanges'>Change: <span>{ PriceHistoryDataChange}%</span> </h3>
                <h3 className='cryptoprice'>{Coin.name} Price: <span>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(Coin.price)}</span></h3>
            </div>

            </div>

            <div className='coinSpace'>
                <Chart Coin={Coin} PriceHistoryData={PriceHistoryData}/>
            </div>
            
        </div>
    )
}


export default ChartPage;
