const axios = require('axios');
const apiKEY =  process.env.SPOONACULAR_API_KEY;
const baseURL = 'https://api.spoonacular.com/recipes';


const spoonacularClient = axios.create({
    baseURL,
    params: {
        apiKey:apiKEY
   }
});

module.exports = spoonacularClient;