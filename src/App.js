import React from 'react'
import './App.css'
import {
    Routes, Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer  from './components/Footer'
import SingleCoin from './pages/SingleCoin'
import Newslist from './pages/Newslist'
import SidePage from './pages/SidePage'
import GenericNotFound from './pages/GenericNotFound'

const App = () => {
    return (
        <div className='app'>
            <SidePage />
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='coin/:id' element={<SingleCoin />}></Route>
                <Route path='/news' element={<Newslist />}></Route>
                <Route path='*' element={<GenericNotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
