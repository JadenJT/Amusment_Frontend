import React, { useState, useEffect } from 'react';
import './Job.css';
import { useNavigate } from 'react-router-dom';


const Job = () => {
  // setting loading
  const [isRideLoading, setRideLoading] = useState(true);
  const [isConcessionLoading, setConcessionLoading] = useState(true);
  const [isGiftshopLoading, setGiftshopLoading] = useState(true);
  const [isPersonLoading, setPersonLoading] = useState(true);
  const [rideMaintenceLoading, setRideMaintenceLoading] = useState(true);

  // Setting data
  const [rideData, setRideData] = useState([]);
  const [giftshopData, setGifthopData] = useState([]);
  const [concessionData, setConcessionData] = useState([]);
  const [personData, setPersonData] = useState([]);
  const [rideMaintenanceData, setRideMaintenanceData] = useState([]);

  // Setting person
  const [jobRole, setJobRole] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobAttraction, setJobAttraction] = useState('');
  const [jobPeson, setJobPerson] = useState('');

  // Error Message
  const [messageError, setMessageError] = useState('');


  //reset form
  const resetForm = () => {
    setJobRole('');
    setJobLocation();
    setJobAttraction('');
    setJobPerson('');
  };


  // Handle change function
  const handleJobRoleChange = (e) => { setJobRole(e.target.value); }
  const handleJobLoactionChange = (e) => { setJobLocation(e.target.value); }
  const handleJobAttractionChange = (e) => { setJobAttraction(e.target.value); }
  const handleJobPersonChange = (e) => { setJobPerson(e.target.value); }

  // Load data
  const fetchRidesData = async () => {
    const response = await fetch('http://localhost:8080/ride/all');

    const data = await response.json();
    setRideData(data);
    setRideLoading(false);
  };
  useEffect(() => {
      fetchRidesData();
  }, []);
  const fetchConcessionsData = async () => {
      const response = await fetch('http://localhost:8080/concession/all');
      const data = await response.json();
      setConcessionData(data);
      setConcessionLoading(false);
  };
  useEffect(() => {
      fetchConcessionsData();
  }, []);
  const fetchGiftShopsData = async () => {
      const response = await fetch('http://localhost:8080/giftshop/all');
      const data = await response.json();
      setGifthopData(data);
      setGiftshopLoading(false);
  };
  useEffect(() => {
      fetchGiftShopsData();
  }, []);
  const fetchPersonData = async () => {
    const response = await fetch('http://localhost:8080/person/all');
    const data = await response.json();
    setPersonData(data);
    setPersonLoading(false);
  };
  useEffect(() => {
    fetchPersonData();
  }, []);
  const fetchMaintenceRideData = async () => {
    const response = await fetch('http://localhost:8080/ride/maintenance/all');
    const data = await response.json();
    setRideMaintenanceData(data);
    setRideMaintenceLoading(false);
  };
  useEffect(() => {
    fetchMaintenceRideData();
  }, []);

  // Render Options
  const renderRideNameOptions = () => {
    const items = rideData.item;
    const filteredItems = items.filter(ride => ride.name !== null);
    return filteredItems.map((ride, index) => (
        <option key={ride.name} value={ride.name}>
            {ride.name}
        </option>
    ));
  };
  const renderRideMaintenanceOptions = () => {
    const items = rideMaintenanceData.item;
    return items.map((ride, index) => (
        <option key={ride.index} value={ride.job_ride}>
            {ride.job_ride}
        </option>
    ));
  }
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
  const renderPersonOptions = (role) => {
    const items = personData.item;
    const filteredItems = items.filter(per => per.role_type === role)
    return filteredItems.map((person, index) => (
        <option key={person.index} value={person.Name}>
            {person.Name}
        </option>
    ));
  };

  /* submit form */
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (jobAttraction === "" || jobRole === "" || jobPeson === "") return setMessageError("Missing information, please complete form.")

    const postData = {
      jobLocation: jobLocation,
      jobAttraction: jobAttraction,
      jobRole: jobRole,
      jobPerson: jobPeson
    }

    const response = await fetch('http://localhost:8080/job/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
    });
    const responseData = await response.json();
  }

  if (isRideLoading) {
    return <div className="App">Loading...</div>;
  }

  if (isConcessionLoading) {
      return <div className="App">Loading...</div>;
  }

  if (isGiftshopLoading) {
      return <div className="App">Loading...</div>;
  }

  if (isPersonLoading) {
      return <div className="App">Loading...</div>;
  }
  if (rideMaintenceLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <div className='admin-edit-body'>
        <div className='admin-edit-cover'>
          <h1 className='admin-edit-title'>Add Job to Ride, Concession, Gift shop</h1>
          <form className='admin-edit-form'>
            <h3 className='select-option-title'>Select an option to add to</h3>
              <select className='select-option' name='option' value={jobLocation} onChange={handleJobLoactionChange}>
                <option value='' disabled>select an option</option>
                <option value='ride'>Ride</option>
                <option value='concession'>Concession</option>
                <option value='giftshop'>Gift Shop</option>
              </select>

              {jobLocation === '' && (
                <div className='option-empty-title-container'>
                <h2 className='admin-edit-title'>
                    Please select an option from the dropdown menu</h2>
                </div>
              )}

              {jobLocation === 'ride' && (
                <div className='select-option-title'>
                  <h3 className='select-option-title'>Select a job role to add to.</h3>
                  <select className='select-modify-option' value={jobRole} onChange={handleJobRoleChange}>
                    <option value='' disabled>Select a Role</option>
                    <option value='maintenance'>Maintenance</option>
                    <option value='operator'>Operator</option>
                    <option value='cashier'>Cashier</option>
                  </select>
                  {jobRole === "maintenance" && (
                    <div>
                      <h3 className='select-option-title'>Select a attraction to a job to</h3>
                      <select className='select-modify-option' value={jobAttraction} onChange={handleJobAttractionChange}>
                        <option value='' disabled>Select Ride</option>
                        {renderRideMaintenanceOptions()}
                      </select>
                    </div>
                  )}
                  {(jobRole !== "maintenance" && jobRole !=="") && (
                    <div>
                      <h3 className='select-option-title'>Select a attraction to a job to</h3>
                      <select className='select-modify-option' value={jobAttraction} onChange={handleJobAttractionChange}>
                        <option value='' disabled>Select Ride</option>
                        {renderRideNameOptions()}
                      </select>
                    </div>
                  )}
                  {jobRole !== "" && (
                    <div>
                      <h3 className='select-option-title'>Select an Employee to add</h3>
                      <select className='select-modify-option' value={jobPeson} onChange={handleJobPersonChange}>
                          <option value='' disabled>Select an Employee</option>
                          {renderPersonOptions(jobRole)}
                      </select>
                    </div>
                  )}
                  <button className='admin-modify-button'>submit</button>
                </div>
              )}

              {jobLocation === 'concession' && (
                <div className='select-option-title'>
                  <h3 className='select-option-title'>Select a job role to add to.</h3>
                  <select className='select-modify-option' value={jobRole} onChange={handleJobRoleChange}>
                    <option value='' disabled>Select a Role</option>
                    <option value='cashier'>Cashier</option>
                    <option value='janitor'>Janitor</option>
                  </select>
                  <div>
                    <h3 className='select-option-title'>Select a attraction to a job to</h3>
                    <select className='select-modify-option' value={jobAttraction} onChange={handleJobAttractionChange}>
                      <option value='' disabled>Select Ride</option>
                      {renderConcessionOptions()}
                    </select>
                  </div>
                  {jobRole !== "" && (
                    <div>
                      <h3 className='select-option-title'>Select an Employee to add</h3>
                      <select className='select-modify-option' value={jobPeson} onChange={handleJobPersonChange}>
                          <option value='' disabled>Select an Employee</option>
                          {renderPersonOptions(jobRole)}
                      </select>
                    </div>
                  )}
                  <button className='admin-modify-button'>submit</button>
                </div>
              )}

              {jobLocation === 'giftshop' && (
                <div className='select-option-title'>
                  <h3 className='select-option-title'>Select a job role to add to.</h3>
                  <select className='select-modify-option' value={jobRole} onChange={handleJobRoleChange}>
                    <option value='' disabled>Select a Role</option>
                    <option value='cashier'>Cashier</option>
                    <option value='janitor'>Janitor</option>
                  </select>
                  <div>
                    <h3 className='select-option-title'>Select a attraction to a job to</h3>
                    <select className='select-modify-option' value={jobAttraction} onChange={handleJobAttractionChange}>
                      <option value='' disabled>Select Ride</option>
                      {renderGiftShopOptions()}
                    </select>
                  </div>
                  {jobRole !== "" && (
                    <div>
                      <h3 className='select-option-title'>Select an Employee to add</h3>
                      <select className='select-modify-option' value={jobPeson} onChange={handleJobPersonChange}>
                          <option value='' disabled>Select an Employee</option>
                          {renderPersonOptions(jobRole)}
                      </select>
                    </div>
                  )}
                  <button className='admin-modify-button'>submit</button>
                </div>
              )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Job;