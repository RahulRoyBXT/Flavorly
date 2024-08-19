const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');
const itemController = require('../controllers/itemController');


// Geetings all the items in here

router.get('/',itemController.getAllItems);

//Create New item

router.post('/create', itemController.createItem);

// Delete item
router.delete('/delete', itemController.deleteItem);

// Update item
router.put('/update/:id', itemController.updateItem);


module.exports = router;