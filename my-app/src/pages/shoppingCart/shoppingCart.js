import React, { useContext, useState, useEffect } from 'react'
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
    const [total, setTotal] = useState(0);

    const getTotal = () => {
        let updatedTotal = 0;
        console.log(cartItems)
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i] != null) {
                if (cartItems[i].type == 'Adult') {
                    updatedTotal += 30 * cartItems[i].amount
                }
                if (cartItems[i].type == 'Child') {
                    updatedTotal += 17 * cartItems[i].amount
                }
            }
        }
        setTotal(updatedTotal)
    }
    useEffect(() => {
        getTotal();
    }, []);




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

                    {/* items in the cart */}
                    {cartItems.map((item) => (
                        <div class="item">
                            <div class="item-ride">{(item.name)}</div>
                            <div class="item-price">{item.type == 'Adult' && <>30.00</>}{item.type == 'Child' && <>17.00</>}</div>
                            <div class="item-quantity">{(item.amount)}</div>
                            <div class="item-total">{item.type == 'Adult' && <>{30 * (item.amount)}.00</>}{item.type == 'Child' && <>{17 * (item.amount)}.00</>}</div>
                        </div>
                    ))}

                </div>



                <div class="checkout-summary">
                    <div class="summary-header">Order Summary</div>

                    {cartItems.map((item) => (
                        <div class="summary-item">
                            <div class="summary-label">{item.name} ({item.amount})</div>
                            <div class="summary-value">{item.type == 'Adult' && <>{30 * (item.amount)}.00</>}{item.type == 'Child' && <>{17 * (item.amount)}.00</>}</div>

                        </div>
                    ))}
                    <div class="summary-item">
                        <div class="summary-label">Total</div>
                        <div class="summary-value">{total}</div>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart