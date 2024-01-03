import express from 'express';
import cors from 'cors'; 
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.js';
import connectWithDb from './config/db.js';
import testApi from './testApi.js'; 
import authRoute from './routes/authRoute.js'

dotenv.config();
connectWithDb();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/auth', authRoute);
app.use('/users', userRoutes); 

app.use(cookieParser());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api/v1', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/users', userRoutes);

app.get('/api/v1/test-api', async (req, res) => {
  await testApi();
  res.send('API test initiated. Check the console for results.');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running');
});
