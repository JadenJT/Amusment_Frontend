import React, { useState, useEffect } from 'react';
import './Reports.css';

function validateName(emplyeeFirstName) {
  if (emplyeeFirstName.length === 0 || emplyeeFirstName.length > 15) return false;

  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(emplyeeFirstName)) return false;

  return true;
}

function validateEmail(employeeEmail) {
  if(employeeEmail === 0 || employeeEmail > 30) return false;

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(employeeEmail)) return false;

  return true;
}


const NewReports = () => {

  /*setting loading */
  const [isRideLoading, setRideLoading] = useState(true);
  const [isConcessionLoading, setConcessionLoading] = useState(true);
  const [isGiftshopLoading, setGiftshopLoading] = useState(true);
  const [isZoneLoading, setZoneLoading] = useState(true);

  // All Drop down data
  const [rideList, setRideList] = useState([]);
  const [concessionList, setConcessionList] = useState([]);
  const [giftshopList, setGiftshopList] = useState([]);
  const [zoneList, setZoneList] = useState([]);
  const [fetchData, setFetchData] = useState([])

  // All inputs for all sections
  let [attractionName, setArractionName] = useState('');
  let [attractionZone, setAttractionZone] = useState('');
  let [attractionType, setAttractionType] = useState('');
  let [startDate, setStartDate] = useState('');
  let [endDate, setEndDate] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [jobRole, setJobRole] = useState('')

  //Error Messages
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  
  //Margin Errors
  const [marginBottomFirstName, setMarginBottomFirstName] = useState('1em');
  const [marginBottomLastName, setMarginBottomLastName] = useState('1em');
  const [marginBottomEmail, setMarginBottomEmail] = useState('1em')

  //other
  const [selectedOption, setSelectedOption] = useState('');
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [errorBox, setErrorBox] = useState(false);

  /*fetch rides/concession/giftshops data*/
  const fetchRidesData = async () => {
    const response = await fetch('http://localhost:8080/ride/all');
    const data = await response.json();
    setRideList(data);
    setRideLoading(false);
  };
  useEffect(() => {
      fetchRidesData();
  }, []);

  const fetchConcessionsData = async () => {
    const response = await fetch('http://localhost:8080/concession/all');
    const data = await response.json();
    setConcessionList(data);
    setConcessionLoading(false);
  };
  useEffect(() => {
      fetchConcessionsData();
  }, []);

  const fetchGiftShopsData = async () => {
    const response = await fetch('http://localhost:8080/giftshop/all');
    const data = await response.json();
    setGiftshopList(data);
    setGiftshopLoading(false);
  };
  useEffect(() => {
      fetchGiftShopsData();
  }, []);

  const fetchZoneData = async () => {
    const response = await fetch('http://localhost:8080/zone/all');
    const data = await response.json();
    setZoneList(data);
    setZoneLoading(false);
  };
  useEffect(() => {
      fetchZoneData();
  }, []);

  //Reset Forms & Variables
  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setErrorFirstName('')
    setErrorLastName('')
    setStartDate('')
    setEndDate('')
    setArractionName('')
    setAttractionType('')
    setAttractionZone('')
    setShowTable(false);
    setErrorBox(false);
  }

  //Handle Changes Function
  const handleOptionChange = (e) => {
    const optionChoice = e.target.value;
    setSelectedOption(optionChoice);
    setIsOptionSelected(true);
    resetForm();
  }

  const handleAttractionNameChange = (e) => { setArractionName(e.target.value); }
  const handleAttractionTypeChange = (e) => { setAttractionType(e.target.value); }
  const handleAttractionZoneChange = (e) => { 
    setAttractionZone(e.target.value); 
    setArractionName('')
  }
  const handleStartDateChange = (e) => { setStartDate(e.target.value); }
  const handleEndDateChange = (e) => { setEndDate(e.target.value); }
  const hanldeJobRoleChange = (e) => { setJobRole(e.target.value); }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);

    if (!validateName(e.target.value)) {
      setErrorFirstName("Invalid First Name");
      setMarginBottomFirstName('1em');
    } else {
      setErrorFirstName("");
      setMarginBottomFirstName('1em');
    }
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);

    if (!validateName(e.target.value)) {
      setErrorLastName("Invalid Last Name");
      setMarginBottomLastName('1em');
    } else {
      setErrorLastName("");
      setMarginBottomLastName('1em');
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setErrorEmail("Invalid Email");
      setMarginBottomEmail('1em');
    } else {
      setErrorEmail("");
      setMarginBottomEmail('1em');
    }
  }

  //Render Options
  const renderRideNameOptions = () => {
    const items = rideList.item;
    const filteredItems = items.filter(ride => ride.name !== null);
    return filteredItems.map((ride, index) => (
        <option key={index} value={ride.name}>
            {ride.name}
        </option>
    ));
  };
  const renderZoneIdOptions = () => {
      const items = zoneList.item;
      const uniqueZoneIds = [...new Set(items.map(zoneid => zoneid.char_name))];
      return uniqueZoneIds.map((zoneId, index) => (
          <option key={index} value={zoneId}>
              {zoneId}
          </option>
      ));
  };
  const renderAllLocationOptions = () => {
    const mergedArray = [...rideList.item, ...concessionList.item, ...giftshopList.item];
    return mergedArray.map((att, index) => (
      <option key={index} value={att.name}>
        {att.name}
      </option>
    ));
  };
  const renderTicketTotal = () => {
    let total = 0;
    fetchData.map((item, index) => {
      total += parseInt(item.Ticket_Amount)
    });
    return (
      <tr>
        <td></td>
        <td></td>
        <td>Total: ${total}</td>
        <td></td>
      </tr>
    );
  }

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedOption === 'ticket') {

    if (attractionName === "") attractionName = null;
    if (attractionZone === "") attractionZone = null;
    if (attractionType === "") attractionType = null;
    if (startDate === "") startDate = null;
    if (endDate === "") endDate = null;
    if ((startDate === null && endDate !== null) || (startDate !== null && endDate === null)) {
      return setErrorBox(true);
    }

    const ticketData = {
      "ride_name": attractionName,
      "zone": attractionZone,
      "ride_type": attractionType,
      "start_date": startDate,
      "end_date": endDate
    };

    const response = await fetch('http://localhost:8080/ticket/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticketData)
    });
    const responseData = await response.json();
    setFetchData(responseData.item)
    setShowTable(true);

    } else if (selectedOption === 'maintenance') {

    if (attractionName === "") attractionName = null;
    if (attractionZone === "") attractionZone = null;
    if (startDate === "") startDate = null;
    if (endDate === "") endDate = null;
    if ((startDate === null && endDate !== null) || (startDate !== null && endDate === null)) {
      return setErrorBox(true);
    }

    const maintenanceData = {
      "ride_name": attractionName,
      "zone": attractionZone,
      "start_date": startDate,
      "end_date": endDate
    };

    const response = await fetch('http://localhost:8080/maintenance/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(maintenanceData)
    });
    const responseData = await response.json();
    setFetchData(responseData.item)
    setShowTable(true);

    } else if (selectedOption === 'employee') {

    if (firstName === "") firstName = null;
    if (lastName === "") lastName = null;
    if (attractionName === "") attractionName = null;
    if (jobRole === "") jobRole = null;
    if (email === "") email = null;

    const employeeData = {
      "f_name": firstName,
      "l_name": lastName,
      "job_location": attractionName,
      "job_role": jobRole,
      "email": email
    };

    const response = await fetch('http://localhost:8080/employee/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeData)
    });
    const responseData = await response.json();
    setFetchData(responseData.item)
    setShowTable(true);

    } else if (selectedOption === 'incident') {

      const response = await fetch('http://localhost:8080/incident/get')
      const responseData = await response.json()
      setFetchData(responseData.item)
      setShowTable(true);
    }
  }


  // Check if data is loading
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
          <h1 className='admin-edit-title'>View Theme Park Reports</h1>
          <form className='admin-edit-form' onSubmit={handleSubmit}>
            <h3 className='select-option-title'>Select a report to display</h3>
            <select className='select-option' name='option' value={selectedOption} onChange={handleOptionChange}>
              <option value='' disabled>Select a option</option>
              <option value='ticket'>Ticket Report</option>
              <option value='maintenance'>Maintenance Report</option>
              <option value='employee'>Employee Report</option>
              <option value='incident'>Incident Report</option>
            </select>
            {selectedOption === '' && (
              <div className='option-empty-title-container'>
                <h2 className='admin-edit-title'>
                  Please select an option from the dropdown menu to view a report!
                </h2>
              </div>
            )}

            {selectedOption === 'ticket' && (
              <div className='admin-option-box'>
                <h3 className='option-title'>Ride</h3>
                <select className='select-modify-option' name='ride' value={attractionName} onChange={handleAttractionNameChange}>
                  <option value='' disabled>Select a ride</option>
                  {renderRideNameOptions()}
                </select>

                <h3 className='option-title'>Zone</h3>
                <select className='select-modify-option' name='zone' value={attractionZone} onChange={handleAttractionZoneChange}>
                  <option value='' disabled>Select a zone</option>
                  {renderZoneIdOptions()}
                </select>

                <h3 className='option-title'>Type</h3>
                <select className='select-modify-option' name='zone' value={attractionType} onChange={handleAttractionTypeChange}>
                    <option value='' disabled>Select a type</option>
                    <option value='Adult'>Adult</option>
                    <option value='Child'>Child</option>
                </select>

                <h3 className='option-title'>Start Date</h3>
                <input type='date' className='option-input' value={startDate} onChange={handleStartDateChange}></input>

                <h3 className='option-title'>End Date</h3>
                <input type='date' className='option-input' value={endDate} onChange={handleEndDateChange}></input>
              </div>
            )}

            {selectedOption === 'maintenance' && (
              <div className='admin-option-box'>
              <h3 className='option-title'>Ride</h3>
              <select className='select-modify-option' name='ride' value={attractionName} onChange={handleAttractionNameChange}>
                <option value='' disabled>Select a ride</option>
                {renderRideNameOptions()}
              </select>

              <h3 className='option-title'>Zone</h3>
              <select className='select-modify-option' name='zone' value={attractionZone} onChange={handleAttractionZoneChange}>
                <option value='' disabled>Select a zone</option>
                {renderZoneIdOptions()}
              </select>

              <h3 className='option-title'>Start Date</h3>
              <input className='option-input' type='date' value={startDate} onChange={handleStartDateChange}></input>

              <h3 className='option-title'>End Date</h3>
              <input className='option-input' type='date' value={endDate} onChange={handleEndDateChange}></input>
            </div>
            )}

            {selectedOption === 'employee' && (
              <div className='admin-option-box'>
              <h3 className='option-title'>First Name</h3>
              <input type='text' placeholder='Enter first name' className='option-input' value={firstName} onChange={handleFirstNameChange} style={{marginBottom: marginBottomFirstName}}></input>
              <div className='admin-error'>{errorFirstName}</div>

              <h3 className='option-title'>Last Name</h3>
              <input type='text' placeholder='Enter last name' className='option-input' value={lastName} onChange={handleLastNameChange} style={{marginBottom: marginBottomLastName}}></input>
              <div className='admin-error'>{errorLastName}</div>

              <h3 className='option-title'>Location</h3>
              <select className='select-modify-option' name='location' value={attractionName} onChange={handleAttractionNameChange}>
                <option value='' disabled>Select a location</option>
                {renderAllLocationOptions()}
              </select>

              <h3 className='option-title'>Job Role</h3>
              <select className='select-modify-option' name='role' value={jobRole} onChange={hanldeJobRoleChange}>
                <option value='' disabled>Select a zone</option>
                <option value='admin'>Admin</option>
                <option value='manager'>Manager</option>
                <option value='maintenance'>Maintenance</option>
                <option value='janitor'>Janitor</option>
                <option value='cashier'>Cashier</option>
                <option value='operator'>Operator</option>
              </select>

              <h3 className='option-title'>Email</h3>
              <input type='text' placeholder='Enter email' className='option-input' value={email} onChange={handleEmailChange} style={{marginBottom: marginBottomEmail}}></input>
              <div className='admin-error'>{errorEmail}</div>
            </div>
            )}
            <button className='admin-modify-button' style={{ display: isOptionSelected ? 'block' : 'none' }}>submit</button>
            {errorBox && (
              <div>
                  <div className='error-box-overlay'></div>
                  <div className='error-box'>
                      <h3 className='error-box-text'>Error</h3>
                      <p className='error-box-text'>Please correct the errors and try again.</p>
                      <ul className='error-box-ul'>
                          {((startDate !== null && endDate === "") && <li>You entered a start date, you must have an end date!</li>)}
                          {((startDate === "" && endDate !== null) && <li>You entered an end date, you must have a start date!</li>)}
                          <button className='return-button' onClick={() => setErrorBox(false)}>return</button>
                      </ul>
                  </div>
              </div>
            )}
          </form>
        </div>
      </div>
      {selectedOption === 'ticket' && showTable && (
        <div className='admin-edit-body'>
          <table className='table'>
            <thead>
              <tr>
                <th className='option-title'>Ride Name</th>
                <th className='option-title'>Ride Zone</th>
                <th className='option-title'>Ticket Price</th>
                <th className='option-title'>Date Recorded</th>
              </tr>
            </thead>
            <tbody>
            {
            fetchData.map((item, index) => {
              return (
                <tr>
                  <td>{item.Ride_Name}</td>
                  <td>{item.Ride_Zone}</td>
                  <td>${item.Ticket_Amount}</td>
                  <td>{item.Date_Recorded}</td>
                </tr>
                );
              })
            }
            </tbody>
              {renderTicketTotal()}
          </table>
        </div>
      )}

      {selectedOption === 'maintenance' && showTable && (
        <div className='admin-edit-body'>
        <table className='table'>
          <thead>
            <tr>
              <th className='option-title'>Job Code</th>
              <th className='option-title'>Zone</th>
              <th className='option-title'>Ride</th>
              <th className='option-title'>Employee Name</th>
              <th className='option-title'>Scheduled Date</th>
              <th className='option-title'>Email Contact</th>
              <th className='option-title'>Date Completed</th>
            </tr>
          </thead>
          <tbody>
          {
          fetchData.map((item, index) => {
            return (
              <tr>
                <td>{item.job_code}</td>
                <td>{item.Zone}</td>
                <td>{item.Ride}</td>
                <td>{item.full_name}</td>
                <td>{item.Scheduled_Date}</td>
                <td>{item.Email_Contact}</td>
                <td>{item.job_date_completed}</td>
              </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
      )}

      {selectedOption === 'employee' && showTable && (
        <div className='admin-edit-body'>
        <table className='table'>
          <thead>
            <tr>
              <th className='option-title'>Name</th>
              <th className='option-title'>Job Name</th>
              <th className='option-title'>Location</th>
              <th className='option-title'>Email Contact</th>
              <th className='option-title'>Phone Number</th>
            </tr>
          </thead>
          <tbody>
          {
          fetchData.map((item, index) => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Job_Role}</td>
                <td>{item.Location}</td>
                <td>{item.contact_email}</td>
                <td>{item.Phone_number}</td>
              </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
      )}

      {selectedOption === 'incident' && showTable && (
        <div className='admin-edit-body'>
        <table className='table'>
          <thead>
            <tr>
              <th className='option-title'>Incident ID</th>
              <th className='option-title'>Email Contact</th>
              <th className='option-title'>Description</th>
              <th className='option-title'>Date of Incident</th>
            </tr>
          </thead>
          <tbody>
          {
          fetchData.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
              </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
};

export default NewReports;