const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');

// Get all items
router.get('/',async (req, res)=>{
    try {
        const items = await Item.find();
        res.json(items);
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
});

// Create a new item
router.post('/', async (req, res)=>{
    const {name, quality} = req.body;
    try{
        const newItem = new Item({name, quality});

        await newItem.save();
        res.status(201).json(newItem);
    }
    catch (err){
        res.status(400).json({message: err.message});
    }
});

// (Update and delete) would be here


module.exports = router;