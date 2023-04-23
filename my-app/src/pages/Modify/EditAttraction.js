import React, { useState, useEffect } from 'react';
import './EditAttraction.css';

function validateNewRideName(newAttractionName, rideData) {
    if (newAttractionName.length === 0) {
        return { isValid: true, errorType: null};
    }
    if (newAttractionName.length > 25) {
      return { isValid: false, errorType: 'length' };
    }
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(newAttractionName)) {
      return { isValid: false, errorType: 'format' };
    }
    const items = rideData.item;
    const rideNameExist = items.find(ride => ride &&  ride.name && ride.name.toLowerCase().replace(/\s+/g, '') === newAttractionName.toLowerCase().replace(/\s+/g, ''));
    if (rideNameExist) {
      return { isValid: false, errorType: 'exist' };
    }
  
    return { isValid: true, errorType: null };
}
function validateNewCsGsName(newAttractionName, attractionData){
    if (newAttractionName.length === 0) {
        return { isValid: true, errorType: null};
    }
    if (newAttractionName.length > 25) {
      return { isValid: false, errorType: 'length' };
    }
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(newAttractionName)) {
      return { isValid: false, errorType: 'format' };
    }
    const items = attractionData.item;
    const attractionName = items.find(attraction => attraction.name.toLowerCase().replace(/\s+/g, '') === newAttractionName.toLowerCase().replace(/\s+/g, ''));
    if (attractionName) {
      return { isValid: false, errorType: 'exist' };
    }
  
    return { isValid: true, errorType: null };
}

const EditAttraction = () => {
    /*setting loading */
    const [isRideLoading, setRideLoading] = useState(true);
    const [isConcessionLoading, setConcessionLoading] = useState(true);
    const [isGiftshopLoading, setGiftshopLoading] = useState(true);
    const [isZoneLoading, setZoneLoading] = useState(true);

    /* confirmation messages */
    const [attractionAdded, setAttractionAdded] = useState(''); 

    /*setting new data */
    const [rideData, setRideData] = useState([]);
    const [zoneData, setZoneData] = useState([]);
    const [concessionData, setConcessionData] = useState([]);
    const [giftshopData, setGiftshopData] = useState([]);
    const [selectedRide, setSelectedRide] = useState('');
    const [selectedConcession, setSelectedConcession] = useState('');
    const [selectedGiftShop, setSelectedGiftShop] = useState('');

    /*setting new data */
    let [newRideName, setNewRideName] = useState('');
    let [newRideType, setnewRideType] = useState('');
    let [newZoneId, setnewZoneId] = useState('');
    let [newCapacity, setNewCapacity] = useState('');
    let [newHourCapacity, setNewHourCapacity] = useState('');
    let [newRideImg, setnewRideImg] = useState('');
    let [dateTime, setDateTime] = useState('');

    let [newConcessionName, setNewConcessionName] = useState('');
    let [newConcessionZoneId, setnewConcessionZoneId] = useState('');
    let [newConcessionFoodType, setnewConcessionFoodType] = useState('');
    let [newConcessionImg, setnewConcessionImg]= useState('');

    let [newGiftShopName, setNewGiftShopName] = useState('');
    let [newGiftShopZoneId, setnewGiftShopZoneId] = useState('');
    let [newGiftShopImg, setnewGiftShopImg] = useState('');

    /*error messages */
    const [newRideNameError, setNewRideNameError] = useState('');
    const [newCapacityError, setNewCapacityError] = useState('');
    const [hourcapacityError, sethourcapacityError] = useState('');
    const [newConcessionNameError, setNewConcessionNameError] = useState('');
    const [newGiftShopNameError, setNewGiftShopNameError] = useState('');
    const [showErrorBox, setShowErrorBox] = useState(false);

    /*set error margins */
    const [rideNameMarginBottom, setridenameMarginBottom] = useState('1em');
    const [capacityMarginBottom, setcapacityMarginBottom] = useState('1em');
    const [hourcapacityMarginBottom, sethourcapacityMarginBottom] = useState('1em');
    const [concessionNameMarginBottom, setconessionNameMarginBottom] = useState('1em');
    const [giftshopNameMarginBottom, setgiftshopNameMarginBottom] = useState('1em');

    /*other */
    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    
    /*fetch rides/concession/giftshops data*/
    const fetchRidesData = async () => {
        const response = await fetch('http://localhost:8080/ride/all');

        const data = await response.json();
        setRideData(data);
        setRideLoading(false);
    };
    useEffect(() => {
        fetchRidesData();
    }, []);
    //console.log(rideData);
    const fetchConcessionsData = async () => {
        const response = await fetch('http://localhost:8080/concession/all');
        const data = await response.json();
        setConcessionData(data);
        setConcessionLoading(false);
    };
    useEffect(() => {
        fetchConcessionsData();
    }, []);
    //console.log(concessionData);
    const fetchGiftShopsData = async () => {
        const response = await fetch('http://localhost:8080/giftshop/all');
        const data = await response.json();
        setGiftshopData(data);
        setGiftshopLoading(false);
    };
    useEffect(() => {
        fetchGiftShopsData();
    }, []);
    //console.log(giftshopData);
    const fetchZoneData = async () => {
        const response = await fetch('http://localhost:8080/zone/all');
        const data = await response.json();
        setZoneData(data);
        setZoneLoading(false);
    };
    useEffect(() => {
        fetchZoneData();
    }, []);
    
    //handle change functions */
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setIsOptionSelected(true);
        resetForm();
    };
    const handleRideChange = (e) => {
        setSelectedRide(e.target.value);
    };
    const handleAttractionNameChange = (e) => {
        const newAttractionName = e.target.value;
        let validationResult;
        if(selectedOption === 'ride'){
            setNewRideName(newAttractionName);
            validationResult = validateNewRideName(newAttractionName, rideData);
        } else if(selectedOption === 'concession') {
            setNewConcessionName(newAttractionName);
            validationResult = validateNewCsGsName(newAttractionName, concessionData);
        } else if(selectedOption === 'giftshop') {
            setNewGiftShopName(newAttractionName);
            validationResult = validateNewCsGsName(newAttractionName, giftshopData);
        }

        if(!validationResult.isValid){
            if (validationResult.errorType === 'length') {
                if(selectedOption === 'ride')
                    setNewRideNameError("Ride name must be 25 characters or less.");
                else if(selectedOption === 'concession')
                    setNewConcessionNameError("Concession name must be 25 characters or less.");
                else if(selectedOption === 'giftshop')
                    setNewGiftShopNameError("Gift Shop name must be 25 characters or less.");
            } else if (validationResult.errorType === 'format') {
                if(selectedOption === 'ride')
                    setNewRideNameError("Ride name can only contain letters and spaces.");
                else if(selectedOption === 'concession'){
                    setNewConcessionNameError("Concession name can only contain letters and spaces.");
                }
                else if(selectedOption === 'giftshop'){
                    setNewGiftShopName("Gift Shop name can only contain letters and spaces.");
                }
            } else if (validationResult.errorType === 'exist') {
                if(selectedOption === 'ride')
                    setNewRideNameError("Ride name already exists. Please enter a different name.");
                else if(selectedOption === 'concession')
                    setNewConcessionNameError("Concession name already exists. Please enter a different name.");
                else if(selectedOption === 'giftshop')
                    setNewGiftShopNameError("Ride name already exists. Please enter a different name.");
            }
            setridenameMarginBottom('1em');
            setconessionNameMarginBottom('1em');
            setgiftshopNameMarginBottom('1em');
        } else {
            setNewRideNameError("");
            setNewConcessionNameError("");
            setNewGiftShopNameError("");
        }
    };
    const handleNewRideTypeChange = (e) => {
        setnewRideType(e.target.value);
    };
    const handleNewZoneIdChange = (e) => {
        setnewZoneId(e.target.value);
    };
    const handleNewCapacityChange = (e) => { //need to fix bug
        const newCapacity = e.target.value;
        setNewCapacity(newCapacity);
        
        const allowedPattern = /^(?!-)[0-9]+$/
        if(!allowedPattern.test(newCapacity)){
            setNewCapacityError("Ride capacity must be a postive digit.");
            setcapacityMarginBottom('1em');
        } else {
            setNewCapacityError("");
            setcapacityMarginBottom('1em');
        }
    };
    const handleNewHourCapacityChange = (e) => {//need to fix bug
        const newHourCapacity = e.target.value;
        setNewHourCapacity(newHourCapacity);

        const allowedPattern = /^(?!-)[0-9]+$/;
        if(!allowedPattern.test(newHourCapacity)){
            sethourcapacityError("Ride hour cpacity must be a postive digit.");
            sethourcapacityMarginBottom('1em');
        } else {
            sethourcapacityError("");
            sethourcapacityMarginBottom('1em');
        }
    };
    const handleNewRideImgChange = (e) => {
        setnewRideImg(e.target.files[0]);
    };
    const handleNewDateTimeChange = (e) => {
        const datetime = new Date(e.target.value); 
        const year = datetime.getFullYear();
        const month = ('0' + (datetime.getMonth() + 1)).slice(-2); 
        const day = ('0' + datetime.getDate()).slice(-2); 
        const hour = ('0' + datetime.getHours()).slice(-2); 
        const minute = ('0' + datetime.getMinutes()).slice(-2);
        const datetimeFormatted = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':00';
        setDateTime(datetimeFormatted);

    };
    const handleConcessionChange = (e) => {
        setSelectedConcession(e.target.value);
    };
    const handleConcessionZoneChange = (e) => {
        const newConcessionZoneId = e.target.value;
        setnewConcessionZoneId(newConcessionZoneId);
    };
    const handleConessionFoodTypeChange = (e) => {
        const newConcessionFoodType = e.target.value;
        setnewConcessionFoodType(newConcessionFoodType);
    };
    const handleConcessionImgChange = (e) => {
        const newConcessionImg = e.target.files[0];
        setnewConcessionImg(newConcessionImg);
    };
    const handleGiftShopChange = (e) => {
        setSelectedGiftShop(e.target.value);
    };
    const handleGiftShopZoneIdChange = (e) => {
        const newGiftShopZoneId = e.target.value;
        setnewGiftShopZoneId(newGiftShopZoneId);
    };
    const handleGiftShopImgChange = (e) => {
        const newGiftShopImg = e.target.files[0];
        setnewGiftShopImg(newGiftShopImg);
    };

    /* render data*/
    const renderRideNameOptions = () => {
        const items = rideData.item;
        const filteredItems = items.filter(ride => ride.name !== null);
        return filteredItems.map((ride, index) => (
            <option key={ride.name} value={ride.name}>
                {ride.name}
            </option>
        ));
    };
    const renderZoneIdOptions = () => {
        const items = zoneData.item;
        const uniqueZoneIds = [...new Set(items.map(zoneid => zoneid.char_name))];
        return uniqueZoneIds.map((zoneId, index) => (
            <option key={zoneId} value={zoneId}>
                {zoneId}
            </option>
        ));
    };
    const renderConcessionOptions = () =>{
        const items = concessionData.item;
        const filteredItems = items.filter(concession => concession.name !== null);
        return filteredItems.map((concession, index) => (
            <option key={concession.name} value={concession.name}>
                {concession.name}
            </option>
        ));
    };
    const renderGiftShopOptions = () => {
        const items = giftshopData.item;
        return items.map((giftshop, index) => (
            <option key={giftshop.name} value={giftshop.name}>
                {giftshop.name}
            </option>
        ));
    };

    /* get data */
    const getRideType = () => {
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);//might have to modify this such that it acconts for ride_id rather than name
        if(selectedRideObject) {
            return selectedRideObject.type;
        }else{
            return null;
        }
    };
    const getRideZoneId = () =>{
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);
        if(selectedRideObject){
            return selectedRideObject.zone_id;
        }else{
            return null;
        }
    };
    const getRideCapacity = () => {
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);
        if(selectedRideObject){
            return selectedRideObject.capacity;
        }else{
            return null;
        }
    };
    const getRideHourCapacity = () => {
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);
        if(selectedRideObject){
            return selectedRideObject.hour_capacity;
        }else{
            return null;
        }
    };
    const getRideImage = () => {
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);
        if(selectedRideObject){
            return selectedOption.image;
        }else{
            return null;
        }
    };
    const getRideMaintance = () =>{
        const items = rideData.item;
        const selectedRideObject = items.find(ride => ride.name === selectedRide);
        if(selectedRideObject){
            return selectedRideObject.last_maintenance;
        }else{
            return null;
        }
    }; 
    const getConcessionZoneId = () => {
        const items = concessionData.item;
        const selectedConcessionObject = items.find(concession => concession.name === selectedConcession);
        if (selectedConcessionObject) {
            return selectedConcessionObject.zone_id;
        } else {
            return null;
        }
    };
    const getConcessionFoodType = () => {
        const items = concessionData.item;
        const selectedConcessionObject = items.find(concession => concession.name === selectedConcession);
        if (selectedConcessionObject) {
            return selectedConcessionObject.food_type;
        } else {
            return null;
        }
    };
    const getGiftshopZoneId = (e) => {
        const items = giftshopData.item;
        const selectedGiftShopObject = items.find(giftshop => giftshop.name === selectedGiftShop);
        if(selectedGiftShopObject){
            return selectedGiftShopObject.zone_id;
        } else {
            return null;
        }
    };

    /*rest form */
    const resetForm = () => {
        // Reset ride form state
        setSelectedRide('');
        setNewRideName('');
        setnewRideType('');
        setnewZoneId('');
        setNewCapacity('');
        setNewHourCapacity('');
        setnewRideImg('');
        setDateTime('');

        // Reset concession form state
        setSelectedConcession('');
        setNewConcessionName('');
        setnewConcessionZoneId('');
        setnewConcessionFoodType('');
        setnewConcessionImg('');

        // Reset gift shop form state
        setSelectedGiftShop('');
        setNewGiftShopName('');
        setnewGiftShopZoneId('');
        setnewGiftShopImg('');

        // Reset error messages
        setNewRideNameError('');
        setNewCapacityError('');
        sethourcapacityError('');
        setNewConcessionNameError('');
        setNewGiftShopNameError('');
    };
    const handleModifyOnSubmit = async (e) => {
        e.preventDefault();
        
        if(selectedOption === 'ride'){
            if(newRideNameError || newCapacityError || hourcapacityError){
                setShowErrorBox(true);
                return;
            } else {
                if (newRideName == "") newRideName = null;
                if (newRideType == "") newRideType = null;
                if (newZoneId == "") newZoneId = null;
                if (newCapacity == "") newCapacity = null;
                if (newHourCapacity == "") newHourCapacity = null;
                if (newRideImg == "") newRideImg = null;
                if (dateTime == "") dateTime = null;
                if (newRideName === null && newRideType === null && newZoneId === null && newCapacity === null && newHourCapacity === null && newRideImg === null && dateTime === null) return setShowErrorBox(true);
                
                const ridesData = new FormData();
                ridesData.append('selected_ride', selectedRide)
                ridesData.append('name', newRideName)
                ridesData.append('type', newRideType)
                ridesData.append('zone_id', newZoneId)
                ridesData.append('capacity', newCapacity)
                ridesData.append('hour_capacity', newHourCapacity)
                ridesData.append('image', newRideImg)
                ridesData.append('last_maintenance', dateTime)

                await fetch('http://localhost:8080/ride/edit', {
                    method: 'POST',
                    body: ridesData
                });
                resetForm()
                setAttractionAdded("Ride has been edited!");
                setTimeout( () => {
                setAttractionAdded("");
                }, 4000);
            }
        } else if(selectedOption === 'concession'){
            if(newConcessionNameError){
                setShowErrorBox(true);
                return;
            } else {
                if (newConcessionName == "") newConcessionName = null;
                if (newConcessionZoneId == "") newConcessionZoneId = null;
                if (newConcessionFoodType == "") newConcessionFoodType = null;
                if (newConcessionImg == "") newConcessionImg = null;
                if (newConcessionName === null && newConcessionZoneId === null && newConcessionFoodType === null && newConcessionImg === null) return setShowErrorBox(true);
                
                const concessionData = new FormData();
                concessionData.append('selected_concession', selectedConcession)
                concessionData.append('name', newConcessionName)
                concessionData.append('zone_id', newConcessionZoneId)
                concessionData.append('food_type', newConcessionFoodType)
                concessionData.append('image', newConcessionImg)

                await fetch('http://localhost:8080/concession/edit', {
                    method: 'POST',
                    body: concessionData
                });
                resetForm()
                setAttractionAdded("Concession has been edited!");
                setTimeout( () => {
                setAttractionAdded("");
                }, 4000);
            }
        } else if(selectedOption === 'giftshop'){
            if(newGiftShopNameError){
                setShowErrorBox(true);
                return;
            } else {
                if (newGiftShopName == "") newGiftShopName = null;
                if (newGiftShopZoneId == "") newGiftShopZoneId = null;
                if (newGiftShopImg == "") newGiftShopImg = null;
                if (newGiftShopName === null && newGiftShopZoneId === null && newGiftShopImg === null) return setShowErrorBox(true);
                
                const giftshopData = new FormData();
                giftshopData.append('selected_giftshop', selectedGiftShop)
                giftshopData.append('name', newGiftShopName)
                giftshopData.append('zone_id', newGiftShopZoneId)
                giftshopData.append('image', newGiftShopImg)

                await fetch('http://localhost:8080/giftshop/edit', {
                    method: 'POST',
                    body: giftshopData
                });
                resetForm()
                setAttractionAdded("Giftshop has been edited!");
                setTimeout( () => {
                setAttractionAdded("");
                }, 4000);
            }
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

    if (isZoneLoading) {
        return <div className="App">Loading...</div>;
    }


    return (    
        <div>
            <div className='admin-edit-body'>
                <div className='admin-edit-cover'>
                    <h1 className='admin-edit-title'>Modify Ride, Concession, and Gift Shop</h1>
                    <form className='admin-edit-form' onSubmit={handleModifyOnSubmit}>
                        <h3 className='select-option-title'>Select an option to modify:</h3>
                        <select className='select-option' name='option' value={selectedOption} onChange={handleOptionChange}>
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
                                    Please select an option from the dropdown menu to edit an existing ride, concession, or giftshop!
                                </h2>
                            </div>
                        )}

                        {selectedOption === 'ride' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a ride to modify:</h3>
                                <select className='select-modify-option' name='ride' value={selectedRide} onChange={handleRideChange}>
                                    <option value='' disabled>
                                        Select a ride
                                    </option>
                                    {renderRideNameOptions()}
                                </select>
                                <h3 className='option-title'>New ride name:</h3>
                                <input type='text' placeholder='Enter new name' className='option-input' value={newRideName} onChange={handleAttractionNameChange} style={{marginBottom: rideNameMarginBottom}}></input>
                                <div className='admin-error'>{newRideNameError}</div>

                                <h3 className='option-title'>Change type of ride: <a>{getRideType()}</a></h3>
                                <select className='select-modify-option' name='type' value={newRideType} onChange={handleNewRideTypeChange}>
                                    <option value='' disabled>
                                        Select a ride type
                                    </option>
                                    <option value='Adult'>Adult</option>
                                    <option value ='Kid'>Child</option>
                                </select>

                                <h3 className='option-title'>Change zone id: <a>{getRideZoneId()}</a></h3>
                                <select className='select-modify-option' name='zone' value={newZoneId} onChange={handleNewZoneIdChange}>
                                    <option value='' disabled>
                                        Select a zone id
                                    </option>
                                    {renderZoneIdOptions()}
                                </select>

                                <h3 className='option-title'>Change ride capacity: <a>{getRideCapacity()}</a></h3>
                                <input type='number' min='1' placeholder='Enter new capacity' className='option-input' value={newCapacity} onChange={handleNewCapacityChange} style={{marginBottom: capacityMarginBottom}}></input>
                                <div className='admin-error'>{newCapacityError}</div>

                                <h3 className='option-title'>Change hour capacity: <a>{getRideHourCapacity()}</a></h3>
                                <input type='number' min='1' placeholder='Enter new hour capacity' className='option-input' value={newHourCapacity} onChange={handleNewHourCapacityChange} style={{marginBottom: hourcapacityMarginBottom}}></input>
                                <div className='admin-error'>{hourcapacityError}</div>

                                <h3 className='option-title'>Change ride image: (.jpg only)</h3>
                                <div className='img-display'>{getRideImage()}</div>
                                <input type='file' accept="image/jpg" className='option-input-img'onChange={handleNewRideImgChange}></input>

                                <h3 className='option-title'>Change last maintenance date: <a>{getRideMaintance()}</a></h3>
                                <input type="datetime-local" value={dateTime} onChange={handleNewDateTimeChange}></input>
                                <div className='admin-confirm'>{attractionAdded}</div>
                            </div>
                        )}
                        
                        {selectedOption === 'concession' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a concession to modify:</h3>
                                <select className='select-modify-option' name='concession' value={selectedConcession} onChange={handleConcessionChange}>
                                    <option value='' disabled>
                                        Select a concession
                                    </option>
                                    {renderConcessionOptions()}
                                </select>

                                <h3 className='option-title'>New concession name:</h3>
                                <input type='text' placeholder='Enter new name' className='option-input' value={newConcessionName} onChange={handleAttractionNameChange} style={{marginBottom: concessionNameMarginBottom}}></input>
                                <div className='admin-error'>{newConcessionNameError}</div>

                                <h3 className='option-title'>New zone id: <a>{getConcessionZoneId()}</a></h3>
                                <select className='select-modify-option' name='zone' value={newConcessionZoneId} onChange={handleConcessionZoneChange}>
                                    <option value= '' disabled>
                                        Select a zone id
                                    </option>
                                    {renderZoneIdOptions()}
                                </select>

                                <h3 className='option-title'>New concession food type: <a>{getConcessionFoodType()}</a></h3>
                                <input type='text' placeholder='Enter new food type' className='option-input' value={newConcessionFoodType} onChange={handleConessionFoodTypeChange} />

                                <h3 className='option-title'>New concession image: (.jpg only)</h3>
                                <input type='file' accept="image/jpg" className='option-input-img' onChange={handleConcessionImgChange}/>
                                <div className='admin-confirm'>{attractionAdded}</div>
                            </div>
                        )}

                        {selectedOption === 'giftshop' && (
                            <div className='admin-option-box'>
                                <h3 className='option-title'>Select a gift shop to modify:</h3>
                                <select className='select-modify-option' name='giftshop' value={selectedGiftShop} onChange={handleGiftShopChange}>
                                    <option value='' disabled>
                                        Select a gift shop
                                    </option>
                                    {renderGiftShopOptions()}
                                </select>

                                <h3 className='option-title'>New gift shop name:</h3>
                                <input type='text' placeholder='Enter new gift shop name' className='option-input' value={newGiftShopName} onChange={handleAttractionNameChange} style={{marginBottom: giftshopNameMarginBottom}}></input>
                                <div className='admin-error'>{newGiftShopNameError}</div>
                                
                                <h3 className='option-title'>New zone id: <a>{getGiftshopZoneId()}</a> </h3>
                                <select className='select-modify-option' name='zone' value={newGiftShopZoneId} onChange={handleGiftShopZoneIdChange}>
                                    <option value='' disabled>
                                        Select a zone id
                                    </option>
                                    {renderZoneIdOptions()}
                                </select>

                                <h3 className='option-title'>New gift shop image: (.jpg only)</h3>
                                <input type='file' accept="image/jpg" className='option-input-img' onChange={handleGiftShopImgChange}></input>
                                <div className='admin-confirm'>{attractionAdded}</div>
                            </div>
                        )}

                        <button className='admin-modify-button' style={{ display: isOptionSelected ? 'block' : 'none' }}>
                            submit
                        </button>
                        {showErrorBox && (
                            <div>
                                <div className='error-box-overlay'></div>
                                <div className='error-box'>
                                    <h3 className='error-box-text'>Error</h3>
                                    <p className='error-box-text'>Please correct the errors and try again.</p>
                                    <ul className='error-box-ul'>
                                        {(newRideNameError && <li>Please enter a valid ride name.</li>)}
                                        {(newConcessionName && <li>Please enter a valid concession name.</li>)}
                                        {(newGiftShopName && <li>Please enter a valid gift shop name.</li>)}
                                        {(newCapacityError && <li>Please enter a valid ride capacity digit.</li>)}
                                        {(hourcapacityError && <li>Please enter a valid hourly capacity digit.</li>)}
                                        <button className='return-button' onClick={() => setShowErrorBox(false)}>return</button>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditAttraction;