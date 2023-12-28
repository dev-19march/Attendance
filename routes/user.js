import express from 'express';
import userController from '../Controllers/userController.js';
import {signup} from '../Controllers/authController.js';

const router = express.Router();

// router.get('/all', userController.getAllUsers);
router.get('/user/:code', userController.getSpecificUser);
router.get('/punchin', userController. getPunchDataFromBiometricDevice);
router.get('/getUsers',userController.getAllUsers);


export default router;

