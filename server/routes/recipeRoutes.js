const express = require('express');
const router = express.Router();
const spoonacularClient = require('../utils/spoonacularClient');

// Endpoint to get recipes by ingredients
router.get('/recipes/findByIngredients', async (req, res) => {
    try {
        let ingredients = req.query.ingredients;
        if (Array.isArray(ingredients)) {
            ingredients = ingredients.join(',');
            
        }

        // Construct the URL for debugging
        const url = `/findByIngredients?ingredients=${encodeURIComponent(ingredients)}`;

        // Log the full URL
        console.log('Request URL:', url);

        const response = await spoonacularClient.get('/findByIngredients', {
            params: { ingredients }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching recipes by ingredients:", error.message); // Log the error for debugging
        res.status(500).json({ error: 'Failed to fetch recipes. Please try again later.' }); 
    }
});

// Endpoint to get recipes by Details
router.get('/recipes/:id/information', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await spoonacularClient.get(`/${id}/information`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching recipe details for ID", id, ":", error.message); // Log the error with ID
        res.status(500).json({ message: 'Error fetching recipe details. Please try again later.' });
    }
});

module.exports = router;