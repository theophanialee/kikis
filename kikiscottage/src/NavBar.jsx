
import './App.css'
import { Link } from "react-router-dom"
import Order from './Order'
import Payment from "./PaymentPage"

export default function NavBar() {

  return (
    <>
    <nav>
        <Link className="nav-link" to="/order" >
        PRODUCTS
        </Link>
        <Link className="nav-link" to="/payment" >
        PAYMENT
        </Link>
        <Link className="nav-link" to="/cart">🛒</Link>
      </nav>
   
  
    </>
  )
}

