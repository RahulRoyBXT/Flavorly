const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Load environment variables from .env file
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const recipeRoutes = require('./routes/recipeRoutes.js');
const app = express();
const port = 5000;



// use environment variables for mongoDB URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB

mongoose.connect(mongoURI)
 .then(()=> console.log('Connected to MongoDB'))
 .catch(err=> console.log('Failed to connect to MongoDB: ', err));


app.use(cors());
app.use(express.json());

app.get('/api/greetings', (req, res)=> {
  res.json({message: "Hello from Backend"});
}
);

//use Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api', recipeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});