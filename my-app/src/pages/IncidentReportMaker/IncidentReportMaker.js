import React, { useState, useContext } from 'react';
import "./IncidentReportMaker.css";


function validateDescription(userDesc){
    if (userDesc.length > 0)
        return true;
    return false;
}

function validateEmail(userEmail) {
    if (userEmail.length === 0 || userEmail.length > 30) {
      return false;
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(userEmail)) {
      return false;
    }
    return true;
} 

function validateDate(userDate){
    if(userDate.length >0)
        return false;
    return true;
}


function IncidentReportMaker(){
    function Submit(desc, email, date){
        if(!validateDescription(desc) || !validateEmail(email) || !validateDate(date))
            document.getElementById("buttonText").syle.color = 'red';
    }
    return(
        <div className="body">
            <div className="description">
                <h1 className = "h1">Incident Report</h1>
                <form className="descContainer">
                    <label for="Desc" className="labelDesc">Description of <br></br>Incident:</label>
                    <textarea id="Desc" className="descText" type="text" maxLength="400" name="desc">
                    </textarea>
                </form>
                <form className="emailContainer">
                    <label for="email" className="labelEmail">Email:</label>
                    <input id="email" className="emailText" type="text" name="email">
                    </input>
                </form>
                <form className="dateContainer">
                    <label for="date" className="labelEmail">Date:</label>
                    <input id="date"  className="emailText" type="date" min="2023-01-01" name="date">
                    </input>
                </form>
                <button className="submitButton" onClick="Submit(desc, email, date);">Submit</button>
                <p className= "errorMessage" id="Input Error">Please fill out all fields.</p>
            </div>
        </div>
    )
}

export default IncidentReportMaker