import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-scroll";
import { UserContext, baseUrl } from '../../App';
import { ShopContext } from '../../components/cartContext/CartContext';
import Logo from '../../icons/Umazing.svg';

function convertImage(array) {
    let buf = new Uint8Array(array)
    let dt = new TextDecoder("utf-8");
    let b64 = btoa(dt.decode(buf))
    return <img className="img-ride" src={`data:image/jpeg;base64,${b64}`} />
}

function Test() {

    const [isLoading, setLoading] = useState(true);
    const [isKidLoading, setKidLoading] = useState(true);

    const [ridedata, setRideData] = useState([]);
    const [kidRideData, setkidRideData] = useState([]);
    const { addToCart, cartItems } = useContext(ShopContext);
    const { user } = useContext(UserContext);

    const handleRideClick = (index, event) => {
        const updatedRides = [...ridedata];
        updatedRides[index].showInfo = !updatedRides[index].showInfo;
        setRideData(updatedRides);
    };

    const handleKidsRideClick = (index, event) => {
        const updatedKidRides = [...kidRideData];
        updatedKidRides[index].showInfo = !updatedKidRides[index].showInfo;
        setkidRideData(updatedKidRides);
    };

    const handleInfoClose = (index) => {
        const updatedRides = [...ridedata];
        updatedRides[index].showInfo = false;
        setRideData(updatedRides);
    };

    const handleKidsInfoClose = (index) => {
        const updatedKidRides = [...kidRideData];
        updatedKidRides[index].showInfo = false;
        setkidRideData(updatedKidRides);
    };

    const handleOverlayClick = (event, index) => {
        if (event.target.className === "ride-info-overlay") {
            const updatedRides = [...ridedata];
            updatedRides[index].showInfo = false;
            setRideData(updatedRides);
        }
    };

    const handleKidsOverlayClick = (event, index) => {
        if (event.target.className === "ride-info-overlay") {
            const updatedKidRides = [...ridedata];
            updatedKidRides[index].showInfo = false;
            setkidRideData(updatedKidRides);
        }
    }

    const fetchAdultridedata = async () => {
        const response = await fetch(`${baseUrl}/ride/adult`);
        const data = await response.json();
        for (let i = 0; i < data.item.length; i++) {
            data.item[i].showInfo = false;
        }
        setRideData(data.item);
        setLoading(false);
    };
    useEffect(() => {
        fetchAdultridedata();
    }, []);

    const getAllKidsRides = async () => {
        const response = await fetch(`${baseUrl}/ride/child`);
        const data = await response.json();
        for (let i = 0; i < data.item.length; i++) {
            data.item[i].showInfo = false;
        }

        setkidRideData(data.item);
        setKidLoading(false);
    };
    useEffect(() => {
        getAllKidsRides();
    }, []);


    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if (isKidLoading) {
        return <div className="App">Loading...</div>;
    }

    console.log(`${ridedata.length} rides from server`);

    return (
        <div>
            <div className="rwp">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>
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
            {ridedata.map((ride, index) => (

                <div className="all-rides" key={ride.name} onClick={() => handleRideClick(index)}>
                    {convertImage(ride.image.data)}
                    <div className="ride-details">
                        <h2 className="ride-name">{ride.name}</h2>
                        <p>
                            {ride.description}
                            <br />
                            Location: {ride.zone_id}
                            <br />
                            Must be {ride.height_requirement} to ride
                        </p>
                    </div>
                    {ride.showInfo && (
                        <div className="ride-info-overlay" onClick={(event) => handleOverlayClick(event, index)}>
                            <div className="ride-info-box">
                                <h2 className="ride-name-onClick">{ride.name}</h2>
                                {convertImage(ride.image.data)}
                                <p className='ride-info-p'>This will show if the ride is available or not. <br />
                                    {ride.description}
                                    <br />
                                    Location: {ride.zone_id}
                                    <br />
                                    Must be {ride.height_requirement} to ride
                                </p>

                                {user.token != null &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        addToCart(ride.id);
                                    }}>Buy {cartItems[ride.id] > 0 && <>({cartItems[ride.id]})</>}</button>
                                }
                                <button className="rides-close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleInfoClose(index)
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* These are the kids rides */}
            <h1 id="kids-rides-title"><u>Kids Rides</u></h1>
            {kidRideData.map((ride, index) => (

                <div className="all-rides" key={ride.name} onClick={() => handleRideClick(index)}>
                    {convertImage(ride.image.data)}
                    <div className="ride-details">
                        <h2 className="ride-name">{ride.name}</h2>
                        <p>
                            {ride.description}
                            <br />
                            Location: {ride.zone_id}
                            <br />
                            Must be {ride.height_requirement} to ride
                        </p>
                    </div>
                    {ride.showInfo && (
                        <div className="ride-info-overlay" onClick={(event) => handleOverlayClick(event, index)}>
                            <div className="ride-info-box">
                                <h2 className="ride-name-onClick">{ride.name}</h2>
                                {convertImage(ride.image.data)}
                                <p className='ride-info-p'>This will show if the ride is available or not. <br />
                                    {ride.description}
                                    <br />
                                    Location: {ride.zone_id}
                                    <br />
                                    Must be {ride.height_requirement} to ride
                                </p>

                                {user.token != null &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        addToCart(ride.id);
                                    }}>Buy {<>({cartItems[ride.id]})</>}</button>
                                }
                                <button className="rides-close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleInfoClose(index)
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Test