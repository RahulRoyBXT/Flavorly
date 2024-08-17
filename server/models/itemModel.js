const mongoose = require('mongoose');

// Defining the schema for Items

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// Create and export the model
const Item = mongoose.model('Item',ItemsSchema);
module.exports = Item;