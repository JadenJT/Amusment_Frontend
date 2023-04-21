import React, { useState, useEffect } from 'react';
import './RemoveAttraction.css'

const RemoveAttraction = () => {
    const [ridedata, setRideData] = useState([]);
    const [concessiondata, setConcessionData] = useState([]);
    const [giftshopdata, setGiftshopData] = useState([]);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
    const [rideoption, setrideoption] = useState('');
    const [concessionoption, setconcessionoption] = useState('');
    const [giftshopoption, setgiftshopoption] = useState('');

    //handle functions
    const handleoptionChange = (e) => {
        setSelectedOption(e.target.value);
        setIsOptionSelected(true);
        resetForm();
    };
    const handlerideOptionChange = (e) => {
        setrideoption(e.target.value);
    };
    const handleconcessionOptionChange = (e) => {
        setconcessionoption(e.target.value);
    };
    const handlegiftshopOptionChange = (e) => {
        setgiftshopoption(e.target.value);
    };

    //fetch get data
    const fetchridedata = async () => {
        const response = await fetch('http://localhost:8080/ride/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        setRideData(data);
    };
    useEffect(() => {
        fetchridedata();
    }, []);
    const fetchconcessiondata = async () => {
        const response = await fetch('http://localhost:8080/concession/all', {
            methond: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        setConcessionData(data);
    };
    useEffect(() => {
        fetchconcessiondata();
    }, []);
    const fetchgiftshopdata = async () => {
        const response = await fetch('http://localhost:8080/giftshop/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        setGiftshopData(data);
    };
    useEffect(() => {
        fetchgiftshopdata();
    }, []);

    //render data
    const renderRideNameOptions = () => {
        const items = ridedata.item;
        const filteredItems = items.filter(ride => ride.name !== null);
        return filteredItems.map((ride, index) => (
            <option key={index} value={ride.name}>
                {ride.name}
            </option>
        ));
    };
    const renderConcessionOptions = () => {
        const items = concessiondata.item;
        const filteredItems = items.filter(concession => concession.name !== null);
        return filteredItems.map((concession, index) => (
            <option key={index} value={concession.name}>
                {concession.name}
            </option>
        ));
    };
    const renderGiftShopOptions = () => {
        const items = giftshopdata.item;
        return items.map((giftshop, index) => (
            <option key={index} value={giftshop.name}>
                {giftshop.name}
            </option>
        ));
    };

    const resetForm = () => {
        setrideoption('');
        setconcessionoption('');
        setgiftshopoption('');
    };

    const handleRemoveOnSubmit = (e) => {
        e.preventDefault();

        if (selectedOption === 'ride') {
            //handle deletion for a ride
        } else if (selectedOption === 'concession') {
            //handle deletion for a concession
        } else if (selectedOption === 'giftshop') {
            //handle deletion for a concession
        }
        //redirect to admin portal after submit
    };

    return (
        <div>
            <div className='admin-remove-body'>
                <div className='admin-remove-cover'>
                    <h1 className='admin-remove-title'>Remove Ride, Concession, or Gift Shop</h1>
                    <form className='admin-remove-form'>
                        <h3 className='select-option-title'>Select an option to remove:</h3>
                        <select className='select-option' name='option' value={selectedOption} onChange={handleoptionChange}>
                            <option value='' disabled>
                                Select an option
                            </option>
                            <option value='ride'>Ride</option>
                            <option value='concession'>Concession</option>
                            <option value='giftshop'>Gift Shop</option>
                        </select>

                        {selectedOption === '' && (
                            <div className='option-empty-title-container'>
                                <h2 className='admin-edit-title'>
                                    Please select an option from the dropdown menu to remove an existing ride, concession, or giftshop!
                                </h2>
                            </div>
                        )}

                        {selectedOption === 'ride' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a ride to remove:</h3>
                                <select className='select-remove-option' name='ride' value={rideoption} onChange={handlerideOptionChange}>
                                    <option value='' disabled>
                                        Select a ride
                                    </option>
                                    {renderRideNameOptions()}
                                </select>
                            </div>
                        )}

                        {selectedOption === 'concession' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a concession to remove:</h3>
                                <select className='select-remove-option' name='concession' value={concessionoption} onChange={handleconcessionOptionChange}>
                                    <option value='' disabled>
                                        Select a concession
                                    </option>
                                    {renderConcessionOptions()}
                                </select>
                            </div>
                        )}

                        {selectedOption === 'giftshop' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a gift shop to remove:</h3>
                                <select className='select-remove-option' name='giftshop' value={giftshopoption} onChange={handlegiftshopOptionChange}>
                                    <option value='' disabled>
                                        Select a gift shop
                                    </option>
                                    {renderGiftShopOptions()}
                                </select>
                            </div>
                        )}

                        <button className='admin-modify-button' style={{ display: isOptionSelected ? 'block' : 'none' }}>
                            remove
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RemoveAttraction;