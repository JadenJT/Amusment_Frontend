import React, { useState , useEffect, useContext } from 'react'
import Error404 from '../Error404/error404';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import './maintenance.css';

const Maintenance = () => {
    const [tableData, setTableData] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const [jobCode, setJobCode] = useState(null);
    const [isJobCodeValid, setIsJobCodeValid] = useState(false);
    const [highlightedRowIndex, setHighlightedRowIndex] = useState(null);

    //fetching job data
    const fetchjobdata = async () =>{
        const personJobRes = await fetch('http://localhost:8080/job/get?' +  new URLSearchParams({
            email: user.email
        }))
        const personJobData = await personJobRes.json();
        setTableData(personJobData);    
    };
    useEffect(() => {
        fetchjobdata();
    }, []);
    //consol.log(tableData)

    //helper functions
    const formatDate = (jobDate) => {
        const datetime = new Date(jobDate);
        const year = datetime.getFullYear();
        const month = ('0' + (datetime.getMonth() + 1)).slice(-2);
        const day = ('0' + datetime.getDate()).slice(-2);
        const hour = ('0' + datetime.getHours()).slice(-2);
        const minute = ('0' + datetime.getMinutes()).slice(-2);
        const formattedJobDate = `${year}-${month}-${day} ${hour}:${minute}:00`;
        return formattedJobDate;
    };

    //render job data 
    const renderJobData = () => {
        const items = tableData?.item || [];
        return items.map((job, index) => (
            <tr key= {index} className={highlightedRowIndex === index ? 'job-line-highlighted' : 'job-line'}>
                <td className='job-data'>{job.job_code}</td>
                <td className='job-data'>{job.job_ride}</td>
                <td className='job-data'>{job.job_concession}</td>
                <td className='job-data'>{job.job_giftshop}</td>
                <td className='job-data'>{formatDate(job.job_date)}</td>
            </tr>
        ));
    };

    //handle functions
    const handleJobCodeChange = (e) => {
        const enteredJobCode = e.target.value;
        setJobCode(enteredJobCode); 
        const items = tableData.item;
        const exist = items.findIndex(job => job.job_code === parseInt(enteredJobCode));
        if(exist !== -1){
            setIsJobCodeValid(true);
            setHighlightedRowIndex(exist);
        }else{
            setIsJobCodeValid(false);
            setHighlightedRowIndex(null);
        }
    };
    
    const handleJobSubmit = async () => {
        const data = {
          work_code: jobCode,
        };
      
        await fetch("http://localhost:8080/job/complete", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
      
        // Remove the job with the submitted job code from tableData state
        
        setJobCode('');
      };

    if (user.role_type == 'customer') {
        return <Error404></Error404>;
    }
    return (
        <div>
            <h1>Maintenance Portal</h1>
            <Link to='/employee' className='button-link-stack'>
                Employee
            </Link>
            <div className='maintenance-body'>
                <div className='maintenance-cover'>
                    <div className='job-title-box'>
                        <h1 className='job-code-title'> Job Code:</h1>
                        <input type='number' placeholder='Enter job code' className='option-input' value={jobCode} onChange={handleJobCodeChange}></input>
                        {isJobCodeValid ? (
                            <button className='job-button' onClick={handleJobSubmit}>submit</button>
                        ) : (
                            <p>Enter job code</p>
                        )}
                    </div>

                    <div className='job-table-box'>
                        <table className='job-table'>
                            <tr className='job-line'>
                                <th className='job-header-col'>Job code</th>
                                <th className='job-header-col'>Ride name</th>
                                <th className='job-header-col'>Concession name</th>
                                <th className='job-header-col'>Gift Shop name</th>
                                <th className='job-header-col'>Job Date</th>
                            </tr>
                            {renderJobData()}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maintenance
