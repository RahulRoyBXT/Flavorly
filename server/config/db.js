const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connection SUCCESS');
  } catch(err){
    console.log()
    console.log('MongoDB connection FAIL');
    process.exit(1);  // Exit with failure
  }
};

module.exports =  connectDB;
