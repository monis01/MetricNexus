const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

const { Sequelize } = require('sequelize');

const {config} = require("./routes");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', config);

// Error handling middlewares
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

