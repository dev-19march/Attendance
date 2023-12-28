import axios from 'axios';


const getBase64Credentials = (username, password) => {
  const credentials = `${username}:${password}`;
  console.log("[CREDS]", credentials);
  const encodedCredentials = Buffer.from(credentials).toString('base64');
  console.log("[ENCODED]", encodedCredentials);
  return encodedCredentials;
};

const testApi = async () => {
  try {
    const apiUrl = 'https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=ALL&FromDate=18/12/2023&ToDate=19/12/2023';

  
    const username = 'CODALIEN:CODALIEN:g9CdTxPgD6@cFMB:true';
    const password = ''; 
    const headers = {
      'Authorization': `Basic ${getBase64Credentials(username, password)}`,
    };

    const response = await axios.get(apiUrl, { headers });

    console.log('API Test Response:', response.data);
  } catch (error) {
    console.error('Error testing API:', error.message);
  }
};

 

export default testApi;
