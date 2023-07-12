import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route,Link } from "react-router-dom"
import Home from "./Home"
import Order from './Order'
import Payment from './PaymentPage'
import NavBar from './NavBar'
import Bouquets from './order/Bouquets'
import Keychains from './order/Keychains'
import FlowerPouch from './order/FlowerPouch'
import HeadphoneSprouts from './order/HeadphoneSprouts'
import TulipsAirpodsCase from './order/TulipsAirpodsCase'
import KeychainOrder from './order/KeychainOrder'
import Cart from './Cart'

export default function App() {

  return (
    <>
    <NavBar/>
    <div className="content">
    <Routes>
    <Route
            path="/"
            element={
              <Link to="/order">
              <button>SHOP CROCHET</button>
            </Link>
            }
          />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/order" element={<Order/>}/>
        <Route path="/order/Bouquets" element={<Bouquets />}/>
        <Route path="/order/Keychains" element={<Keychains />}/>
        <Route path="/order/Keychains/:type" element={<KeychainOrder />}/>
        <Route path="/order/FlowerPouch" element={<FlowerPouch />}/>
        <Route path="/order/HeadphoneSprouts" element={<HeadphoneSprouts />}/>
        <Route path="/order/TulipsAirpodsCase" element={<TulipsAirpodsCase />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/Cart" element={<Cart />}/>
    </Routes>
    </div>
    </>
  )
}


