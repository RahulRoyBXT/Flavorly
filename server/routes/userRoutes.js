const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const User = require('../models/userModel');




//Get all use

router.get('/', userController.getAllUsers);

// Create User

router.post('/createUser', userController.createUser);

// Update User

router.patch('/updateUser/:id', userController.updateUser);

// Delete User

router.delete('/deleteUser', userController.deleteUser);







// Create a new user

router.post('/createuser',async(req, res)=>{

    const {username,email,password} = req.body;
    try {
        const newUser = new User({username,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }

});

// Additional routeres 

router.delete('/deleteuser', async(req, res)=> {
    const {username, password} = req.body;
    try{
        //Use asyc await
        const user = await User.findOneAndDelete({username, password});

        if(!user){
            // Handle case where no user was found to delete
            return res.status(404).json({message: 'User Not Found'});
        }
        // Swnd a sucessful response
        res.json({message:`User ${user.username} deleted successfully`});
        console.log("User deleted successfully");
    } catch(err) {}
    // Handle Errors
    res.status(500).json({message:err.message});
    console.log("Error deleleting user", err.message);
});

module.exports = router;
