
// import {React,useState} from 'react';
// import '../Css/Sidebar.css';
// const Sidebar = () => {

//   return (
//     <div className="container">
//       <div className="sidebar">
//       <ul>
//     <li className="dashboard">Dashboard</li>
//     <li className="monthly-report">Monthly Report</li>
//     <li className="weekly-report">Weekly Report</li>
//     <li className="leave-management">Leave Management</li>
//   </ul>
//         <div className="sign-out" onClick="">
//           Sign Out
//         </div>
//       </div>
//       <div className="right-content">
//         <div className="box">  <span className="box-icon">
//         <i class="fa-solid fa-users-between-lines fa-4x"></i>  </span>
//   Employee code </div>
//    <div className="box">  <span className="box-icon">
//     <i className="fas fa-user fa-4x"></i>
    
//   </span>
//     Name </div>
//    <div className="box">  <span className="box-icon">
// <i className="fas fa-sign-in-alt fa-4x"></i>
    
//   </span>
//   In Time
//    </div>
//    <div className="box">  <span className="box-icon">
// <i className="fas fa-sign-out-alt fa-4x"></i>
    
//   </span>
//   Out Time 
//    </div>
//    <div className="box">  <span className="box-icon">
//     <i className="fa-solid fa-stopwatch fa-4x"></i>
    
//   </span>
//    Working Hours</div>
//    <div className="chart-container">
          
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import axios from 'axios';
import '../Css/Sidebar.css';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [userData, setUserData] = useState({
    empCode: '',
    name: '',
    inTime: '',
    outTime: '',
    workingHours: '',
  });

  // useEffect(() => {
  //   // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
  //   axios.get('https://api.etimeoffice.com/api/DownloadInOutPunchData')
  //     .then(response => {
  //       const user = response.data;
  //       setUserData({
  //         empCode: user.code,
  //         name: user.name,
  //         inTime: user.inTime,
  //         outTime: user.outTime,
  //         workingHours: user.workingHours,
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error.message);
  //     });
  // }, []);
  // Update the useEffect in Sidebar.js
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post('/api/getPunchData', {
        code: '', // Replace with the actual user code
        fromDate: '', // Replace with the actual start date
        toDate: '', // Replace with the actual end date
      });

      const user = response.data[0]; // Assuming the response is an array, modify accordingly
      setUserData({
        empCode: user.user,
        name: user.name,
        inTime: user.inTime,
        outTime: user.outTime,
        workingHours: user.workTime,
      });
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  fetchData();
}, []);


  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li className="dashboard">Dashboard</li>
          <li className="monthly-report">Monthly Report</li>
          <li className="weekly-report">Weekly Report</li>
          <li className="leave-management">Leave Management</li>
        </ul>
        <div className="sign-out" onClick="">
          Sign Out
        </div>
      </div>
      <div className="right-content">
        <div className="box">
          <span className="box-icon">
            <i className="fa-solid fa-users-between-lines fa-4x"></i>
          </span>
          Employee code
          <div className="box-info">{userData.empCode}</div>

        </div>
        <div className="box">
          <span className="box-icon">
            <i className="fas fa-user fa-4x"></i>
          </span>
          Name 
          <div className="box-info">{userData.name}</div>

        </div>
        <div className="box">
          <span className="box-icon">
            <i className="fas fa-sign-in-alt fa-4x"></i>
          </span>
          In Time 
           <div className="box-info">{userData.inTime} </div>

        </div>
        <div className="box">
          <span className="box-icon">
            <i className="fas fa-sign-out-alt fa-4x"></i>
          </span>
          Out Time
          <div className="box-info">{userData.outTime} </div>
        </div>
        <div className="box">
          <span className="box-icon">
            <i className="fa-solid fa-stopwatch fa-4x"></i>
          </span>
          Working Hours
          <div className="box-info"> {userData.workingHours}</div>

          
        </div>
        <div className="chart-container">
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

