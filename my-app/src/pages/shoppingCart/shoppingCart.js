import React, { useContext } from 'react'
import { ShopContext } from '../../components/cartContext/CartContext';
import './shoppingCart.css';
import { UserContext } from '../../App';

function convertImage(array) {
    let buf = new Uint8Array(array)
    let dt = new TextDecoder("utf-8");
    let b64 = btoa(dt.decode(buf))
    return <img className="img-ride" src={`data:image/jpeg;base64,${b64}`} />
}

function ShoppingCart() {
    const { cartTotal, cartItems } = useContext(ShopContext);
    const { user, setUser } = useContext(UserContext);


    return (
        <div className='cart-cover'>
            <h1 className='cart-title'>Your Cart <>({cartTotal} Item(s))</> </h1>
            <div class="checkout-container">
                <div class="checkout-items">
                    <div class="nav-bar">
                        <div class="nav-item" id='rides'>Rides</div>
                        <div class="nav-item">Price</div>
                        <div class="nav-item">Quantity</div>
                        <div class="nav-item">Total</div>
                    </div>
                    <div class="item">
                        <div class="item-ride">Roller Coaster</div>
                        <div class="item-price">25.00</div>
                        <div class="item-quantity">2</div>
                        <div class="item-total">50.00</div>
                    </div>
                    <div class="item">
                        <div class="item-ride">Ferris Wheel</div>
                        <div class="item-price">10.00</div>
                        <div class="item-quantity">1</div>
                        <div class="item-total">10.00</div>
                    </div>
                    <div class="item">
                        <div class="item-ride">Bumper Cars</div>
                        <div class="item-price">15.00</div>
                        <div class="item-quantity">3</div>
                        <div class="item-total">45.00</div>
                    </div>
                </div>
                <div class="checkout-summary">
                    <div class="summary-header">Order Summary</div>
                    <div class="summary-item">
                        <div class="summary-label">Roller Coaster (2)</div>
                        <div class="summary-label">Ferris Wheel (1)</div>

                        <div class="summary-value">50.00</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Ferris Wheel (1)</div>
                        <div class="summary-label">Ferris Wheel (1)</div>

                        <div class="summary-value">10.00</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Bumper Cars (3)</div>
                        <div class="summary-value">45.00</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Subtotal</div>
                        <div class="summary-value">105.00</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Total</div>
                        <div class="summary-value">115.50</div>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart