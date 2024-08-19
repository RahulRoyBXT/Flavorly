const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Load environment variables from .env file
require('dotenv').config();
const connectDB = require('./config/db.js');  // DataBsase Connection
const itemRoutes = require('./routes/itemRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const recipeRoutes = require('./routes/recipeRoutes.js');
const errorHandler = require('./middlewares/errorHandler.js');

const app = express();
const port = 5000;

connectDB();  // Connect to MongoDB


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

// Error handlers middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});