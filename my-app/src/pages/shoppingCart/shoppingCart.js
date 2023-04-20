import React, { useContext } from 'react'
import { ShopContext } from '../../components/cartContext/CartContext';
import './shoppingCart.css';
import { UserContext } from '../../App';


function ShoppingCart() {
    const { cartTotal } = useContext(ShopContext);

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const personData = {
            Ticket_amount: 0,
            date: "",
            ride_name: "",
            email: "",
        };

        const response = await fetch('http://localhost:8080/ticket/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(personData)
        })
    }

    return (

        <div className='cart-cover'>
            <h1 className='cart-title'>Your cart {<>({cartTotal} item(s))</>}</h1>

            <button className="login-btn">Check out</button>
        </div>
    )
}

export default ShoppingCart