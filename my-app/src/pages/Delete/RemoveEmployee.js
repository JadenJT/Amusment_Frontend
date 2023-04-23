import React, { useState, useEffect } from 'react';
import './RemoveEmployee.css';
import { baseUrl } from '../../App';

function validateEmail(employeeEmail) {

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (employeeEmail.length > 30 || !regex.test(employeeEmail)) {
        return false;
    } else {
        return true;
    }
};

const RemoveEmployee = () => {
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeData, setEmployeeData] = useState([]);

    const [employeeEmailError, setEmployeeErrorEmail] = useState('');
    const [employeeEmailErrorMarginBottom, setemployeeEmailErrorMarginBottom] = useState('');

    const [highlightedRowIndex, setHighlightedRowIndex] = useState(null);

    //fetch data
    const fetchEmployeedata = async () => {
        const response = await fetch(`${baseUrl}/employee/get`);
        const data = await response.json();
        setEmployeeData(data);
    };
    useEffect(() => {
        fetchEmployeedata();
    }, []);



    //render employee data
    const renderEmployeeData = () => {
        const items = employeeData?.item || [];
        const activeEmployees = items.filter(employee => employee.active === 1);
        return activeEmployees.map((employee, index) => (
            <tr key={index} className={highlightedRowIndex === index ? 'employee-line-highlighted' : 'employee-line'}>
                <td className='employee-data'>{employee.employee_id}</td>
                <td className='employee-data'>{employee.Name}</td>
                <td className='employee-data'>{employee.email}</td>
                <td className='employee-data'>{employee.address}</td>
            </tr>
        ));
    };


    const hanldeEmployeeEmail = (e) => {
        const employeeEmail = e.target.value;
        setEmployeeEmail(employeeEmail);
        const items = employeeData?.item || [];
        const exist = items.findIndex(employee => employee.email === employeeEmail);
        if (exist !== -1) {
            setHighlightedRowIndex(exist);
        } else {
            setHighlightedRowIndex(null);
        }
        if (!validateEmail(employeeEmail)) {
            setEmployeeErrorEmail("Please enter a valid email.");
            setemployeeEmailErrorMarginBottom('1em');
        } else {
            setEmployeeErrorEmail('');
            setemployeeEmailErrorMarginBottom('1em');
        }
    };

    const handleEditEmployee = async (e) => {
        e.preventDefault();

        const data = {
            email: employeeEmail,
        };

        await fetch(`${baseUrl}/employee/remove`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        setEmployeeEmail('');
        //want it to remove the row on site, instead of having to switch pages to see it remove from table
    };
    const renderSubmitButton = () => {
        const items = employeeData?.item || [];
        const exist = items.some(employee => employee.email === employeeEmail);
        if (exist) {
            return (
                <button className='employee-remove-button' onClick={handleEditEmployee}>submit</button>
            );
        }
        return null;
    }
    return (
        <div>
            <div className='employee-remove-body'>
                <div className='employee-remove-cover'>
                    <h1 className='admin-remove-title'>Remove Employee:</h1>
                    <form className='employee-remove-form'>
                        <h3 className='select-option-title'>Enter employee eamil to remove:</h3>
                        <input type='text' className='option-input' placeholder='youremail@gmail.com' value={employeeEmail} onChange={hanldeEmployeeEmail} style={{ marginBottom: employeeEmailErrorMarginBottom }}></input>
                        <div className='admin-error'>{employeeEmailError}</div>
                        <div >
                            {renderSubmitButton()}
                        </div>

                        <div className='remove-table-box'>
                            <table className='remove-emp-table'>
                                <tr className='remove-line'>
                                    <th className='remove-header-col'>Employee Id</th>
                                    <th className='remove-header-col'>Employee Name</th>
                                    <th className='remove-header-col'>Employee Email</th>
                                    <th className='remove-header-col'>Employee Address</th>
                                </tr>
                                {renderEmployeeData()}
                            </table>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default RemoveEmployee