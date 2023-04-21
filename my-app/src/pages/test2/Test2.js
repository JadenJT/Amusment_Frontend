import React, { useState, useEffect, useContext } from 'react'
import Logo from '../../icons/Umazing.svg'
import { Link } from "react-scroll";

function Test2() {
    const [isLoading, setLoading] = useState(true);
    const [concessionData, setConcessionData] = useState([]);


    const fetchConcessiondata = async () => {
        const response = await fetch('http://localhost:8080/concession/all');
        const data = await response.json();

        setConcessionData(data.item);
        setLoading(false);
    };

    useEffect(() => {
        fetchConcessiondata();
    }, []);

    console.log(concessionData);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <div className="cwp">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>

            {/* bottom box div */}

            <div className='center-dropdown-cons'>
                <div className='dropdown-cons'>
                    <button className='concessions-button'>CONCESSIONS</button>
                    <div className='dropdown-content-cons'>
                        <Link to="zoneA-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone A</Link>
                        <Link to="zoneB-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone B</Link>
                        <Link to="zoneC-title" smooth={true} duration={500} offset={-50} spy={true} exact="true" activeClass="active">Zone C</Link>
                    </div>
                </div>
            </div>
            <h1 id="zoneA-title"><u>Zone A</u></h1>
        </div>
    )
}

export default Test2