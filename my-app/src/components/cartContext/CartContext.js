import { createContext, useContext, useState } from "react";

export const ShopContext = createContext(null);



const getDeaultCart = () => {
    let cart = {};
    for (let i = 1; i < 16; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDeaultCart());

    const addToCart = (rideId) => {
        setCartItems((prev) => ({ ...prev, [rideId]: prev[rideId] + 1 }));
    };

    const removeFromCart = (rideId) => {
        setCartItems((prev) => ({ ...prev, [rideId]: prev[rideId] - 1 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };
    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
};