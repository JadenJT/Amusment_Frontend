import { createContext, useContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    const addToCart = (name, ride_id, type, date) => {
        let updatedCartItems = cartItems;
        if (ride_id in updatedCartItems) {
            updatedCartItems[ride_id].amount++;
        } else {
            var item = {
                name: name,
                ride_id: ride_id,
                type: type,
                date: date,
                amount: 1,
            }
            updatedCartItems[ride_id] = item;
        }
        setCartItems(updatedCartItems);
        setCartTotal(cartTotal + 1);
    };

    const removeFromCart = (rideId) => {
        let updatedCartItems = cartItems;

        if (updatedCartItems[rideId].amount > 0) {
            setCartTotal(cartTotal - 1);
        }

        if (rideId in updatedCartItems && updatedCartItems[rideId].amount > 1) {
            updatedCartItems[rideId].amount--;

        } else {
            delete updatedCartItems[rideId];
        }


        setCartItems(updatedCartItems);

    };

    const contextValue = { cartItems, addToCart, removeFromCart, cartTotal, setCartItems, setCartTotal };
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
};