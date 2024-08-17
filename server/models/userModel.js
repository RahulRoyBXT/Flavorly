const mongoose = require('mongoose');

// Defining model for User model

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});

// Creating User model
const User = mongoose.model('User', userSchema);
// Export
module.exports = User;