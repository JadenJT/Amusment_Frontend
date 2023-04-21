import React, { useState, useEffect, useContext } from 'react'
import { Link, animateScroll } from "react-scroll";
import { UserContext } from '../../App';
import { ShopContext } from '../../components/cartContext/CartContext';
function Test() {

    const [isLoading, setLoading] = useState(true);
    const [ridedata, setRideData] = useState([]);
    const { addToCart, cartItems } = useContext(ShopContext);
    const { user } = useContext(UserContext);
    const handleRideClick = (index, event) => {
        const updatedRides = [...ridedata];
        updatedRides[index].showInfo = !updatedRides[index].showInfo;
        setRideData(updatedRides);
    };

    // const handleKidsRideClick = (index, event) => {
    //     const updatedKidRides = [...kidRides];
    //     updatedKidRides[index].showInfo = !updatedKidRides[index].showInfo;
    //     setRides2(updatedKidRides);
    // };

    const handleInfoClose = (index) => {
        const updatedRides = [...ridedata];
        updatedRides[index].showInfo = false;
        setRideData(updatedRides);
    };

    // const handleKidsInfoClose = (index) => {
    //     const updatedKidRides = [...kidRides];
    //     updatedKidRides[index].showInfo = false;
    //     setRides2(updatedKidRides);
    // };

    const handleOverlayClick = (event, index) => {
        if (event.target.className === "ride-info-overlay") {
            const updatedRides = [...ridedata];
            updatedRides[index].showInfo = false;
            setRideData(updatedRides);
        }
    };

    // const handleKidsOverlayClick = (event, index) => {
    //     if (event.target.className === "ride-info-overlay") {
    //         const updatedKidRides = [...kidRides];
    //         updatedKidRides[index].showInfo = false;
    //         setRides2(updatedKidRides);
    //     }
    // }

    const fetchAdultridedata = async () => {
        const response = await fetch('http://localhost:8080/ride/adult');
        const data = await response.json();
        for (let i = 0; i < data.item.length; i++) {
            data.item[i].showInfo = false;
        }

        setRideData(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchAdultridedata();
    }, []);

    console.log(ridedata.item)

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div>
            <div className="center-dropdown">
                <div className="dropdown">
                    <button className="ridesButton">RIDES</button>
                    <div className="dropdown-content">
                        <Link to="adult-rides-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Adult Rides</Link>
                        <Link to="kids-rides-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Kids Rides</Link>
                    </div>
                </div>
            </div>
            <h1 id="adult-rides-title"><u>Adult Rides</u></h1>
            {ridedata.item.map((ride, index) => (
                <div>{ride.name}</div>
            ))}

        </div>
    )
}

export default Test