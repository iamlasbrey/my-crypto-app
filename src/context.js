import React, { useState, useContext, useEffect } from 'react'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [ loading, setLoading ] = useState(true)
    const [ MyCoins, setMyCoins ] = useState([])
    const [ MyStats, setMyStats ] = useState([])
    const [searchTerm, setSearchTerm ] = useState('')
    const [searchResult, setsearchResult] = useState([])
    const [ isOpen, setIsOpen ] = useState(false)
    const [News, SetNews] = useState([])
    const [ optionValue, setoptionValue ] = useState('3h')

    const ToggleIsOpen=()=>{
        setIsOpen(!isOpen)
    }


    const fetchCoins = async()=>{
        setLoading(true)
        try {
            const response = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_MY_API_KEY
                }
            })

            const data = await response.json()
            const { coins, stats } = data.data
    
            if(coins){
                setMyCoins(coins)
                setMyStats(stats)
                }else{
                    setMyCoins([])
                }
                setLoading(false)
        } catch (error) {
                console.log(error)
                setLoading(false)
        }
    }

    const fetchNews = async ()=>{
        setLoading(true)
        try {
            const response = await fetch("https://crypto-news14.p.rapidapi.com/news/cointelegraph", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "crypto-news14.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_MY_API_KEY
                }
            })

        const data = await response.json()
            if(data){
                SetNews(data)
            }else{
                SetNews([])
            }
            setLoading(false)
        
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    }


    const SelectChange=(optionValue)=>{
        setoptionValue(optionValue)
    }

    const searchCoins =async(searchTerm)=>{
        setSearchTerm(searchTerm) 
        if(searchTerm !== ""){
            const newCoinlist = MyCoins.filter((coins)=>{
                return Object.values(coins)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            })
            setsearchResult(newCoinlist)
        }
        else{
            setsearchResult(MyCoins)
        }
    }

    const filteredResults = searchTerm.length < 1 ? MyCoins : searchResult

    useEffect(()=>{
        fetchCoins()
        fetchNews()
    },[searchTerm])

    return (
        <AppContext.Provider 
        value={{
            loading,
            MyCoins,
            MyStats, 
            setSearchTerm,
            searchTerm,
            setMyCoins,
            searchCoins,
            searchResult,
            filteredResults,
            isOpen,
            setIsOpen,
            ToggleIsOpen,
            News,
            SelectChange,
            optionValue, 
            setoptionValue
    
        }}>
        {children}
    </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }