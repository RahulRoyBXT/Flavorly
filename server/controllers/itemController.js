
const Item = require('../models/itemModel');

// Get all items
exports.getAllItems = async(req,res)=>{
    try {
        const items = await Item.find();
        res.json(items);
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
}

// Create a new item

exports.createItem = async (req, res) => {
    const { name, quantity } = req.query;

    try {
        // Checking if the name and quantity are provided
        if (!name || !quantity) {
            return res.status(400).json({ message: 'Name and quantity are required.' });
        }
        const newItem = new Item({ name, quantity});

        // Save the item to the database
        await newItem.save();

        // Send a success response
        res.status(201).json(newItem);
    } catch (err) {
        // Handle any errors
        res.status(400).json({ message: err.message });
    }
}


// deleting item from the database

exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the item by id
        const item = await Item.findById(id);

        // Check if the item exists
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        // Delete the item
        await item.remove();

        // Send a success response
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        // Handle any errors
        res.status(500).json({ message: err.message });
    }
}

// Update the item

exports.updateItem = async (req, res, next) => {
    const { id } = req.params;  // Extract `id` from URL parameters
    const { name, quantity } = req.query;  // Extract `name` and `quantity` from query parameters

    try {
        // Find the item by id
        const item = await Item.findById(id);

        // Check if the item exists
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
            next(err);  // Pass the error to the next middleware function
        }

        // Update the item if fields are provided
        if (name) item.name = name;
        if (quantity) item.quantity = quantity;

        // Save the updated item
        await item.save();  // `save` is a method on Mongoose document instances

        // Send a success response
        res.json(item);
    } catch (err) {
        // Handle any errors
        res.status(400).json({ message: err.message });
        next(err);  // Pass the error to the next middleware function
    }
}


