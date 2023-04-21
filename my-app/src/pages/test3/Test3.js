import React, { useState, useEffect } from 'react'
import Logo from '../../icons/Umazing.svg'

function Test3() {

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

        </div>
    )
}

export default Test3