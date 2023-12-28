import axios from 'axios';
import User from '../models/User.js';
import Attendance from '../models/Attendance.js';
const getBase64Credentials = (username, password) => {
const credentials = `${username}:${password}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');
return encodedCredentials;
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
   
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSpecificUser = async (req, res) => {
  try {
    const { code } = req.params;
    console.log("I am here",code);
    const user = await User.findOne({ code });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

const getPunchDataFromBiometricDevice = async (req, res, status) => {
  try {
    // const  {code} = req.query;
    const{fromDate, toDate,code}= req.body;
    console.log("I am here",code);
    const username = 'CODALIEN:CODALIEN:g9CdTxPgD6@cFMB:true';
    const password = ''; 
    const response = await axios.get('https://api.etimeoffice.com/api/DownloadInOutPunchData', {
      params: {
        Empcode: code,
        FromDate: fromDate,
        ToDate: toDate,
      },
      headers:{
        'Authorization': `Basic ${getBase64Credentials(username, password)}`,
      }
    });
    console.log(response.data);
    

    const punchData = response.data.InOutPunchData.filter(entry => entry.Status === 'P');
     // Save punch-in and punch-out data in the database
     const attendanceEntries = punchData.map(entry => ({
      inTime: entry.INTime,
      outTime: entry.OUTTime,
      workTime: entry.WorkTime,
      user: entry.Empcode, 
      status:entry.Status,
      name:entry.Name,
      date:entry.DateString

    }));
    console.log(attendanceEntries);



     await Attendance.create(attendanceEntries);

  
     res.json(punchData);
    } catch (error) {
      console.error('Error fetching punch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  };


export default {
  getAllUsers,
  getSpecificUser,
      getPunchDataFromBiometricDevice
};
