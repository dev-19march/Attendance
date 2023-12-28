import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
  inTime: { type: String, required: true },
  outTime: { type: String, required: true },
  workTime: { type: String, required: true },
  user: { type: String, ref: 'User' } ,
  name:{type:String},
  status:{type:String},
  date:{type:String}

});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
