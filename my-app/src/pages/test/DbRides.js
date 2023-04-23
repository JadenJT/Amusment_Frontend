import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-scroll";
import { UserContext, baseUrl } from '../../App';
import { ShopContext } from '../../components/cartContext/CartContext';
import Logo from '../../icons/Umazing.svg';
import "../Rides/rides.css";


function convertImage(array) {
    let buf = new Uint8Array(array)
    let dt = new TextDecoder("utf-8");
    let b64 = btoa(dt.decode(buf))
    return <img className="img-ride" src={`data:image/jpeg;base64,${b64}`} />
}


function DbRides() {

    const [isLoading, setLoading] = useState(true);
    const [isKidLoading, setKidLoading] = useState(true);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [ridedata, setRideData] = useState([]);
    const [kidRideData, setkidRideData] = useState([]);
    const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
    const { user } = useContext(UserContext);

    const handleRideClick = (index, event) => {
        const updatedRides = [...ridedata];
        updatedRides[index].showInfo = !updatedRides[index].showInfo;
        setRideData(updatedRides);
        setDate('')
        setTime('')
    };

    const handleKidsRideClick = (index, event) => {
        const updatedKidRides = [...kidRideData];
        updatedKidRides[index].showInfo = !updatedKidRides[index].showInfo;
        setkidRideData(updatedKidRides);
        setDate('')
        setTime('')
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
        const response = await fetch(`${baseUrl}/ride/adultActive`);
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
        const response = await fetch(`${baseUrl}/ride/childActive`);
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

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if (isKidLoading) {
        return <div className="App">Loading...</div>;
    }

    const currentDate = new Date();
    const earliestDate = currentDate.toISOString().substring(0, 10);

    console.log(date, time)
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
                        <h2 className="ride-name ">{ride.name} {ride.ride_id in cartItems && <>({cartItems[ride.ride_id].amount})</>}</h2>
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
                                {ride.description}
                                <br />
                                Location: {ride.zone_id}
                                <br />
                                Must be {ride.height_requirement} to ride
                                {user.token != null &&
                                    <div>
                                        <input type='date' min={earliestDate} onClick={(event) => event.stopPropagation()} onChange={handleDateChange} />
                                        <div>
                                            <select name="time" id="time" onClick={(event) => event.stopPropagation()} onChange={handleTimeChange}>
                                                <option value="" disabled selected>Time</option>
                                                <option value="08:00:00">8:00 AM</option>
                                                <option value="09:00:00">9:00 AM</option>
                                                <option value="10:00:00">10:00 AM</option>
                                                <option value="11:00:00">11:00 AM</option>
                                                <option value="12:00:00">12:00 PM</option>
                                                <option value="13:00:00">1:00 PM</option>
                                                <option value="14:00:00">2:00 PM</option>
                                                <option value="15:00:00">3:00 PM</option>
                                                <option value="16:00:00">4:00 PM</option>
                                                <option value="17:00:00">5:00 PM</option>
                                                <option value="18:00:00">6:00 PM</option>
                                                <option value="19:00:00">7:00 PM</option>
                                                <option value="20:00:00">8:00 PM</option>
                                                <option value="21:00:00">9:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                {user.token != null && (date != '' && time != '') &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        addToCart(ride.name, ride.ride_id, ride.type, `${date} ${time}`);
                                    }}>Buy {ride.ride_id in cartItems && <>({cartItems[ride.ride_id].amount})</>}</button>
                                }
                                {user.token != null && (ride.ride_id in cartItems) &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        removeFromCart(ride.ride_id);
                                    }}>Remove</button>
                                }
                                <button className="rides-close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleInfoClose(index)
                                    setDate("")
                                    setTime("")
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* These are the kids rides */}
            <h1 id="kids-rides-title"><u>Kids Rides</u></h1>
            {kidRideData.map((ride, index) => (
                <div className="all-rides" key={ride.name} onClick={() => handleKidsRideClick(index)}>
                    {convertImage(ride.image.data)}
                    <div className="ride-details">
                        <h2 className="ride-name ">{ride.name} {ride.ride_id in cartItems && <>({cartItems[ride.ride_id].amount})</>}</h2>
                        <p>
                            {ride.description}
                            <br />
                            Location: {ride.zone_id}
                            <br />
                            Must be {ride.height_requirement} to ride
                        </p>
                    </div>
                    {ride.showInfo && (
                        <div className="ride-info-overlay" onClick={(event) => handleKidsOverlayClick(event, index)}>
                            <div className="ride-info-box">
                                <h2 className="ride-name-onClick">{ride.name}</h2>
                                {convertImage(ride.image.data)}

                                {ride.description}
                                <br />
                                Location: {ride.zone_id}
                                <br />
                                Must be {ride.height_requirement} to ride
                                {user.token != null &&
                                    <div>
                                        <input type='date' min={earliestDate} onClick={(event) => event.stopPropagation()} onChange={handleDateChange} />
                                        <div>
                                            <select name="time" id="time" onClick={(event) => event.stopPropagation()} onChange={handleTimeChange}>
                                                <option value="" disabled selected>Time</option>
                                                <option value="08:00:00">8:00 AM</option>
                                                <option value="09:00:00">9:00 AM</option>
                                                <option value="10:00:00">10:00 AM</option>
                                                <option value="11:00:00">11:00 AM</option>
                                                <option value="12:00:00">12:00 PM</option>
                                                <option value="13:00:00">1:00 PM</option>
                                                <option value="14:00:00">2:00 PM</option>
                                                <option value="15:00:00">3:00 PM</option>
                                                <option value="16:00:00">4:00 PM</option>
                                                <option value="17:00:00">5:00 PM</option>
                                                <option value="18:00:00">6:00 PM</option>
                                                <option value="19:00:00">7:00 PM</option>
                                                <option value="20:00:00">8:00 PM</option>
                                                <option value="21:00:00">9:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                {user.token != null && (date != '' && time != '') &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        addToCart(ride.name, ride.ride_id, ride.type, `${date} ${time}`);
                                    }}>Buy {ride.ride_id in cartItems && <>({cartItems[ride.ride_id].amount})</>}</button>
                                }
                                {user.token != null && (ride.ride_id in cartItems) &&
                                    <button className="rides-buy-button " onClick={(event) => {
                                        event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                        removeFromCart(ride.ride_id);
                                    }}>Remove</button>
                                }
                                <button className="rides-close-button" onClick={(event) => {
                                    event.stopPropagation(); // stop the click event from bubbling up to the parent div
                                    handleKidsInfoClose(index)
                                }}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default DbRides