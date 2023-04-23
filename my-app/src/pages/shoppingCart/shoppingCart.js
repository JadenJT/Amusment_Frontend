import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../../components/cartContext/CartContext';
import './shoppingCart.css';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';




function ShoppingCart() {
    const navigate = useNavigate();
    const { cartTotal, cartItems, setCartItems, setCartTotal } = useContext(ShopContext);
    const { user, setUser } = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const [showInfo, setshowInfo] = useState(false);
    const [successfulCheckout, setsuccessfulCheckout] = useState(false);
    const [invalid, setInvalid] = useState([]);



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


    const navigatetoRides = () => {
        setCartItems([]);
        setCartTotal(0);
        navigate('/rides');

    }

    const navigatetoRideseErr = () => {
        navigate('/rides');

    }

    const handleCheckOut = async (event) => {
        let checkout = []
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i] != null) {
                let info = {
                    ride_id: cartItems[i].ride_id,
                    type: cartItems[i].type,
                    email: user.email,
                    dateTime: cartItems[i].date
                }
                for (let j = 0; j < cartItems[i].amount; j++) {
                    checkout.push(info)
                }
            }
        }

        const ticketdata = {
            ticket: checkout,
        };

        const response = await fetch('http://localhost:8080/ticket/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticketdata)
        });


        const responseData = await response.json();
        setshowInfo(true);
        console.log(responseData);

        if (responseData.message == "Tickets Added") {
            setsuccessfulCheckout(true)
            setCheckoutMessage("! Congrats your tickets has successfully been added !")
        }

        if (responseData.message == "Tickets revoked") {
            let error = "";
            let last = "";
            let errorList = [];
            let counter = 0;
            setsuccessfulCheckout(false)
            for (let j = 0; j < responseData.item.length; j++) {

                if (responseData.item[j].error == "11000" && last != responseData.item[j].ride_name) {
                    error += responseData.item[j].ride_name + " for " + responseData.item[j].dateTime + " is at MAX capacity for the date and time selected please choose another date and time"
                    last = responseData.item[j].ride_name;
                    errorList[counter] = error;
                    counter++;
                    error = "";
                }

                if (responseData.item[j].error == "45000" && last != responseData.item[j].ride_name) {
                    error += responseData.item[j].ride_name + " for " + responseData.item[j].dateTime + " is being scheduled for Maintenance"
                    last = responseData.item[j].ride_name;
                    errorList[counter] = error;
                    counter++;
                    error = "";
                }


            }
            setInvalid(errorList);
        }

    }
    console.log(invalid);
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
                    <button class="checkout-btn" onClick={handleCheckOut}>Checkout</button>
                    {showInfo && (
                        <div>
                            <div className='error-box-overlay'></div>
                            <div className="error-box">
                                {!successfulCheckout && (
                                    <div>
                                        <h3 className='error-box-text'>Error</h3>
                                        {invalid.map((item) => (
                                            <div>
                                                <div className='error-box-text'>{item}</div>
                                                <br></br>
                                            </div>
                                        ))}
                                        <button onClick={navigatetoRideseErr} className='checkout-btn'>Go to rides page</button>
                                        <button className='logout-btnn' onClick={() => setshowInfo(false)}>return</button>
                                    </div>
                                )}
                                {successfulCheckout && (
                                    <div>
                                        <h3 className='success-box-text'>{checkoutMessage}</h3>
                                        <div>Would you like to continue shopping?</div>
                                        <button onClick={navigatetoRides} className='checkout-btn'>Go to rides page</button>
                                        <button className='logout-btnn' onClick={() => setshowInfo(false)}>return</button>
                                    </div>
                                )}




                            </div>
                        </div>
                    )

                    }
                </div>
            </div>

        </div>

    )
}

export default ShoppingCart