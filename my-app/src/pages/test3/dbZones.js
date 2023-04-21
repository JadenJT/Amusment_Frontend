import React, { useState, useEffect } from 'react'
import Logo from '../../icons/Umazing.svg'
import { Link } from "react-scroll";

function convertImage(array) {
    let buf = new Uint8Array(array)
    let dt = new TextDecoder("utf-8");
    let b64 = btoa(dt.decode(buf))
    return <img className="img-ride" src={`data:image/jpeg;base64,${b64}`} />
}

function DbZones() {

    const [isRideLoading, setRideLoading] = useState(true);
    const [isConcessionLoading, setConcessionLoading] = useState(true);
    const [isGiftshopLoading, setGiftshopLoading] = useState(true);

    const [ridedata, setRideData] = useState([]);
    const [concessiondata, setconcessiondata] = useState([]);
    const [giftshopdata, setgiftshopdata] = useState([]);

    // get all active concessions
    const fetchConcessiondata = async () => {
        const response = await fetch('http://localhost:8080/concession/Active');
        const data = await response.json();
        setconcessiondata(data.item);
        setConcessionLoading(false);
    };

    useEffect(() => {
        fetchConcessiondata();
    }, []);

    // get all active rides
    const fetchRidedata = async () => {
        const response = await fetch('http://localhost:8080/ride/allActiveRide');
        const data = await response.json();
        setRideData(data.item);
        setRideLoading(false);
    };

    useEffect(() => {
        fetchRidedata();
    }, []);

    // get all active giftshops
    const fetchGiftshopdata = async () => {
        const response = await fetch('http://localhost:8080/giftshop/Active');
        const data = await response.json();
        setgiftshopdata(data.item);
        setGiftshopLoading(false);
    };

    useEffect(() => {
        fetchGiftshopdata();
    }, []);

    if (isRideLoading) {
        return <div className="App">Loading...</div>;
    }

    if (isConcessionLoading) {
        return <div className="App">Loading...</div>;
    }

    if (isGiftshopLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div>
            <div className="zwp">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>

            <div className='center-dropdown-cons'>
                <div className='dropdown-cons'>
                    <button className='concessions-button'>Zones</button>
                    <div className='dropdown-content-cons'>
                        <Link to="zoneA-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone A</Link>
                        <Link to="zoneB-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone B</Link>
                        <Link to="zoneC-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone C</Link>
                    </div>
                </div>
            </div>

            <div className='zoneA'>
                <h1 id="zoneA-title"><u>Zone A</u></h1>

                {/* ride output */}

                {ridedata.some(ridedata => ridedata.zone_id === 'a') ? (
                    ridedata.filter(ridedata => ridedata.zone_id === 'a').map((ride, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(ride.image.data)}</li>
                                    <li><h3>{ride.name}</h3></li>
                                    <li>Category: {ride.category}</li>
                                    <li>Type: {ride.type}</li>
                                    <li>Location: Zone {ride.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rides found in Zone A
                    </p>
                )}

                {/* Concession output */}

                {concessiondata.some(concessiondata => concessiondata.zone_id === 'a') ? (
                    concessiondata.filter(concessiondata => concessiondata.zone_id === 'a').map((concession, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(concession.image.data)}</li>
                                    <li><h3>{concession.name}</h3></li>
                                    <li>Type: Concession</li>
                                    <li>Location: Zone {concession.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone A
                    </p>
                )}

                {/* giftshop output */}
                {giftshopdata.some(giftshopdata => giftshopdata.zone_id === 'a') ? (
                    giftshopdata.filter(giftshopdata => giftshopdata.zone_id === 'a').map((giftshop, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(giftshop.image.data)}</li>
                                    <li><h3>{giftshop.name}</h3></li>
                                    <li>Type: Giftshop</li>
                                    <li>Location: Zone {giftshop.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No giftshops found in Zone A
                    </p>
                )}

            </div>


            <div className='zoneB'>
                <h1 id="zoneB-title"><u>Zone B</u></h1>

                {/* ride output */}

                {ridedata.some(ridedata => ridedata.zone_id === 'b') ? (
                    ridedata.filter(ridedata => ridedata.zone_id === 'b').map((ride, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(ride.image.data)}</li>
                                    <li><h3>{ride.name}</h3></li>
                                    <li>Category: {ride.category}</li>
                                    <li>Type: {ride.type}</li>
                                    <li>Location: Zone {ride.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rides found in Zone B
                    </p>
                )}

                {/* Concession output */}

                {concessiondata.some(concessiondata => concessiondata.zone_id === 'b') ? (
                    concessiondata.filter(concessiondata => concessiondata.zone_id === 'b').map((concession, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(concession.image.data)}</li>
                                    <li><h3>{concession.name}</h3></li>
                                    <li>Type: Concession</li>
                                    <li>Location: Zone {concession.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone B
                    </p>
                )}

                {/* giftshop output */}
                {giftshopdata.some(giftshopdata => giftshopdata.zone_id === 'b') ? (
                    giftshopdata.filter(giftshopdata => giftshopdata.zone_id === 'b').map((giftshop, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(giftshop.image.data)}</li>
                                    <li><h3>{giftshop.name}</h3></li>
                                    <li>Type: Giftshop</li>
                                    <li>Location: Zone {giftshop.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No giftshops found in Zone B
                    </p>
                )}

            </div>


            <div className='zoneC'>
                <h1 id="zoneC-title"><u>Zone C</u></h1>

                {/* ride output */}

                {ridedata.some(ridedata => ridedata.zone_id === 'c') ? (
                    ridedata.filter(ridedata => ridedata.zone_id === 'c').map((ride, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(ride.image.data)}</li>
                                    <li><h3>{ride.name}</h3></li>
                                    <li>Category: {ride.category}</li>
                                    <li>Type: {ride.type}</li>
                                    <li>Location: Zone {ride.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rides found in Zone C
                    </p>
                )}

                {/* Concession output */}

                {concessiondata.some(concessiondata => concessiondata.zone_id === 'c') ? (
                    concessiondata.filter(concessiondata => concessiondata.zone_id === 'c').map((concession, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(concession.image.data)}</li>
                                    <li><h3>{concession.name}</h3></li>
                                    <li>Type: Concession</li>
                                    <li>Location: Zone {concession.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No concessions found in Zone C
                    </p>
                )}

                {/* giftshop output */}
                {giftshopdata.some(giftshopdata => giftshopdata.zone_id === 'c') ? (
                    giftshopdata.filter(giftshopdata => giftshopdata.zone_id === 'c').map((giftshop, index) => (
                        <div className='column'>
                            <div className='card'>
                                <ul>
                                    <li>{convertImage(giftshop.image.data)}</li>
                                    <li><h3>{giftshop.name}</h3></li>
                                    <li>Type: Giftshop</li>
                                    <li>Location: Zone {giftshop.zone_id}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No giftshops found in Zone C
                    </p>
                )}

            </div>


        </div>
    );
}

export default DbZones