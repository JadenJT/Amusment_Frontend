import React, { useState, useEffect, useContext } from 'react'
import Logo from '../../icons/Umazing.svg'
import { Link } from "react-scroll";

function convertImage(array) {
    let buf = new Uint8Array(array)
    let dt = new TextDecoder("utf-8");
    let b64 = btoa(dt.decode(buf))
    return <img className="img-ride" src={`data:image/jpeg;base64,${b64}`} />
}

function Test2() {
    const [isLoading, setLoading] = useState(true);
    const [concessionData, setConcessionData] = useState([]);


    const fetchConcessiondata = async () => {
        const response = await fetch('http://localhost:8080/concession/Active');
        const data = await response.json();
        for (let i = 0; i < data.item.length; i++) {
            data.item[i].showInfo = false;
            console.log(data.item[i].zone_id)
        }
        console.log(data.item)
        setConcessionData(data.item);
        setLoading(false);
    };

    useEffect(() => {
        fetchConcessiondata();
    }, []);


    const handleConcessionClick = (concession) => {
        setConcessionData(prevState => {
            const updatedConcessions = prevState.map(item => {
                if (item === concession) {
                    return { ...item, showInfo: !item.showInfo }
                }
                return item;
            });
            return updatedConcessions;
        });
    };

    const handleConcessionInfoClose = (concession) => {
        setConcessionData(prevState => {
            const updatedConcessions = prevState.map(item => {
                if (item === concession) {
                    return { ...item, showInfo: false };
                }
                return item;
            });
            return updatedConcessions;
        });
    };

    const handleConcessionOverlayClick = (event, index) => {
        if (event.target.className === "concession-info-overlay") {
            const updatedConcessions = [...concessionData];
            updatedConcessions[index].showInfo = false;
            setConcessionData(updatedConcessions);
        }
    };



    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div>
            <div className="cwp">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>

            {/* bottom box div */}
            <div className='bottom-box'>

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
                {concessionData.some(concessionData => concessionData.zone_id === 'a') ? (
                    concessionData.filter(concessionData => concessionData.zone_id === 'a').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            {convertImage(concession.image.data)}
                            {/* <img className='concession-img' src={concession.imgSrc} alt={concession.name}/> */}
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                </p>
                                <p>
                                    Location: {concession.zone_id}
                                </p>
                            </div>
                            {concession.showInfo && concession.zone_id === 'a' && (
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        {convertImage(concession.image.data)}
                                        {/* <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} /> */}
                                        <p className='concession-info-p'>
                                            {concession.description}
                                            <br />
                                            Location: {concession.zone_id}
                                        </p>
                                        <button className='concession-close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (

                    <p>No concessions found in Zone A
                    </p>
                )}
                <h1 id="zoneB-title"><u>Zone B</u></h1>
                {concessionData.some(concessionData => concessionData.zone_id === 'b') ? (
                    concessionData.filter(concessionData => concessionData.zone_id === 'b').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            {convertImage(concession.image.data)}
                            {/* <img className='concession-img' src={concession.imgSrc} alt={concession.name}/> */}
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                </p>
                                <p>
                                    Location: {concession.zone_id}
                                </p>
                            </div>
                            {concession.showInfo && concession.zone_id === 'b' && (
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        {convertImage(concession.image.data)}
                                        {/* <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} /> */}
                                        <p className='concession-info-p'>
                                            {concession.description}
                                            <br />
                                            Location: {concession.zone_id}
                                        </p>
                                        <button className='concession-close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (

                    <p>No concessions found in Zone B
                    </p>
                )}
                <h1 id="zoneC-title"><u>Zone C</u></h1>
                {concessionData.some(concessionData => concessionData.zone_id === 'c') ? (
                    concessionData.filter(concessionData => concessionData.zone_id === 'c').map((concession, index) => (
                        <div className='all-concessions' key={concession.name} onClick={(event) => handleConcessionClick(concession)}>
                            {convertImage(concession.image.data)}
                            {/* <img className='concession-img' src={concession.imgSrc} alt={concession.name}/> */}
                            <div className='concession-details'>
                                <h2 className='concession-name'>{concession.name}</h2>
                                <p>
                                    {concession.description}
                                </p>
                                <p>
                                    Location: {concession.zone_id}
                                </p>
                            </div>
                            {concession.showInfo && concession.zone_id === 'c' && (
                                <div className='concession-info-overlay' onClick={(event) => handleConcessionOverlayClick(event, index)}>
                                    <div className='concession-info-box'>
                                        <h2 className='concession-name-onClick'>{concession.name}</h2>
                                        {convertImage(concession.image.data)}
                                        {/* <img className='concession-img-onClick' src={concession.imgSrc} alt={concession.name} /> */}
                                        <p className='concession-info-p'>
                                            {concession.description}
                                            <br />
                                            Location: {concession.zone_id}
                                        </p>
                                        <button className='concession-close-button' onClick={(event) => {
                                            event.stopPropagation();
                                            handleConcessionInfoClose(concession)
                                        }}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (

                    <p>No concessions found in Zone B
                    </p>
                )}
            </div>
        </div>
    )
}

export default Test2