import React, { useContext } from 'react'
import { ShopContext } from '../../components/cartContext/CartContext';
import './shoppingCart.css';
import { UserContext } from '../../App';


function ShoppingCart() {
    const { cartTotal, cartItems } = useContext(ShopContext);
    console.log(cartItems)
    return (

        <div className='cart-cover'>
            <h1 className='cart-title'>Your cart {<>({cartTotal} item(s))</>}</h1>

            <button className="login-btn">Check out</button>
        </div>
    )
}

export default ShoppingCart