import mongoose from "mongoose";

const connectWithDb= () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/attendance")
    .then(console.log('DB is Connected'))
    .catch((error) =>{
        console.log(error);
        process.exit(1);
    })
}
export default connectWithDb;