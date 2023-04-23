import React, { useState, useEffect } from 'react';
import './RemoveAttraction.css'
import { baseUrl } from '../../App';

const RemoveAttraction = () => {

    const [isRideLoading, setRideLoading] = useState(true);
    const [isConcessionLoading, setConcessionLoading] = useState(true);
    const [isGiftshopLoading, setGiftshopLoading] = useState(true);

    const [ridedata, setRideData] = useState([]);
    const [concessiondata, setConcessionData] = useState([]);
    const [giftshopdata, setGiftshopData] = useState([]);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
    const [rideoption, setrideoption] = useState('');
    const [concessionoption, setconcessionoption] = useState('');
    const [giftshopoption, setgiftshopoption] = useState('');

    const [attractionMessage, setAttractionMessage] = useState('');

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
        const response = await fetch(`${baseUrl}/ride/all`);

        const data = await response.json();
        setRideData(data);
        setRideLoading(false);
    };
    useEffect(() => {
        fetchridedata();
    }, []);
    const fetchconcessiondata = async () => {
        const response = await fetch(`${baseUrl}/concession/all`);
        const data = await response.json();
        setConcessionData(data);
        setConcessionLoading(false);
    };
    useEffect(() => {
        fetchconcessiondata();
    }, []);
    const fetchgiftshopdata = async () => {
        const response = await fetch(`${baseUrl}/giftshop/all`);
        const data = await response.json();
        setGiftshopData(data);
        setGiftshopLoading(false);
    };
    useEffect(() => {
        fetchgiftshopdata();
    }, []);

    //render data
    const renderRideNameOptions = () => {
        const items = ridedata.item;
        const filteredItems = items.filter(ride => ride.name !== null && ride.perm_closed !== 1);
        return filteredItems.map((ride, index) => (
            <option key={ride} value={ride.name}>
                {ride.name}
            </option>
        ));
    };
    const renderConcessionOptions = () => {
        const items = concessiondata.item;
        const filteredItems = items.filter(concession => concession.name !== null && concession.perm_closed !== 1);
        return filteredItems.map((concession, index) => (
            <option key={concession} value={concession.name}>
                {concession.name}
            </option>
        ));
    };
    const renderGiftShopOptions = () => {
        const items = giftshopdata.item;
        const filteredItems = items.filter(giftshop => giftshop.name !== null && giftshop.perm_closed !== 1);
        return filteredItems.map((giftshop, index) => (
            <option key={giftshop} value={giftshop.name}>
                {giftshop.name}
            </option>
        ));
    };

    const resetForm = () => {
        setrideoption('');
        setconcessionoption('');
        setgiftshopoption('');
        setAttractionMessage('')
    };

    const handleRemoveOnSubmit = async (e) => {
        e.preventDefault();

        if (selectedOption === 'ride') {
            if (rideoption == "") return setAttractionMessage("No Ride selected");

            const rideData = new FormData();
            rideData.append('name', rideoption)

            await fetch(`${baseUrl}/ride/delete`, {
                method: 'POST',
                body: rideData
            });
            setAttractionMessage("Ride Deleted");

        } else if (selectedOption === 'concession') {
            if (concessionoption == "") return setAttractionMessage("No concession selected");

            const concessionData = new FormData();
            concessionData.append('name', concessionoption)

            await fetch(`${baseUrl}/concession/delete`, {
                method: 'POST',
                body: concessionData
            });
            setAttractionMessage("Concession Deleted");

        } else if (selectedOption === 'giftshop') {
            if (giftshopoption == "") return setAttractionMessage("No giftshop selected");

            const giftshopData = new FormData();
            giftshopData.append('name', giftshopoption)

            await fetch(`${baseUrl}/giftshop/delete`, {
                method: 'POST',
                body: giftshopData
            });

            setAttractionMessage("Giftshop Deleted");
        }
    };

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
            <div className='admin-remove-body'>
                <div className='admin-remove-cover'>
                    <h1 className='admin-remove-title'>Remove Ride, Concession, or Gift Shop</h1>
                    <form className='admin-remove-form' onSubmit={handleRemoveOnSubmit}>
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
                                <div className='admin-error'>{attractionMessage}</div>
                                <div className='admin-success'>{attractionMessage}</div>
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
                                <div className='admin-error'>{attractionMessage}</div>
                                <div className='admin-success'>{attractionMessage}</div>
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
                                <div className='admin-error'>{attractionMessage}</div>
                                <div className='admin-success'>{attractionMessage}</div>
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