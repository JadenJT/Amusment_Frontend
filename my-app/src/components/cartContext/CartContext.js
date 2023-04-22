import { createContext, useContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);


const getDeaultCart = () => {
    let cart = {};
    for (let i = 1; i < 15; i++) {
        cart[i] = 0;
    }
    return cart;
};



export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDeaultCart());
    const [cartTotal, setCartTotal] = useState(0);


    const addToCart = (rideId) => {
        setCartItems((prev) => ({ ...prev, [rideId]: prev[rideId] + 1 }));
        setCartTotal(cartTotal + 1);
    };

    const removeFromCart = (rideId) => {
        setCartItems((prev) => ({ ...prev, [rideId]: prev[rideId] - 1 }));
        setCartTotal(cartTotal - 1);
    };

    const contextValue = { cartItems, addToCart, removeFromCart, cartTotal };
    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
};