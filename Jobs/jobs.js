import cron from 'node-cron';


cron.schedule('0 0 * * *', () => {
    getAllUsers();
  });
  
  cron.schedule('0 1 * * *', () => {
    getPunchDataFromBiometricDevice('PunchIn');
  });
  
  cron.schedule('0 2 * * *', () => {
    getPunchDataFromBiometricDevice('PunchOut');
  });
  