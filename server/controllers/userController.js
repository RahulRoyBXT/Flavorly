const User = require('../models/userModel')
exports.getAllUsers = async(req, res)=>{
    try {
    const users = await User.find();
    res.json(users);
}
catch(err){
    res.status(500).json({message: err.message});
}
}

exports.createUser = async(req, res)=>{
    const {username,email,password} = req.body;
    try {
        const newUser = new User({username,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

exports.updateUser = async(req, res)=>{

    const {id} = req.params;
    const {username,email,password} = req.body;

    try {

        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: 'User Not Found'});
        }

        if(username){
            user.username = username;
        }
        else if(password){
            user.password = password;
        }
        else if(email){
            user.email = email;
        }

        // SAving updaed user
        await user.save();
        res.status(200).json({message: "User Updated successfully"});
        
    }catch (err){
        res.status(400).json({message: err.message});
    }
};

exports.deleteUser = async(req, res, next)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOneAndDelete({username, password});
        if(!user){
            return res.status(404).json({message: 'User does not exist'});
        }
        res.status(200).json({message: `User ${user.username} deleted successfully`});

    }catch(err){
        res.status(400).json({message: err.message});
        next(err);
    }
}