import mongoose from "mongoose";
import bcrypt  from 'bcryptjs';



const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  password:{type:String, required:true },
  email:{type:String, require:true},
  role:{type:String, enum:["admin", "user"], default:"user"},
  

});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});


const User = mongoose.model('User', userSchema);

export default User;

