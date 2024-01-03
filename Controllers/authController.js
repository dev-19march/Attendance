import bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import User from '../models/User.js';


  const signup = async (req, res) => {
  try {
    const { name, code, password, email,role} = req.body;
    console.log(req.body);
    const user = new User({ name,code, password, email,role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const login = async (req, res) => {
  try {
    const {code, password } = req.body;
    const user = await User.findOne({ code });
    console.log(user);

    if (!user) {
      return res.status(401).json({ error: 'Invalid empcode or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      
      return res.status(401).json({ error: 'Invalid code or password' });
      
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ user, token });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
};
const logout = async (req, res) => {
  try {
   

    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
     login, 
     signup
    }